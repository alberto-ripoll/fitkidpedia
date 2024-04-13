import ExerciseVideo from "./components/ExerciseVideo";
import ExerciseInfo from "./components/ExerciseInfo";
import ExerciseRelated from "./components/ExerciseRelated";
import { useEffect, useState } from "react";
import { ElementsService } from "../Elements/service/ElementsService";
import { useParams } from "react-router-dom";

// Interfaz para describir la estructura de element
interface Element {
  id: string;
  name: string;
  video: string;
  dificultad: string;
  tipo: string;
  image: string;
  descripcion: string;
}

function ExercisePage() {
  const { exercise, category } = useParams();

  const [element, setElement] = useState<Element | null>(null); // Aquí indicamos que element puede ser nulo o un objeto de tipo Element
  const [relatedElements, setRelatedElements] = useState<Element[]>([]); // Indicamos que relatedElements es un array de Element

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await new ElementsService().getElement(exercise as any);
        setElement(response);
        console.log("Fetching element:", response);
      } catch (error) {
        console.error("Error fetching elements:", error);
      }
    };

    const fetchRelated = async () => {
      try {
        const response = await new ElementsService().getRelatedElements(exercise as any);
        console.log("Fetching related:", response);
        setRelatedElements(response);
      } catch (error) {
        console.error("Error fetching related:", error);
      }
    }
    fetchData();
    fetchRelated();
  }, [exercise, category]);


  return (
    <>
      {element && ( // Verificamos si element es nulo antes de intentar renderizar el componente
        <section className="flex sm:flex-col md:flex-col xl:flex-row h-auto gap-2 w-full flex-col">

          <div className="h-full p-4 flex flex-col justify-around gap-3 xl:w-2/3">
            <ExerciseVideo videoUrl={element.video} />
            <ExerciseInfo
              titulo={element.name}
              dificultad={element.dificultad}
              tipo={element.tipo}
              descripcion={element.descripcion}
              erroresComunes={[
                "No flexionar las rodillas y tener caca",
                "No impulsarse con los brazos al jugar al inecraft",
                "No flexionar las rodillas y tener caca",
                "No impulsarse con los brazos al jugar al inecraft",
                "No flexionar las rodillas y tener caca",
                "No impulsarse con los brazos al jugar al inecraft",
              ]}
            />
          </div>

          <div className="p-4 flex flex-col gap-4 w-full justify-center xl:w-1/3">
            {relatedElements.map((element) => (
              <div key={element.id} className="w-full flex items-center justify-center">
                <ExerciseRelated
                  dificultad={element.dificultad}
                  id={element.id}
                  ruta={`/ejercicios/${element.tipo}/${element.id}`}
                  imageUrl={element.image}
                  name={element.name}
                />
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}

export default ExercisePage;
