import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../features/counter/cartSlice1";

export default function Cart1() {
  const items = useSelector((state) => state.cart1.items);
  const dispatch = useDispatch();

  const product = { id: 1, name: "Shoes" };

  return (
    <div>
      <h2>Cart 1 (Push version)</h2>

      <button onClick={() => dispatch(addToCart(product))}>
        Add Shoes
      </button>

      {items.map((item, i) => (
        <p key={i}>{item.name}</p>
      ))}
    </div>
  );
}