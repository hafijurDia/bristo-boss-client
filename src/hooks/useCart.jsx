import React from 'react';
import UseAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';


const UseCart = () => {
    const axiosSecure = UseAxiosSecure();
    const {data: cart = []} = useQuery({
        queryKey: ['cart'],
        queryFn : async () => {
            const res = await axiosSecure.get('/carts')
            return res.data;
        }
    })
    return [cart];
};



export default UseCart;
