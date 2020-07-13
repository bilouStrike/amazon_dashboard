import React from "react";
import { Redirect, Route } from "react-router-dom";

const ServiceRoles = {
    'dashboard': [
      'agency_admin',
      'role2',
    ],
    'Sales': [
        'agency_admin',
        'role2',
    ],
    'Inventory': [
        'role1',
        'role2',
    ]
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
    const rolesOfservice = ServiceRoles[service];
    return (
        <Route
            {...rest}
            render={props =>
            rolesOfservice.includes(role)
                ? <Component {...props} />
                : <Redirect
                to={{
                pathname: '/notAuthorized',
                }}
            />}
        />
    )
}