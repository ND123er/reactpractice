// app/store.js

import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import cart1Reducer from "../features/counter/cartSlice1"
import cart2Reducer from "../features/counter/cartSlice2"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart1: cart1Reducer,
    cart2: cart2Reducer
  }
}); 



























































