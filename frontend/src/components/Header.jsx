import { Link, useLocation } from "react-router-dom";

const Header = ({ toggleMenu }) => {
  const location = useLocation(); // Obtiene la información de la ruta actual
  // Función para verificar si la ruta actual incluye '/elemento'
  const shouldShowAddButton = location.pathname.includes("/elemento") && location.pathname !== "/elementos/nuevo-elemento" && location.pathname !== "/elementos/editar-elemento" && location.pathname !== "/puntuacion/elementos";

  return (
    <nav className="bg-white fixed w-full top-0 z-50 border-y">
      {shouldShowAddButton && (
      <button onClick={toggleMenu} className="absolute left-4 top-4 md:hidden">
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
      )}
      <div className="flex justify-center items-center h-full w-full">
        <Link to="/" className="flex justify-center items-center py-4">
          <span className="font-semibold text-gray-500 text-lg">
            FITKID BOOK
          </span>
        </Link>
      </div>
      {/* Posicionando el botón "Añadir elemento" de manera fija */}
      {shouldShowAddButton && (
        <Link
          to="/elementos/nuevo-elemento"
          className="py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out fixed top-0 right-0 mt-4 mr-4 hover:scale-105 active:scale-95"
        >
          Añadir elemento
        </Link>
      )}
    </nav>
  );
};

export default Header;
