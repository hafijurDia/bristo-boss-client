import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React from "react";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

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
      console.log("[error]", error);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
    }
  };

  return (
    <div className="max-w-lg mx-auto shadow-lg p-6 rounded-lg bg-gray-100">
      <h2 className="text-2xl font-bold text-center mb-4 text-indigo-900">Payment Details</h2>
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
      </form>
    </div>
  );
};

export default CheckoutForm;
