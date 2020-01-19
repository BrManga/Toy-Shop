import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = "pk_test_G7cv8z20mhdJxnwmUvR6rpL900HY1ACm8X";
  const onToken = token => {
    alert("Payment Successful ");
    console.log(token);
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="ToyShop Ltd."
      billingAddress
      shippingAddress
      image="https://freesvg.org/img/publicdomainq-flower.png"
      description={`Your total is ${price}€`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};
export default StripeCheckoutButton;
