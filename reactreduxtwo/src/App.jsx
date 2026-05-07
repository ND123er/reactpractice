// import { useSelector, useDispatch } from "react-redux";
// import { addLike, addDislike } from "./features/reaction/reactionSlice";
// import { addItem, removeItem, increaseQty, decreaseQty } from "./features/cart/cartSlice";
// import './App.css'
// export default function App() {
//   const dispatch = useDispatch();

//   const reaction = useSelector((state) => state.reaction);
//   const cart = useSelector((state) => state.cart.items);

//   const product = { id: 1, name: "Shoes" };

//   return (
//     <div className="p-6 space-y-6">

//       {/* 👍 Like / Dislike */}
//       <div className="p-4 border rounded-xl">
//         <h2 className="text-xl font-bold mb-2">Reactions</h2>

//         <div className="flex gap-4">
//           <button
//             onClick={() => dispatch(addLike())}
//             className="px-4 py-2 bg-green-500 text-white rounded"
//           >
//             👍 Like ({reaction.likes})
//           </button>

//           <button
//             onClick={() => dispatch(addDislike())}
//             className="px-4 py-2 bg-red-500 text-white rounded"
//           >
//             👎 Dislike ({reaction.dislikes})
//           </button>
//         </div>
//       </div>

//       {/* 🛒 Cart */}
//       <div className="p-4 border rounded-xl">
//         <h2 className="text-xl font-bold mb-2">Cart</h2>

//         <button
//           onClick={() => dispatch(addItem(product))}
//           className="px-4 py-2 bg-blue-500 text-white rounded"
//         >
//           Add Shoes
//         </button>

//         <div className="mt-4 space-y-2">
//           {cart.map((item) => (
//             <div
//               key={item.id}
//               className="flex items-center justify-between p-2 border rounded"
//             >
//               <span>{item.name} (x{item.qty})</span>

//               <div className="flex gap-2">
//                 <button
//                   onClick={() => dispatch(increaseQty(item.id))}
//                   className="px-2 bg-green-400 rounded"
//                 >
//                   +
//                 </button>

//                 <button
//                   onClick={() => dispatch(decreaseQty(item.id))}
//                   className="px-2 bg-yellow-400 rounded"
//                 >
//                   -
//                 </button>

//                 <button
//                   onClick={() => dispatch(removeItem(item.id))}
//                   className="px-2 bg-red-500 text-white rounded"
//                 >
//                   x
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }




import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
};

export default App;