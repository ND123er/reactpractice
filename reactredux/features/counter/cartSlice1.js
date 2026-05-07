import { createSlice } from "@reduxjs/toolkit";

const cartSlice1 = createSlice({
  name: "cart1",
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice1.actions;
export default cartSlice1.reducer;