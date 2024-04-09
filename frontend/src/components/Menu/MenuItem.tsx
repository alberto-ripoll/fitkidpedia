import { useState } from "react";
import { Link, useLocation } from "react-router-dom";


interface MenuProps {
    children: React.ReactNode;
    items: Array<{ name: string; href: string; icon: string }>;
    text: string;
  }
  
  const MenuItem = (props: MenuProps) => {
    const location = useLocation();
    const { children, items, text } = props;
    const [isOpened, setIsOpened] = useState(false);
  
    return (
      <div>
        <button
          className={`w-full flex items-center justify-between text-gray-600 p-4 rounded-lg hover:bg-gray-50 active:bg-gray-100 duration-150 mb-0.5 ${location.pathname.includes(text.toLowerCase()) ? "bg-gray-100" : ""
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
                  className={`flex items-center gap-x-2 text-gray-600 p-2 mb-2 rounded-lg hover:bg-gray-100 active:bg-gray-100 duration-150 ${location.pathname === item.href ? "bg-gray-100" : ""
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

  export default MenuItem;