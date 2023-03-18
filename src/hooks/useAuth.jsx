import { useEffect } from "react";
import { supabase } from "../lib/supabaseClient";
import { useNavigate } from "react-router-dom";

export const redirectHome = () => {
  const navigate = useNavigate();
  useEffect(() => {
    isLogin().then((res) => {
      res && navigate("/");
    });
  }, []);
};

export const isLogin = async () => {
  const { data } = await supabase.auth.getSession();
  return !!data.session;
};
