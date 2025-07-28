import Beneficios from '../componentes/assinante/Beneficios'
import Contato from '../componentes/compo-main/Contato'


const base = import.meta.env.BASE_URL || "";

const buildUrl = (path) => {
  if (!path) return "";
  return `${base}${path.replace(/^\/+/, "")}`;
};


const LoginPage = () => {

    return( 
       <main className="pt-[60px] h-screen">
          {/*Hero - mobile*/}
          <section className=" min-h-[200px] max-h-[400px] pt-[50px]  pl-4  pr-4 bg-gradient-to-b from-[#7B6769] to-[#0D0D0D] md:hidden">
            
            <img
              src={buildUrl("/assets/Assinante/MusicPhoto.png")}
              alt="Buscar"
              className="mx-auto mb-[25px] max-h-[150px] p-2 bg-[#FFFFFF] rounded-[50%]
              md:min-h-[110px]
              "
            />          

             <h2 className="pb-[15px]  text-[28px] text-[white] font-[Inter] font-bold 
             leading-[32px] text-center md:text-[40px] md:leading-[40px]">Ouça sem limites. <br />
              Curta 1 mês de <br />
             Premium Individual <br />
             por R$ 0.
             </h2>
          </section>

          {/*Hero - Desktop*/}
<section className="hidden md:flex md:items-center md:justify-center md:min-h-[400px] pt-[50px] px-4 bg-gradient-to-b from-[#7B6769] to-[#0D0D0D]">
  <div className="flex gap-6 items-center">
    <img
      src={buildUrl("/assets/Assinante/MusicPhoto.png")}
      alt="Buscar"
      className="max-h-[150px] p-2 bg-white rounded-full md:hidden"
    />

    <div className="flex flex-col gap-4">
      <h2 className="text-[28px] text-white font-[Inter] font-bold leading-[32px] md:text-[50px] md:leading-[47px] ">
        Ouça sem limites. <br />
        Curta 1 mês de <br />
        Premium Individual <br />
        por R$ 0.
      </h2>

      <h3 className="text-[16px] text-white font-[Inter] font-medium leading-[24px]">
        Depois, apenas R$ 21,90/mês. Cancele quando quiser.
      </h3>

      <div className="flex flex-col md:flex-row gap-4">
        <button className="min-w-[200px] bg-[#FFD2D7] p-3 text-black font-[Inter] font-bold rounded-[20px] hover:transform md:hover:scale-[1.05] duration-120">
          Comece Agora
        </button>
        <button className="min-w-[200px] bg-black p-3 text-white font-[Inter] font-bold rounded-[20px] border border-white hover:transform md:hover:scale-[1.05] duration-120">
          Ver todos os planos
        </button>
      </div>

      <p className="text-white text-[12px] font-[400]">
        R$ 0 por 1 mês, depois R$ 21,90 por mês. Oferta disponível <br />
        apenas para quem nunca teve o Premium. <span className="underline">Sujeito a Termos.</span>
      </p>
    </div>

    <img
      src={buildUrl("/assets/Assinante/MusicPhoto.png")}
      alt="Buscar"
      className="max-h-[150px] p-2 bg-white rounded-full md:min-h-[120px]"
    />
  </div>
</section>

        
          {/*Abaixo do hero */}
          <section className="min-h-[150px] pl-4 pr-4  bg-[#0D0D0D] md:hidden">
                <h2 className="pb-[15px]   text-[16px] text-[white] font-[Inter] font-medium
             leading-[32px] md:text-center">Depois, apenas R$ 21,90/mês. Cancele <br />
                quando quiser.
                </h2>

                <div className="flex flex-col pt-4 pb-4 gap-4 ">
                    <button className="min-w-[300px] mx-auto bg-[#FFD2D7] p-3 text-[black] font-[Inter] fon-bold rounded-[20px] 
                    ">
                        Comece Agora
                    </button>

                    <button className="min-w-[300px] mx-auto bg-[black] p-3 text-[white] font-[Inter] fon-bold rounded-[20px] border-[0.5px]">
                        Ver todos os planos
                    </button>

                    <p className="mx-auto text-[white] text-[12px] font-[400] ">R$ 0 por 1 mês, depois R$ 21,90 por mês. Oferta diponível <br />
                    apenas para quem nunca teve o Premium <span className="underline">Sujeito a Termos.</span>
                    </p>
                </div>
                

          </section>

          {/*Experimente*/}
          <section className="min-h-[150px] pl-4 pr-4 max-h-screen bg-[#0D0D0D]">
               <h2 className="  text-center pt-[25px] md:pt-[50px]  text-[white] text-[26px] font-bold leading-none md:text-[35px]">Experimente a <br /> diferença</h2>

               <h3 className=" text-center pt-[25px]  text-[white] text-[18px] font-medium leading-none">Seja Premium e tenha controle total <br />
               da sua conta. Cancele quando quiser.</h3>
          </section>


          {/*Sobre Planos*/}
         <section className="min-h-[150px] pt-[15px] md:pt-[50px] pl-4 pr-4 max-h-screen bg-[#0D0D0D]">
               <div className="flex gap-14.5 md:gap-20 md:justify-center text-[white]">
                 <h2 className="max-w-[100px] mt-[90px] mb-[10px]">Benefícios</h2>
                 
                 <div className='flex flex-col '>
                        {/*Planos a direita de benefícios*/}
                     <div className="flex gap-19.5">
                        <h2 className="max-w-[50px]">Plano Free do Spotify</h2>
                        <h2 className="max-w-[50px]">Planos Premium do Spotify</h2>
                     </div>
                     
                     
                 </div>
               </div>

                {/*Planos com os children*/}
               <div className='pb-[15px] '>
                  <Beneficios 
                           sem={buildUrl("/assets/Assinante/Traco.png")}
                           com={buildUrl("/assets/Assinante/Correto.png")}
                           beneficio={"Música sem anúncios"}
                           /> 


                        <Beneficios 
                           sem={buildUrl("/assets/Assinante/Traco.png")}
                           com={buildUrl("/assets/Assinante/Correto.png")}
                           beneficio={"Baixe pra ouvir no modo offline"}
                           /> 

                        <Beneficios 
                           sem={buildUrl("/assets/Assinante/Traco.png")}
                           com={buildUrl("/assets/Assinante/Correto.png")}
                           beneficio={"Ouça músicas na ordem que quiser"}
                           /> 

                        <Beneficios 
                           sem={buildUrl("/assets/Assinante/Traco.png")}
                           com={buildUrl("/assets/Assinante/Correto.png")}
                           beneficio={"áudio de qualidade alta"}
                           /> 

                        <Beneficios 
                           sem={buildUrl("/assets/Assinante/Traco.png")}
                           com={buildUrl("/assets/Assinante/Correto.png")}
                           beneficio={"Possibilidade de ouvir com os amigos em tempo real"}
                           /> 

      <Beneficios 
                           sem={buildUrl("/assets/Assinante/Traco.png")}
                           com={buildUrl("/assets/Assinante/Correto.png")}
                           beneficio={"Fila na ordem que você quiser"}
                           /> 

      <Beneficios 
                           sem={buildUrl("/assets/Assinante/Traco.png")}
                           com={buildUrl("/assets/Assinante/Correto.png")}
                           beneficio={"Insights de stream (Sua Máquina do Tempo)"}
                           /> 
               </div>
                
               
         </section>

         <div className='bg-[#0D0D0D]  md:hidden'>
                  <Contato/>
                </div>
       </main> 
    )
}

export default LoginPage