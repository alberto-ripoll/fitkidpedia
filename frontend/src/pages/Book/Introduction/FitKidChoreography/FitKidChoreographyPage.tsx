import ImageCategory from "../../Categories/components/ImageCategory";


function FitKidChoreographyPage() {
  return (
    <>
      <div className="flex flex-col py-12 px-12 w-full align-middle justify-center">

        <h1 className="text-4xl font-bold text-center text-gray-800">
          ¿Qué incluye una coreografía FitKid?
        </h1>
        <hr className="my-8" />
        <section className="mb-12">
          <>
            <p className="text-lg text-gray-700 font-light px-4 py-2 leading-relaxed bg-orange-50 shadow-md rounded-md">
              Una <span className="font-bold">coreografía FitKid</span> es una expresión artística y deportiva que incluye una secuencia planeada de <span className="font-bold">ejercicios</span>, agrupados en <span className="font-bold">acrobacias, salto, fuerza, y flexibilidad</span>. Las rutinas típicamente tienen una <span className="font-bold">duración de entre 1.5 a 2 minutos</span>, durante los cuales los participantes deben ejecutar sus movimientos con precisión, gracia y fluidez.
            </p>
            <p className="text-lg text-gray-700 font-light px-4 py-2 leading-relaxed bg-orange-50 shadow-md rounded-md mt-2">
              En una coreografía FitKid, se valora especialmente la <span className="font-bold">creatividad</span> y la <span className="font-bold">originalidad</span> de los movimientos, así como la <span className="font-bold">sincronización con la música</span> y la capacidad de transmitir <span className="font-bold">emociones</span> a través del baile. La <span className="font-bold">técnica</span> y la <span className="font-bold">expresión corporal</span> son aspectos cruciales, con un énfasis en la ejecución limpia de cada movimiento y la fluidez entre ellos, creando una experiencia visual armoniosa y atractiva.
            </p>
          </>

        </section>


        <ImageCategory imageUrl="https://www.elperiodic.com/archivos/imagenes/noticias/2022/12/12/image-3.jpeg" />,

      </div>
    </>
  );
}

export default FitKidChoreographyPage;
