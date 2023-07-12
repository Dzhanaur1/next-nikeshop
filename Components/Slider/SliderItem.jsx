import Link from "next/link";
import React from "react";

const SliderItem = (slideItem) => {
  return (
    <Link href={`/catalog/${slideItem.id}`} className="product-slide">
      <div className="slide__content product">
        <div className="slide__img">
          <img src={slideItem.image} alt="" />
        </div>
        <div className="product__content">
          <div className="product__info ">
            <h4 className="product__title slide__title">{slideItem.name}</h4>
            <p className="product__subtitle slide__subtitle">Women’s Shoes</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SliderItem;
