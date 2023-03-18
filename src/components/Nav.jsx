import React from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import BtnLogin from "./BtnLogin";

export default function Nav() {
  return (
    <nav>
      <ul>
        <Link to={"/"}>home</Link>
        <Cart />
        <BtnLogin />
      </ul>
    </nav>
  );
}
