import Tabla from "../../../../components/Table/Tabla";



const PuntuationTechniquePage = () => {


  return (
    <div className="bg-white flex flex-col">

      <p className="text-lg text-gray-700 font-light px-4 py-2 leading-relaxed bg-gray-50 shadow-md rounded-md">
        {" "}
        Se valorara...
      </p>

      <section className="flex divide-x gap-8 w-full">
        <Tabla
          cabeceras={["CATEGORÍA", "COREOGRAFÍA", 'EXPRESION', 'MÚSICALIDAD', "ACCESORIOS", "TOTAL"]}
          filas={[
            ["Todas", "Máximo de 4 puntos", "Máximo de 2 puntos", "Máximo de 3 puntos", "Máximo de 1 punto", "10 puntos"],
          ]}
        />


      </section>
    </div>
  );
};

export default PuntuationTechniquePage;
