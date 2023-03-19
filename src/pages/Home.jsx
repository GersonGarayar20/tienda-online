import ListProduct from "../components/ListProduct";
import { Outlet } from "react-router-dom";

export default function Home() {
  return (
    <main className="max-w-7xl m-auto px-4 lg:px-8">
      <h1 className="py-4">bienvenidos a la home</h1>
      <ListProduct />
    </main>
  );
}
