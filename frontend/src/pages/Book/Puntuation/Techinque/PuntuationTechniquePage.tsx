import Tabla from "../../../../components/Table/Tabla";

const PuntuationTechniquePage = () => {

  return (
    <div className="bg-white flex flex-col w-full h-auto">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Puntuación Individual
      </h1>

      <h2 className="text-3xl mt-10 font-bold text-center text-gray-800">
        Técnica
      </h2>
      <hr className="my-8" />
      <p className="text-lg text-gray-700 font-light px-4 py-2 leading-relaxed bg-gray-50 shadow-md rounded-md">
        {" "}
        Se asignan puntos considerando el contenido de la rutina (ejercicios) y la ejecución técnica de estos.
      </p>

      <section className="flex divide-x gap-8 w-full my-12">
        <Tabla
          cabeceras={["CATEGORÍA", 'MÁXIMOS PUNTOS']}
          filas={[
            ["I - II / BOY A",  "10 puntos"],
            ["III - IV / BOY B",  "10 puntos"],
            ["V - IX / Senior / Men / Boy C y D",  "10 puntos"],
          ]}
        />


      </section>
    </div>
  );
};

export default PuntuationTechniquePage;
