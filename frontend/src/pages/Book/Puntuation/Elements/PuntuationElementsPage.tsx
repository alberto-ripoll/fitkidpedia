import { useState } from "react";
import { GiFemale, GiMale } from "react-icons/gi";
import Tabla from "../../../../components/Table/Tabla";


const valoresMaximosCategoria = [
  ["A", "4 puntos"],
  ["B", "5 puntos"],
  ["C", "8 puntos"],
  ["D - Senior", "8 puntos"],
];
const valoresMaximosCategoriaFemenina = [
  ["I - II", "4 puntos"],
  ["III - IV", "5 puntos"],
  ["V - IX Senior", "8 puntos"],
];

const PuntuationElementsPage = () => {
  const [showMaleCategories, setShowMaleCategories] = useState(false);


  const categoriesToShow = showMaleCategories
    ? valoresMaximosCategoria
    : valoresMaximosCategoriaFemenina;

  return (
    <div className="bg-white flex flex-col">
      <h1 className="text-4xl font-bold text-center text-gray-800">
        Puntuación Individual
      </h1>

      <h2 className="text-3xl mt-10 font-bold text-center text-gray-800">
        Ejercicios
      </h2>
      <hr className="my-8" />

      <p className="text-lg text-gray-700 font-light px-4 py-2 leading-loose bg-orange-50 shadow-md rounded-md">
        Cada juez registra el número de elementos ejecutados (identificados de A
        a H) en su hoja de puntuación.
      </p>
      <p className="text-lg text-gray-700 font-light px-4 py-2 leading-loose bg-orange-50 shadow-md rounded-md">
        {" "}
        Se asignan puntos considerando el valor de los elementos (con valores
        asignados desde 0.1 a 0.8 puntos).
      </p>
      <p className="text-lg text-gray-700 font-light px-4 py-2 leading-loose bg-orange-50 shadow-md rounded-md">
        Esto permite comparar y evaluar de manera imparcial la calidad de las
        rutinas de los competidores.
      </p>
      <section className="flex gap-8 w-full lg:flex-row flex-col my-8">
        <div className="xl:w-1/3 w-full h-full">
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
        </div>

        <div className="xl:w-2/3  bg-gray-50 p-4 shadow-md rounded-md">
        <div className="flex justify-around mb-4 w-full divide-x">
          <button
            onClick={() => setShowMaleCategories(false)}
            className={`w-full flex items-center border-b-2 ${showMaleCategories ? "text-gray-500 border-gray-500 hover:border-pink-700 hover:text-pink-700 " : " border-pink-700 hover:border-pink-700 text-pink-700"} font-bold py-2 px-4`}
          >
            <GiFemale className="mr-2" />
            Femenino
          </button>
          
          <button
            onClick={() => setShowMaleCategories(true)}
            className={`w-full flex items-center border-b-2 ${showMaleCategories ? 'border-blue-700 hover:border-blue-700 text-blue-700' : 'text-gray-500 border-gray-500 hover:border-blue-700 hover:text-blue-700'} font-bold py-2 px-4`}
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
