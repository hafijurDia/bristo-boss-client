import React, { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { FaShopify, FaUsers, FaUtensils } from "react-icons/fa";
import { MdOutlineSettingsPhone } from "react-icons/md";
import UseAuth from "../../../../hooks/useAuth";
import useMenu from "../../../../hooks/useMenu";
import { useQuery } from "@tanstack/react-query";
import UseAxiosSecure from "../../../../hooks/useAxiosSecure";
import { LuWallet } from "react-icons/lu";
import { SiCodechef } from "react-icons/si";
import { CiDeliveryTruck } from "react-icons/ci";


const AdminHome = () => {
    const {user} = UseAuth();
    const [menu] = useMenu();
    const axiosSecure = UseAxiosSecure();

    const {data: stats, refetch} = useQuery({
      queryKey: ['admin-stats'],
      queryFn: async()=>{
        const res = await axiosSecure.get('/admin-stats');
        return res.data;
      }
    })
    console.log('info',stats);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Admin Home</title>
      </Helmet>
      <div className="w-4/5 mx-auto">
        {/* Welcome Section */}
        <div className="mb-5">
          <h2 className="text-2xl font-bold">Hi,<span className="uppercase text-orange-500 pr-2">{user?.displayName}</span> Welcome Back!</h2>
        </div>

        {/* Metrics Section */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          {/* Total Orders */}
          <div className="flex justify-center items-center bg-indigo-700 p-4 rounded-lg shadow w-full">
            <div className="text-4xl text-white mr-4">
            <LuWallet />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{stats?.revenue}</div>
              <div className="text-sm text-white">Revenue</div>
            </div>
          </div>

          {/* Total Price */}
          <div className="flex justify-center items-center bg-orange-700 p-4 rounded-lg shadow w-full">
            <div className="text-4xl text-white mr-4">
            <FaUsers />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{stats?.users}</div>
              <div className="text-sm text-gray-600 text-white">Customers</div>
            </div>
          </div>

          {/* Total Price */}
          <div className="flex justify-center items-center bg-green-700 p-4 rounded-lg shadow w-full">
            <div className="text-4xl text-white mr-4">
            <SiCodechef />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{stats?.menus}</div>
              <div className="text-sm text-white">Products</div>
            </div>
          </div>

          {/* Total Price */}
          <div className="flex justify-center items-center bg-cyan-700 p-4 rounded-lg shadow w-full">
            <div className="text-4xl text-white mr-4">
            <CiDeliveryTruck />
            </div>
            <div>
              <div className="text-2xl font-bold text-white">{stats?.orders}</div>
              <div className="text-sm text-white">Orders</div>
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
            <h2 className="text-xl font-bold mb-4 text-gray-700">Admin Activities</h2>
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

export default AdminHome;
