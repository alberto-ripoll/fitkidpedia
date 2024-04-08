import { useEffect, useState } from "react";
import SearchBar from "../../../components/SearchBar";
import ExerciseCard from "../Exercises/components/ExerciseCard";
import { ElementsService } from "./service/ElementsService";

function ElementsPage({ category = "" }: { category: string }) {
  const [elements, setElements] = useState<any[]>([]);
  const fetchData = async () => {
    try {
      const response = await getElementsByCategory(category);
      setElements(response); // Almacena los datos recibidos en el estado del componente
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
        <div className="flex flex-col mx-4">
          <h1 className="text-4xl font-bold text-black mt-10 text-center">
            Ejercicios de {category}{" "}
          </h1>
          <SearchBar />
          <div className="flex justify-center mb-8"></div>

          {/* <section className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 max-[1400px]:grid-cols-3 min-[1200px]:grid-cols-4 lg:grid-cols-4 gap-10 justify-center w-full"> */}
          <section className="grid gap-10 justify-center w-full max-[1500px]:grid-cols-3 min-[1200px]:grid-cols-4">
            {elements.map((element: any) => (
              <div key={element.id} className="w-full sm:w-full md:w-1/2 lg:w-1/4">
                <ExerciseCard
                  id={element.id}
                  dificultad={element.difficulty}
                  ruta={`/elementos/${element.category}/${element.name.replace(/\s/g, "-").toLowerCase()}`}
                  imageUrl={element.imageUrl}
                  name={element.name}
                />
              </div>
            ))}
          </section>

        </div>
      </div>
    </>
  );
}

export default ElementsPage;
