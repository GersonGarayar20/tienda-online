import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://wfwrrxcaplcpvbzkkrfc.supabase.co";
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(
  supabaseUrl,
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indmd3JyeGNhcGxjcHZiemtrcmZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzkwODIxODQsImV4cCI6MTk5NDY1ODE4NH0.sXfzTm7MIgBVpZbgwSYLWARIFji7rgobZ05CXvDkcXw"
);

export const obtenerProductos = async () => {
  const { data } = await supabase.from("productos").select();
  return data;
};
export const obtenerUnProducto = async (id) => {
  const { data } = await supabase.from("productos").select().eq("id", id);
  return data[0];
};
export const nuevaOrden = () => {};
