import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {Link} from 'react-router-dom'

const Header = () => {

    const [open, setOpen] = useState(false);

    const toggle = () => setOpen(!open)


    return(
        <header className="fixed w-full z-50">

            {/*Versão mobile */}

            <section className="p-2 bg-[#0D0D0D] flex items-center justify-between md:hidden"
            >
                
                <Link to={'/'} className="flex items-center text-[white]">
                    <img src="/assets/mobile/LogoMobile.webp" alt=""
                    className="max-w-[50px]"
                    />
                    <h2 className="font-[Inter] ">Spotify</h2>
                </Link>

               
                {/* */}
                <section className="flex gap-1">
                <button className="max-w-[100px] max-h-[40px] bg-[white] border-2 px-3 rounded-[20px]
                 text-[13px] text-[black] font-[Inter] font-bold">Abrir o app</button>

                    <img src="/assets/mobile/HamburguerMenu.png" alt="" 
                    className="max-h-[36.5px]"
                    onClick={toggle}
                    />

                    <AnimatePresence>
                    {open && (
                        <motion.div key={"menu"}
                        initial={{opacity:0, x: 50}}
                        animate={{opacity:1, x:0}}
                        exit={{opacity:0, x:50}}
                        transition={{duration: 0.25}}

                        className="fixed inset-0 bg-[#1A1A1A] bg-opacity-80 text-gray-300 flex flex-col p-8 z-50">
                            
                            {/* Botão */}
                            <section className="flex justify-end"
                             onClick={toggle}
                            >
                                <img src="/assets/mobile/X.png" alt=""
                                className="max-w-[50px] max-h-[50px]"
                                />
                            </section>

                            {/*login - Cadastro */}
                            <section className="flex flex-col gap-5 mt-[25px]">
                                <h2 className="font-[Inter] font-bold text-[22px]">
                                    Entre
                                </h2>

                                <h2 className="font-[Inter] font-bold text-[22px]">Inscreva-se</h2>

                                <h2 className="font-[40px] ">-</h2>
                            </section>

                            {/*Categorias */}

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


            <section className="bg-[#0D0D0D]">
                
            </section>
            
        </header>
    )
}

export default Header