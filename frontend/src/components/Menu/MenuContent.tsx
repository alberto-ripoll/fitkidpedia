import { FaPuzzlePiece, FaUsers, FaQuestionCircle, FaTrophy, FaRegLightbulb } from "react-icons/fa";
import MenuItem from "./MenuItem";

const nestedNav = [
    { name: "Flexibilidad", href: "/ejercicios/flexibilidad", icon: "" },
    { name: "Salto", href: "/ejercicios/salto", icon: "" },
    { name: "Acrobacias", href: "/ejercicios/acrobacias", icon: "" },
    { name: "Fuerza", href: "/ejercicios/fuerza", icon: "" },
  ];

  const nestedNavEdad = [
    { name: "Individual", href: "/categorias/individual", icon: "" },
    { name: "Duo", href: "/categorias/duo", icon: "" },
    { name: "Small", href: "/categorias/small", icon: "" },
    { name: "Big", href: "/categorias/big", icon: "" },
    { name: "Big Free", href: "/categorias/big-free", icon: "" },
  ];
  const nestedNavCompeticion = [
    { name: "Ejercicios", href: "/puntuacion/ejercicios", icon: "" },
    { name: "Técnica", href: "/puntuacion/tecnica", icon: "" },
    { name: "Artístico", href: "/puntuacion/artistico", icon: "" },
    { name: "Total", href: "/puntuacion/total", icon: "" },
  ];
  // const nestedNavCompeticionGrupal = [
  //   { name: "Duo, Small y Big", href: "/puntuacion-grupal/grupos", icon: "" },
  //   { name: "Big Free", href: "/puntuacion-grupal/big-free", icon: "" },
  // ];

  const nestedNavIntroduccion = [
    { name: "¿Qué es el FitKid?", href: "/introduccion/que-es-fitkid", icon: "" },
    { name: "¿Qué incluye una coreografía FitKid?", href: "/introduccion/que-incluye-coreografia-fitkid", icon: "" },
    
  ];

  const nestedNavFaq = [
    { name: "Preguntas frecuentes", href: "/faq", icon: "" },
  ];

const MenuContent = () => {

    return (
        <>
            <MenuItem items={nestedNavIntroduccion} text="Introduccion">
                <FaRegLightbulb />
            </MenuItem>
            <hr className="my-2" />

            <MenuItem items={nestedNavEdad} text="Categorias">
                <FaUsers />
            </MenuItem>
            <MenuItem items={nestedNav} text="Ejercicios">
                <FaPuzzlePiece />
            </MenuItem>
            <hr className="my-2" />

            {/* <hr className="my-2" /> */}
            <MenuItem items={nestedNavCompeticion} text="Puntuación individual">
                <FaTrophy />
            </MenuItem>
            {/*  <MenuItem items={nestedNavCompeticionGrupal} text="Puntuación grupal">
                  <FaTrophy />
                </MenuItem> */}
            <hr className="my-2" />
            <MenuItem items={nestedNavFaq} text="Preguntas frecuentes">
                <FaQuestionCircle />
            </MenuItem>
        </>
    );

}

export default MenuContent;