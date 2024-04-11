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

  const onChangeInput = async (e: any) => {
    try {
      const input = e.target.value;
      console.log("INPUT", input);

      if (input === "") {
        console.log("fetching data");
        fetchData();
        return;
      }
      const response = await new ElementsService().searchElements(input);
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

        <h1 className="text-4xl font-bold text-black text-center">
          Ejercicios de {category}{" "}
        </h1>
        <hr className="my-8 w-full" />
        <SearchBar onChange={onChangeInput} />
        <section className="grid gap-8 w-full lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
          {elements.map((element: any) => (
            <ExerciseCard
              id={element.id}
              tipo="Flexibilidad"
              dificultad={element.difficulty}
              ruta={`/ejercicios/${element.category.toLowerCase()}/${element.name.replace(/\s/g, "-").toLowerCase()}`}
              imageUrl={element.imageUrl}
              name={element.name}
            />
          ))}
        </section>

      </div>
    </>
  );
}

export default ElementsPage;
