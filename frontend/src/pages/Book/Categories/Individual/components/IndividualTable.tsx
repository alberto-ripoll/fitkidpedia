import { useState } from 'react';
import { GiMale, GiFemale } from 'react-icons/gi';
import Tabla from '../../../../../components/Table/Tabla';

const categorias = [
  ['7 a 9 años', 'I (1)', 'A-D'],
  ['10 años', 'II (2)', 'A-D'],
  ['11 años', 'III (3)', 'A-E'],
  ['12 años', 'IV (4)', 'A-E'],
  ['13 años', 'V (5)', 'A-H'],
  ['14 años', 'VI (6)', 'A-H'],
  ['15 años', 'VII (7)', 'A-H'],
  ['16 años', 'VIII (8)', 'A-H'],
  ['17 a 18 años', 'IX (9)', 'A-H'],
  ['19 años en adelante', 'SENIOR', 'A-H'],
];

const categoriasMasculinas = [
  ['7 a 10 años', 'A', 'A-D'],
  ['11 a 12 años', 'B', 'A-E'],
  ['13 a 15 años', 'C', 'A-H'],
  ['16 a 18 años', 'D', 'A-H'],
  ['19 años en adelante', 'MEN', 'A-H'],
];
const IndividualTable = () => {
  const [showMaleCategories, setShowMaleCategories] = useState(false);

  const handleToggleCategories = () => {
    setShowMaleCategories((prev) => !prev);
  };

  const categoriesToShow = showMaleCategories ? categoriasMasculinas : categorias;

  return (
    <div className="overflow-x-auto relative w-3/4 mx-auto my-8 bg-gray-50 p-4 shadow-md rounded-md">
      <div className="flex justify-around mb-4">
        <button
          onClick={handleToggleCategories}
          className={`flex items-center bg-${showMaleCategories ? 'gray' : 'pink'}-500 hover:bg-${showMaleCategories ? 'gray' : 'pink'}-700 text-white font-bold py-2 px-4 rounded`}
        >
          <GiFemale className="mr-2" />
          Femenino
        </button>
        <button
          onClick={handleToggleCategories}
          className={`flex items-center bg-${showMaleCategories ? 'blue' : 'gray'}-500 hover:bg-${showMaleCategories ? 'blue' : 'gray'}-700 text-white font-bold py-2 px-4 rounded`}
        >
          <GiMale className="mr-2" />
          Masculino
        </button>

      </div>
      <Tabla cabeceras={['EDAD', 'CATEGORIA', 'DIFICULTADES']} filas={categoriesToShow} />

    </div>
  );
};

export default IndividualTable;
