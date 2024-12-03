import React from "react";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error1 = useRouteError();
  console.log(error1.status);
  if (error1.status === 404) {
    return (
      <main className="grid min-h-[100vh] place-item-center px-20 mt-20">
        <div className="text-center">
          <p className="text-9xl font-semibold text-primary">404</p>
          <h1 className="mt-4 text-3xl font-boldtracking-tighter sm:text-5xl">
            page not found
          </h1>
          <p className="mt-6 text-lg leading-7">
            Sorry we couldn't find the page your looking for
          </p>
          <div className="mt-10">
            <Link to="/">Go Back Home</Link>
          </div>
        </div>
      </main>
    );
  }
  console.log(error1);
  return (
    <main className="grid min-h-[100vh] place-items-center px-8">
      <h4 className="text-center font-bold">there was an error..</h4>
    </main>
  );
};

export default ErrorPage;
