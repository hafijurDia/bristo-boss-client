import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../shared/components/SectionTitle";

const Usercart = () => {
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
              <p className="text-2xl font-semibold text-blue-500">45</p>
            </div>

            {/* Total Price */}
            <div className="flex flex-col items-center justify-center p-4 bg-white shadow rounded-lg">
              <h2 className="text-lg font-bold">Total Price</h2>
              <p className="text-2xl font-semibold text-green-500">$1,250.00</p>
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
                <tr className="bg-orange-300 uppercase text-white">
                  <th></th>
                  <th>Item Image</th>
                  <th>Item Name</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>1</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>Zemlak, Daniel and Leannon</td>
                  <td>$1.25</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Delete</button>
                  </th>
                </tr>
                <tr>
                  <th>1</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>Zemlak, Daniel and Leannon</td>
                  <td>$1.25</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">Delete</button>
                  </th>
                </tr>
                
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
