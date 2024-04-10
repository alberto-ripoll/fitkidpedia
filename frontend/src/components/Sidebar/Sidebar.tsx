import SidebarItemComponent from "./SidebarItemComponent";

const items = [
  {
    text: "Ejercicios",
    link: "/ejercicios",
    items: [
      {
        text: "Flexibilidad",
        link: "/ejercicios/flexibilidad",
        items: [],
      },
      {
        text: "Acrobacias",
        link: "/ejercicios/acrobacias",
        items: [],
      },
      {
        text: "Fuerza",
        link: "/ejercicios/fuerza",
        items: [],
      },
      {
        text: "Salto",
        link: "/ejercicios/salto",
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
          {items.map((item) => (
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
