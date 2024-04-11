import { useState } from "react";
import DragComponent from "../../../components/DragDrop/DragComponent";
import Formulario from "./components/Form";

const NewElementsPage = () => {
  const [isFormReady, setIsFormReady] = useState(false);

  const handleInputChange = (e: string) => {
    if (e === '') {
      setIsFormReady(false);
      return;
    }
    setIsFormReady(true);
  };

  return (
    <>
      <div className="flex flex-col items-center w-full gap-8">
        <h1 className="text-3xl font-bold">Nuevo Ejercicio</h1>
        <hr className="w-full border-gray-300" />

        <section className="flex xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col w-full justify-evenly gap-20">

          <Formulario isFormReady={isFormReady} handleInputChange={handleInputChange} />
          <DragComponent />
        </section>
        <button
          disabled={!isFormReady}
          className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline w-3/4 mt-12 ${isFormReady ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold' : 'bg-gray-300 cursor-not-allowed text-gray-600 font-medium'}`}

          type="button"
        >
          Subir Ejercicio
        </button>
      </div>
    </>
  );
};

export default NewElementsPage;
