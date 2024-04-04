import React, { useState } from "react";
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

interface SidebarItem {
  text: string;
  link?: string; // Opcional, ya que los elementos padres pueden no tener un enlace directo
  items?: SidebarItem[]; // Para soportar anidación
}



const SidebarItemComponent = ({
    item,
    active,
    isChild = false, // Añadimos un nuevo prop para identificar si el ítem es un hijo
  }: {
    item: SidebarItem;
    active: string;
    isChild?: boolean; // Marca opcionalmente si el elemento es un hijo
  }) => {
    const hasChildren = item.items && item.items.length > 0;
  
    // Determina si el ítem actual es el activo o alguno de sus hijos lo es.
    const isActiveOrActiveChild = (item: SidebarItem): boolean => {
      if (item.link === active) return true;
      if (item.items) {
        return item.items.some(subItem => isActiveOrActiveChild(subItem));
      }
      return false;
    };
  
    // Estado inicial basado en si el ítem es activo o tiene un hijo activo.
    const [isOpen, setIsOpen] = useState(() => isActiveOrActiveChild(item));
    const toggleOpen = () => setIsOpen(!isOpen);
  
    return (
      <li>
        <div
          className={`flex items-center justify-between p-2 text-base font-normal text-gray-900 rounded-lg ${isActiveOrActiveChild(item) ? "bg-gray-200" : ""} ${isChild ? "pr-4" : ""}`} // Aplica padding derecho extra para ítems hijos
        >
              {(isChild && !hasChildren) && (
              <div className="w-7" />
            )} 
          {hasChildren && (
            <button onClick={toggleOpen} className="text-gray-500 focus:outline-none">
              {isOpen ? <FaAngleDown className="mr-2" /> : <FaAngleRight className="mr-2" />}
            </button>
          )}
            <Link to={item.link ?? '/'} className={`flex-grow ${hasChildren ? "" : "pr-6"}`}>
              <span className="ml-3">{item.text}</span>
            </Link>
        
        </div>
        {isOpen && hasChildren && (
          <ul className="pl-4">
            {item.items?.map((subItem, index) => (
              <SidebarItemComponent key={index} item={subItem} active={active} isChild={true} />
            ))}
          </ul>
        )}
      </li>
    );
  };

export default SidebarItemComponent;