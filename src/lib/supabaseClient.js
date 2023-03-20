import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wfwrrxcaplcpvbzkkrfc.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const obtenerProductos = async () => {
  const { data } = await supabase.from("productos").select();
  return data;
};
export const obtenerUnProducto = async (id) => {
  const { data } = await supabase.from("productos").select().eq("id", id);
  return data[0];
};
export const nuevaOrden = () => {};

export const isLogin = async () => {
  const { data } = await supabase.auth.getSession();
  return !!data.session;
};
