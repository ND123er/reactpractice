
import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../features/cart/cartSlice";

// Central Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export default store;
