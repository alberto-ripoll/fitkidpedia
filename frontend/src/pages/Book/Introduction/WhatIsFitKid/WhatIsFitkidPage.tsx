import ImageCategory from "../../Categories/components/ImageCategory";


function WhatIsFitkidPage() {
  return (
    <>
      <div className="flex flex-col w-full align-middle justify-center">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          ¿Qué es el FitKid?
        </h1>
        <hr className="my-8" />
        <section className="flex flex-col md:flex-row gap-3">
          <div>
            <p className="text-lg text-gray-700 font-light px-4 py-2 leading-loose bg-orange-50 shadow-md rounded-md">
              El <span className="font-bold">FitKid</span> es un deporte moderno y dinámico que combina elementos de <span className="font-bold">acrobacias, baile, fuerza y flexibilidad</span>. 
              <br></br><br></br>Pueden empezar a practicar niñas y niños <span className="font-bold">desde los 3 años</span>, y a partir de los <span className="font-bold">6 años</span> pueden iniciarse en la competición.
             <br></br><br></br> A través de <span className="font-bold">rutinas coreográficas</span> que mezclan música y movimiento, los participantes expresan su creatividad mientras desarrollan su <span className="font-bold">cualidades físicas</span> como la flexibilidad, fuerza y resistencia de forma excepcional y divertida.
            </p>
          </div>
          <ImageCategory imageUrl="https://www.elperiodic.com/archivos/imagenes/noticias/2022/12/12/image-3.jpeg" />

        </section>
      </div>
    </>
  );
}

export default WhatIsFitkidPage;
