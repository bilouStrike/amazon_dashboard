import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConfigProvider, Layout } from 'antd';
import { IntlProvider } from "react-intl";
import Sidebar from "../Sidebar/index";
import Topbar from "../Topbar/index";
import AppLocale from "lngProvider";
import MainApp from "./MainApp";
import Home from './Home';
import { RestrictedRoute } from 'middlware';

const App = () => {

  const { isAuthenticated } = useSelector(state => state.auth)
  const locale = useSelector(({settings}) => settings.locale);
  const currentAppLocale = AppLocale[locale.locale];

  return (
    <ConfigProvider locale={currentAppLocale.antd}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}>
        <Layout className="gx-app-layout" style={{background:'#fff'}}>
          { isAuthenticated && <Sidebar/>}
          <Layout>
              <Topbar/>
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
