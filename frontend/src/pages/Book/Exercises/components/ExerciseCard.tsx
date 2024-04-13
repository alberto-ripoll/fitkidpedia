import { useNavigate } from 'react-router-dom';

interface ExerciseCardProps {
  id: string;
  dificultad: string;
  tipo: string;
  ruta: string;
  imageUrl: string;
  name: string;
}

function ExerciseCard({ id, ruta, dificultad, imageUrl, name, tipo }: ExerciseCardProps) {
  let navigate = useNavigate();

  // Objeto para mapear la dificultad a colores
  const difficultyColors: { [key: string]: string } = {
    A: 'bg-blue-500',
    B: 'bg-red-500',
    C: 'bg-green-500',
    D: 'bg-yellow-500',
    E: 'bg-purple-500',
    F: 'bg-pink-500',
    G: 'bg-indigo-500',
    H: 'bg-red-500',
  };

  const categoryColors: { [key: string]: string } = {
    salto: 'bg-cyan-500',
    fuerza: 'bg-red-500',
    flexibilidad: 'bg-green-500',
    acrobacias: 'bg-purple-500',
  };


  // Función para obtener el color de fondo basado en la dificultad
  const getBackgroundColor = (dificultad: string) => difficultyColors[dificultad] || 'bg-gray-500';
  const getCategoryColors = (tipo: string) => categoryColors[tipo] || 'bg-gray-500';

  return (
    // max-h-64 sm:min-w-32 md:min-w-56 lg:min-w-48 xl:min-w-52 w-80
    <div key={id} className="max-h-64 2xl:max-h-64 relative overflow-hidden transition-transform shadow-sm hover:shadow-xl hover:scale-105 cursor-pointer" onClick={() => navigate(ruta)}>
      <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
      <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 w-full h-full p-4 flex items-end">
        <h5 className="text-white text-xl">{name}</h5>
      </div>
      <div className={`absolute top-0 right-0 ${getBackgroundColor(dificultad)} p-2 rounded-bl-lg`}>
        <h6 className="text-white text-md">{dificultad}</h6>
      </div>
      <div className={`absolute top-0 left-0 ${getCategoryColors(tipo)} p-2 rounded-br-lg`}>
        <h6 className="text-white text-md">{tipo.charAt(0).toUpperCase() + tipo.slice(1)}</h6>
      </div>
    </div>
  );
}

export default ExerciseCard;
