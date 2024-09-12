import axios from "axios";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";

export function Register() {
  const { enqueueSnackbar } = useSnackbar(); // Hook para mostrar notificações
  const navigate = useNavigate(); // Hook para navegação
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeData = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleData = async (event) => {
    event.preventDefault();

    // Validação do username
    if (formData.username.length <= 5 || formData.username.length > 12) {
      if (formData.username.length <= 5) {
        enqueueSnackbar(
          "O nome está curto demais, ele tem que ter mais de 5 caracteres",
          { variant: "error" }
        );
      } else if (formData.username.length > 12) {
        enqueueSnackbar("Seu username tem mais que 12 caracteres", {
          variant: "error",
        });
      }
      return; // Evita a continuação do processo
    }

    // Validação da senha
    if (formData.password.length <= 5 || formData.password.length > 16) {
      if (formData.password.length <= 5) {
        enqueueSnackbar("Sua senha tem menos que 6 caracteres", {
          variant: "error",
        });
      } else if (formData.password.length > 16) {
        enqueueSnackbar("Sua senha tem mais que 16 caracteres", {
          variant: "error",
        });
      }
      return; // Evita a continuação do processo
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/register",
        formData,
        { withCredentials: true }
      );
      console.log("Resposta:", response.data);
      const token = response.data.token;
      enqueueSnackbar("Conta criada com sucesso", { variant: "success" });
      if (!localStorage.getItem("Token")) {
        localStorage.setItem("Token", token);
      }
      localStorage.removeItem("Token");
      localStorage.setItem("Token", token);
      setTimeout(() => {
        navigate("/"); // Redireciona para a página Home
      }, 3000);
    } catch (error) {
      // Verifica se error.response está definido
      const axiosError = error.response
        ? error.response.data.error
        : "Erro desconhecido";

      console.error("Erro no registro:", axiosError);
      enqueueSnackbar(axiosError, { variant: "error" });
    }
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>Register</title>
        <meta name="description" content="Page Register User" />
      </Helmet>
      <div className="flex-grow flex justify-center items-center flex-col md:gap-5 gap-2">
        <h2 className="text-4xl font-bold">Register New User</h2>
        <form
          className="flex flex-col gap-2 p-3 rounded-sm shadow-sm border border-zinc-800"
          onSubmit={handleData}
        >
          <label className="flex flex-col gap-1" htmlFor="">
            Username:
            <input
              className="px-3 py-1 rounded-md bg-zinc-700 text-zinc-100 font-medium outline-none border-none"
              type="text"
              name="username"
              value={formData.username}
              placeholder="Username"
              onChange={changeData}
            />
          </label>

          <label className="flex flex-col gap-1" htmlFor="">
            Email:
            <input
              className="px-3 py-1 rounded-md bg-zinc-700 text-zinc-100 font-medium outline-none border-none"
              type="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={changeData}
            />
          </label>

          <label className="flex flex-col gap-1" htmlFor="">
            Password:
            <input
              className="px-3 py-1 rounded-md bg-zinc-700 text-zinc-100 font-medium outline-none border-none"
              type="password"
              name="password"
              value={formData.password}
              placeholder="Password"
              onChange={changeData}
            />
          </label>

          <input
            className="bg-zinc-100 rounded-md px-3 py-1 font-medium text-black mt-2 hover:cursor-pointer"
            type="submit"
            value="Register"
          />
        </form>
      </div>
    </HelmetProvider>
  );
}
