import React from "react";

const Category = ({
  sidebarOpen,
  categoryOpen,
  title,
  items = [],
  onToggle,
  svg,
}) => {
  return (
    <div>
      <div className=" py-4 ml-7 cursor-pointer">
        <button
          className="w-40 flex items-center justify-between cursor-pointer  hover:text-blue-500 active:text-blue-500"
          onClick={onToggle}
        >
          <div className="flex items-center font-semibold  gap-2" href="#">
            {svg}

            <span className={`${!sidebarOpen && "lg:hidden"}`}>{title}</span>
          </div>
          <div className={` ${!sidebarOpen && "lg:hidden"}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 512 512"
              fill="currentColor"
              className={`transition-transform duration-300 ${
                categoryOpen ? "rotate-180  " : "rotate-0"
              }`}
            >
              <path d="M256 294.1L383 167c9.4-9.4 24.6-9.4 33.9 0s9.3 24.6 0 34L273 345c-9.1 9.1-23.7 9.3-33.1.7L95 201.1c-4.7-4.7-7-10.9-7-17s2.3-12.3 7-17c9.4-9.4 24.6-9.4 33.9 0l127.1 127z" />
            </svg>
          </div>
        </button>
        {categoryOpen && (
          <div className={`pl-8 py-2 ${categoryOpen ? "max-h-10 pt-3" : " "}`}>
            <ul className="list-disc">
              {items.map((s, idx) => (
                <li
                  key={idx}
                  className=" hover:text-blue-500 active:text-blue-500"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Category;
