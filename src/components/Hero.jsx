import React from "react";
import hero1 from "../assets/hero1.webp";
import hero2 from "../assets/hero2.webp";
import hero3 from "../assets/hero3.webp";
import hero4 from "../assets/hero4.webp";
import { Link } from "react-router-dom";

const coroselImages = [hero1, hero2, hero3, hero4];

const Hero = () => {
  return (
    <div className="grid grid cols-1 lg:grid-cols-2 gap-24 items-center">
      <div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
          This is a store where you can shop anything
        </h1>
        <p className="mt-8 max-w-xl text-lg leading-8">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sed eveniet
          nihil ipsa distinctio in sapiente possimus, aperiam delectus? Tempora
          optio itaque numquam sequi veritatis, rerum iusto animi ad similique
          sit?
        </p>
        <div className="mt-10">
          <Link className="btn btn-primary" to="/products">
            Our Products
          </Link>
        </div>
      </div>
      <div className="lg:carousel carousel-center hidden h-[28rem] p-4 space-x-4 bg-neutral rounded-box">
        {coroselImages.map((image, index) => {
          // console.log(index);
          return (
            <div key={index} className="carousel-item">
              <img
                src={image}
                alt="carousel-Item"
                className="rounded-box h-full w-80 object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Hero;
