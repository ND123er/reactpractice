
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const exist = state.items.find(i => i.id === item.id);
      if (exist) exist.qty++;
      else state.items.push({...item, qty:1});
    }
  }
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
