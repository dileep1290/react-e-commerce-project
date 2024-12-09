import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar } from "../components";
import Hero from "../components/Hero";
import SingleProductPage from "./SingleProductPage";
import Loading from "../components/Loading";

const HomeLayoutPage = () => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";
  return (
    <>
      <Header />
      <Navbar />
      {isPageLoading ? (
        <Loading />
      ) : (
        <section className="align-elements py-20">
          <Outlet />
        </section>
      )}
    </>
  );
};

export default HomeLayoutPage;
