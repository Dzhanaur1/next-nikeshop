import CatalogItem from "@/Components/CatalogItem";
import { getAllProducts } from "@/services/porudct";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

export const Catalog = ({ products }) => {
  const [catalogItems, setCatalogItems] = React.useState([]);

  const [isCheked, setIsCheked] = React.useState(false);
  const [sortCategoryId, setSortCategoryId] = React.useState("");
  //   const handleAddToCart = (item) => {
  //     const cartItem = {
  //       id: item.product_id,
  //       name: item.product_name,
  //       price: item.product_price,
  //       img: item.product_image,
  //     };

  //     dispatch(addTocart(cartItem));
  //   };
  //   const setCategory = (id) => {
  //     setIsCheked(!isCheked);
  //     if (!isCheked) {
  //       setSortCategoryId(id);
  //     } else {
  //       setSortCategoryId("");
  //     }
  //   };
  return (
    <>
      <div className="catalog__inner">
        {/* <CatalogFilter /> */}
        <div className="catalog__items">
          <div className="sort-items">
            <div className="sort-text">
              <p>Sort By</p>
              <img src="./img/svg/filter-arrow.svg" alt="" />
            </div>
            <ul className="sorts-list">
              <li className="sort">
                <button>По возрастанию</button>
              </li>
              <li className="sort">
                <button>По популярности</button>
              </li>
              <li className="sort">
                <button>По убыанию</button>
              </li>
            </ul>
          </div>
          <div className="list-items">
            {products.map((obj) => (
              <CatalogItem {...obj} key={obj.product_id} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Catalog;
export async function getServerSideProps() {
  const products = await getAllProducts();

  return {
    props: {
      products,
    },
  };
}
