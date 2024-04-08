import Tabla from "../../../../components/Table/Tabla";

const PuntuationTechniquePage = () => {

  return (
    <div className="bg-white flex flex-col">

      <p className="text-lg text-gray-700 font-light px-4 py-2 leading-relaxed bg-gray-50 shadow-md rounded-md">
        {" "}
        Se asignan puntos considerando el contenido de la rutina (elementos) y la ejecución técnica de estos.
      </p>

      <section className="flex divide-x gap-8 w-full">
        <Tabla
          cabeceras={["CATEGORÍA", "EJERCICIOS", 'EJECUCUIÓN TECNICA', 'TOTAL']}
          filas={[
            ["I - II / BOY A", "Máximo de 4 puntos", "Máximo de 10 puntos", "14 puntos"],
            ["III - IV / BOY B", "Máximo de 5 puntos", "Máximo de 10 puntos", "15 puntos"],
            ["V - IX / Senior / Men / Boy C y D", "Máximo de 8 puntos", "Máximo de 10 puntos", "18 puntos"],
          ]}
        />


      </section>
    </div>
  );
};

export default PuntuationTechniquePage;
