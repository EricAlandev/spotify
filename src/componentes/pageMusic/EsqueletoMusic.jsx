import { Link, useParams } from 'react-router-dom';
import EmAlta from '../../musicas/EmAlta.json';
import Recomendados from '../compo-main/recomendado';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EsqueletoMusic = () => {
  const { id } = useParams();
  const musica = EmAlta.find((m) => m.id === id);

  const [coracao, setCoracao] = useState(false);
  const [setting, setSetting] = useState(false);
  const [tocando, setTocando] = useState(false);

  const toggle = () => setCoracao(!coracao);
  const toggle2 = () => setSetting(!setting);

  const handleClick = () => {
    toggle();
    setSetting(false);
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

  return (
    <main>
      <section>
        <div>
          <section
            className="pt-[80px] pb-4"
            style={{ background: `linear-gradient(to bottom, ${musica.cor}, #1A1717)` }}
          >
            <div className="flex mx-auto justify-center">
              <img src={musica.image} alt={musica.titulo} className="mt-6" />
            </div>

            <h1 className="mt-4 ml-4 font-[Inter] font-bold text-[22px] text-[white]">
              {musica.titulo}
            </h1>

            <section className="flex items-center gap-2.5 ml-4">
              <img
                src={musica.imageBanda}
                alt={musica.bandaNome}
                className="max-h-[30px] mt-1.5 rounded-[50%]"
              />
              <h3 className="mt-1.5 font-[Inter] font-medium text-[12.5px] text-[white]">
                {musica.bandaNome}
              </h3>
            </section>

            <section className="flex gap-0.5 items-center mt-1 ml-4">
              <h3 className="font-[Montserrat] text-[gray] text-[12px]">{musica.titulo}</h3>
              <p className="text-[gray]">.</p>
              <h3 className="font-[Montserrat] text-[gray] text-[12px]">{musica.ano}</h3>
              <p className="text-[gray]">.</p>
              <h3 className="font-[Montserrat] text-[gray] text-[12px]">{musica.tempo}</h3>
            </section>

            <section className="flex items-center justify-between mt-1">
              <section className="flex gap-2.5 ml-4">
                <div>
                  <img
                    src="/spotify/assets/emAlta/icons8-coração-48.png"
                    alt="Favoritar"
                    className="max-h-[25px]"
                    onClick={toggle}
                  />

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
                            <img src={musica.image} alt="" className="max-h-[150px]" />
                          </div>

                          <div className="flex flex-col">
                            <h2 className="mt-4 mx-auto font-[Inter] font-extrabold text-[18px] text-white">
                              Escute com uma conta <br />
                              gratuita do Spotify
                            </h2>

                            <button className="mt-4 p-4 bg-[#1ED760] rounded-[80px] max-w-[200px] mx-auto">
                              Inscreva-se grátis
                            </button>

                            <button className="mx-auto mt-2 p-3 text-white text-[14.5px] border border-gray rounded-[80px] max-w-[150px]">
                              Baixe o app
                            </button>

                            <h3 className="mx-auto mt-4 text-[gray] text-[15.6px]">
                              Já tem uma conta? <span className="text-white">Entrar</span>
                            </h3>

                            <p
                              className="mt-[10px] font-[Inter] font-bold text-[gray] text-[20px] mx-auto"
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

                <div>
                  <img
                    src="/spotify/assets/emAlta/icons8-compartilhar-24.png"
                    alt="Compartilhar"
                    className="max-h-[25px]"
                  />
                </div>

                <div>
                  <img
                    src="/spotify/assets/emAlta/icons8-menu-2-30.png"
                    alt="Menu"
                    className="max-h-[25px]"
                    onClick={toggle2}
                  />

                  {setting && (
                    <div className="h-screen inset-0 z-50 fixed bg-black opacity-85">
                      <div className="flex gap-4 mt-20 ml-5 items-center">
                        <img src={musica.image} alt="" className="max-h-[80px]" />

                        <div>
                          <h2 className="text-[white] font-[Inter] font-bold">{musica.titulo}</h2>
                          <h3 className="text-[gray] font-[Inter] font-bold">{musica.bandaNome}</h3>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 mt-5 ml-5">
                        <img
                          src="/spotify/assets/emAlta/icons8-coração-48.png"
                          alt=""
                          className="max-h-[35px]"
                        />
                        <h2
                          className="font-[Inter] font-bold text-[white]"
                          onClick={handleClick}
                        >
                          Curtir
                        </h2>
                      </div>

                      <div className="flex items-center gap-2 mt-5 ml-5">
                        <img
                          src="/spotify/assets/emAlta/icons8-compartilhar-24.png"
                          alt=""
                          className="max-h-[30px]"
                        />
                        <h2 className="font-[Inter] font-bold text-[white]">Compartilhar</h2>
                      </div>

                      <div className="absolute bottom-5 left-35">
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
                      ? '/spotify/assets/emAlta/Pause.png'
                      : '/spotify/assets/emAlta/Player.png'
                  }
                  alt={tocando ? 'Pausar' : 'Tocar'}
                  className="max-h-[25px]"
                />
              </button>

              <audio ref={audioRef} src={musica.audio} />
            </section>
          </section>

          <section className="bg-[#1A1717] pl-4 pb-2">
            <Link to={`/artista/${musica.id}`}>
              <section className="flex items-center gap-2 pt-4">
                <img
                  src={musica.imageBanda}
                  alt={musica.titulo}
                  className="max-h-[72px] rounded-[50%]"
                />
                <section className="flex flex-col">
                  <h3 className="text-[white] text-[12px]">Artista</h3>
                  <h2 className="text-[white] text-[18px]">{musica.bandaNome}</h2>
                </section>
              </section>
            </Link>

            <section className="mt-5">
              <h2 className="font-bold font-[Inter] text-[white] text-[14px]">
                Recomendações com base nesta música
              </h2>

              <Recomendados />
            </section>
          </section>
        </div>
      </section>
    </main>
  );
};

export default EsqueletoMusic;
