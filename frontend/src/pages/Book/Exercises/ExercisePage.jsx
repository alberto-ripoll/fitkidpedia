import ExerciseVideo from "./components/ExerciseVideo";
import ExerciseInfo from "./components/ExerciseInfo";
import ExerciseRelated from "./components/ExerciseRelated";

function ExercisePage() {
  return (
    <>
      <section className="w-full flex flex-col lg:flex-row gap-3 mx-4 py-10 h-auto justify-center items-start mb-24">
        <div className="lg:w-1/2 p-4 flex flex-col gap-3">
          <ExerciseVideo videoUrl="assets/test.mp4" />
          <ExerciseInfo
            titulo="Salto de longitud"
            dificultad="A"
            tipo="Fuerza"
            descripcion="El ejercicio consiste en maximizar la distancia de un salto horizontalmente desde un punto de partida."
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

        <div className="lg:w-1/3 p-4 flex flex-col gap-3 items-center">
        <ExerciseRelated
            dificultad="A"
            id="1"
            ruta="/elementos/flexibilidad/cogida-estirada"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPB0US8bMwBcrJ3lbsdfQSXgMNxLeoPGeehlUqrk90A&s"
            name="Mastepanova"
          />      <ExerciseRelated
          dificultad="A"
          id="1"
          ruta="/elementos/flexibilidad/cogida-estirada"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPB0US8bMwBcrJ3lbsdfQSXgMNxLeoPGeehlUqrk90A&s"
          name="Mastepanova"
        />      <ExerciseRelated
        dificultad="A"
        id="1"
        ruta="/elementos/flexibilidad/cogida-estirada"
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPB0US8bMwBcrJ3lbsdfQSXgMNxLeoPGeehlUqrk90A&s"
        name="Mastepanova"
      />      <ExerciseRelated
      dificultad="A"
      id="1"
      ruta="/elementos/flexibilidad/cogida-estirada"
      imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPB0US8bMwBcrJ3lbsdfQSXgMNxLeoPGeehlUqrk90A&s"
      name="Mastepanova"
    />      <ExerciseRelated
    dificultad="A"
    id="1"
    ruta="/elementos/flexibilidad/cogida-estirada"
    imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYPB0US8bMwBcrJ3lbsdfQSXgMNxLeoPGeehlUqrk90A&s"
    name="Mastepanova"
  />  
          {/* Repite <ExerciseRelated> según sea necesario */}
        </div>
      </section>
    </>
  );
}

export default ExercisePage;
