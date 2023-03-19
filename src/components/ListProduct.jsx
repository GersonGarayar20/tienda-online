import { useEffect, useState } from "react";
import { obtenerProductos } from "../lib/supabaseClient";
import CardProduct from "../components/CardProduct";

export default function ListProduct() {
  const [productos, setProductos] = useState();

  useEffect(() => {
    obtenerProductos().then((data) => setProductos(data));
  }, []);

  return (
    <ul className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 py-8">
      {productos?.map(({ id, nombre, imagen, precio }) => (
        <CardProduct
          key={id}
          id={id}
          nombre={nombre}
          imagen={imagen}
          precio={precio}
        />
      ))}
    </ul>
  );
}
