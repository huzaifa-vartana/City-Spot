import React from "react";
import "./HomePage.css";
import { NavbarExport } from "./Navbar/Navbar";
import { Row, Col, Container } from "react-bootstrap";
import { SearchBar } from "./SearchBar";
export const HomePage = () => {
  return (
    <React.Fragment>
      <NavbarExport></NavbarExport>
      <Container fluid>
        <Row className="col-border">
          <Col>
            <SearchBar />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};
