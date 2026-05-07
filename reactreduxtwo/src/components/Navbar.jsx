import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {

  const cartItems = useSelector(state => state.cart.items);

  return (
    <nav
      style={{
        padding: "20px",
        background: "black",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{ color: "white" }}>
        Home
      </Link>

      <Link to="/cart" style={{ color: "white" }}>
        Cart ({cartItems.length})
      </Link>
    </nav>
  );
};

export default Navbar;