import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import asyncComponent from 'util/asyncComponent';
import { RouteMiddlware } from 'middlware';
import INITAPP from 'components/InitApp';

const App = ({match}) => {
  const { userRoles } = useSelector(state => state.auth);
  const { currentCompany, companies } = useSelector(state => state.companies);
 
  return (
    <Switch>
      <Route
        path={`${match.url}`}
        render={() => {
          if (companies.length > 0) {
            if (currentCompany && companies[0] !== 'no-data') {
              return <Redirect to='/dashboard' /> 
            }
            if (companies[0] === 'no-data') {
              return <Redirect to='/companies' />
            }
            return <Redirect to='/companies' />
          } else {
            return <INITAPP />
          }
        }}
        exact
      />
      <RouteMiddlware 
        path={`${match.url}dashboard`}
        component={asyncComponent(() => import('./Dashboard'))}
        userRoles={userRoles}
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
      <RouteMiddlware 
        path={`${match.url}salesChannels`}
        component={asyncComponent(() => import('./Channels'))}
        userRoles={userRoles}
        service='Channels'
      />
      <Route path={`${match.url}notAuthorized`} component={asyncComponent(() => import('components/Error404'))}/>
    </Switch>
)};

export default App;
