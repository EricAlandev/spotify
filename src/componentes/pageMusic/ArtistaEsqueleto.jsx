import { useParams, Link } from 'react-router-dom';
import EmAlta from '../../musicas/EmAlta.json';
import Populares from '../compo-main/populares';
import Contato from '../compo-main/Contato';

const ArtistaEsqueleto = () => {
  const { id } = useParams();
  const musica = EmAlta.find((musica) => musica.id === id);
  const musicaCantor = EmAlta.filter((m) => m.bandaNome === musica?.bandaNome);

  const base = import.meta.env.BASE_URL; // '/spotify/' por exemplo

  const buildUrl = (path) => {
    if (!path) return '';
    return `${base}${path.replace(/^\/+/, '')}`;
  };

  if (!musica) {
    return <p className="text-white">Artista não encontrado.</p>;
  }

  return (
    <main className="pt-[80px] bg-[#121212]">
      {/* Hero */}
      <section
        key={musica.id}
        className="pt-5"
        style={{
          background: `linear-gradient(to bottom, ${musica.cor}, #121212)`,
        }}
      >
        {/* Imagem Canto */}
        <div className="flex justify-center">
          <img
            src={buildUrl(musica.imageBanda)}
            alt={musica.bandaNome}
            className="max-h-[170px] mb-[15px] rounded-[50%]"
          />
        </div>

        <h2 className="pl-4 font-medium font-[Montserrat] text-[white] text-[18px]">
          {musica.bandaNome}
        </h2>

        {/* Página Links */}
        <section className="flex justify-between pl-4">
          <section className="flex items-center gap-2">
            <button className="px-4 py-2 text-[white] text-[11.5px] border-2 border-[gray] rounded-[30px]">
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
        <h2 className="font-[Inter] font-bold text-[white] text-[15.5px] border-[gray]">
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
                <h2 className="font-[Inter] font-bold text-[white] text-[12.5px] border-[gray]">
                  {musicas.titulo}
                </h2>
                <p className="font-[Inter] font-bold text-[gray] text-[12.5px] border-[gray]">
                  {musicas.visualizacoes}
                </p>
              </section>
            </div>
          </Link>
        ))}
      </section>

      {/* Músicas Populares */}
      <Populares />

      {/* Parte de Baixo */}
      <Contato />
    </main>
  );
};

export default ArtistaEsqueleto;
