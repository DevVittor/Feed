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
    <header className="sticky top-0 bg-zinc-900 border-b border-zinc-700 px-5 py-2 w-full z-10">
      <div className="flex justify-center items-center w-full">
        <h1 className="text-4xl font-bold text-white">
          <Link to="/">Feed</Link>
        </h1>
      </div>
      {logado ? (
        <span className="text-zinc-100 font-medium">Logado</span>
      ) : (
        <span className="text-zinc-100 font-medium">Deslogado</span>
      )}
    </header>
  );
}
