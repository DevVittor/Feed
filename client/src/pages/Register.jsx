import axios from "axios";
import { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

export function Register() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeData = (e) => {
    // Atualiza apenas o campo que mudou (email ou password)
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleData = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/register",
        formData,
        { withCredentials: true } // Permite o envio de cookies
      );
      console.log("Resposta:", response.data);
      alert("Conta Criada");
      //window.location.reload();
    } catch (error) {
      console.error("Erro no registro:", error);
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
              id=""
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
              id=""
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
              id=""
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
