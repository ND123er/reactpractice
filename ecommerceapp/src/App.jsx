
import React from "react";
import Cart from "./features/cart/Cart";
import Products from "./features/products/Products";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Redux E-Commerce Starter</h1>
      <Products />
      <Cart />
    </div>
  );
}
