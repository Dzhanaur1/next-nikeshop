import { createSlice } from "@reduxjs/toolkit";
import { calcTotalPrice } from "../../utils/calcTotalPrice";
import { getCartItemsFromLS } from "@/utils/localStorage";
const data =
  typeof window !== "undefined" && localStorage.getItem("cart")
    ? getCartItemsFromLS()
    : {
        items: [],

        totalPrice: 0,
      };
const initialState = data;
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addTocart(state, action) {
      const foundItem = state.items.find((obj) => obj.id === action.payload.id);
      if (foundItem) {
        foundItem.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(state));
      state.totalPrice = calcTotalPrice(state.items);
    },
    reduceQunatity(state, action) {
      const foundItem = state.items.find((obj) => obj.id === action.payload);
      if (foundItem.quantity > 1) {
        foundItem.quantity--;
      }
      state.totalPrice = calcTotalPrice(state.items);
    },
    removeFromCart(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload);
      state.totalPrice = calcTotalPrice(state.items);
      localStorage.removeItem("cart", JSON.stringify(state));
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
