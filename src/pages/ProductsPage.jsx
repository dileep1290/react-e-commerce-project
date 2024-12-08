import React from "react";
import { customFetch } from "../util";
import ProductsList from "../components/ProductsList";

const url = "/products";
export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  const meta = response.data.meta;
  return { products, meta };
};

// loder();
const ProductsPage = () => {
  return <ProductsList />;
};

export default ProductsPage;
