import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  reduceQunatity,
  addTocart,
} from "../redux/slices/cartSlice";
const CartItem = ({
  product_id,
  product_image,
  product_name,
  product_price,
  product_category,
  size,
}) => {
  const selectItem = useSelector((state) =>
    state.cartSlice.items.find((obj) => obj.product_id === product_id)
  );
  const itemQuantity = selectItem.quantity;
  const dispatch = useDispatch();
  const OnClickAdd = () => {
    const item = {
      product_id,
      product_image,
      product_name,
      product_price,
      product_category,
      quantity: 1,
    };
    dispatch(addTocart(item));
  };
  const minus = (id) => {
    dispatch(reduceQunatity(id));
  };
  const categories = ["Men's shoes", "Women's shoes"];
  return (
    <div class="cart-item">
      <div class="item-img">
        <img src={product_image} alt="" />
      </div>
      <div class="item-info">
        <h3 class="item-title">{product_name}</h3>
        <p class="item-type">{categories[product_category - 1]}</p>
        <div class="item-params">
          <p class="item-size">
            Size: <span>{size}</span>
          </p>
          <p class="item-size">
            Quantity: <span>{itemQuantity}</span>
          </p>
        </div>
        <div class="item-btns">
          <button>
            <img src="../img/svg/favoritesIcon.svg" alt="" />
          </button>
          <button onClick={() => dispatch(removeFromCart(product_id))}>
            <img src="../img/svg/delete.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="cart-item-price">
        <p>MRP: ₹ {product_price * itemQuantity}</p>
      </div>
    </div>
    // <div className="">
    //   <h2>{product_name}</h2>
    //   <img src={product_image} alt="" width={200} height={200} />
    //   <h4>{product_price}</h4>
    //   <button onClick={() => dispatch(removeFromCart(product_id))}>
    //     Удалить
    //   </button>
    //   <div className="">
    //     <button onClick={() => minus(product_id)}>-</button>
    //     <span>{itemQuantity}</span>
    //     <button onClick={() => OnClickAdd()}>+</button>
    //   </div>
    // </div>
  );
};

export default CartItem;
