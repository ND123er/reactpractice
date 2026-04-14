
import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";

// Dummy product list
const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" }
];

export default function Products() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>

      {products.map(p => (
        <div key={p.id}>
          {p.name}
          <button onClick={() => dispatch(addToCart(p))}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}
