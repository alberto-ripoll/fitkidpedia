import React, { useState } from 'react';
import { GiMale, GiFemale } from 'react-icons/gi';

const categorias = [
  { edad: '7 a 9 años', categoria: 'I (1)', elementos: 'A-D' },
  { edad: '10 años', categoria: 'II (2)', elementos: 'A-D' },
  { edad: '11 años', categoria: 'III (3)', elementos: 'A-E' },
  { edad: '12 años', categoria: 'IV (4)', elementos: 'A-E' },
  { edad: '13 años', categoria: 'V (5)', elementos: 'A-H' },
  { edad: '14 años', categoria: 'VI (6)', elementos: 'A-H' },
  { edad: '15 años', categoria: 'VII (7)', elementos: 'A-H' },
  { edad: '16 años', categoria: 'VIII (8)', elementos: 'A-H' },
  { edad: '17 a 18 años', categoria: 'IX (9)', elementos: 'A-H' },
  { edad: '19 años en adelante', categoria: 'SENIOR', elementos: 'A-H' },
];

const categoriasMasculinas = [
  { edad: '7 a 10 años', categoria: 'A', elementos: 'A-D' },
  { edad: '11 a 12 años', categoria: 'B', elementos: 'A-E' },
  { edad: '13 a 15 años', categoria: 'C', elementos: 'A-H' },
  { edad: '16 a 18 años', categoria: 'D', elementos: 'A-H' },
  { edad: '19 años en adelante', categoria: 'MEN', elementos: 'A-H' },
];
interface TablaProps {
  cabeceras: string[];
  filas: string[][];
}
const TablaMasculinoFemenino = ({cabeceras, filas} : TablaProps) => {
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
      <table className="w-full text-md text-left text-gray-700">
        <thead className="text-md text-gray-700 uppercase bg-gray-50">
          <tr>
            {cabeceras.map((cabecera, index) => (
              <th scope="col" className="py-3 px-6" key={index}>
                {cabecera}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filas.map((fila, index) => (
            <tr key={index} className="bg-white border-b hover:bg-gray-50">
              {fila.map((elemento, index) => (
                <td key={index} className="py-4 px-6">
                  {elemento}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablaMasculinoFemenino;