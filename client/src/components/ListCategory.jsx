import { Link } from "react-router-dom";

export function ListCategory() {
  const categories = [
    { category: "Web,Desktop e Mobile", count: 143 },
    { category: "Tradução ", count: 24 },
    { category: "Contabilidade", count: 54 },
    { category: "Contratos e Direitos", count: 6534 },
    { category: "Edição de vídeo", count: 43 },
    { category: "Edição de fotos", count: 123 },
    { category: "Ux/Ui", count: 86 },
    { category: "Vendas e Marketing", count: 23 },
    { category: "Designer e Criação", count: 12 },
    { category: "Suporte Administrativo", count: 53 },
    { category: "Atendimento ao Consumidor", count: 676 },
    { category: "Fotografia", count: 32 },
    { category: "Filmmaker", count: 11 },
    { category: "Escrita", count: 154 },
  ];

  return (
    <ol className="flex justify-between items-center flex-col gap-1.5 bg-zinc-900 p-2 rounded-md shadow-md md:w-auto w-full">
      {categories.map((item, index) => (
        <li className="w-full flex justify-between items-center" key={index}>
          <Link
            className="w-full flex justify-between items-center rounded-l-md text-zinc-100 hover:bg-zinc-900 transition-colors ease-linear duration-100 py-1 px-3 border border-zinc-900"
            to={`/#`}
          >
            {item.category}
          </Link>
          <span className="bg-zinc-900 px-2 py-1 border border-zinc-900">
            {" "}
            {item.count}
          </span>
        </li>
      ))}
    </ol>
  );
}
