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
    <div>
      <img style={{ width: "300px" }} src={producto?.imagen} alt="" />
      <h2>{producto?.nombre}</h2>
      <h2>{producto?.precio}</h2>
      <input
        type="number"
        min={1}
        value={cantidad}
        onChange={(e) => setCantidad(e.target.value)}
      />
      <button onClick={handleClick}>Add Carrito</button>
    </div>
  );
}
