import LeftSide from '../componentes/Homepage/LeftSide'
import RightSide from '../componentes/Homepage/RightSide'


const HomePage = () =>{

    return(
        <main className='flex gap-4 bg-[black]'>
            <LeftSide/>
            <RightSide/>
        </main>
    )
}

export default HomePage