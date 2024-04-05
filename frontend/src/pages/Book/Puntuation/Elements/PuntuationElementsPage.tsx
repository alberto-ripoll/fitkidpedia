import { useState } from "react";
import { GiFemale, GiMale } from "react-icons/gi";
import Tabla from "../../../../components/Table/Tabla";

const valoresEjercicios = [
  { elemento: "A", valor: "0.1" },
  { elemento: "B", valor: "0.2" },
  { elemento: "C", valor: "0.3" },
  { elemento: "D", valor: "0.4" },
  { elemento: "E", valor: "0.5" },
  { elemento: "F", valor: "0.6" },
  { elemento: "G", valor: "0.7" },
  { elemento: "H", valor: "0.8" },
];

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
      <section className="flex divide-x gap-8 w-full">
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
              className={`flex items-center bg-${
                showMaleCategories ? "gray" : "pink"
              }-500 hover:bg-${
                showMaleCategories ? "gray" : "pink"
              }-700 text-white font-bold py-2 px-4 rounded`}
            >
              <GiFemale className="mr-2" />
              Femenino
            </button>
            <button
              onClick={handleToggleCategories}
              className={`flex items-center bg-${
                showMaleCategories ? "blue" : "gray"
              }-500 hover:bg-${
                showMaleCategories ? "blue" : "gray"
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
