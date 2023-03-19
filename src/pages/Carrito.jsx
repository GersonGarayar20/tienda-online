import { useCart } from "../context/CartContext";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";
import CardCartProduct from "../components/CardCartProduct";

export default function Carrito() {
  const { cart, verTotal, addCantidad, removeProduct } = useCart();

  const navigate = useNavigate();

  const handleClick = async () => {
    const { data, error } = await supabase.auth.getSession();

    if (!!data.session) {
      console.log("compra realizada");

      //guardar un registro de compra
    } else {
      navigate("/signup");
    }

    // supabase.auth.getUser()
  };

  if (cart.length === 0) return <h1>carrito vacio</h1>;
  return (
    <main className="max-w-7xl m-auto px-4 lg:px-8">
      <section className="lg:flex py-8">
        <article className="w-full">
          <div className="pb-8">
            <h1 className="text-2xl font-bold">carrito de compras</h1>
          </div>
          <ul className="flex flex-col gap-4">
            {cart.map(({ id, nombre, imagen, precio, cantidad }) => (
              <CardCartProduct
                key={id}
                id={id}
                nombre={nombre}
                imagen={imagen}
                precio={precio}
                cantidad={cantidad}
                removeProduct={removeProduct}
                addCantidad={addCantidad}
              />
            ))}
          </ul>
        </article>
        <article className="w-[600px] ">
          <div className="p-4 bg-neutral-100">
            <div className="flex justify-between pb-4">
              <p className="">Subtotal en el carrito</p>
              <p className="font-bold text-green-500">S/ {verTotal()}</p>
            </div>
            <p className="text-slate-500 text-sm pb-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
            <button
              className="w-full text-white text-lg font-bold py-4 bg-green-600 hover:bg-green-800 transition-all"
              onClick={handleClick}
            >
              Finalizar compra y pagar
            </button>
          </div>
        </article>
      </section>
    </main>
  );
}
