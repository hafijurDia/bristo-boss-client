import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../shared/header/mainHeader/Header";
import Footer from "../shared/footer/Footer";

const Main = () => {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes("login");
  return (
    <>
      {
        noHeaderFooter || <Header></Header>
      }
      <Outlet></Outlet>
      {
        noHeaderFooter || <Footer></Footer>
      }
    </>
  );
};

Main.propTypes = {};

export default Main;
