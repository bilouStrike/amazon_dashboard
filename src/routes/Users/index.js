import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from 'util/asyncComponent';

const Users = ({match}) => {

  return (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.path}`} exact component={asyncComponent(() => import('components/Users/home'))}/>
      <Route path={`${match.url}/company/:id`} exact component={asyncComponent(() => import('components/Users/home'))}/>
    </Switch>
  </div>
)};

export default Users;
