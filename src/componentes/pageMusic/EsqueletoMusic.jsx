import { Link, useParams } from 'react-router-dom';
import EmAlta from '../../musicas/EmAlta.json';
import Recomendados from '../compo-main/recomendado';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Contatos from '../compo-main/Contato'
import LeftSide from '../Homepage/LeftSide';

const EsqueletoMusic = () => {
  const { id } = useParams();
  const musica = EmAlta.find((m) => m.id === id);

  const base = import.meta.env.BASE_URL; // ex: '/spotify/'

  const [coracao, setCoracao] = useState(false);
  const [setting, setSetting] = useState(false);
  const [tocando, setTocando] = useState(false);





  const toggle = () => setCoracao(!coracao);
  const toggle2 = () => setSetting(!setting);

  const handleClick = () => {
    toggle();
    toggle2();
  };

  const audioRef = useRef(null);

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (audioRef.current.paused) {
      audioRef.current.volume = 0.05;
      audioRef.current.play();
      setTocando(true);
    } else {
      audioRef.current.pause();
      audioRef.current.volume = 0.05;
      setTocando(false);
    }
  };

  // Função para montar URL completa considerando base e limpando barras extras
  const buildUrl = (path) => {
    if (!path) return '';
    return `${base}${path.replace(/^\/+/, '')}`;
  };

    // Set apenas estético. Feito para quando eu dar o hover, mudar a imagem do CURTIR e compartilhar

    const [coracao2, setCoracao2] = useState(buildUrl('/assets/emAlta/icons8-coração-48.png'));

    const [compartilhar, setCompartilhar] = useState(buildUrl('/assets/emAlta/icons8-compartilhar-24.png'));

  if (!musica) {
    return <p className="text-white">Música não encontrada.</p>;
  }

  return (
    <div className='flex'>
      <LeftSide/>
<main>
<section className=' min-w-[350px] md:min-w-[1500px] md:mx-auto'>
        <div>
          <section
            className="pt-[80px] pb-4"
            style={{ background: `linear-gradient(to bottom, ${musica.cor}, #1A1717)` }}
          >
            <div className="flex mx-auto  justify-center md:items-center  md:justify-normal">
              <img src={buildUrl(musica.image)} alt={musica.titulo} className="mt-6 md:ml-[55px] md:min-h-[180px]" />

              {/*Desktop -  Nome da banda/musica*/}
              <div className=' hidden md:flex md:flex-col'>
                  {/*titulo na versão de Desktop */}
                <h1 className=" mt-4 ml-4 md:ml-[55px] font-[Inter] font-bold
                text-[22px] md:text-[70px] text-[white]">
                {musica.titulo}
                </h1>

                <Link to={`/artista/${musica.id}`}
                className=' font-[Inter] font-bold
                text-[14px] text-[white] md:ml-[55px] hover:underline'
                >{musica.bandaNome}</Link>
              </div>
            

            </div>

            {/*titulo no mobile */}
            <h1 className="md:hidden mt-4 ml-4 md:ml-[55px] font-[Inter] font-bold text-[22px] text-[white]">
              {musica.titulo}
            </h1>

            
            <section className="flex md:hidden items-center gap-2.5 ml-4">
              <img
                src={buildUrl(musica.imageBanda)}
                alt={musica.bandaNome}
                className="max-h-[30px]  mt-1.5 rounded-[50%]"
              />
              <h3 className="mt-1.5 font-[Inter] font-medium text-[12.5px] text-[white]">
                {musica.bandaNome}
              </h3>
            </section>

            <section className="flex gap-0.5 items-center mt-1 md:mt-[10px] ml-4 md:ml-[55px]">
              <h3 className="font-[Montserrat] text-[gray] text-[12px]">{musica.titulo}</h3>
              <p className="text-[gray]">.</p>
              <h3 className="font-[Montserrat] text-[gray] text-[12px]">{musica.ano}</h3>
              <p className="text-[gray]">.</p>
              <h3 className="font-[Montserrat] text-[gray] text-[12px]">{musica.tempo}</h3>
            </section>

            <section className="flex items-center justify-between mt-1">
              <section className="flex gap-2.5 ml-4 md:ml-[55px]">
                <div>
                  <img
                    src={buildUrl('/assets/emAlta/icons8-coração-48.png')}
                    alt="Favoritar"
                    className="max-h-[25px]"
                    onClick={toggle}
                  />

                  {/*Se clicar no coração, ele renderiza essa parte do like */}
                  <AnimatePresence>
                    {coracao && (
                      <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 50 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 h-screen z-50"
                        style={{
                          background: `linear-gradient(to bottom, ${musica.cor}, black)`
                        }}
                      >
                        <div className="h-full">
                          <div className="flex justify-center pt-[190px]">
                          <img
                            src={buildUrl(musica.imageBanda)}
                            alt={musica.bandaNome}
                            className="max-h-[170px] min-h-[150px] mb-[15px] rounded-[50%] md:rounded-none"
                          />

                          </div>

                          <div className="flex flex-col">
                            <h2 className="mt-4 mx-auto font-[Inter] font-extrabold text-[18px] md:text-[25px] text-white">
                              Escute com uma conta <br />
                              gratuita do Spotify
                            </h2>

                            <button className="mt-4 p-4 bg-[#1ED760] rounded-[80px] max-w-[200px] mx-auto hover:transform hover:scale-[1.05] duration-120">
                              Inscreva-se grátis
                            </button>

                            <Link to={'/Assinante'} className="mx-auto mt-2 p-3 text-white text-[14.5px] border border-gray rounded-[80px] max-w-[150px] hover:transform hover:scale-[1.05] duration-120">
                              Baixe o app
                            </Link>

                            <h3 className="mx-auto mt-4 text-[gray] text-[15.6px]">
                              Já tem uma conta? 
                              <span className="text-white hover:text-[17px] hover:underline duration-120">Entrar</span>
                            </h3>

                            <p
                              className="mt-[10px] font-[Inter] font-bold text-[gray] text-[20px] mx-auto hover:border-b-[2px] hover:pb-[3px] hover:text-[white] duration-300"
                              onClick={toggle}
                            >
                              fechar
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div 
                onMouseEnter={() => 
                  setCompartilhar(buildUrl('/assets/emAlta/CompartilharWhite.png'))
                }

                onMouseLeave={() => 
                  setCompartilhar(buildUrl('/assets/emAlta/icons8-compartilhar-24.png'))
                }
                >
                  <img
                    src={compartilhar}
                    alt="Compartilhar"
                    className="max-h-[25px]"
                  />
                </div>

                <div>
                  <img
                    src={buildUrl('/assets/emAlta/icons8-menu-2-30.png')}
                    alt="Menu"
                    className="max-h-[25px]"
                    onClick={toggle2}
                  />

                  {/*Se clicar nos settings, ele renderiza essa parte. */}
                  {setting && (
                    <div className="h-screen inset-0 z-50 fixed bg-black opacity-85">
                      <div className="flex gap-4 mt-20 ml-5 items-center md:justify-center md:mt-[200px] md:ml-0">
                        <img src={buildUrl(musica.image)} alt="" className="max-h-[80px]
                        md:min-h-[120px]
                        " />

                        <div>
                          <h2 className="text-[white] font-[Inter] font-bold
                          md:text-[18px]
                          ">{musica.titulo}</h2>
                          <h3 className="text-[gray]  md:text-[24px] font-[Inter] font-bold">{musica.bandaNome}</h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-5 ml-5 md:justify-center  md:mt-[50px] md:ml-0 hover:transform hover:scale-[1.05] duration-120"
                      onClick={handleClick}
                      onMouseEnter={ () => 
                        setCoracao2(buildUrl('/assets/emAlta/CoracaoWhite.png'))
                      }

                      onMouseLeave={ () => 
                        setCoracao2(buildUrl('/assets/emAlta/icons8-coração-48.png'))
                      }
>
                        <img
                          src={coracao2}
                          alt=""
                          className="max-h-[35px]"
                        />
                        <h2
                          className="font-[Inter] font-bold text-[white]
                          "
                        >
                          Curtir
                        </h2>
                      </div>

                      <div className="flex items-center gap-2 mt-5 ml-5 md:justify-center  md:ml-0 hover:transform hover:scale-[1.05] duration-120"
                       onMouseEnter={() => 
                        setCompartilhar(buildUrl('/assets/emAlta/CompartilharWhite.png'))
                      }
      
                      onMouseLeave={() => 
                        setCompartilhar(buildUrl('/assets/emAlta/icons8-compartilhar-24.png'))
                      }
                      >
                        <img
                          src={compartilhar}
                          alt=""
                          className="max-h-[30px]"
                        />
                        <h2 className="font-[Inter] font-bold text-[white]">Compartilhar</h2>
                      </div>

                      <div className="absolute bottom-5 left-35 w-full
                      md:flex md:justify-center md:left-0">
                        <h2
                          className="font-[Inter] font-bold text-[white]"
                          onClick={toggle2}
                        >
                          Fechar
                        </h2>
                      </div>
                    </div>
                  )}
                </div>
              </section>

              <button
                className="mr-6 p-4.5 rounded-[50%] bg-[#1ED760]"
                onClick={togglePlayPause}
                aria-label={tocando ? 'Pausar música' : 'Tocar música'}
              >
                <img
                  src={
                    tocando
                      ? buildUrl('/assets/emAlta/Pause.png')
                      : buildUrl('/assets/emAlta/Player.png')
                  }
                  alt={tocando ? 'Pausar' : 'Tocar'}
                  className="max-h-[25px]"
                />
              </button>

              <audio ref={audioRef} src={buildUrl(musica.audio)} />
            </section>
          </section>
          
          {/*Parte dos artistas, apenas mobile*/}
          <section className="bg-[#1A1717] pl-4 pb-2 ">
            <Link to={`/artista/${musica.id}`} className='md:hidden' >
              <section className="flex items-center gap-2 pt-4">
                <img
                  src={buildUrl(musica.imageBanda)}
                  alt={musica.titulo}
                  className="max-h-[72px] rounded-[50%]"
                />
                <section className="flex flex-col">
                  <h3 className="text-[white] text-[12px]">Artista</h3>
                  <h2 className="text-[white] text-[18px]">{musica.bandaNome}</h2>
                </section>
              </section>
            </Link>

            <section className="mt-5 md:mt-0">
              <h2 className="font-bold font-[Inter] text-[white] text-[14px]">
                Recomendações com base nesta música
              </h2>

              <Recomendados />
            </section>
              
              {/*Contato de baixo */}
              <Contatos/>

              {/*Mobile - copyright fake */}
            <section className='hidden md:flex md:justify-center md:border-t-[1px] md:text-[white]'>
              <p className=' font-[Inter] text-[white]'>------</p>
            </section>

          </section>
        </div>
      </section>
    </main>
    </div>
  );
};

export default EsqueletoMusic;
