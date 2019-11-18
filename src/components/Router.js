import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import App from '../App'
import Login from '../components/login';
import NotFound from '../components/NotFound';
const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login}></Route>
            <Route path="/dashboard/:username" component={App}></Route>
            <Route component={NotFound}></Route>
        </Switch>
    </BrowserRouter>
)
export default Router;