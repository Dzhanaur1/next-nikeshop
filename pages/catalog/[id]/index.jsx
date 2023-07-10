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
  console.log(product);
  return {
    props: { product },
  };
}
// export async function getStaticProps(context) {
//   // console.log(context);
//   const product = await getProductById(context.params.id);
//   console.log(product);
//   return {
//     props: {
//       product,
//     },
//   };
// }

// export async function getStaticPaths() {
//   const products = await getAllProducts();
//   getAllProducts;
//   console.log(products);
//   return {
//     paths: products.map(({ id }) => ({
//       params: { id: id.toString() },
//     })),
//     fallback: false,
//   };
// }
