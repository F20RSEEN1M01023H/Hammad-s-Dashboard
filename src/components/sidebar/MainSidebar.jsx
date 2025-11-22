import React from "react";
import SidebarLarge from "./SidebarLarge";
import SidebarSmall from "./SidebarSmall";

const MainSidebar = ({
  mobilesidebar,
  sidebarOpen,
  indexOpen,
  setIndexOpen,
}) => {
  return (
    <div className="">
      <SidebarSmall
        mobilesidebar={mobilesidebar}
        indexOpen={indexOpen}
        setIndexOpen={setIndexOpen}
      />
      {/* {Large Screens } */}
      <SidebarLarge sidebarOpen={sidebarOpen} />
    </div>
  );
};

export default MainSidebar;
