import React from "react";
import {useDispatch, useSelector} from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ConfigProvider } from 'antd';
import {IntlProvider} from "react-intl";

import AppLocale from "lngProvider";
import MainApp from "./MainApp";
import SignIn from '../SignIn';
import SignUp from "../SignUp";

import {
  LAYOUT_TYPE_BOXED,
  LAYOUT_TYPE_FRAMED,
  LAYOUT_TYPE_FULL,
  NAV_STYLE_DEFAULT_HORIZONTAL,
  NAV_STYLE_INSIDE_HEADER_HORIZONTAL,
  THEME_TYPE_DARK
} from "../../constants/ThemeSetting";

import { RestrictedRoute } from 'middlware';

const App = (props) => {

  const {match, location} = props;
  const { isAuthenticated } = useSelector(state => state.auth)

  const dispatch = useDispatch();

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

  /*if (location.pathname === '/') {
    return (<Redirect to={'/sample'}/>);
  }*/

  setLayoutType(layoutType);

  setNavStyle(navStyle);

  const currentAppLocale = AppLocale[locale.locale];

  return (
    <ConfigProvider locale={currentAppLocale.antd}>
      <IntlProvider
        locale={currentAppLocale.locale}
        messages={currentAppLocale.messages}>
        <Switch>
          <Route exact path='/signin' component={SignIn}/>
          <Route exact path='/signup' component={SignUp}/>
          <RestrictedRoute path={`${match.url}`} isAuthenticated={isAuthenticated}
                           component={MainApp}/>
          
        </Switch>
      </IntlProvider>
    </ConfigProvider>
  )
};

export default App;
