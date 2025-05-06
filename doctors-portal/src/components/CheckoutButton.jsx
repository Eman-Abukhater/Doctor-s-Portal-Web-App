// components/CheckoutButton.js
import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51RGkNCGgzLYNknzjMEkXF33RQn4qi45B3ONJSg8x8EHofNuffM7jlojgiImFCAoNoeZXLNUgZuue4OcdpKUnuSM9001Dokaqym"
);

const CheckoutButton = ({ appointment }) => {
  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const { error } = await stripe.redirectToCheckout({
      lineItems: [
        {
          price: "price_1RGmNlGgzLYNknzjhkOOK8l5", // Replace with dynamic price if needed
          quantity: 1,
        },
      ],
      mode: "payment",
      successUrl: `${window.location.origin}/thank-you`,
      cancelUrl: `${window.location.origin}/cancel`,
      customerEmail: appointment?.email, // optional if needed
    });

    if (error) {
      console.error("Stripe checkout error:", error);
    }
  };

  return (
    <button
      onClick={handleCheckout}
      style={{
        marginTop: "10px",
        backgroundColor: "#2E7D32",
        color: "white",
        border: "none",
        borderRadius: "4px",
        padding: "8px 16px",
        cursor: "pointer",
      }}
    >
      Pay Now
    </button>
  );
};

export default CheckoutButton;
