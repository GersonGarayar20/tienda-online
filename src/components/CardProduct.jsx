import { Link } from "react-router-dom";

export default function CardProduct({ id, nombre, imagen, precio }) {
  return (
    <Link to={`producto/${id}`}>
      <li>
        <img className="aspect-square" src={imagen} alt="" />
        <div className="py-8">
          <p className="font-semibold text-center text-slate-900 mb-2">
            {nombre}
          </p>
          <p className="text-slate-500 text-sm text-center">S/ {precio}</p>
        </div>
      </li>
    </Link>
  );
}
