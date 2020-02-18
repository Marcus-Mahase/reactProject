import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import * as serviceWorker from './serviceWorker';
import { Route, Switch, BrowserRouter } from "react-router-dom";

import store from "./store";
import Login from "./containers/Login";
import SignUp from "./containers/SignUp";
import Verify from "./containers/Verify";
import SetPassword from "./containers/SetPassword";
import Home from "./components/Home";

import './index.css';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/signup" component={SignUp} />
                <Route path="/verify" component={Verify} />
                <Route path="/setpassword" component={SetPassword} />
                <Route path="/login" component={Login} />
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root'));

serviceWorker.unregister();

