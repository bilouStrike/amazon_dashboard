import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from 'util/asyncComponent';

const Roles = ({match}) => {

  return (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}`} exact component={asyncComponent(() => import('components/Roles/home'))}/>
    </Switch>
  </div>
)};

export default Roles;
