import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import asyncComponent from 'util/asyncComponent';
import { RouteMiddlware } from 'middlware';

const App = ({match}) => {
  const { role } = useSelector(state => state.auth);
  return (
  <div className="gx-main-content-wrapper">
    <Switch>
      <RouteMiddlware 
        path={`${match.url}service1`}
        component={asyncComponent(() => import('./Service1'))}
        role={role}
        service='Service1'
      />
      <RouteMiddlware 
        path={`${match.url}service2`}
        component={asyncComponent(() => import('./Service2'))}
        role={role}
        service='Service2'
      />
      <Route path={`${match.url}notAuthorized`} component={asyncComponent(() => import('components/Error404'))}/>
    </Switch>
  </div>
)};

export default App;
