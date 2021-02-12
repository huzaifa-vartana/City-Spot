import React from "react";
import "./HomePage.css";
import { NavbarExport } from "./Navbar/Navbar";
import { Row, Col, Container } from "react-bootstrap";
import SearchField from "react-search-field";
// import {  } from "@material-ui/core";
import { MDBCol, MDBIcon, MDBInput, MDBFormInline } from "mdbreact";

export const HomePage = () => {
  return (
    <React.Fragment>
      <NavbarExport></NavbarExport>
      <Container>
        <Row className="col-border">
          <Col>
            <MDBCol md="6">
              <div className="active-pink-3 active-pink-4 mb-4">
                <input
                  className="form-control"
                  type="text"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>
            </MDBCol>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
