import CartItem from "@/Components/CartItem";
import { clearAllCart, removeFromCart } from "@/redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
export default function Cart() {
  const cartItems = useSelector((state) => state.cartSlice.items);
  let totalPrice = useSelector((state) => state.cartSlice.totalPrice).toFixed(
    2
  );
  console.log(cartItems);
  const dispatch = useDispatch();
  const clearCart = () => {
    dispatch(clearAllCart());
  };

  return (
    <>
      <div className="min-container">
        {cartItems.length > 0 ? (
          <div className="cart__content">
            <div className="cart-items">
              {cartItems.map((obj, key) => (
                <CartItem {...obj} key={key} />
              ))}
            </div>
            <div className="order-info">
              <h2 className="order-title">Summary</h2>
              <ul className="order-params">
                <li className="order-param">
                  <p>Subtotal</p>
                  <p className="price">₹ {totalPrice}</p>
                </li>
                <li className="order-param">
                  <p>Estimated Delivery & Handling</p>
                  <p>Free</p>
                </li>
              </ul>
              <div className="total-ptice">
                <p>Total</p>
                <p className="price">₹ {totalPrice}</p>
              </div>
              <a href="./order.html" className="btn--black long--btn button">
                Member Checkout
              </a>
            </div>
          </div>
        ) : (
          <div className="cart__content">
            <h1>Cart is empty</h1>
          </div>
        )}
      </div>
    </>
  );
}
