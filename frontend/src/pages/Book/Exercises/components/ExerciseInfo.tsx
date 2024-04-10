interface ExerciseInfoProps {
  titulo: string;
  dificultad: string;
  tipo: string;
  descripcion: string;
  erroresComunes: string[];
}

function ExerciseInfo({
  titulo,
  dificultad,
  tipo,
  descripcion,
  erroresComunes = [],
}: ExerciseInfoProps) {
  console.log(erroresComunes);
  return (
    <div className="bg-gray-100 p-6 rounded-lg text-left">
      <h1 className="text-xl text-gray-800 font-bold mb-2 text-center">
        {titulo}
      </h1>
      <hr className="my-2" />
      <section className="flex flex-col justify-around">
        <div className="flex my-3 justify-center">
          <h2 className="text-lg text-gray-600 font-bold">Dificultad</h2>
          <a
            href="/puntuacion/ejercicios"
            className="text-lg text-blue-500 hover:text-blue-700 ml-10"
          >
            {dificultad}
          </a>
          <h2 className="text-lg text-gray-600 font-bold ml-10">Tipo</h2>
          <a
            href={"/ejercicios/" + tipo.toLowerCase()}
            className="text-lg text-blue-500 hover:text-blue-700 ml-10"
          >
            {tipo}
          </a>
        </div>

        <p className="text-md text-gray-600 mt-2">{descripcion}</p>
        {/* {erroresComunes && erroresComunes.length > 0 && (
        <div>
          <h2 className="text-lg text-red-500 font-bold mt-4 mb-2">
            Errores Comunes
          </h2>
          <ul className="list-disc list-inside text-md text-gray-600 listaEjercicios">
            {erroresComunes.map((error, index) => (
              <>
              <li className="text-red-500">
                {error}
              </li>
              </>
              
              
            ))}
          </ul>
        </div>
        
        )} */}
      </section>
    </div>

  );
}

export default ExerciseInfo;
