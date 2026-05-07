import { createSlice } from "@reduxjs/toolkit";

const reactionSlice = createSlice({
  name: "reaction",
  initialState: {
    likes: 0,
    dislikes: 0,
  },
  reducers: {
    addLike: (state) => {
      state.likes += 1;
    },
    addDislike: (state) => {
      state.dislikes += 1;
    },
  },
});

export const { addLike, addDislike } = reactionSlice.actions;
export default reactionSlice.reducer;