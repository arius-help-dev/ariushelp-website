import React from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Apps from "./pages/Apps";
import Websites from "./pages/Websites";
import Instaservice from "./pages/Instaservice";
import Ecommerce from "./pages/Ecommerce";
import Blog from "./pages/Blog";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services/apps" component={Apps} />
        <Route path="/services/websites" component={Websites} />
        <Route path="/services/instaservice" component={Instaservice} />
        <Route path="/services/e-commerce" component={Ecommerce} />
        <Route path="/blog" component={Blog} />
        <Route path="/login" component={Login} />
        <Route path="/page-not-found" component={Error404} />
        <Redirect to="/page-not-found" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
