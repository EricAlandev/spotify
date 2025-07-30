import { useParams } from "react-router-dom"
import EmAlta from '../musicas/EmAlta.json';
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import Contato from '../componentes/compo-main/Contato'
import LeftSide from '../componentes/Homepage/LeftSide'


const CategoriaPage = () => {

    const {categoria} = useParams();

    const comparador = EmAlta.filter((m) => m.categoria === categoria)

    const musicaNova = comparador
    .sort(() => Math.random() - 0.5)
    .slice(0,1);

    const comparadorSemNova = comparador.filter((m) => m.id !== musicaNova[0]?.id);


    return(
        <main className="md:flex md:gap-4 ">
            <LeftSide/>
            <div className="md:max-w-[1489px] ml-7 md:ml-0 pt-[80px] md:pt-[66px]">
                    <div 
                    className="  md:min-h-[250px]"
                    style={{
                            backgroundColor: window.innerWidth>=768? comparador[0]?.cor : undefined
                        }}>

                        <h2 className="font-bold font-[Inter] text-[white] text-[24px] md:text-[55px] md:pt-[150px] md:pl-7"
                        
                        >{categoria}</h2>
                    </div>    
                       

            <section className="md:ml-7">
                <h2 className=" mt-[32px] font-extrabold font-[Inter] text-[white] text-[18.5px]">Descubra músicas novas</h2>

                {musicaNova.map((m) => (
                    <Link to={`/musica/${m.id}`}

                    >
                        <img src={`${import.meta.env.BASE_URL}${m.image}`} alt=""
                    className='rounded-[12px]   min-h-[200px] '
                    />      

                    
                                        <h2
                                        className={` min-w-[150px] font-[Inter] font-bold text-[white] text-[15.5px]`}
                                    >
                                        {m.titulo}
                                    </h2>            

                                    <p className="mb-[40px] font-light font-[Inter] text-[white]">{m.visualizacoes} visualizações</p>  
                    </Link>
                ))}
            </section>

            <section className="md:px-7 overflow-hidden">
                <Swiper  slidesPerView={2}
                breakpoints={{
                    1024 : {
                        slidesPerView : 3
                    }
                }}
                 >
                    {comparadorSemNova.map((musicas) => (
                        <SwiperSlide key={musicas.id}>
                        <div className="min-h-[200px] ">
                                <Link to={`/musica/${musicas.id}`} 
                                >
                                    <img src={`${import.meta.env.BASE_URL}${musicas.image}`} alt=""
                                    className='rounded-[12px] min-h-[145px] max-h-[145px] md:min-h-[155px]'
                                    />  

                                        <h2
                                        className={`min-w-[150px] font-[Inter] font-[500] text-[white] mt-2.5 text-[15.5px] 
                                            md:text-16.5px
                                        `}
                                    >
                                        {musicas.titulo}
                                    </h2>
                                </Link>
                        </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </section>

            <Contato/>
            </div>
        </main>
    )
}

export default CategoriaPage