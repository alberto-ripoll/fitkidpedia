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
        Cada coreografía debe incluir una serie de <span className="font-bold">elementos obligatorios y opcionales</span>, seleccionados de una tabla de elementos que varía según la <Link to={"/categorias/individual"}><span className="underline text-blue-600 ">categoria</span></Link> del competidor.
        <br></br><br></br>
        Tienen una <span className="font-bold">duración de entre 1.5 a 2 minutos</span>, deben estar diseñadas para cubrir de manera efectiva el área de competición, utilizando movimientos que van en línea recta, diagonal y semicircular, y que se mueven en tres dimensiones.
        <br></br><br></br>El objetivo es que cada competidor pueda demostrar su <span className="font-bold">capacidad física</span> y su <span className="font-bold">talento interpretativo</span>, alineando la coreografía con la música seleccionada y su personalidad.
      </p>

      <section className="flex py-12 w-full xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col justify-center items-start gap-11">
    <div className="relative w-full mx-auto my-8 bg-gray-50 p-4 shadow-md rounded-md">
        <Tabla cabeceras={['EJERCICIOS', 'MINIMO OBLIGATORIO']} filas={[[<Link to={"/ejercicios/acrobacias"}><span className="underline text-blue-500">Acrobacias</span></Link>, '2 ejercicios'], [<Link to={"/ejercicios/salto"}><span className="underline text-blue-500">Salto</span></Link>, '2 ejercicios'], [<Link to={"/ejercicios/fuerza"}><span className="underline text-blue-500">Fuerza</span></Link>, '2 ejercicios'], [<Link to={"/ejercicios/flexibilidad"}><span className="underline text-blue-500">Flexibilidad</span></Link>, '2 ejercicios']]} />
    </div>
        <ImageCategory imageUrl="https://telejumilla.es/content-nx/uploads/2023/05/nuestra-localidad-acogio-el-tercer-trofeo-fit-kid-de-la-region-de-murcia-838x470.jpg" />
        
      </section>
    </div>
  );
}

export default ChoreographyPage;
