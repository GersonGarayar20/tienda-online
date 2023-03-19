import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

export default function IsLogged({ children }) {
  const [logged, setLogged] = useState(false);

  useEffect(() => {
    isLogin();
  }, []);

  const isLogin = async () => {
    const { data } = await supabase.auth.getSession();
    setLogged(!!data.session);
  };

  if (logged) return <Navigate to={"/"} />;
  return children;
}
