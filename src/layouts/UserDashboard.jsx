import React from 'react';
import PropTypes from 'prop-types';
import UserDashboardNav from '../shared/dashboardNavbar/UserDashboardNav';
import { Outlet } from 'react-router-dom';


const UserDashboard = () => {
    return (
        <div className='bg-gray-200'>
            <div className=' flex'>
                <div>
                    <UserDashboardNav></UserDashboardNav>
                </div>
                <div className='flex-1 '>
                    <div className='px-10 py-5'>
                    <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </div>
    );
};


UserDashboard.propTypes = {

};


export default UserDashboard;
