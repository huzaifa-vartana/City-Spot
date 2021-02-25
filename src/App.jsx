import React, { Component } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { LandingPage } from "./components/LandingPage";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthProvider } from "../src/components/AuthContext";
import ForgetPassword from "./components/login/ForgetPassword";
// import { Login } from "./components/Auth/Login";
// import { Signup } from "./components/Auth/Signup";
import { HomePage } from "./components/Home/HomePage";
import subApp from "./components/app-login-signup";
import PrivateRoute from "./components/PrivatRoute";
import Vendor from "./components/Home/Vendor/Vendor";
import { NavbarExport } from "./components/Home/Navbar/Navbar";
import RegisterNewVendor from "./components/Home/Vendor/RegisterNewVendor";
export const App = () => {
  return (
    <Router>
      <AuthProvider>
        <React.Fragment>
          <NavbarExport />
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <PrivateRoute path="/login" exact component={subApp} />
            {/* <Route path="/register" exact component={Signup} /> */}
            <Route path="/home" exact component={HomePage} />
            <Route path="/forgot-password" component={ForgetPassword} />
            <Route path="/allvendors" component={Vendor} />
            <Route
              exact
              path="/registernewvendor"
              component={RegisterNewVendor}
            />
          </Switch>
        </React.Fragment>
      </AuthProvider>
    </Router>
  );
};
