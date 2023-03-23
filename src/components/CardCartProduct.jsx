import { useState, useEffect } from "react";
import { useCart } from "../context/CartContext";

export default function CardCartProduct({
  id,
  nombre,
  imagen,
  precio,
  cantidad,
}) {
  const [edit, setEdit] = useState(false);
  const [amount, setAmount] = useState();

  const { removeProduct, setCantidad } = useCart();

  useEffect(() => {
    setAmount(cantidad);
  }, []);

  const handleClick = () => {
    setEdit(!edit);
    if (edit) {
      setCantidad(id, amount);
    }
  };

  return (
    <li className="py-4">
      <div className="flex items-center gap-4 w-full">
        <div className="w-20">
          <img style={{ width: "100px" }} src={imagen} alt="" />
        </div>
        <div className="flex-1">
          <h4 className="font-bold lg:text-base text-sm">{nombre}</h4>
        </div>

        <div className=" flex flex-col justify-end">
          <div className="flex justify-end gap-2 p-2">
            <p className=" text-neutral-400  ">{cantidad}x</p>
            <p className="  font-bold ">S/ {precio}</p>
          </div>
          <button className="border p-2" onClick={handleClick}>
            {edit ? "Guardar" : "Editar"}
          </button>
        </div>
      </div>
      {edit ? (
        <div className="bg-neutral-100 flex justify-between p-2 mt-4">
          <button className=" px-2" onClick={() => removeProduct(id)}>
            Eliminar
          </button>
          <div className="flex items-center gap-4">
            <p className="text-sm text-slate-800 font-bold">Cantidad:</p>
            <input
              className="border p-3 w-20 focus:outline outline-sky-400 rounded"
              type="number"
              min={1}
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
        </div>
      ) : null}
    </li>
  );
}
