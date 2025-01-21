import React from 'react';
import PropTypes from 'prop-types';
import UserDashboardNav from '../shared/dashboardNavbar/UserDashboardNav';
import { Outlet } from 'react-router-dom';

const UserDashboard = () => {
    
  return (
    <div className="bg-gray-200 min-h-screen flex">
      {/* Sidebar */}
      <div className="md:sticky md:top-0 h-screen">
        <UserDashboardNav />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="px-10 py-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

UserDashboard.propTypes = {};

export default UserDashboard;
