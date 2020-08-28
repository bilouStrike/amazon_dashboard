import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Link} from "react-router-dom";

import {
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  TAB_SIZE,
} from "../../constants/ThemeSetting";


const SidebarLogo = () => {
  const {width} = useSelector(({settings}) => settings);
  let navStyle = useSelector(({settings}) => settings.navStyle);
  if (width < TAB_SIZE && navStyle === NAV_STYLE_FIXED) {
    navStyle = NAV_STYLE_DRAWER;
  }
  return (
      <div className="gx-layout-sider-header">
        <Link to="/" style={{color:"#fff", fontSize:"22px"}}>
          Ecomaxis
        </Link>
      </div>
  );
};

export default SidebarLogo;
