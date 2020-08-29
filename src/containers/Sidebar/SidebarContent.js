import React from "react";
import { useSelector } from "react-redux";
import { Menu, Badge } from "antd";
import { Link } from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";

import {
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR
} from "../../constants/ThemeSetting";
import IntlMessages from "../../util/IntlMessages";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const SidebarContent = () => {

  let {pathname} = useSelector(({settings}) => settings);

  const selectedKeys = pathname.substr(1);
  const defaultOpenKeys = selectedKeys.split('/')[1];

  return (<>
      <SidebarLogo/>
      <div className="gx-sidebar-content">
        <CustomScrollbars className="gx-layout-sider-scrollbar">
          <Menu
            defaultOpenKeys={[defaultOpenKeys]}
            selectedKeys={[selectedKeys]}
            theme='dark'
            mode="inline"
          >
            <MenuItemGroup key="saleschannel" className="gx-menu-group" 
              title={<> <IntlMessages id="sidebar.saleschannel"/></>}>
                <SubMenu key="amazon"
                        title={<span>
                          <span><i className="icon icon-link"/><IntlMessages id="sidebar.amazon"/></span></span>}>
                  <Menu.Item key="saleschannel/amazon/setting">
                    <Link to="/">
                      <span><IntlMessages id="sidebar.amazon.setting"/></span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="saleschannel/amazon/service01">
                    <Link to="/">
                      <span><IntlMessages id="service01"/></span>
                    </Link>
                  </Menu.Item>
                  <Menu.Item key="saleschannel/amazon/service02">
                    <Link to="/">
                      <span><IntlMessages id="service02"/></span>
                    </Link>
                  </Menu.Item>
                  
                </SubMenu>
                <SubMenu key="ebay"
                        title={<span>
                          <span><i className="icon icon-transfer"/><IntlMessages id="sidebar.ebay"/></span></span>}>
                  <Menu.Item key="saleschannel/ebay/setting">
                    <Link to="/">
                      <span><IntlMessages id="sidebar.ebay.setting"/></span>
                    </Link>
                  </Menu.Item>
                  
                </SubMenu>
            </MenuItemGroup>
            
          </Menu>
          <Menu
              defaultOpenKeys={[defaultOpenKeys]}
              selectedKeys={[selectedKeys]}
              theme='dark'
              mode="inline"
            >
              <MenuItemGroup key="services" className="gx-menu-group" title={<IntlMessages id="sidebar.services"/>}>
                <Menu.Item key="sales">
                  <Link to="/sales"><i className="icon icon-shopping-cart"/>
                    <span><IntlMessages id="sidebar.sales"/></span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="inventory">
                  <Link to="/inventory"><i className="icon icon-auth-screen"/>
                    <span><IntlMessages id="sidebar.inventory"/></span>
                  </Link>
                </Menu.Item>
                <Menu.Item key="reports">
                  <Link to="/reports"><i className="icon icon-calendar"/>
                    <span><IntlMessages id="sidebar.reports"/></span>
                  </Link>
                </Menu.Item>  
              </MenuItemGroup>
          </Menu>
        </CustomScrollbars>
      </div>
    </>
  );
};

SidebarContent.propTypes = {};

export default SidebarContent;

