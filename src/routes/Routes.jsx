import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import OurMenu from "../pages/ourMenu/ourMenu/OurMenu";
import OurShop from "../pages/ourShop/OurShop";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import PrivateRoute from "./PrivateRoute";
import Usercart from "../pages/dashboard/userDashboard/Usercart";
import UserDashboard from "../layouts/UserDashboard";
import UserHome from "../pages/dashboard/userDashboard/home/UserHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <OurMenu></OurMenu>,
      },

      {
        path: "/shop/:category",
        element: <OurShop></OurShop>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <UserDashboard></UserDashboard>,
    children: [
      {
        path: "/dashboard/home",
        element: <UserHome></UserHome>,
      },
      {
        path: "/dashboard/cart",
        element: <Usercart></Usercart>,
      },
    ]
  },
]);
