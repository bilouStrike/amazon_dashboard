import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConfigProvider, Layout } from 'antd';
import { IntlProvider } from "react-intl";
import Sidebar from "../Sidebar/index";
import InsideHeader from "../Topbar/InsideHeader/index";

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
  TAB_SIZE
} from "../../constants/ThemeSetting";
import NoHeaderNotification from "../Topbar/NoHeaderNotification/index";

import { RestrictedRoute } from 'middlware';
const App = () => {

  const width = useSelector(({settings}) => settings.width);
  const { isAuthenticated } = useSelector(state => state.auth)
  const locale = useSelector(({settings}) => settings.locale);
  const themeType = useSelector(({settings}) => settings.themeType);

  useEffect(() => {
    console.log('render index')
  }, [])

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

  const currentAppLocale = AppLocale[locale.locale];

  return (
    <ConfigProvider locale={currentAppLocale.antd}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}>
        <Layout className="gx-app-layout" style={{background:'#fff'}}>
          { isAuthenticated && getSidebar(NAV_STYLE_FIXED, width)}
          <Layout>
              {getNavStyles(NAV_STYLE_FIXED)}
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
