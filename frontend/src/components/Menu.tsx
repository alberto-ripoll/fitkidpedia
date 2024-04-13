import {  useLocation } from "react-router-dom";
// import SearchBar from "./SearchBar";
import MenuContent from "./Menu/MenuContent";


const MenuLateral = () => {
  const location = useLocation();


  if (location.pathname === "/") {
    return null;
  }
  return (
    <div className="lg:block md:block sm:hidden pt-16 pb-40 hidden max-h-[50vh]">
      <nav className="my-2 top-0 left-0 w-full bg-white space-y-8 md:w-60 lg:w-80 sm:w-full border-r border-blue-100">
        {/* <SearchBar /> */}
        <div className="flex flex-col h-full px-4">
          <div className="overflow-auto">
            <ul className="text-sm font-medium flex-1">
              <hr className="my-2" />
              <li>
                <MenuContent />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};



export default MenuLateral;
