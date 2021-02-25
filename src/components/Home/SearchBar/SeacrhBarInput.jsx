import React from "react";
import { MDBCol, MDBIcon, MDBInput, MDBFormInline } from "mdbreact";

export default function SeacrhBarInput() {
  return (
    <>
      <MDBCol md="4">
        <MDBInput
          hint="Search"
          type="text"
          containerClass="active-pink active-pink-2 "
        />
      </MDBCol>
    </>
  );
}
