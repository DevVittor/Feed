import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Header() {
  const [logado, setLogado] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("Token")) {
      setLogado(true);
    } else {
      setLogado(false);
    }
  }, []);

  return (
    <header className="sticky top-0 bg-dark border-b border-zinc-800 px-5 py-2 w-full z-10">
      <div className="flex md:justify-between justify-center md:flex-row flex-col flex-wrap items-center gap-1 w-full">
        <h1 className="text-4xl font-bold text-white">
          <Link to="/">Feed</Link>
        </h1>
        <div className="flex justify-center items-center gap-2">
          {logado ? (
            <ol className="flex items-center gap-1.5">
              <li className="text-zinc-100 font-medium">Home</li>
              <li className="text-zinc-100 font-medium">About</li>
              <li className="text-zinc-100 font-medium">Contact</li>
              <li className="text-zinc-100 font-medium">
                {logado ? "Logado" : "Deslogado"}
              </li>
            </ol>
          ) : (
            <>
              <Link
                to="/acessar"
                className="px-3 py-1 rounded-sm text-zinc-100 border border-zinc-700 hover:shadow-sm hover:bg-zinc-700 transition-colors ease-linear duration-100 font-medium text-sm"
              >
                Acessar
              </Link>
              <Link
                to="/cadastrar"
                className="px-3 py-1 rounded-sm text-zinc-100 border border-zinc-700 hover:shadow-sm hover:bg-zinc-700 transition-colors ease-linear duration-100 font-medium text-sm"
              >
                Cadastrar
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
