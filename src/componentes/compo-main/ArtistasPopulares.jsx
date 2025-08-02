import { Link } from "react-router-dom";
import EmAlta from '../../musicas/EmAlta.json';
import { Swiper, SwiperSlide } from "swiper/react";

const ArtistasPopulares = () => {
  const base = import.meta.env.BASE_URL || "";

  const buildUrl = (path) => {
    if (!path) return "";
    return `${base}${path.replace(/^\/+/, "")}`;
  };

  // Feito para aparecer apenas 1 vez o nome dos artistas
  const nomesUnicos = [];
  const artistasUnicos = EmAlta.filter((cantor) => {
    if (!nomesUnicos.includes(cantor.bandaNome)) {
      nomesUnicos.push(cantor.bandaNome);
      return true;
    } else {
      return false;
    }
  });

  return (
    <main className="ml-12 md:ml-7 pb-4 md:max-w-[1500px] md:mx-auto">
      <h2
        className="md:ml-7 mb-4 font-[Inter] font-[500] text-[white] text-[22px] mt-2.5"
      >
        Artistas Populares
      </h2>

      <section className='max-w-[325px] md:min-w-[1485px] '>
        <Swiper 
           slidesPerView={2}

           breakpoints={{

            1024: {
              slidesPerView: 6.5
            }
           }}
        >
          {artistasUnicos.map((cantor) => (
            <SwiperSlide key={cantor.id}>
              <Link to={`/artista/${cantor.id}`}>
                <img
                  src={buildUrl(cantor.imageBanda)}
                  alt={cantor.bandaNome}
                  className="rounded-[8px] md:rounded-[50%] max-h-[145px] md:min-h-[170px] md:ml-7"
                />
                <p
                  className={`min-w-[150px] font-[Inter] font-[500] text-[white] mt-2.5
                    md:ml-7 text-[15.5px] md:text-[16.5px]`}
                >
                  {cantor.bandaNome}
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </main>
  );
};

export default ArtistasPopulares;
