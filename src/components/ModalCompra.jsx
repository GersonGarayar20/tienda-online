import React from "react";
import { Link } from "react-router-dom";

export default function ModalCompra({ producto, cantidad, setModal }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black/20">
      <section className="relative lg:w-[600px] w-full lg:h-96 h-full bg-neutral-100 shadow-lg rounded">
        <button
          className="absolute top-2 right-2 w-10 h-10 flex justify-center items-center"
          onClick={() => setModal(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
          </svg>
        </button>
        <article className="px-8 py-16">
          <div className="flex justify-between py-3">
            <h4 className="text-slate-900 font-bold text-xl">
              {cantidad} articulo añadido al
              <Link to={"/carrito"}>
                <span className="text-rose-500 hover:text-rose-700 ml-2">
                  carrito
                </span>
              </Link>
            </h4>
            <Link to={"/carrito"}>
              <button className="text-sm text-sky-500 hover:text-sky-700">
                ir al carrito
              </button>
            </Link>
          </div>
          <ul>
            <CardProduct
              nombre={producto?.nombre}
              imagen={producto?.imagen}
              precio={producto?.precio}
              cantidad={cantidad}
            />
          </ul>
          <div className="flex flex-col lg:flex-row justify-between items-center gap-3 py-8">
            <Link to={"/pago"}>
              <button className="py-3 px-6 bg-green-600 text-white hover:bg-green-800">
                Finalizar y pagar pedido
              </button>
            </Link>
            <button
              onClick={() => setModal(false)}
              className="flex items-center group"
            >
              <span className="text-sm text-sky-500 group-hover:text-sky-700">
                Seguir comprando
              </span>
              <svg
                className=" fill-sky-400 group-hover:fill-sky-600"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z"></path>
              </svg>
            </button>
          </div>
        </article>
      </section>
    </div>
  );
}

const CardProduct = ({ nombre, imagen, precio, cantidad }) => {
  return (
    <li className="bg-white flex items-center gap-4 p-4">
      <img className="w-20" src={imagen} alt="" />
      <div className="flex-1 flex justify-between">
        <p className="font-bold">{nombre}</p>
        <div className="w-32">
          <p className="text-rose-500 font-bold text-end">S/ {precio}</p>
          <p className="text-neutral-500 text-end">Cant. {cantidad}</p>
        </div>
      </div>
    </li>
  );
};
