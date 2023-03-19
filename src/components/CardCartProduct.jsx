export default function CardCartProduct({
  id,
  nombre,
  imagen,
  precio,
  cantidad,
  removeProduct,
  addCantidad,
}) {
  return (
    <li className="flex items-center gap-4 w-full">
      <div className="w-24">
        <img style={{ width: "100px" }} src={imagen} alt="" />
      </div>
      <div className="flex-1">
        <h4 className="font-bold">{nombre}</h4>
        <p>S/ {precio}</p>
      </div>

      <div>
        <div className="flex pr-4">
          <button className=" p-2" onClick={() => addCantidad(id, -1)}>
            -
          </button>
          <p className=" p-2">{cantidad}x</p>
          <button className=" p-2" onClick={() => addCantidad(id, 1)}>
            +
          </button>
        </div>
        <button className=" w-full p-2" onClick={() => removeProduct(id)}>
          Eliminar
        </button>
      </div>
    </li>
  );
}
