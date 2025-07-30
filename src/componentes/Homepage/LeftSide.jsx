import { Link } from "react-router-dom";
import { useLibrary } from "../../../src/context/LibraryContext";
import { useState } from "react";

const LeftSide = () => {
  const base = import.meta.env.BASE_URL || "";
  const { library , removeFromLibrary} = useLibrary();

  //Feito para o botão +
  const [mais, setMais] = useState(false)

  const toggle = () => {
    setMais(!mais)
  }

  const buildUrl = (path) => {
    if (!path) return "";
    return `${base}${path.replace(/^\/+/, "")}`;
  };

  return (
    <aside className="hidden md:flex bg-[#121212] md:pt-[120px] md:min-w-[400px] flex-col p-4">
      <div className="flex gap-4 items-center mb-6">
        <h2 className="font-[Inter] text-[18px] text-white py-2">Sua Biblioteca</h2>
        <img
          src={buildUrl("/assets/emAlta/Plus.png")}
          alt="Ícone de adição"
          className="max-h-[30px]"
          onClick={() =>
            toggle()
          }
        />

        
          {mais && (
            <div className="flex bg-[#3A3A3A] p-2 duration-120 z-50 rounded-[20px] text-[#D1D1D1]
            hover:bg-[#0D0D0D]
            ">
              <img src={buildUrl("/assets/mobile/music.png")} alt=""
              className="max-h-[25px]"
               />
              
              <Link to={'/buscar'}>
                <h2 className=" font-[Inter] font-medium">Criar nova Playlist</h2>
              </Link>
            </div>
          )}
      </div>

      <ul className="space-y-2 text-white">
        {library.length === 0 && (
          <li className="text-gray-400">Nenhuma música adicionada ainda.</li>
        )}
        {library.map((music) => (
            <li key={music.id} className=" bg-[#1F1F1F] p-2 rounded">        
                <Link to={`/musica/${music.id}`}>
                    <div className="flex items-center gap-4">
                        <img src={buildUrl(music.image)} alt=""
                        className="md:max-h-[70px]"
                        />
                        
                        <div className="flex flex-col">
                                <h2>{music.titulo}</h2>

                                <div className="flex flex-col">
                                    <p className="font-[Inter] text-[12px]">{music.tempo}</p>

                                    <button onClick={() => removeFromLibrary(music.id)}
                                    className="mt-[5px] py-2 px-2 md:hover:bg-[red] rounded-[10px] duration-300 text-[12px] md:max-w-[50px]"
                                        >
                                        Delete
                                    </button>
                                </div>
                        </div>
                    </div>
                </Link>
             </li>
        ))}
      </ul>
    </aside>
  );
};

export default LeftSide;
