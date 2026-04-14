
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// API: fakestoreapi.com
export const fetchProducts = createAsyncThunk(
  "products/fetch",
  async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    return res.json();
  }
);

const slice = createSlice({
  name: "products",
  initialState: { items: [], loading: false },
  extraReducers: builder => {
    builder
      .addCase(fetchProducts.pending, s => { s.loading = true })
      .addCase(fetchProducts.fulfilled, (s,a)=> {
        s.loading=false;
        s.items=a.payload;
      });
  }
});

export default slice.reducer;
