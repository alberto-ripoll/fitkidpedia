import { useEffect, useState } from "react";
import SearchBar from "../../../components/SearchBar";
import ExerciseCard from "../Exercises/components/ExerciseCard";
import { ElementsService } from "./service/ElementsService";

function ElementsPage({ category = "" }: { category: string }) {
  const [elements, setElements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await getElementsByCategory(category);
      setElements(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching elements:", error);
    }
  };

  const onChangeInput = async (e: any) => {
    try {
      const input = e.target.value;
      console.log("INPUT", input);

      if (input === "") {
        console.log("fetching data");
        fetchData();
        return;
      }
      setLoading(true);

      const response = await new ElementsService().searchElements(input);
      setElements(response);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching elements:", error);
    }
  };


  const getElementsByCategory = async (category: string) => {
    return await new ElementsService().getElementsByCategory(category);
  };

  useEffect(() => {
    fetchData();
  }, [category]);


  return (
    <>
      <div className="flex w-full flex-col pb-40 justify-center items-center">

        <h1 className="text-4xl font-bold text-black text-center">
          Ejercicios de {category}{" "}
        </h1>
        <hr className="my-8 w-full" />
        <SearchBar onChange={onChangeInput} />
        {loading && (
          <>
            <div className='flex space-x-2 w-full justify-center items-center bg-white h-60'>
              <div className='h-8 w-8 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.3s] '></div>
              <div className='h-8 w-8 bg-blue-400 rounded-full animate-bounce [animation-delay:-0.15s]'></div>
              <div className='h-8 w-8 bg-blue-400 rounded-full animate-bounce'></div>
            </div>
          </>
        )}
        {elements.length === 0 && !loading && (
          <>
            <h2 className="text-xl font-semibold text-center text-gray-800 my-8">
              No se encontraron ejercicios con ese nombre
            </h2>

          </>
        )}
        <section className="grid gap-8 w-full my-8 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {!loading && elements.length !== 0 && elements.map((element) => (
            <ExerciseCard
              key={element.id} // Añadir un key único para cada elemento en la lista
              id={element.id}
              tipo={element.tipo}
              dificultad={element.dificultad}
              ruta={`/ejercicios/${element.tipo.toLowerCase()}/${element.nombre.replace(/\s/g, "-").toLowerCase()}`}
              imageUrl={element.image}
              name={element.nombre}
            />
          ))}

        </section>


      </div>
    </>
  );
}

export default ElementsPage;
