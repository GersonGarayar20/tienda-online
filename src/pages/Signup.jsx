import React from "react";
import FormSignup from "../components/FormSignup";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <div>
      <h1>signUp</h1>
      <FormSignup />
      <Link to={"/login"}>inicia sesion</Link>
    </div>
  );
}
