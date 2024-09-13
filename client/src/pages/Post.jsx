import axios from "axios";

import { useEffect, useState } from "react";

export function Post() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const myToken = localStorage.getItem("Token");
    if (myToken) {
      setToken(myToken);
    }
  }, []);

  const [formData, setFormData] = useState({
    author: "",
    title: "",
    details: "",
    price: {
      min: null,
      max: null,
    },
    level: "",
    skills: ["Ux/Ui", "JavaScript", "Node.js", "Express.js"],
    category: "",
  });

  const handleData = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/post/",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`, // Adiciona o token ao header
          },
        }
      );
      console.log(response.data);
    } catch (error) {
      if (error.response) {
        // A requisição foi feita e o servidor respondeu com um status fora da faixa de 2xx
        console.log("Erro de resposta:", error.response.data);
        console.log("Status:", error.response.status);
        console.log("Headers:", error.response.headers);
      } else if (error.request) {
        // A requisição foi feita, mas nenhuma resposta foi recebida
        console.log("Erro de requisição:", error.request);
      } else {
        // Algo aconteceu na configuração da requisição que desencadeou um erro
        console.log("Erro:", error.message);
      }
    }
  };

  const changeDataForm = (event) => {
    const { name, value } = event.target;

    // Atualiza o estado do formData com o novo valor
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Atualiza o campo apropriado no formData
    }));
  };

  return (
    <div className="flex flex-grow justify-center items-center">
      <div className="p-3 bg-zinc-900 flex flex-col gap-2 w-[350px]">
        <form className="flex flex-col gap-2" onSubmit={handleData}>
          <label className="flex flex-col gap-1" htmlFor="">
            Author:
            <input
              className="px-3 py-1 rounded-md bg-zinc-700 text-zinc-100 font-medium outline-none"
              type="text"
              name="author"
              value={formData.author}
              placeholder="Author"
              onChange={changeDataForm}
            />
          </label>
          <label className="flex flex-col gap-1" htmlFor="">
            Title:
            <input
              className="px-3 py-1 rounded-md bg-zinc-700 text-zinc-100 font-medium outline-none"
              type="text"
              name="title"
              value={formData.title}
              placeholder="Title"
              onChange={changeDataForm}
            />
          </label>
          <label className="flex flex-col gap-1" htmlFor="">
            Details:
            <textarea
              className="px-3 py-1 rounded-md bg-zinc-700 text-zinc-100 font-medium outline-none h-[200px] "
              name="details"
              value={formData.details}
              placeholder="Details"
              onChange={changeDataForm}
            ></textarea>
          </label>
          <label className="flex flex-col gap-1" htmlFor="">
            Price Min:
            <input
              className="px-3 py-1 rounded-md bg-zinc-700 text-zinc-100 font-medium outline-none"
              type="number"
              name="min"
              value={formData.price.min}
              placeholder="Min"
              onChange={changeDataForm}
            />
          </label>
          <label className="flex flex-col gap-1" htmlFor="">
            Price Max:
            <input
              className="px-3 py-1 rounded-md bg-zinc-700 text-zinc-100 font-medium outline-none"
              type="number"
              name="max"
              value={formData.price.max}
              placeholder="Max"
              onChange={changeDataForm}
            />
          </label>
          <label className="flex flex-col gap-1" htmlFor="">
            Level:
            <select
              className="px-3 py-1 rounded-md bg-zinc-700 text-zinc-100 font-medium outline-none"
              name="level"
              value={formData.level}
              onChange={changeDataForm}
            >
              <option value="any">Any</option>
              <option value="professional">Professional</option>
            </select>
          </label>
          <label className="flex flex-col gap-1" htmlFor="">
            Category:
            <select
              className="px-3 py-1 rounded-md bg-zinc-700 text-zinc-100 font-medium outline-none"
              name="category"
              value={formData.category}
              onChange={changeDataForm}
            >
              <option value="Web">Web</option>
              <option value="Mobile">Mobile</option>
              <option value="Desktop">Desktop</option>
              <option value="Tradução">Tradução</option>
            </select>
          </label>
          <button
            className="px-3 py-1 bg-zinc-800 w-full font-medium text-zinc-100 rounded-sm"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}
