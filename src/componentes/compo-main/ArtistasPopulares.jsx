import { Link } from "react-router-dom"
import EmAlta from '../../musicas/EmAlta.json'
import { Swiper, SwiperSlide } from "swiper/react"


const ArtistasPopulares = () => {
    
    //Feito para aparecer apenas 1 vez o nome dos artistas
    const nomesUnicos = []
    const artistasUnicos = EmAlta.filter((cantor) =>{
        if (!nomesUnicos.includes(cantor.bandaNome)){
            nomesUnicos.push(cantor.bandaNome)
            return true
        }

        else {
            return false
        }
    })


    return(
        <main className="ml-4 pb-4">
            <h2 className='mb-4 font-[Inter] font-[500]  text-[white] text-[22px]
                                mt-2.5
                                '>
                Artistas Populares
            </h2>

            <Swiper
            slidesPerView={2}
            spaceBetween={20}

            >
            {artistasUnicos.map((cantor) => (
                
                <SwiperSlide key={cantor.id}>
                    <Link to={`/artista/${cantor.id}`}>
                        <img src={cantor.imageBanda} alt=""
                        className="rounded-[8px] max-h-[145px]"
                         />         
                         <p className={`min-w-[150px]  font-[Inter] font-[500]
                                text-[white]  mt-2.5  text-[15.5px]
                                `}>{cantor.bandaNome}</p>       
                    </Link>
                </SwiperSlide>
                
            
            ))}
            </Swiper>
        </main>
    )
}

export default ArtistasPopulares