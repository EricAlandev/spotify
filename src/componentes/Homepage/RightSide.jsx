import ArtistasPopulares from '../compo-main/ArtistasPopulares'
import Contato from '../compo-main/Contato'
import MusicaAlta from '../compo-main/MusicaAlta'
import PopUp from '../PopUp'

const RightSide = () =>{

    return(
        <main className='bg-[#121212] min-w-[425px]'>
            <PopUp/>
            <MusicaAlta/>
            <ArtistasPopulares/>
            <Contato/>
        </main>
    )
}

export default RightSide