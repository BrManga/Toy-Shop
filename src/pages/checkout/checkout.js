import React from "react";
import "./checkout.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item";
import {
  selectCartItems,
  selectCartTotal
} from "../../redux/cart/cart.selectors";
import CartItem from "../../components/cart-item/cart-item";

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">Product</div>{" "}
      <div className="header-block">Description</div>{" "}
      <div className="header-block">Price</div>{" "}
      <div className="header-block">Quantity</div>{" "}
      <div className="header-block">Remove</div>
    </div>
    <div className="cartItemWrap">
      {cartItems.map(cartItem => (
        <CheckoutItem key={CartItem.id} cartItem={cartItem} />
      ))}
    </div>
    <div className="total">
      <span>TOTAL: {total}€</span>
    </div>
  </div>
);
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});
export default connect(mapStateToProps)(CheckoutPage);
