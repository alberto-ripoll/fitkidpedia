import React from "react";
import SelectCategories from "../../../../components/SelectCategories";

const ElementsSearchBar = () => {
  return (
    <>
    <div className="flex items-center justify-between my-12">
          <SelectCategories/>
      <form onSubmit={(e) => e.preventDefault()} className="mx-auto  w-full max-w-screen-md">
        <div className="flex items-center border rounded-md overflow-hidden">
          <div className="relative flex-grow w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-0 bottom-0 w-6 h-6 my-auto text-gray-400 left-3"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Buscar en el código..."
              className="w-full py-3 pl-12 pr-4 text-gray-500 bg-gray-50 focus:bg-white focus:border-indigo-600 border-none rounded-r-md"
            />
          </div>
        </div>
      </form>
        </div>
    </>
  );
};

export default ElementsSearchBar;
