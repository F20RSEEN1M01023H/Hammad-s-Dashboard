import React from "react";

const Sidebar = ({ sidebarOpen, mobilesidebar }) => {
  return (
    <div className="relative">
      {mobilesidebar && (
        <div
          className={` absolute top-10 left-10 border-2  border-amber-500 flex items-center lg:hidden ${
            mobilesidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h1 className="text-4xl font-bold text-yellow-400">Small Screens</h1>
        </div>
      )}

      <div
        className={`h-screen hidden pt-4 lg:block transition-all duration-300 ${
          sidebarOpen ? "w-50" : "w-24"
        }`}
      >
        <div className="px-2 py-2">
          <div className="py-2">
            <button className="flex justify-center  ">
              <a
                className="flex items-center w-full font-semibold gap-2 hover:text-blue-500 active:text-blue-500"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z" />
                </svg>

                <span>Dashboard</span>
              </a>
            </button>
          </div>
          <div className="py-2">
            <button className="flex justify-center mx-auto">
              <a
                className="flex items-center w-full font-semibold gap-2 hover:text-blue-500 active:text-blue-500"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z" />
                </svg>

                <span>Category</span>
              </a>
            </button>
          </div>
          <div className="py-2">
            <button className="flex justify-center ">
              <a
                className="flex items-center w-full font-semibold gap-2 hover:text-blue-500 active:text-blue-500"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z" />
                </svg>

                <span>Sub Category</span>
              </a>
            </button>
          </div>
          <div>
            <button className="flex justify-center mx-auto">
              <a
                className="flex items-center w-full font-semibold gap-2 hover:text-blue-500 active:text-blue-500"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z" />
                </svg>

                <span>Dashboard</span>
              </a>
            </button>
          </div>
          <div>
            <button className="flex justify-center mx-auto">
              <a
                className="flex items-center w-full font-semibold gap-2 hover:text-blue-500 active:text-blue-500"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z" />
                </svg>

                <span>Dashboard</span>
              </a>
            </button>
          </div>
          <div>
            <button className="flex justify-center mx-auto">
              <a
                className="flex items-center w-full font-semibold gap-2 hover:text-blue-500 active:text-blue-500"
                href="#"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 5v2h-4V5h4M9 5v6H5V5h4m10 8v6h-4v-6h4M9 17v2H5v-2h4M21 3h-8v6h8V3zM11 3H3v10h8V3zm10 8h-8v10h8V11zm-10 4H3v6h8v-6z" />
                </svg>

                <span>Dashboard</span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
