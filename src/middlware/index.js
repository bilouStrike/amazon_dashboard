import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useSelector } from 'react-redux';
import INITAPP from 'components/InitApp';

function isAuth(servicePermissions, rolePermissions) {
  let bool = false;
  if ( servicePermissions != null ) {
    servicePermissions.map((perm) => {
      if ( !rolePermissions ) {
        return;
      }
      if (rolePermissions.includes(perm.name)) {
        bool = true;
        return;
      }
    })
  return bool;
  }
}

function useCheckPermission (services, permissions, userRoles, roles, service) {
  let auth = true;
  let rolePermissions = [];
  
  if( roles != null ) {
    userRoles.map((userrole) => {
      Object.values(roles).map((role) => {
        if ( role.name === userrole ) {
          rolePermissions.push.apply(rolePermissions, role.permissions);
        }
      })
    });
  }
 


  /*const rolePermissions = roles != null ? roles.filter((itm) => 
    itm.name == role
  ): null;*/
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

export const RouteMiddlware = ({component: Component, userRoles, service, ...rest}) => {
    const { roles } = useSelector(state => state.roles);
    const { services } = useSelector(state => state.services);
    const { permissions } = useSelector(state => state.permissions);
    let isAuthorised = useCheckPermission(services, permissions, userRoles, roles, service);
    return (
        <Route
            {...rest}
            render={props => {
              if ( roles != null && permissions != null && services != null ) {
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