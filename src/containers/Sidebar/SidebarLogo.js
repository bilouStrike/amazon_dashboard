import React from "react";
import {Link} from "react-router-dom";

const SidebarLogo = () => {

  return (
      <div className="gx-layout-sider-header">
        <Link to="/" style={{color:"#fff", fontSize:"22px"}}>
          Ecomaxis
        </Link>
      </div>
  );
};

export default SidebarLogo;
