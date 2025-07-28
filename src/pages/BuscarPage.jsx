
import { Link } from 'react-router-dom';

const BuscarPage = () => {

    const base = import.meta.env.BASE_URL || "";

  const buildUrl = (path) => {
    if (!path) return "";
    return `${base}${path.replace(/^\/+/, "")}`;
  };

    
    return(
        
        <main className="h-screen pl-[20px] bg-[#0D0D0D] relative">

            <section className=" mr-[15px]">
                <h2 className=" pt-[45px] mb-3.5 font-[Inter] font-bold text-[25px] text-[white]" >Buscar</h2>

                {/*ícone da lupa */}
                <img
              src={buildUrl("/assets/emAlta/footer/Search.png")}
              alt="Buscar"
              className="max-h-[26px] border-r-[1px] border-[gray] 
              absolute bottom-176 left-8
              "
            />          

                <label htmlFor="busca"></label>
                <input type="text" name="busca" id="busca" placeholder="O que você quer ouvir?"
                className="w-full  pt-2.5 pl-[45px]  pb-2.5 pr-2.5 bg-[white] rounded-[8px] outline-none"
                />
            </section>


            <section className='mr-[16px]'>
                <h2 className=" pt-[30px] mb-3.5 font-[Inter] font-bold text-[15px] text-[white]">Navegar por todas as seções</h2>

                {/*Seções */}
                <section className="grid grid-cols-2 gap-4 grid-rows-2 mt-[20px] text-[white]">

                    {/*Kpop */}
                    <Link to={'/Categoria/kpop'} className='flex gap-13 pl-[15px]  items-center bg-[#43C5A7] rounded-[8px] min-h-[75px] overflow-hidden'> 
                            <h2 className='text-[20px] font-[Inter] font-light'>Kpop</h2>
                            <img src={buildUrl("/assets/categorias/Kpop.png")} alt=""
                            className={`rotate-335 min-h-[70px]`}
                            />
                    </Link>

                    {/*trap */}
                    <Link to={'/Categoria/trap'} className='flex gap-13 pl-[15px]  items-center bg-[#FFA64D] rounded-[8px] overflow-hidden '>
                        <h2 className='text-[20px] font-[Inter] font-light'>Trap</h2>
                        <img src={buildUrl("/assets/categorias/Trap.png")} alt=""
                        className={`rotate-335 ml-[10px] min-h-[65px]`}
                        />
                    </Link>

                    {/*evangelico */}
                    <Link to={'/Categoria/evangelico'} className='flex gap-2 pl-[15px] items-center bg-[#F3F3F3] rounded-[8px] overflow-hidden'>
                        <h2 className=' text-[black] text-[16px] font-[Inter] font-medium'>Evangélico</h2>
                        <img src={buildUrl("/assets/categorias/igreja.png")} alt=""
                        className={`rotate-330 ml-[2px]  min-h-[70px]`}
                        />
                    </Link>

                    {/*mpb */}
                    <Link to={'/Categoria/mpb'} className='flex gap-13 pl-[15px]  items-center bg-[#FFD93D] rounded-[8px] overflow-hidden'>
                        <h2 className='text-[green] text-[20px] font-[Inter] font-light'>Mpb</h2>
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