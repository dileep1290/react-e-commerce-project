import React from "react";
import { FormInput, SubmitBtn } from "../components";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <section className="h-screen grid place-items-center">
      <form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center text-bold text-3xl">Login</h4>
        <FormInput
          type="email"
          lable="email"
          name="identifier"
          defaultValue="test@test.com"
        />
        <FormInput
          type="password"
          lable="password"
          name="password"
          defaultValue="secret"
        />
        <div className="mt-5">
          <SubmitBtn text="login" />
        </div>
        <button className="btn btn-secondary btn-block" type="submit">
          Guest User
        </button>
        <p className="text-center">
          Not a Member yet ?
          <Link
            to="/register"
            className="ml-2 link link-hover link-primary capitalize"
          >
            register
          </Link>
        </p>
      </form>
    </section>
  );
};

export default LoginPage;
