import ImageCategory from "../../Categories/components/ImageCategory";

const JudgePage = () => {
    return  ( 
        <div className="flex w-full flex-col pb-40 justify-center items-center">
    
    <h1 className="text-4xl font-bold text-black text-center">
    Jueces
  </h1>
  <hr className="my-8 w-full" />
       
  <section className="flex w-full xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col justify-center items-center gap-11">
  <p className="text-lg text-gray-700 font-light px-4 py-2 leading-loose bg-orange-50 shadow-md rounded-md">
    Los <span className="font-bold">jueces</span> son fundamentales para mantener la <span className="font-bold">integridad y objetividad</span> de las competiciones. Cada juez debe <span className="font-bold">conocer profundamente las reglas y regulaciones</span> del Fit Kid y haber completado un <span className="font-bold">curso de formación</span> para obtener su certificación.
    <br /> <br />Este proceso asegura que todos los jueces estén bien preparados para evaluar las actuaciones de manera <span className="font-bold">imparcial y consistente</span>.
    <br></br>Los jueces evalúan tanto la <span className="font-bold">ejecución técnica</span> como el <span className="font-bold">efecto artístico</span> de las rutinas, usando una escala de puntuación detallada que refleja el rendimiento en cada categoría. 
</p>


    <ImageCategory imageUrl="/jueces.jpeg" />

        </section>
  </div>
  );
}

export default JudgePage;
