import React from "react";
import { MDBCol, MDBIcon, MDBInput, MDBFormInline } from "mdbreact";
import "./SearchBar.css";
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
            <li>
              <a>XYX</a>
            </li>
            <li>
              <a>XYZ</a>
            </li>
            <li>
              <a>XYZ</a>
            </li>
          </ul>
        </nav>
      </MDBCol>
    </React.Fragment>
  );
};
