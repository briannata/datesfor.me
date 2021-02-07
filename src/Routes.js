import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import DateList from "./DateList";
import home from "./home";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/datelist" component={DateList} />
                    <Route path="/" exact component={home} />
                </Switch>
            </Router>
        )
    }
}