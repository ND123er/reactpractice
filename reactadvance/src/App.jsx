
import { Routes, Route, Link } from "react-router-dom";
import Products from "./features/products/Products";
import Cart from "./features/cart/Cart";
import Login from "./features/auth/Login";

export default function App() {
  return (
    <div style={{padding:20}}>
      <nav>
        <Link to="/">Products</Link> | 
        <Link to="/cart"> Cart</Link> | 
        <Link to="/login"> Login</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}
