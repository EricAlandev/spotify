import { Link } from 'react-router-dom'
import EmAlta from '../../musicas/EmAlta.json'
import { Swiper, SwiperSlide } from "swiper/react"

const MusicaAlta = () => {
  const base = import.meta.env.BASE_URL || "";

  const buildUrl = (path) => {
    if (!path) return "";
    return `${base}${path.replace(/^\/+/, "")}`;
  };

  return (
    <main className=''>
      <section className=' ml-4 pb-4'>
        <h2 className='mb-4 font-[Inter] font-[500] text-[white] text-[22px] mt-2.5'>
          Músicas em Alta
        </h2>

        <section className='max-w-[325px]'>
          <Swiper
            slidesPerView={2}
           
          >
            {EmAlta.map((itens) => (
              <SwiperSlide key={itens.id}>
                <Link to={`/musica/${itens.id}`}>
                  <img
                    src={buildUrl(itens.image)}
                    alt={itens.titulo}
                    className='rounded-[12px] max-h-[145px]'
                  />
                  <h2
                    className={`min-w-[150px] font-[Inter] font-[500] text-[white] mt-2.5 text-[15.5px]`}
                  >
                    {itens.titulo}
                  </h2>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </section>
    </main>
  );
}

export default MusicaAlta;
