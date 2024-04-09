import {  useLocation } from "react-router-dom";
import { FaPuzzlePiece, FaTrophy, FaUsers } from "react-icons/fa";
import MenuItem from "./Menu/MenuItem";
import Footer from "./Footer";
import SearchBar from "./SearchBar";


const MenuLateral = () => {
  const location = useLocation();

  const nestedNav = [
    { name: "Flexibilidad", href: "/elementos/flexibilidad", icon: "" },
    { name: "Salto", href: "/elementos/salto", icon: "" },
    { name: "Acrobacias", href: "/elementos/acrobacias", icon: "" },
    { name: "Fuerza", href: "/elementos/fuerza", icon: "" },
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
  const nestedNavCompeticionGrupal = [
    { name: "Duo, Small y Big", href: "/puntuacion-grupal/grupos", icon: "" },
    { name: "Big Free", href: "/puntuacion-grupal/big-free", icon: "" },
  ];

  if (location.pathname === "/") {
    return null;
  }
  return (
    // Si el menu esta abierto en moviles
    // top-16 absolute inset-0 z-50 overflow-y-auto bg-white w-full

    //por defecto en desktop
    //lg:block pb:40
    <div className="lg:block md:block sm:hidden pt-16 pb-40 hidden max-h-[80vh]">
      <nav className="my-2 top-0 left-0 w-full bg-white space-y-8 md:w-60 lg:w-80 sm:w-full border-r overflow-y-auto">
        <SearchBar />
        <div className="flex flex-col h-full px-4">
          <div className="overflow-auto">
            <ul className="text-sm font-medium flex-1">
              <hr className="my-2" />
              <li>
                <MenuItem items={nestedNav} text="Ejercicios">
                  <FaPuzzlePiece />
                </MenuItem>
                <MenuItem items={nestedNavEdad} text="Categorias">
                  <FaUsers />
                </MenuItem>
                <hr className="my-2" />
                <MenuItem items={nestedNavCompeticion} text="Puntuación individual">
                  <FaTrophy />
                </MenuItem>
                <MenuItem items={nestedNavCompeticionGrupal} text="Puntuación grupal">
                  <FaTrophy />
                </MenuItem>
                <hr className="my-2" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};



export default MenuLateral;
