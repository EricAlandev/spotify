import { useState } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
 const [popUpBiblioteca, setPopUpBiblioteca] = useState(false)

 const desativar = () => setPopUpBiblioteca(!popUpBiblioteca)

  const base = import.meta.env.BASE_URL || "";

  const buildUrl = (path) => {
    if (!path) return "";
    return `${base}${path.replace(/^\/+/, "")}`;
  };

  return (
    <footer className="bg-transparent w-full fixed bottom-0 left-0 z-40 md:hidden">
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

          <Link to={'/buscar'}>
            <img
              src={buildUrl("/assets/emAlta/footer/Search.png")}
              alt="Buscar"
              className="max-h-[30px]"
            />          
          </Link>

          <p className="font-[Inter] font-medium text-white text-[14px]">Buscar</p>
        </div>

    
        <div className="relative flex flex-col items-center gap-1" onClick={desativar}>
          {/*Coloquei uma <> para não interferir nas divs. A div daria um espaço maior, que causaria uma quebra, ele ficaria mais pra cima.*/}
          <>
              <img
                src={buildUrl("/assets/emAlta/footer/biblioteca.png")}
                alt="Sua Biblioteca"
                className="max-h-[30px] w-auto"
              />
              <p  className="font-[Inter] font-medium text-white text-[14px]">Sua Biblioteca
              </p>
          </>

          {popUpBiblioteca && (
                <div className="absolute bottom-20 z-50 right-[-115px] w-[95vw] min-w-[240px] max-w-[400px]
                  p-4 bg-[#4687D6] rounded-[12px]
                ">
                      <h2 className="mb-2 ml-2 text-[white] text-[16px] font-bold">
                        Aproveite a Sua Biblioteca
                      </h2>

                      <p className="text-[13.5px] text-[white] font-medium">Veja suas músicas, playlists, podcasts e artistas salvos no app Spotify.   
                      </p>

                      <section className="flex items-center mt-3.5 gap-4  font-bold ">
                        <h2 onClick={desativar} className="text-[white]">Agora não</h2>

                        <a href="/" target="_blank" className="px-2 py-1 bg-[white] rounded-[8px]">
                          Baixar app
                        </a>
                      </section>
                  </div>
          )}

        </div>
        
        


        

        <Link to={'/Assinante'} className="flex flex-col items-center gap-1">
          <img
            src={buildUrl("/assets/emAlta/footer/spotify.png")}
            alt="Premium"
            className="max-h-[30px]"
          />
          <p className="font-[Inter] font-medium text-white text-[14px]">Premium</p>
        </Link>
      </section>
    </footer>
  );
};

export default Footer;
