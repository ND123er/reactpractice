import { configureStore } from "@reduxjs/toolkit";
import reactionReducer from "../features/reaction/reactionSlice";
import cartReducer from "../features/cart/cartSlice";
// import cartReducerfind from "../features/cart/cartSliceFind";
import cartReducerfilter from "../features/cart/cartSliceFilter";
export const store = configureStore({
  reducer: {
    reaction: reactionReducer,
    cart: cartReducer,
    // cartfind: cartReducerfind,
    cartfilter: cartReducerfilter,
  },
});