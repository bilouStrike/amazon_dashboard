import React, { useEffect } from "react";
import { Layout } from "antd";
import { useDispatch } from 'react-redux';
import Sidebar from "../Sidebar/index";
import InsideHeader from "../Topbar/InsideHeader/index";

import Topbar from "../Topbar/index";
import {footerText} from "util/config";
import App from "routes/index";
import {useSelector} from "react-redux";
import { 
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE 
} from "../../constants/ThemeSetting";
import NoHeaderNotification from "../Topbar/NoHeaderNotification/index";

// Initialise roles, permission and services of the system
import { getRolesStart } from 'appRedux/actions/Roles';
import { getPermissionsStart } from 'appRedux/actions/Permissions';
import { getServicesStart } from 'appRedux/actions/Services';

const {Content, Footer} = Layout;

const MainApp = (props) => {

  const navStyle = useSelector(({settings}) => settings.navStyle);
  const width = useSelector(({settings}) => settings.width);

  const getContainerClass = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL:
        return "gx-container-wrap";
      default :
        return ""
    }
  };
  const getNavStyles = (navStyle) => {
    switch (navStyle) {
      case NAV_STYLE_INSIDE_HEADER_HORIZONTAL :
        return <InsideHeader/>;
      case NAV_STYLE_FIXED :
        return <Topbar/>;
      case NAV_STYLE_DRAWER :
        return <Topbar/>;
      case NAV_STYLE_MINI_SIDEBAR :
        return <Topbar/>;
      case NAV_STYLE_NO_HEADER_MINI_SIDEBAR :
        return <NoHeaderNotification/>;
      case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR :
        return <NoHeaderNotification/>;
      default :
        return null;
    }
  };
  const getSidebar = (navStyle, width) => {
    if (width < TAB_SIZE) {
      return <Sidebar/>;
    }
    switch (navStyle) {
      case NAV_STYLE_FIXED :
        return <Sidebar/>;
      case NAV_STYLE_DRAWER :
        return <Sidebar/>;
      case NAV_STYLE_MINI_SIDEBAR :
        return <Sidebar/>;
      case NAV_STYLE_NO_HEADER_MINI_SIDEBAR :
        return <Sidebar/>;
      case NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR:
        return <Sidebar/>;
      default :
        return null;
    }
  };
  
  const dispatch = useDispatch();
  const { agencyId, companyId } = useSelector(state => state.auth);

  useEffect(() => {

    dispatch(getRolesStart(agencyId));
    dispatch(getPermissionsStart());
    dispatch(getServicesStart());
  }, []);

  const {match} = props;

  return (
    <Layout className="gx-app-layout">
      {getSidebar(navStyle, width)}
      <Layout>
        {getNavStyles(navStyle)}
        <Content className={`gx-layout-content ${getContainerClass(navStyle)}`}>
          <App match={match}/>
          <Footer>
            <div className="gx-layout-footer-content">
              {footerText}
            </div>
          </Footer>
        </Content>
      </Layout>
    </Layout>
  )
};


export default MainApp;

