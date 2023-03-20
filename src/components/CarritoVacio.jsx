import React from "react";

export default function CarritoVacio() {
  return (
    <div className="flex flex-col justify-center items-center">
      <img className="w-96" src="carrito-vacio.jpg" alt="" />
      <h1 className="text-slate-900 text-3xl font-bold">
        Tu carrito esta vacio
      </h1>
    </div>
  );
}
