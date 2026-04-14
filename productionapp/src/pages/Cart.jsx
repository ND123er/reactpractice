
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

export default function Cart(){
  const items = useSelector(s=>s.cart.items);
  const dispatch = useDispatch();
const cart = useSelector(state => state.cart.items);

console.log(cart);
  return (
    <div className="p-6">
      <h2 className="text-xl mb-4">Cart</h2>
      {items.map(i=>(
        <div key={i.id} className="flex justify-between bg-white p-3 mb-2">
          {i.title}
          <button onClick={()=>dispatch(removeFromCart(i.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}
