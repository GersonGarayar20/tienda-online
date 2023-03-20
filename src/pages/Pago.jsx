import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { isLogin } from "../lib/supabaseClient";

export default function Pago() {
  const navigate = useNavigate();
  useEffect(() => {
    isLogin().then((res) => {
      if (!res) navigate("/login");
    });
  }, []);

  return (
    <div>
      <section>
        <div>
          <h1>Pagar</h1>
        </div>
        <form></form>
        <div>
          <button>Pagar</button>
        </div>
      </section>
      <aside>
        <div>
          <h2>Resumen del pedido</h2>
          <button>Modificar Pedido</button>
        </div>
        <ul>
          <li>producto 1</li>
          <li>producto 2</li>
          <li>producto 3</li>
        </ul>
        <div>
          <p>Subtotal</p>
          <p>S/ 123</p>
        </div>
        <div>
          <p>Total</p>
          <p>S/ 123</p>
        </div>
      </aside>
    </div>
  );
}
