import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import Orders from "./components/pages/orders";

const history = createBrowserHistory();

export default class Routes extends Component {
  async UNSAFE_componentWillMount() {}

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Orders} />
          <Route path="/order" component={Orders} />
        </Switch>
      </Router>
    );
  }
}
