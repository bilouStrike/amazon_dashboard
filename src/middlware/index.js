import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import INITAPP from 'components/InitApp';

function isAuth(servicePermissions, rolePermissions) {
  let bool = false;
  if ( servicePermissions != null ) {
  servicePermissions.map((perm) => {
    if ( !rolePermissions[0].permissions ) {
      return;
    }
    if (rolePermissions[0].permissions.includes(perm.name)) {
      bool = true;
      return;
    }
  })
  return bool;
  }
}

const checkPermission = (services, permissions, role, roles, service) => {
  let auth = true;

  const rolePermissions = roles != null ? roles.filter((itm) => 
    itm.name == role
  ): null;
  const servicePermissions =  permissions != null ? permissions.filter((itm) => 
  itm.service == service
  ): null;
  auth = isAuth( servicePermissions, rolePermissions );
  return auth;
}

export const RestrictedRoute = ({component: Component, isAuthenticated, ...rest}) =>
  <Route
    {...rest}
    render={props =>
      isAuthenticated
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: '/signin',
          }}
        />}
/>;

export const RouteMiddlware = ({component: Component, role, service, ...rest}) => {
    const { services } = useSelector(state => state.services);
    const { permissions } = useSelector(state => state.permissions);
    const { roles } = useSelector(state => state.roles);
    let isAuthorised = checkPermission(services, permissions, role, roles, service);
    return (
        <Route
            {...rest}
            render={props => {
              if (permissions != null && services != null ) {
                  if (isAuthorised) {
                    return <Component {...props} />
                  } else {
                    return <Redirect
                      to={{
                        pathname: '/notAuthorized',
                      }}
                    />
                  }
              } else {
                return <INITAPP />
              }
            }}
        />
    )
}