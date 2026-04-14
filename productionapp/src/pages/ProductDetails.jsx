
// import { useParams } from "react-router-dom";
// import { useGetProductQuery } from "../services/api";

// export default function ProductDetails(){
//   const { id } = useParams();
//   const { data } = useGetProductQuery(id);

//   if(!data) return null;

//   return (
//     <div className="p-6">
//       <img src={data.image} className="h-60"/>
//       <h1 className="text-2xl">{data.title}</h1>
//       <p>{data.description}</p>
//       <p className="text-green-600">${data.price}</p>
//     </div>
//   );
// }
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../services/api";
import { useDispatch } from "react-redux";

export default function ProductDetails() {
  const { id } = useParams();
  const { data } = useGetProductQuery(id);
  const dispatch = useDispatch();

  if (!data) return null;

  return (
    <div className="p-6">
      <img src={data.image} className="h-60" />
      <h1 className="text-2xl">{data.title}</h1>
      <p>{data.description}</p>
      <p className="text-green-600">${data.price}</p>

      <button
        onClick={() => dispatch(addToCart(data))}
        className="bg-blue-500 text-white px-4 py-2 mt-4"
      >
        Add to Cart
      </button>
    </div>
  );
}