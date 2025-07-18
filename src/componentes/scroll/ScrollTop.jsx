import { useEffect } from "react"
import { useLocation } from "react-router-dom"

const ScrollTop = () => {

    const {pathname} = useLocation();

    {/*Feito para sempre que a url mudar (pathname), ele dar scrollTo(0,0). Reseta a page */}
    useEffect( () => {
        window.scrollTo(0,0)
    }, [pathname])

    return null
}

export default ScrollTop