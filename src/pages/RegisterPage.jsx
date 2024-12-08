import React from "react";
import FormInput from "../components/FormInput";
import SubmitBtn from "../components/SubmitBtn";
import { Form, Link } from "react-router-dom";
const RegisterPage = () => {
  return (
    <section className="h-screen grid place-items-center">
      <Form
        method="post"
        className="card w-96 p-8 bg-base-100 shadow-lg flex flex-col gap-y-4"
      >
        <h4 className="text-center font-bold">Register</h4>
        <FormInput lable="User Name" name="User Name" type="text" />
        <FormInput lable="Email" type="email" name="Email" />
        <FormInput lable="Password" name="Password" type="password" />
        <div>
          <SubmitBtn text="register" />
          <p>
            Already A Member
            <Link
              to="/login"
              className="ml-2 link link-hover link-primary capitalize"
            >
              Login
            </Link>
          </p>
        </div>
      </Form>
    </section>
  );
};

export default RegisterPage;
