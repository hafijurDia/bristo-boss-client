import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/home/home/Home";
import OurMenu from "../pages/ourMenu/ourMenu/OurMenu";
import OurShop from "../pages/ourShop/OurShop";
import Login from "../pages/login/Login";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/menu",
          element:<OurMenu></OurMenu>
        },
     
        {
          path:"/shop/:category",
          element:<OurShop></OurShop>
        },
        {
          path:"/login",
          element:<Login></Login>
        }
      ]
    },
  ]);