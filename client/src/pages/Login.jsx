import axios from "axios";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useSnackbar } from "notistack";
//import { useNavigate } from "react-router-dom";
export function Login() {
  const { enqueueSnackbar } = useSnackbar();
  //const navigate = useNavigate();
  const [typePassword, setTypePassword] = useState(false);
  const Icon = typePassword ? FaEye : FaEyeSlash;
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const fetchData = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/login",
        formData,
        {
          withCredentials: true, // Inclua esta opção
        }
      );
      console.log(response.data);
      const token = response.data.token;
      if (token) {
        if (localStorage.getItem("Token")) {
          localStorage.removeItem("Token");
          localStorage.setItem("Token", token);
        } else {
          localStorage.setItem("Token", token);
        }
      }
      enqueueSnackbar("Acesso Permitido", { variant: "success" });
      window.location.assign("/");
    } catch (error) {
      console.error(error);
      enqueueSnackbar("Não foi possível acessar a conta", {
        variant: "error",
      });
    }
  };

  const changeData = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Acessar</title>
        <meta name="description" content="Page Login" />
      </Helmet>
      <main className="flex-grow  flex justify-center items-center">
        <section>
          <div className="flex justify-center items-center flex-col gap-2 p-3 border border-zinc-800 ">
            <h2 className="font-bold text-3xl text-zinc-100">Acessar Conta</h2>
            <form className="flex flex-col gap-2" onSubmit={fetchData}>
              <label className="flex flex-col gap-1" htmlFor="">
                Email:
                <input
                  className="px-3 py-1 border-none bg-zinc-800 text-zinc-100 font-medium outline-none rounded-sm"
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="exemplo@gmail.com"
                  onChange={changeData}
                />
              </label>
              <label className="flex flex-col gap-1" htmlFor="">
                Senha:
                <div className="flex items-center bg-zinc-700">
                  <input
                    className="px-3 py-1 border-none bg-zinc-800 text-zinc-100 font-medium outline-none rounded-sm"
                    type={typePassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    placeholder="********"
                    onChange={changeData}
                  />
                  <div
                    className={`${
                      typePassword ? "bg-red-500" : "bg-zinc-700"
                    } px-3 hover:cursor-pointer h-full flex justify-center items-center transition-colors ease-linear duration-100`}
                    onClick={() => setTypePassword(!typePassword)}
                  >
                    <Icon className="text-zinc-100 " />
                  </div>
                </div>
              </label>
              <input
                className="w-full py-1 px-3 bg-zinc-800 hover:cursor-pointer font-medium text-zinc-100"
                type="submit"
                value="Entrar"
              />
            </form>
          </div>
        </section>
      </main>
    </HelmetProvider>
  );
}
