import { createBrowserRouter } from "react-router-dom";

//pages components
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Carrito from "./pages/Carrito";
import DetailProduc from "./pages/DetailProduct";

import ErrorPage from "./pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "producto/:id",
        element: <DetailProduc />,
      },
      {
        path: "carrito",
        element: <Carrito />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
    loader: () => false,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);
