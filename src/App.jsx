import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Login } from "./components/Auth/Login";
// import { Signup } from "./components/Auth/Signup";
import { HomePage } from "./components/Home/HomePage";
import subApp from "./components/app-login-signup";

export const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/login" exact component={subApp} />
          {/* <Route path="/register" exact component={Signup} /> */}
          <Route path="/home" exact component={HomePage} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};
