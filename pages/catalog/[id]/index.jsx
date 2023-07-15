import React from "react";
import { useRouter } from "next/router";
import { getAllProducts, getProductById } from "@/services/porudct";
import CatalogItem from "@/Components/CatalogItem";
import Product from "@/Components/Product";
const Item = ({ product }) => {
  return (
    <>
      <div className="prouct-wrapper">
        <Product {...product} />
      </div>
      <div className="product-gallery"></div>
    </>
  );
};

export default Item;
export async function getServerSideProps({ params }) {
  const product = await getProductById(params.id);

  return {
    props: { product },
  };
}
