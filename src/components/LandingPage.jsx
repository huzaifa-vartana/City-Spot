import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { Landing } from "./Landing/Landing";
export const LandingPage = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Landing />
    </React.Fragment>
  );
};
