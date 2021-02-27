import React, { Component, useState } from "react";
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
import Items from "./components/Home/Items/Items";
import AddNewItem from "./components/Home/Items/AddNewItem";
import Review from "./components/Home/Reviews/Review";
export const App = () => {
  const [id, setID] = useState("");
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
            <Route exact path="/allvendors" setID={setID} component={Vendor} />
            <Route
              exact
              path="/registernewvendor"
              component={RegisterNewVendor}
            />
            <Route exact path="/allvendors/:vendorid" component={Items} />
            <Route
              exact
              path="/allvendors/:vendorid/addnewitem"
              component={AddNewItem}
            />
            <Route
              exact
              path="/allvendors/:vendorid/allreviews"
              component={Review}
            />
          </Switch>
        </React.Fragment>
      </AuthProvider>
    </Router>
  );
};
