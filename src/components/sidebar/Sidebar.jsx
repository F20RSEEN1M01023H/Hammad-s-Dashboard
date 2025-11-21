import React from "react";

const Sidebar = ({ sidebarOpen, mobilesidebar }) => {
  return (
    <div>
      <h1>Hammad is here</h1>
      {mobilesidebar && (
        <div
          className={`flex items-center ${
            mobilesidebar ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h1 className="text-4xl font-bold text-yellow-400">
            Hammad is heere
          </h1>
        </div>
      )}
      <div
        className={`bg-gray-800 hidden md:block text-white transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-16"
        }`}
      >
        <h2 className="font-bold text-amber-600">Font bold</h2>
      </div>
    </div>
  );
};

export default Sidebar;
