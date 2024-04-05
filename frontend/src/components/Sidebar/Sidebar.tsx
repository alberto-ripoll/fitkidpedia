import React, { useState } from "react";

import SidebarItemComponent from "./SidebarItemComponent";

const items = [
  {
    text: "Ejercicios",
    link: "/elementos",
    items: [
      {
        text: "Flexibilidad",
        link: "/elementos/flexibilidad",
        items: [],
      },
      {
        text: "Acrobacias",
        link: "/elementos/acrobacias",
        items: [],
      },
      {
        text: "Fuerza",
        link: "/elementos/fuerza",
        items: [],
      },
      {
        text: "Salto",
        link: "/elementos/salto",
        items: [],
      },
    ],
  },
  {
    text: "Categorias",
    link: "/categorias",
  },
];

interface SidebarProps {
  active: string;
}

function Sidebar({ active }: SidebarProps) {
  return (
    <aside className="min-w-64 border-r border-gray-200 h-screen bg-white shadow-lg">
      <div className="overflow-y-auto py-4 px-3 rounded h-screen ">
        <ul className="space-y-1">
          {items.map((item, index) => (
            <>
              <SidebarItemComponent item={item} active={active} />
              <hr className="my-2" />
            </>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
