import React from "react";
import { Helmet } from "react-helmet-async";
import UseAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { RiDeleteBin6Line } from "react-icons/ri";
import SectionTitle from "../../../../shared/components/SectionTitle";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = UseAxiosSecure();

  // Fetching users
  const { refetch, data: users = [], isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // Delete user
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/users/${id}`)
          .then((res) => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire("Deleted!", "The user has been deleted.", "success");
            }
          })
          .catch((error) => {
            console.error("Error deleting user:", error);
            Swal.fire("Error", "Failed to delete the user. Please try again.", "error");
          });
      }
    });
  };

  // Promote user to admin
  const handleMakeAdmin = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to make ${user.name} an admin?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, make admin!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/users/admin/${user._id}`) // Updated from user.id to user._id
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              refetch();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: `${user.name} is now an Admin!`,
                showConfirmButton: false,
                timer: 1500,
              });
            } else {
              Swal.fire("No changes made", "The user might already be an admin.", "info");
            }
          })
          .catch((error) => {
            console.error("Error promoting user to admin:", error);
            Swal.fire("Error", "Failed to promote the user. Please try again.", "error");
          });
      }
    });
  };

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Users</title>
      </Helmet>
      <SectionTitle
        subHeading="---How Many??---"
        heading="MANAGE ALL USERS"
      ></SectionTitle>
      <div className="w-4/5 rounded-sm mx-auto">
        <h2 className="text-xl font-bold py-4 uppercase">
          Total Users: <span className="text-orange-600">{users.length}</span>
        </h2>

        {/* Loading State */}
        {isLoading ? (
          <p className="text-center text-gray-500">Loading users...</p>
        ) : users.length === 0 ? (
          <p className="text-center text-gray-500">No users found.</p>
        ) : (
          <div className="overflow-x-auto rounded-sm bg-white">
            <table className="table rounded-sm">
              {/* Table Header */}
              <thead>
                <tr className="bg-orange-300 uppercase text-gray-900">
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id}>
                    <th>{index + 1}</th>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      {user.role === "admin" ? (
                        "Admin"
                      ) : (
                        <button
                          onClick={() => handleMakeAdmin(user)}
                          className="btn btn-ghost btn-xs bg-orange-600 w-[40px] h-[40px] hover:bg-black"
                          title="Promote to Admin"
                        >
                          <FaUsers className="text-3xl p-1 text-white" />
                        </button>
                      )}
                    </td>
                    <th>
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="btn btn-ghost btn-xs bg-red-600 w-[40px] h-[40px] hover:bg-black"
                        title="Delete User"
                      >
                        <RiDeleteBin6Line className="text-3xl p-1 text-white" />
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
