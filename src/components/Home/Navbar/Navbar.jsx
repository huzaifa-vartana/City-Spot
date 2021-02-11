import React, { useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Navbar.css";
import {
  Navbar,
  Button,
  NavDropdown,
  Form,
  FormCheck,
  Dropdown,
  Nav,
  ButtonGroup,
  FormControl,
} from "react-bootstrap";
import logo from "../../../img/logo.png";
import { Avatar } from "@material-ui/core";
export const NavbarExport = () => {
  const ref = useRef(0);
  const [isAuth, setisAuth] = useState(true);

  if (isAuth) {
    return (
      <Navbar bg="dark" variant="dark" sticky="top" fixed="top" expand="lg">
        <Navbar.Brand href="/home">
          <img
            src={logo}
            alt=""
            className="d-inline-block align-top logo-img"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto justify-content-center">
            <Nav.Link href="#home" active="true">
              Home
            </Nav.Link>
            {/* <Nav.Link href="#link" onClick={isLoggedIn}>
            Post A Review
          </Nav.Link> */}
            <Nav.Link href="#link">Post A Review</Nav.Link>
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
            <Navbar.Collapse className="justify-content-end"></Navbar.Collapse>
            <Dropdown as={ButtonGroup}>
              <Button variant="success" className="btn-new">
                {" "}
                <Navbar.Text>Signed in as: Malik M. Huzaifa</Navbar.Text>
              </Button>

              <Dropdown.Toggle
                split
                variant="success"
                className="btn-new"
                id="dropdown-split-basic"
              />

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info" className="btn-new">
            Search
          </Button>
        </Form> */}
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    return (
      <Navbar bg="dark" variant="dark" sticky="top" fixed="top" expand="lg">
        <Navbar.Brand href="/home">
          <img
            src={logo}
            alt=""
            className="d-inline-block align-top logo-img"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto justify-content-center">
            <Nav.Link href="#home" active="true">
              Home
            </Nav.Link>
            {/* <Nav.Link href="#link" onClick={isLoggedIn}>
            Post A Review
          </Nav.Link> */}
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
            <Nav.Link href="/login">
              <Button variant="outline-info" className="btn-new">
                User OnBoarding
              </Button>
            </Nav.Link>
          </Nav>
          {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info" className="btn-new">
            Search
          </Button>
        </Form> */}
        </Navbar.Collapse>
      </Navbar>
    );
  }
};
