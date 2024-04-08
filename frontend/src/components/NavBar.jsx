import React from "react";

const NavBar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="hover:bg-gray-700 p-2 rounded">
            Inicio
          </a>
        </li>
        <li>
          <a href="#" className="hover:bg-gray-700 p-2 rounded">
            Acerca de
          </a>
        </li>
        <li className="group relative">
          <a href="#" className="hover:bg-gray-700 p-2 rounded">
            Servicios
          </a>
          <ul className="absolute hidden group-hover:block bg-gray-700 mt-2 rounded">
            <li>
              <a
                href="#"
                className="block white-space-no-wrap p-2 hover:bg-gray-600"
              >
                Servicio 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block white-space-no-wrap p-2 hover:bg-gray-600"
              >
                Servicio 2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block white-space-no-wrap p-2 hover:bg-gray-600"
              >
                Servicio 3
              </a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="hover:bg-gray-700 p-2 rounded">
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
