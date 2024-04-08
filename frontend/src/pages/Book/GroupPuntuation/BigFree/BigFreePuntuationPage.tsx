import Tabla from "../../../../components/Table/Tabla";


const BigFreePuntuationPage = () => {

  return (
    <div className="bg-white flex flex-col">
  
      <p className="text-lg text-gray-700 font-light px-4 py-2 leading-relaxed bg-gray-50 shadow-md rounded-md">
        {" "}
        El criterio para construir una rutina es el mismo que en la competencia individual, pero la presentación de un grupo exige ciertos requisitos nuevos. Al igual que en las rutinas individuales, en el formato de grupo también se deben realizar 8 elementos requeridos: dos elementos de cada grupo de elementos pueden ser presentados en el formato de grupo (2 elementos acrobáticos, 2 elementos de fuerza, 2 elementos de flexibilidad, 2 saltos o brincos gimnásticos de altura o aeróbicos). Existe la posibilidad de realizar una fila acrobática dinámica que contenga 2 elementos acrobáticos dinámicos (de acuerdo con la ejecución de la fila acrobática dinámica). Realizar la fila acrobática no es obligatorio. Las reglas, que sirven al propósito de variedad y diversidad de los elementos elegidos para las presentaciones de los grupos de edades individuales I-IX, NO TIENEN referencia al formato de grupo
      </p>
  
      <section className="flex divide-x gap-8 w-full">
        <Tabla
          cabeceras={["CATEGORÍA", "EJERCICIOS", 'EJECUCUIÓN TECNICA', 'TOTAL']}
          filas={[
            ["I - II / BOY A", "Máximo de 4 puntos", "Máximo de 10 puntos", "14 puntos"],
            ["III - IV / BOY B", "Máximo de 5 puntos", "Máximo de 10 puntos", "15 puntos"],
            ["V - IX / Senior / Men / Boy C y D", "Máximo de 8 puntos", "Máximo de 10 puntos", "18 puntos"],
          ]}
        />

   
      </section>
    </div>
  );
};

export default BigFreePuntuationPage;
