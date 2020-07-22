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

function CheckPermission (services, permissions, userRoles, roles, service, currentCompany) {
  let auth = true;
  let rolePermissions = [];
  const rolesOfCurrentCompany = userRoles.filter( (item) => item.companyId === currentCompany );
  console.log(rolesOfCurrentCompany);
  if( roles != null ) {
    rolesOfCurrentCompany.map((userrole) => {
      //console.log(roles.);
      Object.values(roles).map((role) => {
        if ( role.name === userrole.name ) {
          rolePermissions.push.apply(rolePermissions, role.permissions);
        }
      })
    });
  }

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
    const { currentCompany } = useSelector(state => state.companies);
    const { permissions } = useSelector(state => state.permissions);
    let isAuthorised = userRoles[0] === 'agency_owner' ? true : CheckPermission(services, permissions, userRoles, roles, service, currentCompany);
    return (
        <Route
            {...rest}
            render={props => {
              if ( permissions != null && services != null ) {
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