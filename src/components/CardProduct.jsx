import { Link } from "react-router-dom";

export default function CardProduct({ id, nombre, imagen, precio }) {
  return (
    <Link to={`producto/${id}`}>
      <li>
        <img style={{ width: "100px" }} src={imagen} alt="" />
        <p>{nombre}</p>
        <p>S/ {precio}</p>
      </li>
    </Link>
  );
}
