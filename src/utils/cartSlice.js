import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    item: [],
  },
  reducers: {
    addToCart: (state, action) => {
      state.item.push(action.payload);
    },
    removeCart: (state) => {
      state.item.pop();
    },
    clearCart: (state) => {
      state.item.length = 0;
    },
  },
});
export const { addToCart, removeCart, clearCart } = cartSlice.actions;
export default createSlice.reducer;
