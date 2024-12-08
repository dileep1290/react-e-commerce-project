import React from "react";
import Hero from "../components/Hero";
import { customFetch } from "../util";
import ProductsGrid from "../components/ProductsGrid";
import FeaturedProducts from "../components/FeaturedProducts";

const url = "/products?featured=true";

export const loder = async () => {
  let response = await customFetch(url);
  // console.log(response.data.data);
  const products = response.data.data;
  return { products };
};

const LangingPage = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default LangingPage;
