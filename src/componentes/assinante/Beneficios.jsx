const Beneficios = ({beneficio , sem, com }) => {

    return(
        <>
         {/*Sessões - Musica*/}
         <div className="flex border-t-1 border-[white] border-b-0.5 md:mx-auto md:max-w-[700px]">
                    <section className="flex md:mx-auto  mt-2 gap-14.5 md:justify-center items-center">
                        <h2 className="text-[white] underline">{beneficio}</h2>

                        <img src={sem} alt="" 
                        className="max-h-[40px] pr-[45px]"
                        />

                        <img src={com} alt=""
                        className="max-h-[40px] "
                        />
                    </section>
                </div>
        </>
    )
}

export default Beneficios