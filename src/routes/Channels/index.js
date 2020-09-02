import React from 'react';
import { Switch, Route } from 'react-router-dom';
import asyncComponent from 'util/asyncComponent';

const Channels = ({match}) => {

    return (
        <Switch>
            <Route path={`${match.url}`} exact component={asyncComponent(() => import('components/SalesChannels'))}/>
            <Route path={`${match.url}/add/:channel`} exact component={asyncComponent(() => import('components/SalesChannels/addSaleChannel'))}/>
        </Switch>
  );
};

export default Channels;
