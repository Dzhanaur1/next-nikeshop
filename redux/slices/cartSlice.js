import { createSlice } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
const initialState = {
  items: [],
  quantity: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart(state, action) {
      const foundItem = state.items.find(
        (obj) => obj.product_id === action.payload.product_id
      );
      if (foundItem) {
        foundItem.quantity++;
        // console.log(foundItem.quantity);
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    reduceQunatity(state, action) {
      const foundItem = state.items.find(
        (obj) => obj.product_id === action.payload
      );
      if (foundItem.quantity > 1) {
        foundItem.quantity--;
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter(
        (obj) => obj.product_id !== action.payload
      );
      state.totalPrice = calcTotalPrice(state.items);
    },
    clearAllCart(state, action) {
      state.items = [];
      state.totalPrice = calcTotalPrice(state.items);
    },
  },
});
export const { addTocart, removeFromCart, clearAllCart, reduceQunatity } =
  cartSlice.actions;
export default cartSlice.reducer;
