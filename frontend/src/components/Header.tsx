import { Link, useLocation } from "react-router-dom";
import MenuItem from "./Menu/MenuItem";
import { FaPuzzlePiece, FaTrophy, FaUsers } from "react-icons/fa";

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

interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header = ({ isMenuOpen, toggleMenu } : HeaderProps) => {
  const location = useLocation(); // Obtiene la información de la ruta actual
  const shouldShowAddButton =
    location.pathname.includes("/elemento") &&
    location.pathname !== "/elementos/nuevo-elemento" &&
    location.pathname !== "/elementos/editar-elemento" &&
    location.pathname !== "/puntuacion/elementos";



  return (
    <nav className="bg-white fixed w-full top-0 z-50 border-y">
      <button
        onClick={toggleMenu}
        className="absolute left-4 top-4 lg:hidden md:hidden sm:block"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </button>
      <div className="flex justify-center items-center h-full w-full">
        <Link to="/" className="flex justify-center items-center py-4">
          <span className="font-semibold text-gray-500 text-lg">
            FITKIDPEDIA
          </span>
        </Link>
      </div>
      {/* Posicionando el botón "Añadir elemento" de manera fija */}
      {shouldShowAddButton && (
        <Link
          to="/elementos/nuevo-elemento"
          className="flex bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out fixed top-4 right-4 hover:scale-105 active:scale-95"
        >
          <span className="hidden md:inline px-4 py-2 ">Añadir elemento</span>
          <span className="md:hidden  px-4 py-1 ">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              ></path>
            </svg>
          </span>
        </Link>
      )}
      <div 
        className={`${
          isMenuOpen ? "border-y absolute top-12 left-0 right-0 bg-white shadow-md mt-2 overflow-y-auto transition-all duration-300 max-h-[80vh]" : "hidden"
        } lg:hidden md:hidden`}
      >
        <ul className="py-2 transform origin-top">
          <li className="py-2 px-4">
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
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
