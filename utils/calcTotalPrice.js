export const calcTotalPrice = (items) => {
  return items.reduce((sum, obj) => obj.product_price * obj.quantity + sum, 0);
};
