import React from "react";
import SidebarLarge from "./SidebarLarge";
import SidebarSmall from "./SidebarSmall";

const MainSidebar = ({
  mobilesidebar,
  sidebarOpen,
  indexOpen,
  setIndexOpen,
  setMobileSideBar,
}) => {
  return (
    <div className="">
      <SidebarSmall
        mobilesidebar={mobilesidebar}
        indexOpen={indexOpen}
        setIndexOpen={setIndexOpen}
        setMobilesidebar={setMobileSideBar}
      />
      {/* {Large Screens } */}
      <SidebarLarge
        sidebarOpen={sidebarOpen}
        indexOpen={indexOpen}
        setIndexOpen={setIndexOpen}
      />
    </div>
  );
};

export default MainSidebar;
