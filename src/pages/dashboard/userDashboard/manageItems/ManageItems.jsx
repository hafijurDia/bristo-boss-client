import React from "react";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../shared/components/SectionTitle";
import useMenu from "../../../../hooks/useMenu";
import { FaEdit, FaUsers } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

const ManageItems = () => {
  const [menu, loading] = useMenu();
  console.log(menu);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Manage Items</title>
      </Helmet>
      <SectionTitle
        subHeading="---Hurry Up---"
        heading="MANAGE ALL ITEMS"
      ></SectionTitle>
      <div className="w-4/5 rounded-sm mx-auto">
        <h2 className="text-xl font-bold py-4 uppercase">
          Total Items: <span className="text-orange-600">{menu.length}</span>
        </h2>
        {/* Loading State */}
        {loading ? (
          <p className="text-center text-gray-500">Loading users...</p>
        ) : menu.length === 0 ? (
          <p className="text-center text-gray-500">No users found.</p>
        ) : (
          <div className="overflow-x-auto rounded-sm bg-white">
            <table className="table rounded-sm">
              {/* Table Header */}
              <thead>
                <tr className="bg-orange-300 uppercase text-gray-900">
                  <th></th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {menu.map((item, index) => (
                  <tr key={item._id}>
                    <th>{index + 1}</th>
                    <td><img src={item.image} alt="item.name" className="w-[60px] rounded-md"/> </td>
                    <td>{item.name}</td>
                    <td>${item.price}</td>
                    <td>
                      <button
                        className="btn btn-ghost btn-xs bg-orange-600 w-[40px] h-[40px] hover:bg-black"
                        title="Promote to Admin"
                      >
                        <FaEdit className="text-3xl p-1 text-white" />
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-ghost btn-xs bg-red-600 w-[40px] h-[40px] hover:bg-black"
                        title="Delete User"
                      >
                        <RiDeleteBin6Line className="text-3xl p-1 text-white" />
                      </button>
                    </td>
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

ManageItems.propTypes = {};

export default ManageItems;
