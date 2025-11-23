import React, { useState, useEffect } from "react";
import Header from "./components/header/HeaderSection";
import Sidebar from "./components/sidebar/MainSidebar";
import Dashboard from "./components/dashboardContent/Dashboard";
import MobileSidebarPortal from "./components/sidebar/MobileSidebarPortal";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [mobilesidebar, setMobileSideBar] = useState(false);

  const [indexOpen, setIndexOpen] = useState(false);

  useEffect(() => {
    // If you used duration-300 on sidebar, wait slightly longer
    const t = setTimeout(() => window.dispatchEvent(new Event("resize")), 360);
    return () => clearTimeout(t);
  }, [mobilesidebar]);
  return (
    <div className="bg-[#F8F8F8]  w-full">
      <Header
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        mobilesidebar={mobilesidebar}
        setMobileSideBar={setMobileSideBar}
      />
      <div className="flex w-full">
        <aside className=" sticky top-16 h-[calc(100vh-4rem)] overflow-hidden">
          <MobileSidebarPortal
            open={mobilesidebar}
            onClose={() => setMobileSideBar(false)}
            topOffset={64}
          >
            <Sidebar
              indexOpen={indexOpen}
              setIndexOpen={setIndexOpen}
              sidebarOpen={sidebarOpen}
              mobilesidebar={mobilesidebar}
              setMobileSideBar={setMobileSideBar}
            />
          </MobileSidebarPortal>
        </aside>
        <main className="w-full">
          <Dashboard />
        </main>
      </div>
    </div>
  );
};

export default App;
