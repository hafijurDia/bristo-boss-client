import React from 'react';
import UseAuth from '../hooks/useAuth';
import UseAdmin from '../hooks/useAdmin';
import { Navigate, useLocation } from 'react-router-dom';


const AdminRoute = () => {
    const {user, loading} = UseAuth();
    const [isAdmin, isAdminLoading] = UseAdmin();
    const location = useLocation();
    
    if (loading || isAdminLoading) {
        return <progress className="progress w-56"></progress>;
      }
      if (user && isAdmin) {
        return children;
      }
      return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};




export default AdminRoute;
