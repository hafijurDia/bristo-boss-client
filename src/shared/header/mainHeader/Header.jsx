import React, { useContext } from "react";
import PropTypes from "prop-types";
import logo from "../../../assets/logo-bristo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaRegUserCircle, FaShoppingCart } from "react-icons/fa";
import UseCart from "../../../hooks/useCart";
import UseAdmin from "../../../hooks/useAdmin";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = UseAdmin();
  const navigate = useNavigate();
  const [cart] = UseCart();
  const handleLogout = () => {
    logOut()
      .then(() => {
        navigate("/");
      })
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link className="uppercase font-semibold" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="uppercase font-semibold" to="/contact">
          Contact Us
        </Link>
      </li>

   

      <li>
        <Link className="uppercase font-semibold" to="/menu">
          Our Menu
        </Link>
      </li>
      <li>
        <Link className="uppercase font-semibold" to="/shop/salads">
          Our Shop{" "}
        </Link>
      </li>
      <li>
        <Link  to="/dashboard/cart">
  
          <FaShoppingCart className="text-white" />
          <div className="badge badge-secondary">+{cart.length}</div>
     
        </Link>
      </li>
      {
  user && isAdmin &&  <li><Link className="uppercase font-semibold" to="/dashboard/adminHome">Dashboard</Link></li> 
}
{
  user && !isAdmin &&  <li><Link className="uppercase font-semibold" to="/dashboard/home">Dashboard</Link></li> 
}
   
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
    </>
  );

  return (
    <div className="  fixed z-10 w-full bg-opacity-20 bg-black text-white">
      <div className="navbar justify-between md:px-10">
        <div className="">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-black"
            >
              {navOptions}
            </ul>
          </div>
          <Link to="/">
            <img className="w-4/5" src={logo} alt="" />
          </Link>
        </div>
        <div className="  hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default Header;
