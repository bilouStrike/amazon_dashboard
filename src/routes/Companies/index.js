import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from 'util/asyncComponent';

const Companies = ({match}) => {
  return (
    <Switch>
      <Route path={`${match.url}`} exact component={asyncComponent(() => import('components/Companies/home'))}/>
    </Switch>
  );
};

export default Companies;
