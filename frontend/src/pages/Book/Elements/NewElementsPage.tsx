import { useState } from "react";
import DragComponent from "../../../components/DragDrop/DragComponent";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import Formulario from "./components/Form";

const NewElementsPage = () => {
  const [isFormReady, setIsFormReady] = useState(false);
  
  const handleInputChange = (e : string) => {
    if (e === '') {
      setIsFormReady(false);
      return;
    }
    setIsFormReady(true);
  };
  
  const handleSubmit = (e: Event) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para enviar el formulario si isFormReady es true
  };
  return (
    <>
      <div className="flex flex-col items-center w-full gap-8">
        <section className="flex flex-row w-full justify-evenly gap-20">

        <Formulario isFormReady={isFormReady}  handleInputChange={handleInputChange}/>
        <DragComponent />
        </section>
            <button
                      disabled={!isFormReady} 
                      className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline w-3/4 mt-12 ${isFormReady ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold' : 'bg-gray-300 cursor-not-allowed text-gray-600 font-medium'}`}

              type="button"
            >
              Subir Elemento
            </button>
      </div>
    </>
  );
};

export default NewElementsPage;
