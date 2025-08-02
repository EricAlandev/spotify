
import { Link } from 'react-router-dom';
import LeftSide from '../componentes/Homepage/LeftSide'

const BuscarPage = () => {

    const base = import.meta.env.BASE_URL || "";

  const buildUrl = (path) => {
    if (!path) return "";
    return `${base}${path.replace(/^\/+/, "")}`;
  };

    
    return(
        
        <main className="md:flex  h-screen pl-[20px] md:pl-0 bg-[#0D0D0D] relative">

                <LeftSide/>
    
            
            {/*Se for mobile, ele terá o mt para justamente não ficar para cima demais. */}
            <section className='mr-[16px] md:mt-[80px] md:ml-[100px]'>
                <h2 className=" mb-3.5 font-[Inter] font-bold text-[30px] text-[white] md:text-[30px] pt-[40px]">Navegar por todas as seções</h2>
                {/*Seções */}
                <section className="grid grid-cols-2 gap-4 grid-rows-2 mt-[50px] text-[white]  ">

                    {/*Kpop */}
                    <Link to={'/Categoria/kpop'} className='flex gap-13 md:gap-70 pl-[15px]  items-center bg-[#43C5A7] rounded-[8px] min-h-[100px] overflow-hidden  md:min-w-[450px] md:min-h-[100px]'> 
                            <h2 className='text-[20px] md:text-[32px] font-[Inter] font-light'>Kpop</h2>
                            <img src={buildUrl("/assets/categorias/Kpop.png")} alt=""
                            className={`rotate-335 min-h-[70px]`}
                            />
                    </Link>

                    {/*evangelico */}
                    <Link to={'/Categoria/evangelico'} className='flex gap-2 md:gap-51 pl-[15px] items-center bg-[#F3F3F3] rounded-[8px] overflow-hidden md:min-w-[450px] md:min-h-[100px]'>
                        <h2 className=' text-[black] text-[16px] md:text-[32px] font-[Inter] font-medium md:font-light'>Evangélico</h2>
                        <img src={buildUrl("/assets/categorias/igreja.png")} alt=""
                        className={`rotate-330 ml-[2px]  min-h-[70px]`}
                        />
                    </Link>

                    {/*mpb */}
                    <Link to={'/Categoria/mpb'} className='flex gap-13 md:gap-70 pl-[15px]  items-center bg-[#FFD93D] rounded-[8px] overflow-hidden md:min-w-[450px] md:min-h-[100px]'>
                        <h2 className='text-[green] text-[20px] md:text-[32px] font-[Inter] font-light'>Mpb</h2>
                        <img src={buildUrl("/assets/categorias/Mpb.png")} alt=""
                        className={`rotate-335 ml-[10px]  min-h-[70px]`}
                        />
                    </Link>
                </section>
            </section>
        </main>
    )
}

export default BuscarPage