
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar(){
  const items = useSelector(s=>s.cart.items);

  return (
    <nav className="bg-white shadow p-4 flex justify-between">
      <Link to="/" className="font-bold text-xl">Shop</Link>
      <Link to="/cart">Cart ({items.length})</Link>
    </nav>
  );
}
