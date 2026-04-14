
import { useSelector } from "react-redux";

export default function Cart(){
  const items = useSelector(s=>s.cart.items);

  return (
    <div>
      <h2>Cart</h2>
      {items.map(i=>(
        <div key={i.id}>{i.title} - {i.qty}</div>
      ))}
    </div>
  );
}
