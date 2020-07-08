import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Apps from "./pages/Apps";
import Error404 from "./pages/Error404";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services/apps" component={Apps} />
        <Route path="/page-not-found" component={Error404} />
        <Redirect to="/page-not-found" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
