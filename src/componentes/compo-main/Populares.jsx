import { Link, useParams } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import EmAlta from '../../musicas/EmAlta.json'

const Populares = () => {
  const base = import.meta.env.BASE_URL || "";

  const buildUrl = (path) => {
    if (!path) return '';
    return `${base}${path.replace(/^\/+/, '')}`;
  };

  const { id } = useParams();
  const musica = EmAlta.find((m) => m.id === id);
  const musicaCantor = EmAlta.filter((m) => m.bandaNome === musica?.bandaNome);

  if (!musica) {
    return <p className="text-white">Música não encontrada.</p>;
  }

  const StrParaNumber = (strs) => Number(strs.replace(/\./g, ''));

  const musicaOrdem = musicaCantor
    .sort((a, b) => StrParaNumber(b.visualizacoes) - StrParaNumber(a.visualizacoes))
    .slice(0, 3);

    const musicaOrdemDesktop = musicaCantor
    .sort((a, b) => StrParaNumber(b.visualizacoes) - StrParaNumber(a.visualizacoes))
    .slice(0, 5);

  return (
    <main>
      <section className='mt-2 ml-4 pb-4'>
        <h2 className='font-[Inter] font-bold text-[white] text-[14px] border-[gray] md:hidden'>
          Lançamentos Populares
        </h2>

        {/*Mobile */}
        {musicaOrdem.map((itens) => (
          <Link to={`/musica/${itens.id}`} key={itens.id}>
            <div className='flex gap-2 mt-4 items-center md:hidden'>
              <img
                src={buildUrl(itens.image)}
                alt={itens.titulo}
                className='max-h-[75px]'
              />

              <section className='flex flex-col'>
                <h2 className='font-[Inter] font-bold text-[white] text-[12.5px] border-[gray]'>
                  {itens.titulo}
                </h2>

                <p className='font-[Inter] font-bold text-[gray] text-[12.5px] border-[gray]'>
                  {itens.visualizacoes}
                </p>
              </section>
            </div>
          </Link>
        ))}

        <h2 className='md:flex md:justify-center md:pb-[15px] md:font-[Inter] md:font-bold md:text-[white] md:text-[20px] md:border-[gray] hidden'>
          Lançamentos Populares
        </h2>

        {/*Desktop */}
       <div className='md:mx-auto md:max-w-[500px]'>
          <Swiper
            slidesPerView={3}
            >
              {musicaOrdemDesktop.map( (itens) => (
                <SwiperSlide  key={itens.id}>
                  <Link className='hidden md:block'  to={`/musica/${itens.id}`}>
                <img
                    src={buildUrl(itens.image)}
                    alt={itens.titulo}
                    className='max-h-[75px] md:min-h-[150px] '
                  />

                  <section className='flex flex-col'>
                    <h2 className='font-[Inter] font-bold text-[white] text-[12.5px] 
                    md:mt-[10px] md:text-[15.5px] border-[gray]'>
                      {itens.titulo}
                    </h2>

                    <p className='font-[Inter] font-bold text-[gray] text-[12.5px] border-[gray]'>
                      {itens.visualizacoes}
                    </p>
                  </section>
                </Link>
                </SwiperSlide>
              ))}
            </Swiper>
       </div>
      
      </section>
    </main>
  );
};

export default Populares;
