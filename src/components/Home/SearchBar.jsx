import React from "react";
import { MDBCol, MDBIcon, MDBInput, MDBFormInline } from "mdbreact";
import "./SearchBar.css";
import { link } from "react-router-dom";
export const SearchBar = () => {
  return (
    <React.Fragment>
      <MDBCol md="6" className="center">
        <MDBInput
          hint="Search"
          type="text"
          containerClass="active-pink active-pink-2 mt-0 mb-3"
        />
        <nav>
          <ul className="font-style">
            <li className="text-dec">
              <a href="#">Searched Items</a>
            </li>
            <li className="text-dec">
              <a href="#">Searched Items</a>
            </li>
            <li className="text-dec">
              <a href="#">Searched Items</a>
            </li>
            <li className="text-dec">
              <a href="#">Searched Items</a>
            </li>
          </ul>
        </nav>
      </MDBCol>
    </React.Fragment>
  );
};
