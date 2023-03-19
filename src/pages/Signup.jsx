import React from "react";
import FormSignup from "../components/FormSignup";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <div className="py-8">
        <h1 className="text-center text-2xl font-bold">SignUp</h1>
      </div>
      <section className="p-4 max-w-xl m-auto">
        <FormSignup />
      </section>

      <p className="text-center">
        Ya tienes una cuenta?
        <Link to={"/login"}>
          <span className="ml-2 text-sky-500 hover:underline">
            inicia sesion
          </span>
        </Link>
      </p>
    </div>
  );
}
