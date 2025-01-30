import React, { useContext } from "react";
import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaCalendarAlt,
  FaHistory,
  FaShoppingCart,
  FaStar,
  FaBook,
  FaUtensils,
  FaShopify,
  FaPhoneAlt,
  FaList,
  FaUser,
  FaUsers,
  FaRegUserCircle,
} from "react-icons/fa";
import UseCart from "../../hooks/useCart";
import UseAdmin from "../../hooks/useAdmin";

import UseAuth from "../../hooks/useAuth";

const UserDashboardNav = () => {
  const {user, logOut } = UseAuth();
  const [cart] = UseCart();
  const navigate = useNavigate();
  const [isAdmin] = UseAdmin();

 const handleLogout = () => {
  logOut()
    .then(() => {
      setTimeout(() => navigate("/"), 100); // Navigate to home page after logout
    })
    .catch((error) => {
      console.error("Logout failed:", error);
    });
};

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
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-orange-300 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content */}
            <div className="mb-6 text-center">
              <h2 className="text-3xl font-bold uppercase">BISTRO BOSS</h2>
              <p
                className="text-sm text-gray-800 font-bold uppercase"
                style={{ letterSpacing: "9px" }}
              >
                Restaurant
              </p>
            </div>

            {/* User Links */}
            {isAdmin ? (
              <>
                <li>
                  <NavLink to="/dashboard/home" className="text-base">
                    <FaHome className="mr-2" /> Admin Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/add-item" className="text-base">
                    <FaUtensils className="mr-2" /> Add Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manage-item" className="text-base">
                    <FaList className="mr-2" /> Manage Items
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/users" className="text-base">
                    <FaUsers className="mr-2" /> ALl Users
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/dashboard/home" className="text-base">
                    <FaHome className="mr-2" /> User Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/reservation" className="text-base">
                    <FaCalendarAlt className="mr-2" /> Reservation
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/payment-history"
                    className="text-base"
                  >
                    <FaHistory className="mr-2" /> Payment History
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/cart" className="text-base">
                    <FaShoppingCart className="mr-2" /> My Cart ({cart.length})
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/add-review" className="text-base">
                    <FaStar className="mr-2" /> Add Review
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/my-booking" className="text-base">
                    <FaBook className="mr-2" /> My Booking
                  </NavLink>
                </li>
              </>
            )}

            {/* Divider */}
            <hr className="my-4 border-gray-300" />

            {/* General Links */}
            <li>
              <NavLink to="/" className="text-base">
                <FaHome className="mr-2" /> Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" className="text-base">
                <FaUtensils className="mr-2" /> Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop/salads" className="text-base">
                <FaShopify className="mr-2" /> Shop
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="text-base">
                <FaPhoneAlt className="mr-2" /> Contact
              </NavLink>
            </li>
            {user ? (
        <>
          <li>
            <button className="uppercase font-semibold" onClick={handleLogout}>
              Logout{" "}
            </button>
            <FaRegUserCircle />
          </li>
        </>
      ) : (
        <>
          <li>
            <Link className="uppercase font-semibold" to="/login">
              Login
            </Link>
          </li>
        </>
      )}
          </ul>
        </div>
      </div>
    </div>
  );
};

UserDashboardNav.propTypes = {};

export default UserDashboardNav;
