import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConfigProvider, Layout } from 'antd';
import { IntlProvider } from "react-intl";
import Sidebar from "../Sidebar/index";
import InsideHeader from "../Topbar/InsideHeader/index";

// Initialise roles, permission and services of the system
import { getRolesStart } from 'appRedux/actions/Roles';
import { getPermissionsStart } from 'appRedux/actions/Permissions';
import { getServicesStart } from 'appRedux/actions/Services';
import { getCompaniesStart } from 'appRedux/actions/Companies';

import Topbar from "../Topbar/index";
import AppLocale from "lngProvider";
import MainApp from "./MainApp";
import Home from './Home';

import { 
  NAV_STYLE_DRAWER,
  NAV_STYLE_FIXED,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  NAV_STYLE_MINI_SIDEBAR,
  NAV_STYLE_NO_HEADER_EXPANDED_SIDEBAR,
  NAV_STYLE_NO_HEADER_MINI_SIDEBAR,
  TAB_SIZE,
  LAYOUT_TYPE_BOXED,
  LAYOUT_TYPE_FRAMED,
  LAYOUT_TYPE_FULL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  THEME_TYPE_DARK
} from "../../constants/ThemeSetting";
import NoHeaderNotification from "../Topbar/NoHeaderNotification/index";

import { RestrictedRoute } from 'middlware';

const App = () => {

  const width = useSelector(({settings}) => settings.width);
  const { isAuthenticated } = useSelector(state => state.auth)
  const locale = useSelector(({settings}) => settings.locale);
  const navStyle = useSelector(({settings}) => settings.navStyle);
  const themeType = useSelector(({settings}) => settings.themeType);
  const layoutType = useSelector(({settings}) => settings.layoutType);
 
  const setLayoutType = (layoutType) => {
    if (layoutType === LAYOUT_TYPE_FULL) {
      document.body.classList.remove('boxed-layout');
      document.body.classList.remove('framed-layout');
      document.body.classList.add('full-layout');
    } else if (layoutType === LAYOUT_TYPE_BOXED) {
      document.body.classList.remove('full-layout');
      document.body.classList.remove('framed-layout');
      document.body.classList.add('boxed-layout');
    } else if (layoutType === LAYOUT_TYPE_FRAMED) {
      document.body.classList.remove('boxed-layout');
      document.body.classList.remove('full-layout');
      document.body.classList.add('framed-layout');
    }
  };

  const setNavStyle = (navStyle) => {
    if (navStyle === NAV_STYLE_DEFAULT_HORIZONTAL ||
        navStyle === NAV_STYLE_INSIDE_HEADER_HORIZONTAL
      ) {
      document.body.classList.add('full-scroll');
      document.body.classList.add('horizontal-layout');
    } else {
      document.body.classList.remove('full-scroll');
      document.body.classList.remove('horizontal-layout');
    }
  };

  if (themeType === THEME_TYPE_DARK) {
    document.body.classList.add('dark-theme');
  }

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

  setLayoutType(layoutType);

  setNavStyle(navStyle);

  const dispatch = useDispatch();
  const { agencyId } = useSelector(state => state.auth);

  useEffect(() => {
    dispatch(getRolesStart(agencyId));
    dispatch(getPermissionsStart());
    dispatch(getServicesStart());
    dispatch(getCompaniesStart(agencyId));
  }, []);

  const currentAppLocale = AppLocale[locale.locale];

  return (
    <ConfigProvider locale={currentAppLocale.antd}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}>
        <Layout className="gx-app-layout">
        {getSidebar(navStyle, width)}
          <Layout>
            {getNavStyles(navStyle)}
            <Switch>
              <Route 
                path='/home'
                component={Home}
              />             
              <RestrictedRoute 
                path='/'
                isAuthenticated={isAuthenticated}
                component={MainApp}
              />      
            </Switch>
          </Layout>
        </Layout>
      </IntlProvider>
    </ConfigProvider>
  )
};

export default App;
