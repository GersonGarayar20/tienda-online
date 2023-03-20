import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { isLogin } from "../lib/supabaseClient";

export default function RedirectHome({ children }) {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    isLogin().then((res) => setLogged(res));
  }, []);

  if (logged) return <Navigate to={"/"} />;
  return children;
}
