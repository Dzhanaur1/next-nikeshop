import { useDispatch, useSelector } from "react-redux";
import {
  removeFromCart,
  reduceQunatity,
  addTocart,
} from "../redux/slices/cartSlice";
import Link from "next/link";
const CartItem = ({ id, image, name, price, product_category, size }) => {
  const selectItem = useSelector((state) =>
    state.cartSlice.items.find((obj) => obj.id === id)
  );
  const itemQuantity = selectItem?.quantity;
  const dispatch = useDispatch();
  const OnClickAdd = () => {
    const item = {
      id,
      image,
      name,
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
      <Link href={`/catalog/${id}`} class="item-img">
        <img src={image} alt="" />
      </Link>
      <div class="item-info">
        <h3 class="item-title">{name}</h3>
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
          <button onClick={() => dispatch(removeFromCart(id))}>
            <img src="../img/svg/delete.svg" alt="" />
          </button>
        </div>
      </div>
      <div class="cart-item-price">
        <p>MRP: ₹ {price}</p>
      </div>
    </div>
  );
};

export default CartItem;
