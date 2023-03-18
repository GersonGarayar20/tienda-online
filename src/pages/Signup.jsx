import React from "react";
import FormSignup from "../components/FormSignup";
import { Link } from "react-router-dom";

//redirigir al home si esta registrado
import { redirectHome } from "../hooks/useAuth";

export default function Signup() {
  redirectHome();

  return (
    <div>
      <h1>signUp</h1>
      <FormSignup />
      <Link to={"/login"}>inicia sesion</Link>
    </div>
  );
}
