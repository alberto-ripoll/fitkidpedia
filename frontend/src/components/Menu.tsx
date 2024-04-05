import { Link, useLocation } from "react-router-dom";
import { FaPuzzlePiece, FaTrophy, FaUsers } from "react-icons/fa";
import { useState } from "react";

interface MenuProps {
  children: any;
  items: Array<{ name: string; href: string; icon: string }>;
  text: string;
}

const Menu = (props: MenuProps) => {
  const location = useLocation();
  const { children, items, text } = props;
  const [isOpened, setIsOpened] = useState(true);

  return (
    <div>
      <button
        className={`w-full flex items-center justify-between text-gray-600 p-4 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150 mb-0.5 ${
          location.pathname.includes(text.toLowerCase()) ? "bg-gray-100" : ""
        }`}
        onClick={() => setIsOpened(!isOpened)}
      >
        <div className="flex items-center gap-x-2">
          {children} {text}
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={`w-5 h-5 duration-150 ${isOpened ? "rotate-180" : ""}`}
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpened && (
        <ul className="mx-4 px-2 border-l text-sm font-medium">
          {items.map((item, idx) => (
            <li key={idx}>
              <Link
                to={item.href}
                className={`flex items-center gap-x-2 text-gray-600 p-2 mb-2 rounded-lg hover:bg-gray-100 active:bg-gray-100 duration-150 ${
                  location.pathname === item.href ? "bg-gray-100" : ""
                }`}
              >
                {item.icon && <div className="text-gray-500">{item.icon}</div>}
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const MenuLateral = ({ isMenuOpen }: { isMenuOpen: boolean }) => {
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
  ];  const nestedNavCompeticionGrupal = [
    { name: "Duo, Small y Big", href: "/puntuacion-grupal/grupos", icon: "" },
    { name: "Big Free", href: "/puntuacion-grupal/big-free", icon: "" },
  ];

  if (location.pathname === "/") {
    return null;
  }
  return (
    <div className={`${isMenuOpen ? "block " : "hidden"} lg:block sm:hidden pb-40`}> {/* Ocultar en pantallas md */}
        {/* // <div className={`${isMenuOpen ? "sm:fixed sm:inset-0 sm:z-50 sm:overflow-y-auto sm:py-12 md:block" : "hidden"}`}> */}

      <nav className="my-2 top-0 left-0 w-full h-full bg-white space-y-8 sm:w-80 border-r overflow-y-auto">
        <h1 className="text-2xl font-bold px-4">FITKID BOOK</h1>
        <div className="flex flex-col h-full px-4">
          <div className="overflow-auto">
            <ul className="text-sm font-medium flex-1">
            <hr className="my-2" />

              <li>
                <Menu items={nestedNav} text="Ejercicios">
                  <FaPuzzlePiece />
                </Menu>
                <Menu items={nestedNavEdad} text="Categorias">
                  <FaUsers />
                </Menu>
                <hr className="my-2" />
                <Menu items={nestedNavCompeticion} text="Puntuación individual">
                  <FaTrophy />
                </Menu>

                <Menu items={nestedNavCompeticionGrupal} text="Puntuación grupal">
                  <FaTrophy />
                </Menu>
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
