
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";

export default function ProductCard({product}){
  const dispatch = useDispatch();

  return (
    <div className="bg-white p-4 rounded-xl shadow hover:shadow-lg">
      <img src={product.image} className="h-40 mx-auto" />
      <h3 className="font-semibold mt-2">{product.title}</h3>
      <p className="text-green-600">${product.price}</p>
      <div className="flex gap-2 mt-2">
        <button onClick={()=>dispatch(addToCart(product))}
          className="bg-blue-500 text-white px-3 py-1 rounded">
          Add
        </button>
        <Link to={`/product/${product.id}`} className="text-blue-600">
          View
        </Link>
      </div>
    </div>
  );
}
