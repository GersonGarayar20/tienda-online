import { useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function FormSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const { data, error } = await supabase.auth.signUp({ email, password });
  };

  return (
    <form className="flex flex-col" onSubmit={handleSubmit}>
      <p className="font-bold mb-2">Correo electronico</p>
      <input
        className="border p-3 focus:outline mb-4"
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Correo electronico"
      />
      <p className="font-bold mb-2">Contraseña</p>
      <input
        className="border p-3 focus:outline mb-4"
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Contraseña"
      />
      <button className="p-3 bg-black text-white">Registrarse</button>
    </form>
  );
}
