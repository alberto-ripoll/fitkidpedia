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
      <p className="text-lg text-gray-700 font-light px-4 py-2 leading-loose bg-orange-50 shadow-md rounded-md">
        {" "}
        Se asignan puntos considerando los ejercicios y la ejecución técnica de estos. 
        <br></br>
        La <span className="font-bold">puntuación máxima</span> es de 10 puntos.
      </p>

      <section className="flex divide-x gap-8 w-full my-12">
      
        <Tabla
  cabeceras={["RANGO DE PUNTUACIÓN", "DESCRIPCIÓN"]}
  filas={[
    ["0,0 – 1,9", "INSATISFACTORIO"],
    ["2,0 – 3,9", "POBRE"],
    ["4,0 – 5,9", "SATISFACTORIO"],
    ["6,0 – 7,9", "BUENO"],
    ["8,0 – 9,9", "EXCELENTE"],
    ["10", "PERFECTO"],
  ]}
/>



      </section>
    </div>
  );
};

export default PuntuationTechniquePage;
