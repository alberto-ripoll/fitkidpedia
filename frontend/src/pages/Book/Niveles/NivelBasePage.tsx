import Tabla from "../../../components/Table/Tabla";

function NivelBasePage() {
  return (
    <>
      <div className="flex flex-col w-full align-middle justify-center">
        <h1 className="text-4xl font-bold text-center text-gray-800">
          Nivel Base
        </h1>
        <hr className="my-8" />
        <section className="flex flex-col md:flex-row gap-3">
          <div>
            <p className="text-lg text-gray-700 font-light px-4 py-2 leading-loose bg-orange-50 shadow-md rounded-md">
              En el <span className="font-bold">nivel base</span> es el nivel de competición inicial.
              <br></br>
              Es obligatorio presentar un ejercicio de cada tipo: <span className="font-bold">acrobacias, baile, fuerza y flexibilidad</span> y 2 elementos extra
              obligatorios escogidos libremente entre 2 grupos distintos de cada tipo.
              <br></br>
              <br></br>
              Para las categorías <span className="font-bold">BOY</span> y <span className="font-bold">Senior Masculino</span>, en lugar de los elementos de <span className="font-bold">flexibilidad</span>, deben presentar <span className="font-bold">2 elementos acrobáticos</span>, <span className="font-bold">2 elementos de fuerza</span>, <span className="font-bold">1 elemento de salto</span> y <span className="font-bold">1 elemento extra obligatorio</span> escogido libremente entre los grupos de elementos de <span className="font-bold">acrobacia</span>, <span className="font-bold">fuerza</span> y <span className="font-bold">salto</span>.

            </p>
          </div>
          <div>
            <Tabla cabeceras={['EJERCICIOS', "CATEGORÍA", 'DURACIÓN']}
              filas={[
                ["Base", 'Individual', "65 a 75 segundos"],
                ["Base", 'Grupos', "90 segundos"],
              ]} />
          </div>

        </section>
      </div>
    </>
  );
}

export default NivelBasePage;
