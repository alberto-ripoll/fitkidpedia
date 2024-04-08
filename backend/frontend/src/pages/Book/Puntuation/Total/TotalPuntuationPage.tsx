import Tabla from "../../../../components/Table/Tabla";


const TotalPuntuationPage = () => {

  return (
    <div className="bg-white flex flex-col">
  
      <p className="text-lg text-gray-700 font-light px-4 py-2 leading-relaxed bg-gray-50 shadow-md rounded-md">
        {" "}
        Se valorara...
      </p>
  
      <section className="flex divide-x gap-8 w-full">
        <Tabla
          cabeceras={["CATEGORÍA", "EJERCICIOS y TÉCNICA", 'ARTÍSTICO', "TOTAL"]} 
          filas={[
            ["I-II / Boy A", "Máximo de 14 puntos", "Máximo de 10 puntos", "24 puntos"],
            ["III-IV / Boy B", "Máximo de 15 puntos", "Máximo de 10 puntos", "25 puntos"],
            ["V-IX / Senior / Men / Boy C D", "Máximo de 18 puntos", "Máximo de 10 puntos", "28 puntos"],
          ]}
        />

   
      </section>
    </div>
  );
};

export default TotalPuntuationPage;
