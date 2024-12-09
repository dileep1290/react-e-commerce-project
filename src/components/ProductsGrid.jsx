import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { formatPrice } from "../util";

const ProductsGrid = () => {
  const { products } = useLoaderData();
  return (
    <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { image, title, price } = product.attributes;
        console.log("id = ", product.id);
        const IndianPrice = formatPrice(price);
        return (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="card w-full shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-cover"
              />
            </figure>
            <div className="card-body item-center text-center">
              <h2 className="cart-title capitalize tracking-wider">{title}</h2>
              <span className="text-secondary">{IndianPrice}</span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
