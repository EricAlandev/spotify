import { Outlet } from 'react-router-dom'
import Header from '../componentes/header'
import Footer from '../componentes/compo-footer/Footer'


const LayPadrao = () => {

    return(
        <div className=' bg-[#0D0D0D]'>
         <Header/>
         <Outlet/>
         <Footer/>
        </div>
    )
}

export default LayPadrao