import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FaShopify, FaUtensils } from "react-icons/fa";
import { MdOutlineSettingsPhone } from "react-icons/md";
import UseAuth from "../../../../hooks/useAuth";
import useMenu from "../../../../hooks/useMenu";


const UserHome = () => {
    const {user} = UseAuth();
    const [menu] = useMenu();
    console.log('user photo',user.photoURL)
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | User Home</title>
      </Helmet>
      <div className="w-4/5 mx-auto">
        {/* Welcome Section */}
        <div className="mb-5">
          <h2 className="text-2xl font-bold">Hi,<span className="uppercase text-orange-500 pr-2">{user?.displayName}</span> Welcome Back!</h2>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {/* Total Orders */}
          <div className="flex justify-center items-center bg-blue-100 p-4 rounded-lg shadow w-full">
            <div className="text-4xl text-blue-600 mr-4">
              <FaUtensils />
            </div>
            <div>
              <div className="text-2xl font-bold">{menu.length}</div>
              <div className="text-sm text-gray-600">Menu</div>
            </div>
          </div>

          {/* Total Price */}
          <div className="flex justify-center items-center bg-green-100 p-4 rounded-lg shadow w-full">
            <div className="text-4xl text-green-600 mr-4">
              <FaShopify />
            </div>
            <div>
              <div className="text-2xl font-bold">103</div>
              <div className="text-sm text-gray-600">Shop</div>
            </div>
          </div>

          {/* Contact Button */}
          <div className="flex justify-center items-center bg-purple-100 p-4 rounded-lg shadow w-full">
            <div className="text-4xl text-purple-600 mr-4">
              <MdOutlineSettingsPhone />
            </div>
            <div>
              <div className="text-2xl font-bold">03</div>
              <div className="text-sm text-gray-600">Contact</div>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 my-5">
          {/* Profile Picture and Name */}
          <div className="flex flex-col items-center bg-gray-100 rounded-lg p-4 shadow w-full">
            <div className="w-32 h-32 rounded-full bg-blue-500 flex items-center justify-center">
              <img
                src={user?.photoURL}
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-lg"
              />
            </div>
            <h3 className="text-lg font-semibold mt-4">{user?.displayName}</h3>
            <h3 className="text-lg font-semibold mt-4">{user?.email}</h3>
          </div>

          {/* User Dashboard Section */}
          <div className="bg-gray-50 rounded-lg p-6 shadow w-full">
            <h2 className="text-xl font-bold mb-4 text-gray-700">Your Activities</h2>
            <ul className="space-y-3 text-gray-700">
              <li className="px-4 py-2">Orders</li>
              <li className="px-4 py-2">Reviews</li>
              <li className="px-4 py-2">Bookings</li>
              <li className="px-4 py-2">Payments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
