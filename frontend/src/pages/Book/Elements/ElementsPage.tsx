import { useEffect, useState } from "react";
import MenuLateral from "../../../components/Menu";
import SearchBar from "../../../components/SearchBar";
import SelectCategories from "../../../components/SelectCategories";
import ExerciseCard from "../Exercises/components/ExerciseCard";
import SelectNiveles from "../../../components/ComplexSelect";
import ComplexSelect from "../../../components/ComplexSelect";

function ElementsPage({ category = "" }: { category: string }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    switch (selectedCategory) {
      case "Flexibilidad":
        document.location.href = "/elementos/flexibilidad";
        break;
      case "Fuerza":
        document.location.href = "/elementos/fuerza";
        break;
      default:
        break;
    }
    console.log(`Categoría seleccionada: ${selectedCategory}`);
  }, [selectedCategory]);
  return (
    <>
      <div className="flex w-full flex-col mx-8 pb-40">
        <div className="flex flex-col mx-4">
          <h1 className="text-4xl font-bold text-black mt-10 text-center">
            Elementos de {category}{" "}
          </h1>
          <SearchBar />
          <div className="flex justify-center mb-8"></div>

          <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 justify-center">
            <ExerciseCard
              dificultad="A"
              id="1"
              ruta="/elementos/flexibilidad/cogida-estirada"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPB0US8bMwBcrJ3lbsdfQSXgMNxLeoPGeehlUqrk90A&s"
              name="Mastepanova"
            />{" "}
              <ExerciseCard
              dificultad="A"
              id="1"
              ruta="/elementos/flexibilidad/cogida-estirada"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPB0US8bMwBcrJ3lbsdfQSXgMNxLeoPGeehlUqrk90A&s"
              name="Mastepanova"
            />{" "}  <ExerciseCard
            dificultad="A"
            id="1"
            ruta="/elementos/flexibilidad/cogida-estirada"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPB0US8bMwBcrJ3lbsdfQSXgMNxLeoPGeehlUqrk90A&s"
            name="Mastepanova"
          />{" "}  <ExerciseCard
          dificultad="A"
          id="1"
          ruta="/elementos/flexibilidad/cogida-estirada"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPB0US8bMwBcrJ3lbsdfQSXgMNxLeoPGeehlUqrk90A&s"
          name="Mastepanova"
        />{" "}
            <ExerciseCard
              dificultad="A"
              id="1"
              ruta="/elementos/flexibilidad/cogida-estirada"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPB0US8bMwBcrJ3lbsdfQSXgMNxLeoPGeehlUqrk90A&s"
              name="Mastepanova"
            />{" "}
            <ExerciseCard
              dificultad="A"
              id="1"
              ruta="/elementos/flexibilidad/cogida-estirada"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPB0US8bMwBcrJ3lbsdfQSXgMNxLeoPGeehlUqrk90A&s"
              name="Mastepanova"
            />
            <ExerciseCard
              id="1"
              dificultad="A"
              ruta="hola"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPB0US8bMwBcrJ3lbsdfQSXgMNxLeoPGeehlUqrk90A&s"
              name="Un truco mega largo"
            />
            <ExerciseCard
              id="1"
              dificultad="B"
              ruta="hola"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPB0US8bMwBcrJ3lbsdfQSXgMNxLeoPGeehlUqrk90A&s"
              name="Rondada mortal"
            />
            <ExerciseCard
              id="1"
              dificultad="C"
              ruta="hola"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPB0US8bMwBcrJ3lbsdfQSXgMNxLeoPGeehlUqrk90A&s"
              name="Rondada flick abierto mortal abierto"
            />
            <ExerciseCard
              id="1"
              dificultad="G"
              ruta="hola"
              imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPB0US8bMwBcrJ3lbsdfQSXgMNxLeoPGeehlUqrk90A&s"
              name="Paloma sin manos"
            />
          </section>
        </div>
      </div>
    </>
  );
}

export default ElementsPage;
