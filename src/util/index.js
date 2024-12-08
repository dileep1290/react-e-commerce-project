import axios from "axios";

const productionUrl = "https://strapi-store-server.onrender.com/api";

export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (amount) => {
  const IndianAmount = new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format((amount / 100).toFixed(2));
};

// export const formatPrice = (amount) => {
//   const options = { style: "currency", currency: "INR" };
//   const numberFormat2 = new Intl.NumberFormat("en-IN", options);
//   return numberFormat2.format((amount / 100).toFixed(2));
// };
