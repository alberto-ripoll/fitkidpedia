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

  const categoriesToShow = showMaleCategories ? categoriasMasculinas : categorias;
  
  return (
    <>
      <div className="relative w-full mx-auto my-8 bg-gray-50 p-4 shadow-md rounded-md">
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
        <Tabla cabeceras={['EDAD', 'CATEGORIA', 'DIFICULTADES']} filas={categoriesToShow} />

      </div>
    </>

  );
};

export default IndividualTable;
