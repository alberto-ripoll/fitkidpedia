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

const PuntuationTechniquePage = () => {
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
