import { useDispatch, useSelector } from "react-redux";

import {
  increaseQty,
  decreaseQty,
  removeItem,
} from "../features/cart/cartSliceFind";

const Cart = () => {

  const dispatch = useDispatch();

  const items = useSelector(
    state => state.cart.items
  );

  return (
    <div style={{ padding: "20px" }}>

      <h2>Cart Page</h2>

      {items.map(item => (

        <div
          key={item.id}
          style={{
            border: "1px solid gray",
            marginBottom: "20px",
            padding: "20px",
          }}
        >
          <h3>{item.name}</h3>

          <p>Price: ${item.price}</p>

          <p>Qty: {item.qty}</p>

          <button
            onClick={() =>
              dispatch(increaseQty(item.id))
            }
          >
            +
          </button>

          <button
            onClick={() =>
              dispatch(decreaseQty(item.id))
            }
          >
            -
          </button>

          <button
            onClick={() =>
              dispatch(removeItem(item.id))
            }
          >
            Remove
          </button>

        </div>
      ))}
    </div>
  );
};

export default Cart;