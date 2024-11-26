import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../shared/header/mainHeader/Header';
import Footer from '../shared/footer/Footer';



const Main = () => {
    return (
        <>
        <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </>
    );
};


Main.propTypes = {

};


export default Main;
