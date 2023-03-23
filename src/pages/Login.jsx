import FormLogin from "../components/FormLogin";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <section className="bg-white lg:w-[700px] w-full h-screen pt-16 m-auto">
        <div className="max-w-md m-auto px-8">
          <div className="py-8">
            <h1 className=" text-2xl font-bold">Login</h1>
          </div>
          <FormLogin />
          <div className="py-8">
            <p className="text-center">
              Eres Nuev@?
              <Link to={"/signup"}>
                <span className="ml-2 text-sky-500 hover:underline">
                  Crea un Cuenta
                </span>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
