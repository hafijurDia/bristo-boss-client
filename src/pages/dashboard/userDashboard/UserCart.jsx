import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../shared/components/SectionTitle";
import { FaDeleteLeft } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";
import UseCart from "../../../hooks/useCart";
import Swal from "sweetalert2";
import UseAxiosSecure from "../../../hooks/useAxiosSecure";

const Usercart = () => {
    const [cart, refetch] = UseCart();
    const totalPrice = cart.reduce((total, currentItem)=>{
        return total + currentItem.price;
    },0);
    const axiosSecure = UseAxiosSecure();

    const handleDelete = (id) =>{
        console.log(id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/carts/${id}`)
              .then(res=>{
                if (res.data.deletedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      
                }
              })
            }
          });
    }
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | My Cart</title>
      </Helmet>
      <SectionTitle
        subHeading="---My Cart---"
        heading="WANNA ADD MORE?"
      ></SectionTitle>
      <div className="w-4/5 rounded-sm mx-auto">
        <div className="mb-6 mt-16">
          {/* Container */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {/* Total Orders */}
            <div className="flex flex-col items-center justify-center p-4 bg-white shadow rounded-lg">
              <h2 className="text-lg font-bold">Total Orders</h2>
              <p className="text-2xl font-semibold text-blue-500">{cart.length}</p>
            </div>

            {/* Total Price */}
            <div className="flex flex-col items-center justify-center p-4 bg-white shadow rounded-lg">
              <h2 className="text-lg font-bold">Total Price</h2>
              <p className="text-2xl font-semibold text-green-500">${totalPrice}</p>
            </div>

            {/* Pay Button */}
            <div className="flex flex-col items-center justify-center p-4 bg-white shadow rounded-lg">
              <h2 className="text-lg font-bold mb-2">Ready to Pay?</h2>
              <button className="px-6 py-2 text-white bg-purple-500 rounded-lg hover:bg-purple-600">
                Pay Now
              </button>
            </div>
          </div>
        </div>

        <div>
          <div className="overflow-x-auto rounded-sm bg-white">
            <table className="table rounded-sm">
              {/* head */}
              <thead>
                <tr className="bg-orange-300 uppercase text-gray-900">
                  <th></th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {
                    cart.map((item, index)=>
                        <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={item.image}
                            alt={item.name}
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <button 
                    onClick={()=>handleDelete(item._id)}
                    className="btn btn-ghost btn-xs bg-red-600 w-[40px] h-[40px] hover:bg-black"><RiDeleteBin6Line className="text-3xl p-1 text-white" /></button>
                  </th>
                </tr>
                    )
                }
                
              </tbody>
              {/* foot */}
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

Usercart.propTypes = {};

export default Usercart;
