import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const base = import.meta.env.BASE_URL || "";

// Função para construir URL completa a partir da base
const buildUrl = (path) => {
  if (!path) return "";
  return `${base}${path.replace(/^\/+/, "")}`;
};

const HeaderDesktop = () => {
  const [bau, setBau] = useState(buildUrl("/assets/mobile/header/Chest.png"));
  const [app, setApp] = useState(buildUrl("/assets/mobile/header/Dowload.png"));
  const [termoBusca, setTermoBusca] = useState("");

  const navigate = useNavigate();

  const handleBusca = (e) => {
    if (e.key === "Enter" && termoBusca.trim()) {
      navigate(`/buscar?q=${encodeURIComponent(termoBusca.trim())}`);
      setTermoBusca("");
    }
  };

  return (
    <header>
      {/* Desktop Menu */}
      <article className="hidden md:block md:w-full md:pt-[8px] md:pb-[8px] md:bg-[#0D0D0D]">
        <section className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex">
            <img
              src={buildUrl("/assets/mobile/LogoMobile.webp")}
              alt="Logo"
              className="ml-[25px] md:max-h-[50px]"
            />
          </Link>

          <Link to="/" className="absolute">
            <img
              src={buildUrl("/assets/mobile/header/House.png")}
              alt="Início"
              className="md:max-h-[55px] p-2 bg-[#282828] rounded-[50%] relative left-168"
            />
          </Link>

          {/* Search e Navegação */}
          <div className="flex gap-2.5 items-center">
            {/* Ícone de busca */}
            <div className="absolute">
              <img
                src={buildUrl("/assets/mobile/Search.png")}
                alt="Buscar"
                className="md:max-h-[25px] relative left-6.5"
              />
            </div>

            {/* Campo de busca funcional */}
            <label htmlFor="search" className="sr-only">Buscar</label>
            <input
              type="text"
              name="search"
              id="search"
              placeholder="O que você quer ouvir?"
              value={termoBusca}
              onChange={(e) => setTermoBusca(e.target.value)}
              onKeyDown={handleBusca}
              className="min-w-[450px] pl-[49px] pt-3 pb-3 pr-3 placeholder-[#737373] text-[#737373] font-[Inter] bg-[#282828] rounded-[30px] duration-600"
            />

            {/* Ícone do baú */}
            <Link to="/buscar" className="absolute">
              <img
                src={bau}
                alt="Baú"
                className="md:max-h-[28px] relative right-[-410px] pl-[5px] border-[#737373] border-l-[2px] hover:transform hover:scale-[1.05] duration-300"
                onMouseEnter={() =>
                  setBau(buildUrl("/assets/mobile/header/ChestWhite.png"))
                }
                onMouseLeave={() =>
                  setBau(buildUrl("/assets/mobile/header/Chest.png"))
                }
              />
            </Link>

            {/* Navegação */}
            <nav className="flex items-center md:ml-[30px] xl:ml-[90px]">
              <ul className="flex gap-4">
                <li className="hover:transform hover:scale-[1.05] duration-120">
                  <Link
                    to="/Assinante"
                    className="text-[#737373] hover:text-white font-[Inter]"
                  >
                    Premium
                  </Link>
                </li>
                <li className="text-[#737373] hover:text-white font-[Inter] hover:transform hover:scale-[1.05] duration-120">
                  Suporte
                </li>
                <li className="pr-2 border-r-[2px] border-white text-[#737373] hover:text-white font-[Inter] hover:transform hover:scale-[1.05] duration-120">
                  Baixar
                </li>
              </ul>

              {/* Itens à direita */}
              <ul className="flex items-center gap-4">
                <li
                  className="flex ml-2 gap-2 hover:transform hover:scale-[1.05] duration-120"
                  onMouseEnter={() =>
                    setApp(buildUrl("/assets/mobile/header/DowloadWhite.png"))
                  }
                  onMouseLeave={() =>
                    setApp(buildUrl("/assets/mobile/header/Dowload.png"))
                  }
                >
                  <img src={app} alt="App" />
                  <h3 className="text-[#737373] hover:text-white font-[Inter]">
                    Instalar aplicativo
                  </h3>
                </li>

                <Link to={'/Assinante'}>
                  <li className="text-[#737373] hover:text-white font-[Inter] hover:transform hover:scale-[1.05] duration-120">
                    Inscrever-se
                  </li>
                </Link>

                <li className="hover:transform hover:scale-[1.05] duration-120">
                  <Link 
                
                    className="mr-2 py-4 px-8 font-[Inter] font-bold text-[14px] bg-white rounded-[20px]"
                    to="/Assinante"
                  >
                    Entrar
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </article>
    </header>
  );
};

export default HeaderDesktop;
