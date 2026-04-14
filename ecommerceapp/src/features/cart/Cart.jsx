
import React from "react";
import { useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector(state => state.cart);

  return (
    <div>
      <h2>Cart</h2>
      <p>Total Items: {cart.totalQuantity}</p>

      {cart.items.map(item => (
        <div key={item.id}>
          {item.name} - Qty: {item.quantity}
        </div>
      ))}
    </div>
  );
}
