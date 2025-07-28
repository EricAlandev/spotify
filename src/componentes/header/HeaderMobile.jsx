import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";


const HeaderMobile = () => {

    const base = import.meta.env.BASE_URL || "";

// Função para construir URL completa a partir da base
const buildUrl = (path) => {
  if (!path) return "";
  return `${base}${path.replace(/^\/+/, "")}`;
};

const [open, setOpen] = useState(false);
const toggle = () => setOpen(!open);


    return(
        <header>
            {/*Header mobile */}
                <section className="p-2 bg-[#0D0D0D] flex items-center justify-between md:hidden">
                    <Link to={"/"} className="flex items-center text-[white] md:hidden">
                    <img
                        src={buildUrl("/assets/mobile/LogoMobile.webp")}
                        alt="Logo Spotify"
                        className="max-w-[50px]"
                    />
                    <h2 className="font-[Inter] ">Spotify</h2>
                    </Link>

                    <section className="flex gap-1">
                    <button className="max-w-[100px] max-h-[40px] bg-[white] border-2 px-3 rounded-[20px] text-[13px] text-[black] font-[Inter] font-bold">
                        Abrir o app
                    </button>

                    <img
                        src={buildUrl("/assets/mobile/HamburguerMenu.png")}
                        alt="Menu"
                        className="max-h-[36.5px]"
                        onClick={toggle}
                    />

                    <AnimatePresence>
                        {open && (
                        <motion.div
                            key={"menu"}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 50 }}
                            transition={{ duration: 0.25 }}
                            className="fixed inset-0 bg-[#1A1A1A] bg-opacity-80 text-gray-300 flex flex-col p-8 z-50"
                        >
                            <section className="flex justify-end" onClick={toggle}>
                            <img
                                src={buildUrl("/assets/mobile/X.png")}
                                alt="Fechar"
                                className="max-w-[50px] max-h-[50px]"
                            />
                            </section>

                            <section className="flex flex-col gap-5 mt-[25px]">
                            <h2 className="font-[Inter] font-bold text-[22px]">Entre</h2>
                            <h2 className="font-[Inter] font-bold text-[22px]">Inscreva-se</h2>
                            <h2 className="font-[40px]">-</h2>
                            </section>

                            <section className="flex flex-col gap-5 mt-[25px]">
                            <h2 className="font-[Inter] font-bold text-[22px]">Premium</h2>
                            <h2 className="font-[Inter] font-bold text-[22px]">Ajuda</h2>
                            <h2 className="font-[Inter] font-bold text-[22px]">Baixar</h2>
                            <h2 className="font-[Inter] font-bold text-[22px]">Privacidade</h2>
                            <h2 className="font-[Inter] font-bold text-[22px]">Condições</h2>
                            </section>
                        </motion.div>
                        )}
                    </AnimatePresence>
                    </section>
                </section>
        </header>
    )
}

export default HeaderMobile