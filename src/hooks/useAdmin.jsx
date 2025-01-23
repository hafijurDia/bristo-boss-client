import React from 'react';
import UseAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import UseAuth from './useAuth';

const UseAdmin = () => {
   const {user} = UseAuth();
   const axiosSecure = UseAxiosSecure();
   const {data: isAdmin, isPending: isAdminLoading} = useQuery({
    queryKey: [user?.email, 'isAdmin'],
    queryFn: async () => {
        const res = await axiosSecure.get(`/users/admin/${user.email}`);
        return res.data?.admin;
    }
   })
   return[isAdmin, isAdminLoading]
};





export default UseAdmin;
