import { Outlet } from 'react-router-dom'
import Header from '../componentes/header'


const LayPadrao = () => {

    return(
        <>
        <Header/>
         <Outlet/>
        </>
    )
}

export default LayPadrao