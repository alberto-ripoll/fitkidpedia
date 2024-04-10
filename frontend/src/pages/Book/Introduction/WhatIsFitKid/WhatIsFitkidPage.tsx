import ImageCategory from "../../Categories/components/ImageCategory";


function WhatIsFitkidPage() {
  return (
    <>
      <div className="flex flex-col py-12 px-12 w-full align-middle justify-center">

        <h1 className="text-4xl font-bold text-center text-gray-800">
          ¿Qué es el FitKid?
        </h1>
        <hr className="my-8" />
        <section className="mb-12">
          <p className="text-lg text-gray-700 font-light px-4 py-2 leading-relaxed bg-orange-50 shadow-md rounded-md">
            El <span className="font-bold">FitKid</span> es un deporte moderno y dinámico que combina elementos de <span className="font-bold">acrobacias, baile, fuerza y flexibilidad</span>. Diseñado para desarrollar la <span className="font-bold">coordinación</span>, el <span className="font-bold">equilibrio</span> y la <span className="font-bold">agilidad</span>, promueve tanto la <span className="font-bold">salud física</span> como el <span className="font-bold">bienestar emocional</span> en niños y adolescentes.
          </p>
          <p className="text-lg text-gray-700 font-light px-4 py-2 leading-relaxed bg-orange-50 shadow-md rounded-md">
            A través de <span className="font-bold">rutinas coreográficas</span> que mezclan música y movimiento, los participantes expresan su creatividad mientras mejoran su <span className="font-bold">condición física general</span>. El FitKid no solo fomenta el desarrollo de habilidades físicas, sino que también inculca valores de <span className="font-bold">disciplina, trabajo en equipo y autoexpresión</span>.
          </p>
        </section>


        <ImageCategory imageUrl="https://www.elperiodic.com/archivos/imagenes/noticias/2022/12/12/image-3.jpeg" />,

      </div>
    </>
  );
}

export default WhatIsFitkidPage;
