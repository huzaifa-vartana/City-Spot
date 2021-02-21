import React, { Component, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";

// import { Login } from "./components/Auth/Login";
// import { Signup } from "./components/Auth/Signup";
import { HomePage } from "./components/Home/HomePage";
import subApp from "./components/app-login-signup";

export const App = () => {
  const [status, setStatus] = useState(0);
  return (
    <Router>
      <React.Fragment>
        <Switch>
          <Route
            path="/"
            exact
            render={() =>
              status === 200 ? <LandingPage /> : alert("not correct password")
            }
          />
          <Route path="/login" exact>
            <subApp setStatus={setStatus} />
          </Route>
          {/* <Route path="/register" exact component={Signup} /> */}
          <Route path="/home" exact component={HomePage} />
        </Switch>
      </React.Fragment>
    </Router>
  );
};
