import ArtistasPopulares from '../componentes/compo-main/ArtistasPopulares'
import Contato from '../componentes/compo-main/Contato'
import MusicaAlta from '../componentes/compo-main/MusicaAlta'
import PopUp from '../componentes/PopUp'

const HomePage = () =>{

    return(
        <main className='bg-[#121212]'>
            <PopUp/>
            <MusicaAlta/>
            <ArtistasPopulares/>
            <Contato/>
        </main>
    )
}

export default HomePage