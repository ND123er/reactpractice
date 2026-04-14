
import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addToCart: (s,a)=>{
      const e = s.items.find(i=>i.id===a.payload.id);
      if(e) e.qty++;
      else s.items.push({...a.payload, qty:1});
    },
    removeFromCart:(s,a)=>{
      s.items = s.items.filter(i=>i.id!==a.payload);
    }
  }
});

export const { addToCart, removeFromCart } = slice.actions;
export default slice.reducer;
