import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import popupSlice from "./slices/popupSlice";
export const store = configureStore({
  reducer: { cartSlice, popupSlice },
});
