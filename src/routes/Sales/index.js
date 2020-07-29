import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from 'util/asyncComponent';

const Sales = ({match}) => {
 console.log(`${match.url}/marketpalces`);
  return (
    <Switch>
      <Route path={`${match.url}/marketpalces`} exact component={asyncComponent(() => import('components/Sales/marketPlaces'))}/>
      <Route path={`${match.url}/pricing-activity`} exact component={asyncComponent(() => import('components/Sales/pricingActivity'))}/>
      <Route path={`${match.url}/pricing-strategy`} exact component={asyncComponent(() => import('components/Sales/pricingStrategy'))}/>
    </Switch>
  );
};

export default Sales;
