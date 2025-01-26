import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import UseAxiosSecure from "../../../../hooks/useAxiosSecure";
import UseCart from "../../../../hooks/useCart";
import UseAuth from "../../../../hooks/useAuth";
import { data, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const stripe = useStripe();
  const [transactionId, setTransactionId] = useState('');
  const { user } = UseAuth();
  const elements = useElements();
  const axiosSecure = UseAxiosSecure();
  const [cart, refetch] = UseCart();
  const navigate = useNavigate();


  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  useEffect(() => {
    if (totalPrice > 0) {
        axiosSecure.post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        setClientSecret(res.data.clientSecret);
        console.log(res.data.clientSecret);
      });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
    }

    //confirm
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || "anonymous",
            name: user?.displayName || "anonymous",
          },
        },
      });
      if (confirmError) {
        console.log('confirm erro');
      }else{
        console.log('payment intent', paymentIntent);
        if (paymentIntent.status === 'succeeded') {
            console.log(paymentIntent.id);
            setTransactionId(paymentIntent.id)

            //now save the payment in the database
            const payment = {
                email: user.email,
                price: totalPrice,
                transactionId: paymentIntent.id,
                date: new Date(),
                cartIds: cart.map(item=>item._id),
                menuItemIds: cart.map(item=>item.menuId),
                status: 'pending',
            }

            const res = await axiosSecure.post('/payment', payment);
            console.log('payment saved', res.data);
            refetch();
            if (res.data?.paymentResult?.insertedId) {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thank you for your payment!",
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            navigate('/dashboard/payment-history');
        }
      }
  };

  return (
    <div className="max-w-lg mx-auto shadow-lg p-6 mt-10 rounded-lg bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-4 text-indigo-900">
        Payment Details
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="p-4 border border-gray-300 rounded-lg bg-white mb-4">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#424770",
                  fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
                  fontSmoothing: "antialiased",
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
                invalid: {
                  color: "#9e2146",
                },
              },
            }}
          />
        </div>
        <button
          type="submit"
          disabled={!stripe}
          className="w-full bg-indigo-900 text-white py-2 px-4 rounded-md text-lg hover:bg-orange-700 transition-colors"
        >
          Pay
        </button>
        <p className="text-red-600">{error}</p>
        {transactionId && <p className="text-green-600">Payment successfull! Transaction id: {transactionId}</p>}
      </form>
    </div>
  );
};

export default CheckoutForm;
