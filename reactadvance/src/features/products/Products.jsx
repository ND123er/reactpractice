
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./productSlice";
import { addToCart } from "../cart/cartSlice";

export default function Products() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector(s => s.products);

  useEffect(()=>{ dispatch(fetchProducts()) },[]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2>Products</h2>
      {items.map(p=>(
        <div key={p.id}>
          {p.title}
          <button onClick={()=>dispatch(addToCart(p))}>Add</button>
        </div>
      ))}
    </div>
  );
}
