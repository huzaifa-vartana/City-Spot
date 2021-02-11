import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import {
  Navbar,
  Button,
  NavDropdown,
  Form,
  FormCheck,
  Nav,
  FormControl,
} from "react-bootstrap";
import logo from "../../../img/logo.png";
export const NavbarExport = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top" fixed="top" expand="lg">
      <Navbar.Brand href="/home">
        <img src={logo} alt="" className="d-inline-block align-top logo-img" />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home" active="false">
            Home
          </Nav.Link>
          <Nav.Link href="#link" disabled>
            Post A Review
          </Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Nav>
          <Nav.Link href="/login">User OnBoarding</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info" className="btn-new">
            Search
          </Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};
