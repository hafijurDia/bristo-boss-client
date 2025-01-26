import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../../../shared/components/SectionTitle";
import UseAuth from "../../../../../hooks/useAuth";
import UseAxiosSecure from "../../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

const PaymentHistory = () => {
    const {user} = UseAuth();
    const axiosSecure = UseAxiosSecure();
    
    const {data: payments = []} = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async()=>{
            const res  = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Manage Items</title>
      </Helmet>
      <SectionTitle
        subHeading="---At a Glance!---"
        heading="PAYMENT HISTORY"
      ></SectionTitle>
      <div className="w-4/5 rounded-sm mx-auto">
      <h2 className="text-xl font-bold py-4 uppercase">
          Total Items: <span className="text-orange-600">{payments.length}</span>
        </h2>
        <table className="table rounded-sm">
          {/* Table Header */}
          <thead>
            <tr className="bg-orange-300 uppercase text-gray-900">
              <th></th>
              <th>Email</th>
              <th>Transaction ID</th>
              <th>Total Price</th>
              <th>Payment Data</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
                payments.map((item, index) => 
                    <tr key={item._id}>
              <th>{index + 1}</th>
             
              <td>{item.email}</td>
              <td>{item.transactionId}</td>
              <td>{item.price}</td>
              <td>{item.date}</td>
              <td>{item.status}</td>
            </tr>
                )
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};

PaymentHistory.propTypes = {};

export default PaymentHistory;
