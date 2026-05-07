import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../features/counter/cartSlice2";

export default function Cart2() {
  const items = useSelector((state) => state.cart2.items);
  const dispatch = useDispatch();

  const product = { id: 1, name: "Shoes" };

  return (
    <div>
      <h2>Cart 2 (Quantity version)</h2>

      <button onClick={() => dispatch(addToCart(product))}>
        Add Shoes
      </button>

      {items.map((item) => (
        <p key={item.id}>
          {item.name} (Qty: {item.quantity})
        </p>
      ))}
    </div>
  );
}