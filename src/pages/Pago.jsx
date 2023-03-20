import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { isLogin } from "../lib/supabaseClient";
import { useCart } from "../context/CartContext";

export default function Pago() {
  const { cart, verTotal } = useCart();

  //const navigate = useNavigate();
  useEffect(() => {
    isLogin().then((res) => {
      //if (!res) navigate("/login");
    });
  }, []);

  return (
    <main className="max-w-7xl m-auto px-4 lg:px-8">
      <div className="flex flex-col lg:flex-row py-16">
        <section className="flex-1">
          <div>
            <h1>Pagar</h1>
          </div>
          <form></form>
          <div>
            <button>Pagar</button>
          </div>
        </section>
        <aside className="lg:w-[400px]">
          <div className="border-b flex justify-between py-4">
            <h2 className="text-slate-900 text-xl font-bold">
              Resumen del pedido
            </h2>
            <Link to={"/carrito"}>
              <button className="text-rose-500 font-bold text-sm">
                Modificar Pedido
              </button>
            </Link>
          </div>
          <ul>
            {cart.map(({ nombre, imagen, precio, cantidad }) => (
              <li className="bg-white flex items-center gap-4 py-4">
                <img className="w-16" src={imagen} alt="" />
                <p className="font-bold flex-1 text-sm">{nombre}</p>
                <p className="text-neutral-500 text-sm mr-2">{cantidad}x</p>
                <p className="font-bold text-sm">S/ {precio}</p>
              </li>
            ))}
          </ul>
          <div className="border-b flex justify-between py-4">
            <p className="font-bold">Subtotal</p>
            <p>S/ {verTotal()}</p>
          </div>
          <div className="flex justify-between py-4">
            <p className="font-bold text-lg">Total del pedido</p>
            <p className="text-green-500 text-lg font-bold">S/ {verTotal()}</p>
          </div>
        </aside>
      </div>
    </main>
  );
}
