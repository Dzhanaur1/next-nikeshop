import Link from "next/link";
const CatalogItem = ({ name, discription, price, id, sizes, image }) => {
  return (
    <Link href={`/catalog/${id}`} className="catalog__item">
      <img src={image} alt="" className="item__img" />
      <p className="item-collection">Just In</p>
      <h3 className="item-title">{name}</h3>
      <p className="item-type">Men's Shoes</p>
      <p className="item-price">MRP : ₹ {price}</p>
    </Link>
  );
};

export default CatalogItem;
