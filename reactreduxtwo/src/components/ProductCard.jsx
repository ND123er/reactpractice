import { useDispatch } from "react-redux";
import { addItem } from "../features/cart/cartSliceFind";

const ProductCard = ({ product }) => {

  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        width: "200px",
      }}
    >
      <h3>{product.name}</h3>

      <p>${product.price}</p>

      <button
        onClick={() => dispatch(addItem(product))}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;