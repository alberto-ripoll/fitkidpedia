// import Tabla from "../../../../components/Table/Tabla";
import Tabla from "../../../../components/Table/Tabla";
// import VerticalTable from "../../../../components/Table/VerticalTable";


const TotalPuntuationPage = () => {

  return (
    <div className="bg-white flex flex-col">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Puntuación Individual
      </h1>

      <h2 className="text-3xl mt-10 font-bold text-center text-gray-800">
        Total
      </h2>
      <hr className="my-8" />
      <section className="flex divide-x gap-8 w-full">
        <Tabla
          cabeceras={["CATEGORÍA", "EJERCICIOS y TÉCNICA", 'ARTÍSTICO', "TOTAL"]}
          filas={[
            ["I-II / Boy A", "14 puntos", "10 puntos", "24 puntos"],
            ["III-IV / Boy B", "15 puntos", "10 puntos", "25 puntos"],
            ["V - Senior / Boy C - Men", "18 puntos", "10 puntos", "28 puntos"],
          ]}
        /> 
            {/* <VerticalTable
          cabeceras={["CATEGORÍA", "EJERCICIOS y TÉCNICA", 'ARTÍSTICO', "TOTAL"]}
          filas={[
            [ "I-II / BOY A", "III-IV / BOY B", "V-IX / Senior / MEN / BOY C / Boy D"],
            ["14 puntos", "15 puntos", "18 puntos"],
            ["10 puntos", "10 puntos", "10 puntos"],
            ["24 puntos", "25 puntos", "28 puntos"],

          ]}
        /> */}
      </section>
    </div>
  );
};

export default TotalPuntuationPage;
