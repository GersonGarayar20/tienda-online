import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { obtenerUnProducto } from "../lib/supabaseClient";

//context
import { useCart } from "../context/CartContext";

export default function DetailProduct() {
  const [producto, setProducto] = useState();
  const [loading, setLoading] = useState(true);
  const [cantidad, setCantidad] = useState(1);

  const { id } = useParams();

  //context
  const { addProduct } = useCart();

  useEffect(() => {
    obtenerUnProducto(id).then((data) => {
      setProducto(data);
      setLoading(false);
    });
  }, []);

  const handleClick = () => {
    addProduct(producto, cantidad);
  };

  if (loading) return <h2>cargardo</h2>;

  return (
    <main className="max-w-7xl m-auto px-4 lg:px-8">
      <section className="lg:flex gap-8 py-8">
        <article className="w-[700px]">
          <div>
            <img className="" src={producto?.imagen} alt="" />
          </div>
        </article>
        <article className="">
          <div className="pb-4">
            <h2 className="text-2xl font-bold mb-1">{producto?.nombre}</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          </div>

          <div className="bg-neutral-100 border">
            <div className="p-4">
              <p className="text-sm font-bold text-slate-800 mb-1">
                Descripcion:
              </p>
              <p className="text-sm text-slate-800">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure
                ipsam minima quasi nihil illo exercitationem eos delectus magnam
                saepe magni placeat, aliquam harum repudiandae, deleniti quas!
                Ipsa eos libero commodi.
              </p>
            </div>
            <div className="p-4">
              <p className="text-sm text-slate-800 font-bold mb-2">Cantidad:</p>
              <input
                className="border p-3 w-20 focus:outline outline-sky-400 rounded"
                type="number"
                min={1}
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
              />
            </div>
          </div>

          <button
            className="w-full text-white text-lg font-bold py-4 bg-green-600 hover:bg-green-800 transition-all"
            onClick={handleClick}
          >
            Añadir a la cesta
          </button>
        </article>
      </section>
    </main>
  );
}
