import SelectCategories from "../../../../components/SelectCategories";
import SelectNivel from "../../../../components/SelectNivel";

const Formulario = ({ handleInputChange, isFormReady }: any) => {

  return (
    <>
      <form className="w-full">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Tu Nombre (requerido)
            </label>
            <input
              onChange={(e) => handleInputChange(e.target.value)}
              className={`appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${!isFormReady ? 'border-red-500' : 'border-gray-200'}`}
              id="grid-first-name"
              type="text"
              placeholder="Alberto Ripoll"
            />
            {!isFormReady && <p className="text-red-500 text-xs italic">
              Introduce tu nombre
            </p>}

          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block  tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-first-name"
            >
              Nombre del ejercicio (requerido)
            </label>
            <input
              onChange={(e) => handleInputChange(e.target.value)}
              className={`appearance-none block w-full bg-white text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white ${!isFormReady ? 'border-red-500' : 'border-gray-200'}`}
              id="grid-first-name"
              type="text"
              placeholder="Flick Flack"
            />
            {!isFormReady && <p className="text-red-500 text-xs italic">
              Introduce el nombre del ejercicio.
            </p>}

          </div>
        </div>
        <div className="flex flex-wrap mb-2 items-around w-full justify-around md:justify-between">
          <div className="w-1/3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Tipo
            </label>
            <SelectCategories onCategoryChange={() => { }} />
          </div>
          <div className="w-1/3 mb-6">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-state"
            >
              Dificultad
            </label>
            <SelectNivel onCategoryChange={() => { }} />
          </div>
        </div>
        {/* <div className="flex flex-wrap my-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="grid-password"
            >
              Instrucciones
            </label>
            <textarea
              className="appearance-none block w-full min-h-60 bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              placeholder="Instrucciones de como se hace el ejercicio..."
            />
          </div>
        </div> */}
  
      </form>


    </>
  );
};

export default Formulario;
