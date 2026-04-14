import React from "react";

export default function Cart({ cart }) {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          {item.name} - ₹{item.price}
        </div>
      ))}
    </div>
  );
}
