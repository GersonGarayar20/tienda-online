import ListProduct from "../components/ListProduct";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>bienvenidos a la home</h1>
      <ListProduct />
    </div>
  );
}
