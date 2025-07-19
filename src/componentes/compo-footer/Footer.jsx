import { Link } from "react-router-dom";

const Footer = () => {
  const base = import.meta.env.BASE_URL || "";

  const buildUrl = (path) => {
    if (!path) return "";
    return `${base}${path.replace(/^\/+/, "")}`;
  };

  return (
    <footer className="bg-transparent w-full fixed bottom-0 left-0 z-40">
      <section className="flex justify-between px-4 py-2 bg-black/70">
        <Link to={"/"} className="flex flex-col items-center gap-1">
          <img
            src={buildUrl("/assets/emAlta/footer/home.png")}
            alt="Início"
            className="max-h-[30px]"
          />
          <p className="font-[Inter] font-medium text-white text-[14px]">Início</p>
        </Link>

        <div className="flex flex-col items-center gap-1">
          <img
            src={buildUrl("/assets/emAlta/footer/Search.png")}
            alt="Buscar"
            className="max-h-[30px]"
          />
          <p className="font-[Inter] font-medium text-white text-[14px]">Buscar</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <img
            src={buildUrl("/assets/emAlta/footer/biblioteca.png")}
            alt="Sua Biblioteca"
            className="max-h-[30px]"
          />
          <p className="font-[Inter] font-medium text-white text-[14px]">Sua Biblioteca</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <img
            src={buildUrl("/assets/emAlta/footer/spotify.png")}
            alt="Premium"
            className="max-h-[30px]"
          />
          <p className="font-[Inter] font-medium text-white text-[14px]">Premium</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
