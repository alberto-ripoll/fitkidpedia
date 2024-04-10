import Tabla from "../../../../components/Table/Tabla";



const PuntuationTechniquePage = () => {


  return (
    <div className="bg-white flex flex-col">

<h1 className="text-4xl font-bold text-center mt-10 text-gray-800">
        Puntuación Individual | Artístico
      </h1>

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
