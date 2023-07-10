import Link from "next/link";
const CatalogItem = ({ name, discription, price, id, sizes, image }) => {
  // const dispatch = useDispatch();
  // const addedItem = useSelector((state) =>
  //   state.cartSlice.items.find((obj) => obj.id === id)
  // );
  // const cartItems = useSelector((state) => state.cartSlice.items);
  // const itemQuantity = addedItem ? addedItem.quantity : 0;
  // const OnClickAdd = () => {
  //   const item = {
  //     id,
  //     image,
  //     name,
  //     product_price,
  //     product_category,
  //     quantity: 1,
  //   };
  //   dispatch(addTocart(item));
  // };
  // const minus = (id) => {
  //   dispatch(reduceQunatity(id));
  //   console.log(cartItems);
  // };

  return (
    <Link href={`/catalog/${id}`} className="catalog__item">
      <img src={image} alt="" className="item__img" />
      <p className="item-collection">Just In</p>
      <h3 className="item-title">{name}</h3>
      <p className="item-type">Men's Shoes</p>
      <p className="item-price">MRP : ₹ {price}</p>
    </Link>

    // <div className="">
    //   <h2>{name}</h2>
    //   <img src={image} alt="" width={200} height={200} />
    //   <h4>{product_price}</h4>
    //   <button onClick={() => OnClickAdd()}>Добавить</button>
    //   <div className="">
    //     <button onClick={() => minus(id)}>-</button>
    //     <span>{itemQuantity}</span>
    //     <button onClick={() => OnClickAdd()}>+</button>
    //   </div>
    // </div>
  );
};

export default CatalogItem;
