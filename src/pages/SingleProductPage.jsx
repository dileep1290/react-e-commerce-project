import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { customFetch, formatPrice } from "../util";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  // console.log("response from single product list loader", response);
  // const response1 = response.data.data;
  return { product: response.data.data };
};

const SingleProductPage = () => {
  const { product } = useLoaderData();
  // const p = products.attributes;
  // console.log("response from single product response in component", products);
  const { image, title, price, description, colors, company } =
    product.attributes;
  const IndianPrice = formatPrice(price);

  const [productColor, setProductColor] = useState(colors[0]);
  const [quantity, setQuantity] = useState(1);
  const handleQuantity = (event) => {
    setQuantity(parseInt(event.target.value));
  };
  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </div>
      {/* Product */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* image */}
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full"
        />
        {/* product info */}
        <div>
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl text-neutral-content font-bold mt-2">
            {company}
          </h4>
          <p className="mt-3 text-xl">{IndianPrice}</p>
          <p className="mt-6 leading-8">{description}</p>
        </div>
        {/* colors */}
        <div className="mt-2">
          <h4 className="text-md font-medium tracking-wider capitalize ">
            Colors
          </h4>
          <div>
            {colors.map((color) => {
              return (
                <button
                  key={color}
                  type="button"
                  className={`badge w-6 h-6 ${
                    color === productColor && "border-2 border-secondary"
                  }`}
                  style={{ backgroundColor: color }}
                  onClick={() => setProductColor(color) }
                ></button>
              );
            })}
          </div>
        </div>
        {/* amount */}
        <div className="w-full max-w-xs">
          <label className="label">
            <h4 className="text-md font-medium tracking-wider capitalizee">
              Amount
            </h4>
          </label>
          <select
            className="select select-secondary select-bordered select-md"
            value={quantity}
            onChange={handleQuantity}
          >
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        {/* cart button */}
        <div className="mt-10">
          <button
            className="btn btn-secondary btn-md"
            onClick={() => {
              "add to bag";
            }}
          >
            Add to Bag
          </button>
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
