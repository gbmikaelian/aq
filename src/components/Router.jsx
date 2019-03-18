import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';

export default () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/" component={() => <div>page not found</div>} />
        </Switch>
    );
};
