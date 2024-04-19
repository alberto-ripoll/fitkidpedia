import { useState } from "react";
import DragComponent from "../../../components/DragDrop/DragComponent";
import Formulario from "./components/Form";
import axiosClient from "../../../lib/axios-client";

interface FormProps {
  nombre: string,
  nombreEjercicio: string,
  tipo: string,
  dificultad: string

}
const NewElementsPage = () => {
  const [isFormReady, setIsFormReady] = useState(false);
  const [formData, setFormData] = useState(false);

  const handleInputChange = (e: FormProps) => {
    setFormData(e);
    if (e.nombre === '' || e.nombreEjercicio === '') {
      setIsFormReady(false);
      return;
    }
    setIsFormReady(true);
  };

  const handleFormSubmit = async () => {
    await axiosClient.post('/ejercicios', formData);
  }


  return (
    <>
      <div className="flex flex-col items-center w-full gap-8">
        <h1 className="text-3xl font-bold">Nuevo Ejercicio</h1>
        <hr className="w-full border-gray-300" />

        <section className="flex xl:flex-row lg:flex-col md:flex-col sm:flex-col flex-col w-full justify-evenly gap-10">

          <DragComponent />
          <Formulario isFormReady={isFormReady} handleInputChange={handleInputChange} />
        </section>
        <button
          disabled={!isFormReady}
          className={`py-2 px-4 rounded focus:outline-none focus:shadow-outline w-3/4 ${isFormReady ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold' : 'bg-gray-300 cursor-not-allowed text-gray-600 font-medium'}`}
          onClick={() => handleFormSubmit()}
          type="button"
        >
          Subir Ejercicio
        </button>
      </div >
    </>
  );
};

export default NewElementsPage;
