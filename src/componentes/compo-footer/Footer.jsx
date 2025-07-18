import { Link } from "react-router-dom"

const Footer = () => {
    return (
      <footer className="bg-transparent w-full fixed bottom-0 left-0 z-40">
        <section className="flex justify-between px-4 py-2 bg-black/70">
          <Link to={'/spotify/'} className="flex flex-col items-center gap-1">
            <img src="/spotify/assets/emAlta/footer/home.png" alt="" className="max-h-[30px]" />
            <p className="font-[Inter] font-medium text-white text-[14px]">Início</p>
          </Link>
  
          <div className="flex flex-col items-center gap-1">
            <img src="/spotify/assets/emAlta/footer/Search.png" alt="" className="max-h-[30px]" />
            <p className="font-[Inter] font-medium text-white text-[14px]">Buscar</p>
          </div>
  
          <div className="flex flex-col items-center gap-1">
            <img src="/spotify/assets/emAlta/footer/biblioteca.png" alt="" className="max-h-[30px]" />
            <p className="font-[Inter] font-medium text-white text-[14px]">Sua Biblioteca</p>
          </div>
  
          <div className="flex flex-col items-center gap-1">
            <img src="/spotify/assets/emAlta/footer/spotify.png" alt="" className="max-h-[30px]" />
            <p className="font-[Inter] font-medium text-white text-[14px]">Premium</p>
          </div>
        </section>
      </footer>
    )
  }
  
  export default Footer
