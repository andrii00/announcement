import React from 'react';
import {Route, Switch} from 'react-router';
import Home from "../components/home/home";
import FullProduct from "../components/fullProduct/fullProduct";


export const RoutingConfig = () => (
    <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/:id" exact component={FullProduct}/>
    </Switch>
);