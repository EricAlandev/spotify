import { useParams, Link } from 'react-router-dom';
import EmAlta from '../../musicas/EmAlta.json';
import Populares from '../compo-main/populares';
import Contato from '../compo-main/Contato';
import LeftSide from '../Homepage/LeftSide'; // ajuste o caminho se necessário

const ArtistaEsqueleto = () => {
  const { id } = useParams();
  const musica = EmAlta.find((musica) => musica.id === id);
  const musicaCantor = EmAlta.filter((m) => m.bandaNome === musica?.bandaNome);

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

          <section className="flex justify-between pl-4">
            <section className="flex items-center gap-2">
              <button className="px-4 py-2 text-white text-[11.5px] border-2 border-gray-500 rounded-[30px]">
                Seguir
              </button>
              <img
                src={buildUrl('/assets/emAlta/icons8-compartilhar-24.png')}
                alt="Compartilhar"
                className="max-h-[25px]"
              />
              <img
                src={buildUrl('/assets/emAlta/icons8-menu-2-30.png')}
                alt="Menu"
                className="max-h-[25px]"
              />
            </section>

            <button className="mr-6 p-4.5 rounded-[50%] bg-[#1ED760]">
              <img
                src={buildUrl('/assets/emAlta/Player.png')}
                alt="Player"
                className="max-h-[25px]"
              />
            </button>
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
