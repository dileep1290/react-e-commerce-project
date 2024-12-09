import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  About,
  Cart,
  CheckOut,
  Error,
  Home,
  Landing,
  Login,
  Order,
  Products,
  Register,
  SingleProduct,
} from "./pages";
import ErrorElement from "./components/ErrorElement";
import { loder } from "./pages/LandingPage";
import ProductsPage, { loader as productsLoder } from "./pages/ProductsPage";
import { loader as SingleProductLoader } from "./pages/SingleProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: loder,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: productsLoder,
      },
      {
        path: "product/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: SingleProductLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path: "order",
        element: <Order />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
