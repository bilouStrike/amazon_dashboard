import React from "react";
import { useSelector } from "react-redux";
import { Menu } from "antd";
import { Link } from "react-router-dom";

import CustomScrollbars from "util/CustomScrollbars";
import SidebarLogo from "./SidebarLogo";

import IntlMessages from "../../util/IntlMessages";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;
const SidebarContent = () => {

  const { companies, currentCompany } = useSelector(state => state.companies);
  const currentCompanyData = currentCompany !== null ? companies.filter((item) => item.id == currentCompany.id) : null ;
  const channels = currentCompanyData != null ? currentCompanyData[0].channels: [];
  let channelMenu = [];

  if ( channels.length > 0 ) { channels.map(channel => {
        if (channel.provider === 'amazon') {
          channelMenu.push(
            <SubMenu 
              key="amazon"
              title={
                    <span><i className="icon icon-link"/><IntlMessages id="sidebar.amazon"/></span>}>
                    <SubMenu key="inventory" title="Inventory">
                        <Menu.Item key="7">View</Menu.Item>
                        <Menu.Item key="8">Setting</Menu.Item>
                    </SubMenu>
                    <SubMenu key="shipping" title="Shipping">
                        <Menu.Item key="7">Add shipping</Menu.Item>
                        <Menu.Item key="8">Setting</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="saleschannel/amazon/setting">
                        <Link to="/">
                          <span><IntlMessages id="sidebar.amazon.setting"/></span>
                        </Link>
                    </Menu.Item>
              </SubMenu>)
        }
        if (channel.provider === 'ebay' ) {
          channelMenu.push(<SubMenu key="ebay"
          title={<span>
          <span><i className="icon icon-transfer"/><IntlMessages id="sidebar.ebay"/></span></span>}>
          <Menu.Item key="saleschannel/ebay/setting">
            <Link to="/">
              <span><IntlMessages id="sidebar.ebay.setting"/></span>
            </Link>
          </Menu.Item>
          </SubMenu>)
        }
      } 
    )}

  return (<>
      <SidebarLogo/>
      <div className="gx-sidebar-content">
          <Menu
            theme='dark'
            mode="inline"
          >
            <MenuItemGroup key="saleschannel" className="gx-menu-group" 
              title={<> <IntlMessages id="sidebar.saleschannel"/></>}>
                             {channelMenu}

                  <Menu.Item key="channels">
                    <Link to="/salesChannels"><i className="icon icon-add"/>
                      <span><IntlMessages id="sidebar.addSalesChannels"/></span>
                    </Link>
                  </Menu.Item> 
            </MenuItemGroup>
          </Menu>
          <Menu
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
      </div>
    </>
  );
};

SidebarContent.propTypes = {};

export default SidebarContent;

