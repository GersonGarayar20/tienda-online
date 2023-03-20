import FormLogin from "../components/FormLogin";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <div className="py-8">
        <h1 className="text-center text-2xl font-bold">Login</h1>
      </div>
      <section className="p-4 max-w-xl m-auto">
        <FormLogin />
      </section>
      <p className="text-center">
        Eres Nuev@?
        <Link to={"/signup"}>
          <span className="ml-2 text-sky-500 hover:underline">
            Crea un Cuenta
          </span>
        </Link>
      </p>
    </>
  );
}
