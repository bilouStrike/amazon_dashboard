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
        path={`${match.url}`}
        component={asyncComponent(() => import('./Dashboard'))}
        role={role}
        exact
        service='Dashboard'
      />
      <RouteMiddlware 
        path={`${match.url}sales`}
        component={asyncComponent(() => import('./Sales'))}
        role={role}
        service='Sales'
      />
      <RouteMiddlware 
        path={`${match.url}inventory`}
        component={asyncComponent(() => import('./Inventory'))}
        role={role}
        service='Inventory'
      />
      <RouteMiddlware 
        path={`${match.url}roles`}
        component={asyncComponent(() => import('./Roles'))}
        role={role}
        service='Roles'
        exact
      />
      <RouteMiddlware 
        path={`${match.url}permissions`}
        component={asyncComponent(() => import('./Permissions'))}
        role={role}
        service='Permissions'
        exact
      />
      <Route path={`${match.url}notAuthorized`} component={asyncComponent(() => import('components/Error404'))}/>
    </Switch>
  </div>
)};

export default App;
