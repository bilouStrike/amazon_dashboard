import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import asyncComponent from 'util/asyncComponent';

const Roles = ({match}) => {
  const { role } = useSelector(state => state.auth);
  return (
  <div className="gx-main-content-wrapper">
    <Switch>
      <Route path={`${match.url}`} exact component={asyncComponent(() => import('components/Roles/home'))}/>
      <Route path={`${match.url}new`} component={asyncComponent(() => import('components/Roles/home'))}/>
    </Switch>
  </div>
)};

export default Roles;
