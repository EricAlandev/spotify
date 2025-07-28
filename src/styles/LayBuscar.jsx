import { Outlet } from 'react-router-dom'
import Header from '../componentes/header'
import Footer from '../componentes/compo-footer/Footer'


const LayPadrao = () => {

    return(
        <>
         <Outlet/>
         <Footer/>
        </>
    )
}

export default LayPadrao