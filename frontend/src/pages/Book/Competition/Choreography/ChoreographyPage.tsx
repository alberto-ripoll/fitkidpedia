import { Link } from "react-router-dom";
import Tabla from "../../../../components/Table/Tabla";
import ImageCategory from "../../Categories/components/ImageCategory";

const ChoreographyPage = () => {
  return (
    <div className="flex flex-col w-full align-middle justify-center">
      <h1 className="text-4xl font-bold text-black text-center">
        ¿Qué incluye una coreografía?
      </h1>
      <hr className="my-8" />

      <p className="text-lg text-gray-700 font-light px-4 py-2 leading-relaxed bg-orange-50 shadow-md rounded-md">
        Cada coreografía debe incluir una serie de <span className="font-bold">ejercicios obligatorios y opcionales</span>, seleccionados de una tabla de elementos que varía según la <Link to={"/categorias/individual"}><span className="underline text-blue-600 ">categoria</span></Link> y el <Link to={"/niveles/base"}><span className="underline text-blue-600">nivel</span></Link> del competidor.
        <br></br>
        {/* Deben detener de 1 a 2 ejercicios de: <Link to={"/ejercicios/fuerza"}><span className="underline text-blue-600 ">fuerza</span></Link>, <Link to={"/ejercicios/flexibilidad"}><span className="underline text-blue-600 ">flexibilidad</span></Link>, <Link to={"/ejercicios/acrobacias"}><span className="underline text-blue-600 ">acrobacias</span></Link> y <Link to={"/ejercicios/salto"}><span className="underline text-blue-600 ">salto</span></Link>, y su duración tambien depende del nivel del participante. */}

          <br></br>Deben estar diseñadas para cubrir de manera efectiva el área de competición, utilizando movimientos que van en línea recta, diagonal y semicircular, y que se mueven en tres dimensiones.
        </p>

      <section className="flex py-12 w-full xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col justify-center items-start gap-11">
    <div className="relative w-full mx-auto my-8 bg-gray-50 p-4 shadow-md rounded-md">
        <Tabla cabeceras={['NIVEL', "CATEGORÍAS", 'DURACIÓN']} 
        filas={[
          ["Base", 'Individual', "65 a 75 segundos"], 
          ["Base", 'Grupos', "90 segundos"], 
          ["Promesas", 'Individual', "75 a 90 segundos"], 
          ["Promesas", 'Grupos', "75 a 90 segundos"], 
          ["Nacional", 'Individual', "90 a 105 segundos"], 
          ["Nacional", 'Grupos', "120 a 135 segundos"], 
          ["Nacional", 'Big Free', "170 a 190 segundos"], 
        ]}/>
    </div>
        <ImageCategory imageUrl="https://telejumilla.es/content-nx/uploads/2023/05/nuestra-localidad-acogio-el-tercer-trofeo-fit-kid-de-la-region-de-murcia-838x470.jpg" />
        
      </section>
    </div >
  );
}

export default ChoreographyPage;
