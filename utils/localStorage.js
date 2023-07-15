import { calcTotalPrice } from "./calcTotalPrice";

export const saveCartItemsToLS = (cartItems, item) => {
  if (cartItems) {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }
};
export const getCartItemsFromLS = () => {
  const data = localStorage.getItem("cart");
  const items = data ? JSON.parse(data) : [];
  const totalPrice = calcTotalPrice(items);
  return {
    items,
    totalPrice,
  };
};
