import FormLogin from "../components/FormLogin";
import { Link } from "react-router-dom";

//redirigir al home si esta registrado
import { redirectHome } from "../hooks/useAuth";

export default function Login() {
  redirectHome();
  return (
    <div>
      <h1>login</h1>
      <FormLogin />
      <Link to={"/signup"}>crea una cuenta</Link>
    </div>
  );
}
