import FormLogin from "../components/FormLogin";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <h1>login</h1>
      <FormLogin />
      <Link to={"/signup"}>crea una cuenta</Link>
    </div>
  );
}
