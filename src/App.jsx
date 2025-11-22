import React, { useState } from "react";
import Header from "./components/header/HeaderSection";
import Sidebar from "./components/SideBar/Sidebar";
import DashboardContent from "./components/dashboardContent/DashboardContent";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobilesidebar, setMobileSideBar] = useState(false);
  return (
    <div className="bg-[#F8F8F8] w-full h-screen">
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        mobilesidebar={mobilesidebar}
        setMobileSideBar={setMobileSideBar}
      />
      <div className="flex w-full">
        <aside>
          <Sidebar
            sidebarOpen={sidebarOpen}
            mobilesidebar={mobilesidebar}
            setMobileSideBar={setMobileSideBar}
          />
        </aside>
        <main className="w-full">
          <DashboardContent />
        </main>
      </div>
    </div>
  );
};

export default App;
