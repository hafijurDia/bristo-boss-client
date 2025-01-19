import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaHistory, FaShoppingCart, FaStar, FaBook, FaUtensils, FaShopify, FaPhoneAlt } from "react-icons/fa";
import UseCart from "../../hooks/useCart";

const UserDashboardNav = () => {
    const [cart] = UseCart();
  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side sticky">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-orange-300 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content */}
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-bold uppercase">BISTRO BOSS</h2>
              <p className="text-sm text-gray-800 font-bold uppercase" style={{letterSpacing:'9px'}}>Restaurant</p>
            </div>

            {/* User Links */}
            <li>
              <NavLink to="/dashboard/home" activeClassName="font-bold" className="text-base">
                <FaHome className="mr-2" /> User Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/reservation" activeClassName="font-bold" className="text-base">
                <FaCalendarAlt className="mr-2" /> Reservation
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/payment-history" activeClassName="font-bold" className="text-base">
                <FaHistory className="mr-2" /> Payment History
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/cart" activeClassName="font-bold" className="text-base">
                <FaShoppingCart className="mr-2" /> My Cart ({cart.length})
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/add-review" activeClassName="font-bold" className="text-base">
                <FaStar className="mr-2" /> Add Review
              </NavLink>
            </li>
            <li>
              <NavLink to="/dashboard/my-booking" activeClassName="font-bold" className="text-base">
                <FaBook className="mr-2" /> My Booking
              </NavLink>
            </li>

            {/* Divider */}
            <hr className="my-4 border-gray-300" />

            {/* General Links */}
            <li>
              <NavLink to="/" activeClassName="font-bold" className="text-base">
                <FaHome className="mr-2" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" activeClassName="font-bold" className="text-base">
                <FaUtensils className="mr-2" /> Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop/salads" activeClassName="font-bold" className="text-base">
                <FaShopify className="mr-2" /> Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" activeClassName="font-bold" className="text-base">
                <FaPhoneAlt className="mr-2" /> Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

UserDashboardNav.propTypes = {};

export default UserDashboardNav;



