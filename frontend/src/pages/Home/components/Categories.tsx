import React from 'react';
import { useNavigate } from 'react-router-dom';


const categories = [
  {
    id: 1,
    ruta: '/elementos',
    name: 'Ejercicios',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPB0US8bMwBcrJ3lbsdfQSXgMNxLeoPGeehlUqrk90A&s',
  },
  {
    id: 3,
    ruta: '/categorias/individual',
    name: 'Categorias',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPB0US8bMwBcrJ3lbsdfQSXgMNxLeoPGeehlUqrk90A&s',
  },
  {
    id: 2,
    ruta: '/puntuacion/elementos',
    name: 'Puntuación',
    imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPB0US8bMwBcrJ3lbsdfQSXgMNxLeoPGeehlUqrk90A&s',
  },
];


const Categories = () => {
  let navigate = useNavigate();
  
  return (
    // Cambiado a dos columnas en md y tres en lg
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 p-4">
      {categories.map((category) => (
        // Ajusta la altura aquí si es necesario
        <div key={category.id} className="relative cursor-pointer h-60" onClick={() => navigate(category.ruta)}>
          <img src={category.imageUrl} alt={category.name} className="w-full h-full object-cover rounded-lg" />
          <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full p-4 rounded-b-lg">
            <h5 className="text-white text-xl">{category.name}</h5>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Categories;
