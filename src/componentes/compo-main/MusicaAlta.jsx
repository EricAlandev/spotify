import { Link } from "react-router-dom";
import EmAlta from "../../musicas/EmAlta.json";
import { Swiper, SwiperSlide } from "swiper/react";
import { useLibrary } from "../../context/LibraryContext";

const MusicaAlta = () => {
  const base = import.meta.env.BASE_URL || "";
  const { addToLibrary } = useLibrary();

  const buildUrl = (path) => {
    if (!path) return "";
    return `${base}${path.replace(/^\/+/, "")}`;
  };

  return (
    <main className=" md:bg-gradient-to-b md:from-[#212121] md:to-[#121212] md:max-w-[1600px] md:mx-auto">
      <section className="ml-12 md:ml-7 pb-4">
        <h2
          className="mb-4 font-[Inter] font-[500] text-[white] text-[22px] pt-2.5
         md:pt-[100px]
        md:font-bold md:text-[26px]"
        >
          Músicas em Alta
        </h2>

        <section className="max-w-[325px] md:min-w-[1460px]">
          <Swiper
            slidesPerView={2}
            breakpoints={{
              1024: {
                slidesPerView: 4.2,
              },
            }}
          >
            {EmAlta.map((itens) => (
              <SwiperSlide key={itens.id}>
                <Link to={`/musica/${itens.id}`}>
                  <img
                    src={buildUrl(itens.image)}
                    alt={itens.titulo}
                    className="rounded-[12px] max-h-[145px] md:min-h-[170px]"
                  />
                </Link>

                <div className="flex justify-between items-center mt-2.5 min-w-[150px]">
  <h2
    className="font-Inter font-medium text-white text-[15.5px] md:text-[14.5px]"
  >
    {itens.titulo}
  </h2>

  <button
    onClick={() => addToLibrary(itens)}
    aria-label={`Adicionar ${itens.titulo} à biblioteca`}
    className="text-green-500 hover:text-green-300 font-bold text-xs md:text-sm md:mr-[20px] hidden md:block"
    style={{ cursor: 'pointer' }}
  >
    ADD
  </button>
</div>

              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </section>
    </main>
  );
};

export default MusicaAlta;
