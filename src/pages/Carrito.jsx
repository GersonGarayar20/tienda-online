import { useCart } from "../context/CartContext";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

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
    <div>
      <h1>carrito de compras</h1>

      <p>lista de compras</p>

      <ul>
        {cart.map(({ id, nombre, imagen, precio, cantidad }) => (
          <li key={id}>
            <img style={{ width: "100px" }} src={imagen} alt="" />
            <p>{nombre} </p>
            <p>S/ {precio} </p>
            <p>cantidad: {cantidad} </p>
            <button onClick={() => removeProduct(id)}>eliminar</button>
            <button onClick={() => addCantidad(id, 1)}>add</button>
            <button onClick={() => addCantidad(id, -1)}>quitar</button>
          </li>
        ))}
      </ul>
      <h3>total a pagar:{verTotal()}</h3>
      <button onClick={handleClick}>Pagar</button>
    </div>
  );
}
