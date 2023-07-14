import CatalogItem from "@/Components/CatalogItem";
import { getAllProducts } from "@/services/porudct";
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";

export const Catalog = ({ products }) => {
  const productItmes = products || [];
  const [sortIsVisibly, setSortIsVisibly] = useState(false);

  return (
    <>
      <div className="catalog__inner">
        {/* <CatalogFilter /> */}
        <div className="catalog__items">
          <div
            onClick={() => setSortIsVisibly(!sortIsVisibly)}
            className="sort-wrapper"
          >
            <div className="sort-text">
              <p>Sort By</p>
              <img
                src="./img/svg/filter-arrow.svg"
                className={
                  sortIsVisibly ? "filter-arrow active" : "filter-arrow"
                }
                alt=""
              />
            </div>
            <ul
              className={sortIsVisibly ? "sorts-list visible" : "sorts-list "}
            >
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
            {productItmes.map((obj) => (
              <CatalogItem {...obj} key={obj.id} />
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
  // console.log(products);
  return {
    props: {
      products,
    },
  };
}
