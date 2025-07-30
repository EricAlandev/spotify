import { useParams, Link } from 'react-router-dom';
import EmAlta from '../../musicas/EmAlta.json';
import Populares from '../compo-main/populares';
import Contato from '../compo-main/Contato';
import LeftSide from '../Homepage/LeftSide'; // ajuste o caminho se necessário
import { useState } from 'react';

const ArtistaEsqueleto = () => {
  const { id } = useParams();
  const musica = EmAlta.find((musica) => musica.id === id);
  const musicaCantor = EmAlta.filter((m) => m.bandaNome === musica?.bandaNome);

  const [setting, setSetting] = useState(false)

  const [seguira, setSeguira] = useState('Seguir')
  const [seguir, setSeguir] = useState(false)

  const popUp = () => {
    setSetting(!setting)
  }

  const base = import.meta.env.BASE_URL;

  const buildUrl = (path) => {
    if (!path) return '';
    return `${base}${path.replace(/^\/+/, '')}`;
  };

  if (!musica) {
    return <p className="text-white">Artista não encontrado.</p>;
  }

  return (
    <main className="flex bg-[#121212] min-h-screen">
      {/* LeftSide fixo */}
      <LeftSide />

      {/* Conteúdo principal */}
      <div className="pt-[80px] flex-1 md:max-w-[1500px] md:mx-auto">
        {/* Hero */}
        <section
          key={musica.id}
          className="pt-5"
          style={{
            background: `linear-gradient(to bottom, ${musica.cor}, #121212)`,
          }}
        >
          <div className="flex justify-center">
            <img
              src={buildUrl(musica.imageBanda)}
              alt={musica.bandaNome}
              className="max-h-[170px] mb-[15px] rounded-[50%] md:rounded-none md:min-h-[150px]"
            />
          </div>

          <h2 className="pl-4 font-medium font-[Montserrat] text-[white] text-[18px] md:text-[55px]">
            {musica.bandaNome}
          </h2>

          <h2 className='hidden md:block md:pl-6 md:text-[18px] md:text-[gray]'>
            {musica.visualizacoes} ouvintes mensais
          </h2>

          <section className="flex justify-between pl-4 mt-[7px]">
            <section className="flex items-center gap-2">
              <button className=" px-4 py-2 text-white text-[11.5px] border-2 border-gray-500 rounded-[30px] duration-120 hover:bg-[#0D0D0D]"

              onMouseEnter={() =>{
                if (!seguir) setSeguira(`Siga ${musica.bandaNome}`)
              }}

              onMouseLeave={() => {
                if (!seguir) setSeguira('Seguir')
              }}

              onClick={() => {
                if (!seguir) {

                  setSeguira('Seguindo !')
                setSeguir(true)
                }

                else if (seguir) {

                  setSeguira('Parou de seguir !')
                setSeguir(false)
                }
                
              }}
              
              >
                {seguira}
              </button>

              <img
                src={buildUrl('/assets/emAlta/icons8-compartilhar-24.png')}
                alt="Compartilhar"
                className="max-h-[25px]"
              />

              {/*configuracoes */}
              <img
                src={buildUrl('/assets/emAlta/icons8-menu-2-30.png')}
                alt="Menu"
                className="max-h-[25px]"
                onClick={() => {
                  popUp()
                }}
              />

              {/*Se clicar nos settings, ele renderiza essa parte. */}
              {setting && (
                    <div className="h-screen inset-0 z-50 fixed bg-black opacity-85">
                      <Link to={`/musica/${musica.id}`}>
                          <div className="flex gap-4 mt-20 ml-5 items-center md:justify-center md:mt-[200px] md:ml-0">
                            <img src={buildUrl(musica.image)} alt="" className="max-h-[80px]
                            md:min-h-[120px]
                            " />

                            <div>
                              <h2 className="text-[white] font-[Inter] font-bold
                              md:text-[18px]
                              ">{musica.titulo}</h2>
                              <h3 className="text-[gray]  md:text-[24px] font-[Inter] font-bold">{musica.bandaNome}</h3>
                            </div>

                          </div>
                      </Link>
                      

                      <div className='flex justify-center mt-[50px]'>
                              <h2 className='font-[Inter] text-[19px] text-[white]  duration-120'>Clique para assistir a nova música da banda 
                                <Link to={`/musica/${musica.id}`} className='md:ml-[10px] underline transform hover:scale-[1.05] duration-200'>
                                  {musica.bandaNome}!
                                </Link>
                              </h2>
                        </div>

                      
                      <div className="absolute bottom-5 left-35 w-full
                      md:flex md:justify-center md:left-0">
                        <h2
                          className="font-[Inter] font-bold text-[white]"
                          onClick={() => 
                            popUp()
                          }
                        >
                          Fechar
                        </h2>
                      </div>
                    </div>
                  )}

            </section>

            
          </section>
        </section>

        {/* Populares */}
        <section className="mt-4 ml-4 pb-4">
          <h2 className="font-[Inter] font-bold text-white text-[15.5px]">
            Populares
          </h2>

          {musicaCantor.map((musicas) => (
            <Link to={`/musica/${musicas.id}`} key={musicas.id}>
              <div className="flex gap-3.5 mt-4 items-center">
                <img
                  src={buildUrl(musicas.image)}
                  alt={musicas.titulo}
                  className="max-h-[75px]"
                />

                <section>
                  <h2 className="font-[Inter] font-bold text-white text-[12.5px]">
                    {musicas.titulo}
                  </h2>
                  <p className="font-[Inter] font-bold text-gray-400 text-[12.5px]">
                    {musicas.visualizacoes}
                  </p>
                </section>
              </div>
            </Link>
          ))}
        </section>

        {/* Outros componentes */}
        <Populares />
        <Contato />
      </div>
    </main>
  );
};

export default ArtistaEsqueleto;
