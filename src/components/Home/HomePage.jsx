import React from "react";
import "./HomePage.css";
import { NavbarExport } from "./Navbar/Navbar";
// import Example from "./Navbar/Navbar-BootStrap";
export const HomePage = () => {
  return (
    <React.Fragment>
      <NavbarExport></NavbarExport>
      <section>
        <div className="container">
          <h1>Main Info</h1>
        </div>
      </section>
    </React.Fragment>
  );
};
