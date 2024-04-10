import { useState } from "react";
import { GiFemale, GiMale } from "react-icons/gi";
import Tabla from "../../../../components/Table/Tabla";


const valoresMaximosCategoria = [
  ["A", "4"],
  ["B", "5"],
  ["C", "8"],
  ["D - Senior", "8"],
];
const valoresMaximosCategoriaFemenina = [
  ["I - II", "4"],
  ["III - IV", "5"],
  ["V - IX Senior", "8"],
];

const PuntuationElementsPage = () => {
  const [showMaleCategories, setShowMaleCategories] = useState(false);

  const handleToggleCategories = () => {
    setShowMaleCategories((prev) => !prev);
  };

  const categoriesToShow = showMaleCategories
    ? valoresMaximosCategoria
    : valoresMaximosCategoriaFemenina;

  return (
    <div className="bg-white flex flex-col">
      <h1 className="text-4xl font-bold text-center mt-10 text-gray-800">
        Puntuación Individual | Ejercicios
      </h1>
      <hr className="my-8" />

      <p className="text-lg text-gray-700 font-light px-4 py-2 leading-relaxed bg-gray-50 shadow-md rounded-md">
        Cada juez registra el número de elementos ejecutados (identificados de A
        a H) en su hoja de puntuación.
      </p>
      <p className="text-lg text-gray-700 font-light px-4 py-2 leading-relaxed bg-gray-50 shadow-md rounded-md">
        {" "}
        Se asignan puntos considerando el valor de los elementos (con valores
        asignados desde 0.1 a 0.8 puntos).
      </p>
      <p className="text-lg text-gray-700 font-light px-4 py-2 leading-relaxed bg-gray-50 shadow-md rounded-md">
        Esto permite comparar y evaluar de manera imparcial la calidad de las
        rutinas de los competidores.
      </p>
      <section className="flex divide-x gap-8 w-full md:flex-row flex-col">
        <Tabla
          cabeceras={["DIFICULTAD", "PUNTOS"]}
          filas={[
            ["A", "0.1"],
            ["B", "0.2"],
            ["C", "0.3"],
            ["D", "0.4"],
            ["E", "0.5"],
            ["F", "0.6"],
            ["G", "0.7"],
            ["H", "0.8"],
          ]}
        />

        <div className="overflow-x-auto relative w-3/4 mx-auto my-8 bg-gray-50 p-4 shadow-md rounded-md">
          <div className="flex justify-around mb-4">
            <button
              onClick={handleToggleCategories}
              className={`flex items-center ${showMaleCategories ? "bg-gray-500 hover:bg-gray-700" : "bg-pink-500 hover:bg-pink-700"} text-white font-bold py-2 px-4 rounded`}
            >
              <GiFemale className="mr-2" />
              Femenino
            </button>
            <button
              onClick={handleToggleCategories}
              className={`flex items-center bg-${showMaleCategories ? "blue" : "gray"
                }-500 hover:bg-${showMaleCategories ? "blue" : "gray"
                }-700 text-white font-bold py-2 px-4 rounded`}
            >
              <GiMale className="mr-2" />
              Masculino
            </button>
          </div>
          <Tabla
            cabeceras={["CATEGORIA", "MAXIMOS PUNTOS"]}
            filas={categoriesToShow}
          />
        </div>
      </section>
    </div>
  );
};

export default PuntuationElementsPage;
