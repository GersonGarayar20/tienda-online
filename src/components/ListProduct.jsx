import { useEffect, useState } from "react";
import { obtenerProductos } from "../lib/supabaseClient";
import CardProduct from "../components/CardProduct";

export default function ListProduct() {
  const [productos, setProductos] = useState();

  useEffect(() => {
    obtenerProductos().then((data) => setProductos(data));
  }, []);

  return (
    <ul>
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
