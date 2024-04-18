import { Link, useLocation } from "react-router-dom";
import MenuContent from "./Menu/MenuContent";



interface HeaderProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

const Header = ({ isMenuOpen, toggleMenu }: HeaderProps) => {
  const location = useLocation(); // Obtiene la información de la ruta actual
  const shouldShowAddButton =
    location.pathname.includes("/ejercicio") &&
    location.pathname !== "/ejercicios/nuevo-elemento" &&
    location.pathname !== "/ejercicios/editar-elemento" &&
    location.pathname !== "/puntuacion/ejercicios";


  return (
    <nav className="bg-white fixed w-full z-50">
      <button
        onClick={toggleMenu}
        className="absolute left-4 top-4 lg:hidden md:hidden sm:block"
      >
        <svg
          className="w-6 h-6 text-white"
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
      <div className="flex justify-center items-center h-full w-full bg-gradient-to-r from-blue-500 to-teal-500">
        <Link to="/" className="flex justify-center items-center py-4 rounded-full transition duration-300 ease-in-out transform hover:scale-110">

          <span className="font-bold text-xl text-white">
            FITKIDPEDIA
          </span>
        </Link>
      </div>

      {shouldShowAddButton && (
        <Link
          to="/ejercicios/nuevo-elemento"
          className="flex bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out fixed top-3 right-4 hover:scale-105 active:scale-95"
        >
          <span className="hidden md:inline px-4 py-2 ">Añadir ejercicio</span>
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
        className={`${isMenuOpen ? "border-y absolute top-12 left-0 right-0 bg-white shadow-md mt-2 overflow-y-auto transition-all duration-300 max-h-[80vh]" : "hidden"
          } lg:hidden md:hidden`}
      >
        <ul className="py-2 transform origin-top">
          <li className="py-2 px-4">
            <MenuContent />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
