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

function CheckPermission (services, permissions, userRoles, roles, service, currentCompany, companyId) {
  let auth = true;
  let rolePermissions = [];
  if( roles != null ) {

    if( companyId === null ) {
      userRoles.map((userrole) => {
        Object.values(roles).map((role) => {
          if ( role.name === userrole.name ) {
            rolePermissions.push.apply(rolePermissions, role.permissions);
          }
        })
      });
    } else {
      const rolesOfCurrentCompany = currentCompany ? userRoles.filter( (item) => item.companyId === currentCompany.id ) : [];
      rolesOfCurrentCompany.map((userrole) => {
        Object.values(roles).map((role) => {
          if ( role.name === userrole.name ) {
            rolePermissions.push.apply(rolePermissions, role.permissions);
          }
        })
      });
    }   
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
            pathname: '/home/signin',
          }}
        />}
/>;

export const RouteMiddlware = ({component: Component, userRoles, service, ...rest}) => {
    const { roles } = useSelector(state => state.roles);
    const { services } = useSelector(state => state.services);
    const { currentCompany } = useSelector(state => state.companies);
    const { permissions } = useSelector(state => state.permissions);
    const { companyId } = useSelector(state => state.auth);
    let isAuthorised = userRoles.length > 0 && userRoles[0].roleId === 1 ? true : CheckPermission(services, permissions, userRoles, roles, service, currentCompany, companyId);
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