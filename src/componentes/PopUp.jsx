import { useState } from "react";

const PopUp = () => {
  const [open, setOpen] = useState(true);

  const toggle = () => setOpen(false);

  return (
    <main className="md:hidden pt-[80px] bg-[#121212]  pb-4 flex items-center justify-center">
        {open && (
          <div 
            className="xs:min-w-[150px] xs:max-w-[150px]  sm:min-w-[360px] bg-[#2A2A2A] text-white p-6 rounded-[25px] "
          >
            {/* Logo + X fechar */}
            <section className="flex justify-between items-center mb-4">
              <section className="flex items-center gap-1.5">
                <img
                    src="/spotify/assets/mobile/LogoMobileVerde.png"
                    alt="Logo"
                    className="max-w-[50px] max-h-[30px]"
                />

                <h2 className="text-[#4BAF50] text-[13.5px] font-semibold">Premium</h2>
              </section>

              <img
                src="/spotify/assets/mobile/X.png"
                alt="Fechar"
                className="max-w-[30px] max-h-[30px] cursor-pointer"
                onClick={toggle}
              />
            </section>

            {/* Título + descrição */}
            <section className=" mb-4">
              <h2 className="text-[15.5px] font-[Inter] font-bold">
                Ouça sem limites. <br />
                Experimente o Premium <br />
                durante 2 meses por R$1,99.
              </h2>

              <p className="mt-2.5 text-[12.5px]">
                Depois, apenas R$21,90/mês. Cancele quando quiser.
              </p>
            </section>

            {/* Botões */}
            <section className="flex items-center  gap-6 mb-4">
              <button className="max-w-[150px] max-h-[45px] bg-[#1ED760] hover:bg-green-700 font-[Inter] font-bold text-[black] text-[10.5px] py-2 px-4.5 rounded-[20px] mb-2">
                Experimente 2 meses <br />
                por R$1,99
              </button>

              <p className="text-center font-[Inter] font-bold text-[11px]  cursor-pointer">
                Ver todos os <br /> planos
              </p>
            </section>

            {/* Subdescrição */}
            <section className="leading-[17px] text-[10.5px] text-gray-400">
              <p>
                Apenas para o Premium Individual. R$1,99 por 2 meses, <br />
                depois R$21,90 por mês. Oferta disponível apenas para <br />
                quem nunca teve o Premium. <span className="underline">Sujeito a Termos.</span> <br />
                A oferta termina no dia 20 de julho de 2025.
              </p>
            </section>
          </div>
        )}
    </main>
  );
};

export default PopUp;
