import React from "react";
import SidebarLogo from "./SidebarLogo";
import SideBarMenu from './SideBarMenu';

const SidebarContent = () => {

  return (
    <>
      <SidebarLogo/>
      <div className="gx-sidebar-content">
        <SideBarMenu />
      </div>
    </>
  );
};

export default SidebarContent;

