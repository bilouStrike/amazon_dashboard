import React from "react";
import {useSelector, useDispatch} from "react-redux";
import {Menu} from "antd";
import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import IntlMessages from "../../util/IntlMessages";
import {
  NAV_STYLE_ABOVE_HEADER,
  NAV_STYLE_BELOW_HEADER,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE,
  THEME_TYPE_LITE
} from "../../constants/ThemeSetting";
import {onNavStyleChange, toggleCollapsedSideNav} from "appRedux/actions/Setting";


const SubMenu = Menu.SubMenu;
const HorizontalNav = () => {

  const dispatch = useDispatch();
  const {width, themeType, navCollapsed} = useSelector(({settings}) => settings);
  let navStyle = useSelector(({settings}) => settings.navStyle);
  if (width < TAB_SIZE && navStyle === NAV_STYLE_FIXED) {
    navStyle = NAV_STYLE_DRAWER;
  }
  const pathname = useSelector(({settings}) => settings.pathname);

  const getNavStyleSubMenuClass = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_DEFAULT_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve";
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-inside-submenu-popup-curve";
      case NAV_STYLE_BELOW_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-below-submenu-popup-curve";
      case NAV_STYLE_ABOVE_HEADER:
        return "gx-menu-horizontal gx-submenu-popup-curve gx-above-submenu-popup-curve";
      default:
        return "gx-menu-horizontal";

    }
  };

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];
  return (
    <>
    
    <Menu
      defaultOpenKeys={[defaultOpenKeys]}
      selectedKeys={[selectedKeys]}
      mode="horizontal">
      <Menu.Item 
        key="mail" icon={<MenuOutlined/>}
        onClick={() => {
          if (navStyle === NAV_STYLE_DRAWER) {
            dispatch(toggleCollapsedSideNav(!navCollapsed));
          } else if (navStyle === NAV_STYLE_FIXED) {
            dispatch(onNavStyleChange(NAV_STYLE_MINI_SIDEBAR))
          } else if (navStyle === NAV_STYLE_NO_HEADER_MINI_SIDEBAR) {
            dispatch(toggleCollapsedSideNav(!navCollapsed));
          } else {
            dispatch(onNavStyleChange(NAV_STYLE_FIXED))
          }
        }}
        >
        </Menu.Item>
      <SubMenu  key="sales"
        title={<><span><IntlMessages id="sidebar.sales"/></span> <DownOutlined /></> }
      >
        <Menu.Item key="sales1">
          <Link to="/sales/marketpalces">
            <IntlMessages id="sidebar.marketpalces"/></Link>
        </Menu.Item>
        <Menu.Item key="sales2">
          <Link to="/sales/pricing-activity">
            <IntlMessages id="sidebar.pricingActivity"/></Link>
        </Menu.Item>
        <Menu.Item key="sales3">
          <Link to="/sales/pricing-strategy">
            <IntlMessages id="sidebar.pricingStrategy"/></Link>
        </Menu.Item>
      </SubMenu>

      <SubMenu className={getNavStyleSubMenuClass(navStyle)} key="inventory"
        title={<><span><IntlMessages id="sidebar.inventory"/></span><DownOutlined style={{ marginLeft: '5px' }} /></>}>
        <Menu.Item key="inventory">
          <Link to="/inventory">
            <IntlMessages id="sidebar.inventory"/></Link>
        </Menu.Item>
      </SubMenu>

      <SubMenu className={getNavStyleSubMenuClass(navStyle)} key="reports"
        title={<><span><IntlMessages id="sidebar.reports"/></span><DownOutlined style={{ marginLeft: '5px' }} /></>}>
        <Menu.Item key="reports">
          <Link to="/reports">
            <IntlMessages id="sidebar.reports"/></Link>
        </Menu.Item>
      </SubMenu>

    </Menu>
    </>
  );
};

HorizontalNav.propTypes = {};

export default HorizontalNav;

