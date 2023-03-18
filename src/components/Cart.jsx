import React from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart } = useCart();

  return (
    <Link to={"/carrito"}>
      <div>
        <p>carrito de compras</p>
        <p>cantidad: {cart.length} </p>
      </div>
    </Link>
  );
}
