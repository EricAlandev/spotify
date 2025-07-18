const EsqueletoBaixo = ({
    ti1, ti2, ti3, ti4,
    descri1, descri2, descri3, descri4, descri5,
    descri6, descri7, descri8, descri9, descri10,
    descri11, descri12, descri13, descri14, descri15, descri16
  }) => {
    const tituloClass = `min-w-[150px] font-Inter font-semibold text-white mt-2.5 text-[19.5px]`
    const descClass = `min-w-[150px] font-Inter font-medium text-gray-400 mt-1 text-[15px]`
  
    return (
      <footer className=" pb-4 ml-4 flex flex-col gap-8">

        <section className="flex flex-col gap-1">
          <h2 className={tituloClass}>{ti1}</h2>
          <h3 className={descClass}>{descri1}</h3>
          <h3 className={descClass}>{descri2}</h3>
          <h3 className={descClass}>{descri3}</h3>
          <h3 className={descClass}>{descri4}</h3>
        </section>
  
        <section className="flex flex-col gap-1">
          <h2 className={tituloClass}>{ti2}</h2>
          <h3 className={descClass}>{descri5}</h3>
          <h3 className={descClass}>{descri6}</h3>
          <h3 className={descClass}>{descri7}</h3>
          <h3 className={descClass}>{descri8}</h3>
        </section>
  
        <section className="flex flex-col gap-1">
          <h2 className={tituloClass}>{ti3}</h2>
          <h3 className={descClass}>{descri9}</h3>
          <h3 className={descClass}>{descri10}</h3>
          <h3 className={descClass}>{descri11}</h3>
          <h3 className={descClass}>{descri12}</h3>
        </section>
  
        <section className="flex flex-col gap-1">
          <h2 className={tituloClass}>{ti4}</h2>
          <h3 className={descClass}>{descri13}</h3>
          <h3 className={descClass}>{descri14}</h3>
          <h3 className={descClass}>{descri15}</h3>
          <h3 className={descClass}>{descri16}</h3>
        </section>
      </footer>
    )
  }
  
  export default EsqueletoBaixo
  