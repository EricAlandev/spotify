import ArtistasPopulares from '../compo-main/ArtistasPopulares'
import Contato from '../compo-main/Contato'
import MusicaAlta from '../compo-main/MusicaAlta'
import PopUp from '../PopUp'

const RightSide = () =>{

    return(
        <main className='bg-[#121212] min-w-[445px] '>
            <PopUp/>
            <MusicaAlta/>
            <ArtistasPopulares/>
            <div className='ml-7'>
                <Contato/>
            </div>
        </main>
    )
}

export default RightSide