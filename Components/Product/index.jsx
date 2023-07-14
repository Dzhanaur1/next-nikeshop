import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts, getProductById } from "@/services/porudct";
import { addTocart, reduceQunatity } from "@/redux/slices/cartSlice";
import { useMediaQuery } from "react-responsive";
import ProductSlider from "./productSlider";
const Product = ({ name, discription, price, id, sizes, images }) => {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [productSize, setProductSize] = React.useState("");
  const prodcut = useSelector((state) =>
    state.cartSlice.items.find((obj) => obj.id === id)
  );
  const isModible = useMediaQuery({ maxWidth: 578 });
  const productImages = [];
  const [productAdded, setProductAdded] = React.useState(false);
  const productQuantity = prodcut ? prodcut.quantity : 0;
  useEffect(() => {
    productQuantity > 0 ? setProductAdded(true) : setProductAdded(false);
    setIsLoaded(true);
  }, [productQuantity]);

  // console.log(images);
  const OnClickAdd = () => {
    if (productSize) {
      const item = {
        id,
        name,
        price,
        category: categories[1],
        image: images[0],
        size: productSize,
      };
      dispatch(addTocart(item));
      console.log("Click");
      console.log(prodcut);
      setProductAdded(true);
    } else {
      alert("Выберите размер");
    }
  };
  const selectSize = (selectedSize) => {
    setProductSize(selectedSize);
  };
  const categories = ["Men's shoes", "Women's shoes"];
  // const sizes = [
  //   "UK 6 (EU 40)",
  //   "UK 6.5",
  //   "UK 7",
  //   "UK 7.5",
  //   "UK 8",
  //   "UK 8.5",
  //   "UK 9",
  //   "UK 9.5",
  //   "UK 10",
  //   "UK 10.5",
  //   "UK 11",
  //   "UK 11.5",
  // ];
  return (
    <React.Fragment>
      {isModible ? (
        <ProductSlider images={images} />
      ) : (
        <div className="product-images">
          {images.map((image) => (
            <img key={image} src={image} alt="" className="product-image" />
          ))}
        </div>
      )}

      <div className="prouct-info">
        <h1 className="prouct-title">{name}</h1>
        <p className="product-type">{categories[1]}</p>
        <p className="product-price">MRP : ₹ {price}</p>

        <div className="block-sizes">
          <div className="sizes-header">
            <h4>Select Size</h4>
            <p>Size Guide</p>
          </div>
          <ul className="sizes-list">
            {sizes.map((size, i) => (
              <li
                key={i}
                onClick={() => selectSize(size)}
                className={productSize === size ? "size active" : "size"}
              >
                {size}
              </li>
            ))}
          </ul>

          <React.Fragment>
            <button
              onClick={OnClickAdd}
              className={
                productAdded
                  ? "button btn--black collapsed long--btn"
                  : "button btn--black long--btn"
              }
            >
              Add to Bag
            </button>
            <div
              className={
                productAdded ? "quantity-btns " : "quantity-btns collapsed"
              }
            >
              <button
                onClick={() => dispatch(reduceQunatity(id))}
                className="button btn--black "
              >
                -
              </button>
              <p className="quantity">{productQuantity}</p>
              <button onClick={OnClickAdd} className="button btn--black ">
                +
              </button>
            </div>
            <button className="button btn--light long--btn border">
              Favourite
            </button>
          </React.Fragment>

          <p className="discr">
            Layer on style with the Air Max 97. The cracked leather and soft
            suede update the iconic design while the original look (inspired by
            Japanese bullet trains and water droplets) still takes centre stage.
            Easy-to-style colours let you hit the streets quickly.
          </p>
          <div className="details">
            <p>
              Colour Shown: Flat Pewter/
              <br />
              Light Bone/Black/White
            </p>
            <p>Style: DV7421-001</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Product;
