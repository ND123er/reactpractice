import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {

      const existing = state.items.filter(
        item => item.id === action.payload.id
      )[0];

      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({
          ...action.payload,
          qty: 1,
        });
      }
    },

    increaseQty: (state, action) => {

    //   const item = state.items.filter(
    //     item => item.id === action.payload
    //   )[0];
    const item = state.items.filter(i => {
  console.log("filter checking", i.id);
  return i.id === action.payload;
})[0];

      if (item) {
        item.qty += 1;
      }
    },

    decreaseQty: (state, action) => {

      const item = state.items.filter(
        item => item.id === action.payload
      )[0];

      if (item && item.qty > 1) {
        item.qty -= 1;
      }
    },

    removeItem: (state, action) => {
      state.items = state.items.filter(
        item => item.id !== action.payload
      );
    },
  },
});

export const {
  addItem,
  increaseQty,
  decreaseQty,
  removeItem,
} = cartSlice.actions;

export default cartSlice.reducer;