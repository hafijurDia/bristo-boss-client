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
import Contact from "../pages/contact/Contact";
import AllUsers from "../pages/dashboard/userDashboard/allUsers/AllUsers";
import AdminRoute from "./AdminRoute";
import AddItems from "../pages/dashboard/userDashboard/addItems/AddItems";
import ManageItems from "../pages/dashboard/userDashboard/manageItems/ManageItems";
import UpdateItem from "../pages/dashboard/userDashboard/updateItem/UpdateItem";
import Payment from "../pages/dashboard/userDashboard/payment/Payment";
import PaymentHistory from "../pages/dashboard/userDashboard/payment/paymentHistory/PaymentHistory";
import AdminHome from "../pages/dashboard/userDashboard/home/AdminHome";

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
        path: "/contact",
        element: <Contact></Contact>,
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
    element: <PrivateRoute><UserDashboard></UserDashboard></PrivateRoute>,
    children: [
      {
        path: "/dashboard/home",
        element: <UserHome></UserHome>,
      },
      {
        path: "/dashboard/adminHome",
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>,
      },
      {
        path: "/dashboard/cart",
        element: <Usercart></Usercart>,
      },
      {
        path: "/dashboard/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/dashboard/payment-history",
        element: <PaymentHistory></PaymentHistory>
      },
      {
        path:"/dashboard/add-item",
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path:"/dashboard/manage-item",
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path:"/dashboard/update-item/:id",
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path: "/dashboard/users",
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>,
      },
    ]
  },
]);
