import { Link, useParams } from 'react-router-dom'
import EmAlta from '../../musicas/EmAlta.json'

const Populares = () => {

    const {id} = useParams();
    const musica = EmAlta.find((m) => m.id === id)
    const musicaCantor = EmAlta.filter((m) => m.bandaNome === musica?.bandaNome)

    const StrParaNumber = (strs) => Number(strs.replace(/\./g, ''))


    const musicaOrdem = musicaCantor.sort(
        (a,b) => {
            return StrParaNumber(b.visualizacoes) - StrParaNumber(a.visualizacoes)
        })
        .slice(0,3)

    return(
       <main>
        <section className='mt-2 ml-4 pb-4'>
            <h2 className=' font-[Inter] font-bold text-[white] text-[14px] border-[gray] '>Lançamentos Populares</h2>

            {musicaOrdem.map((itens) => (
                <Link to={`/musica/${itens.id}`}>
                    <div className='flex gap-2 mt-4 items-center'>
                        <img src={itens.image} alt="" 
                        className='max-h-[75px]'
                        />
                        
                        <section className='flex flex-col'>
                            <h2 className=' font-[Inter] font-bold text-[white] text-[12.5px] border-[gray] '>{itens.titulo}</h2>

                            <p className=' font-[Inter] font-bold text-[gray] text-[12.5px] border-[gray] '>{itens.visualizacoes}</p>
                        </section>
                    </div>         
                </Link>
            ))}

        </section>
       </main>
    )   
}

export default Populares