import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from 'util/asyncComponent';

const Permissions = ({match}) => {
  return (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}`} exact component={asyncComponent(() => import('components/Permissions/home'))}/>
    </Switch>
  </div>
)};

export default Permissions;
