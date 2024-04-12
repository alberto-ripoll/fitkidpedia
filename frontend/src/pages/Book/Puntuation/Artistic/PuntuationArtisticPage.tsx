import Tabla from "../../../../components/Table/Tabla";



const PuntuationTechniquePage = () => {


  return (
    <div className="bg-white flex flex-col">

      <h1 className="text-4xl font-bold text-center text-gray-800">
        Puntuación Individual
      </h1>

      <h2 className="text-3xl mt-10 font-bold text-center text-gray-800">
        Artístico
      </h2>
      <hr className="my-8" />

      <section className="w-full">
      <Tabla
          cabeceras={["ASPECTO EVALUABLE", "MAXIMOS PUNTOS"]}
          filas={[
            ["Coreografía", "4 puntos"],
            ["Expresión", "2 puntos"], 
            ["Musicalidad", "3 puntos"], 
            ["Accesorios","1 punto"],
            ["Total", "10 puntos"],
          ]}
        />
      </section>
    </div>
  );
};

export default PuntuationTechniquePage;
