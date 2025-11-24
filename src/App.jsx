import React, { useState } from "react";
import Header from "./components/header/HeaderSection";
import Sidebar from "./components/sidebar/MainSidebar";
import Dashboard from "./components/dashboardContent/Dashboard";
import SidebarSmall from "./components/sidebar/SidebarSmall";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobilesidebar, setMobileSideBar] = useState(false);

  const [indexOpen, setIndexOpen] = useState(false);

  return (
    <div className="bg-[#F8F8F8]  w-full">
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        mobilesidebar={mobilesidebar}
        setMobileSideBar={setMobileSideBar}
      />
      <div className="flex w-full">
        <aside className="hidden lg:block sticky top-16 h-[calc(100vh-4rem)] overflow-hidden">
          <Sidebar
            indexOpen={indexOpen}
            setIndexOpen={setIndexOpen}
            sidebarOpen={sidebarOpen}
            mobilesidebar={mobilesidebar}
            setMobileSideBar={setMobileSideBar}
          />
        </aside>
        <SidebarSmall
          mobilesidebar={mobilesidebar}
          setMobileSideBar={setMobileSideBar}
          sidebarOpen={sidebarOpen}
          indexOpen={indexOpen}
          setIndexOpen={setIndexOpen}
        />
        <main className="w-full">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default App;
