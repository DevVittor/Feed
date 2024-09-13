export function Footer() {
  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="flex justify-between items-center px-5 py-2 bg-dark border-t border-zinc-800">
        <span>Todos os direitos reservados</span>
        <span className="hover:cursor-pointer" onClick={backToTop}>
          Voltar ao topo
        </span>
      </div>
    </footer>
  );
}
