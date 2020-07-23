import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import asyncComponent from 'util/asyncComponent';
import { RouteMiddlware } from 'middlware';

const App = ({match}) => {
  const { userRoles } = useSelector(state => state.auth);
  //const { roles } = useSelector(state => state.roles);

  return (
  <div className="gx-main-content-wrapper">
    <Switch>
      <RouteMiddlware 
        path={`${match.url}`}
        component={asyncComponent(() => import('./Dashboard'))}
        userRoles={userRoles}
        exact
        service='Dashboard'
      />
      <RouteMiddlware 
        path={`${match.url}sales`}
        component={asyncComponent(() => import('./Sales'))}
        userRoles={userRoles}
        service='Sales'
      />
      <RouteMiddlware 
        path={`${match.url}inventory`}
        component={asyncComponent(() => import('./Inventory'))}
        userRoles={userRoles}
        service='Inventory'
      />
      <RouteMiddlware 
        path={`${match.url}roles`}
        component={asyncComponent(() => import('./Roles'))}
        userRoles={userRoles}
        service='Roles'
        exact
      />
      <RouteMiddlware 
        path={`${match.url}permissions`}
        component={asyncComponent(() => import('./Permissions'))}
        userRoles={userRoles}
        service='Permissions'
        exact
      />
     <RouteMiddlware
        path={[`${match.url}users`]}
        component={asyncComponent(() => import('./Users'))}
        userRoles={userRoles}
        service='Users'
      />
      <RouteMiddlware 
        path={`${match.url}companies`}
        component={asyncComponent(() => import('./Companies') ) }
        userRoles={userRoles}
        service='Companies'
      />
      <RouteMiddlware
        path={[`${match.url}company/users`]}
        component={asyncComponent(() => import('./Users'))}
        userRoles={userRoles}
        service='Company/Users'
      />
      <RouteMiddlware 
        path={`${match.url}company/roles`}
        component={asyncComponent(() => import('./Roles'))}
        userRoles={userRoles}
        service='Company/Roles'
        exact
      />
      <Route path={`${match.url}notAuthorized`} component={asyncComponent(() => import('components/Error404'))}/>
    </Switch>
  </div>
)};

export default App;
