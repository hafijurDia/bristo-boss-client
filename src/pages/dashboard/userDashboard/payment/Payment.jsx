import React from 'react';
import { Helmet } from 'react-helmet-async';
import SectionTitle from '../../../../shared/components/SectionTitle';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

//TODO add publish key
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_key);
const Payment = () => {
    return (
        <div>
            <Helmet>
                    <title>Bistro Boss | Payment</title>
                  </Helmet>
                  <SectionTitle
                    subHeading="---Hurry Up---"
                    heading="MAKE YOUR PAYMENT"
                  ></SectionTitle>
                  <div className="w-4/5 rounded-sm mx-auto">
                        <Elements stripe={stripePromise}>
                            <CheckoutForm></CheckoutForm>
                        </Elements>
                  </div>
        </div>
    );
};



export default Payment;
