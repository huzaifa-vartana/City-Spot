import React from "react";
import "./HomePage.css";
import { NavbarExport } from "./Navbar/Navbar";
import { Row, Col, Container } from "react-bootstrap";
import { SearchBar } from "./SearchBar/SearchBar";
// import { Maps } from "../Home/Maps/Maps";
import { Maps } from "./Maps/Maps";
import { CarouselWrapper } from "./Carousel/Carousel";
import reco from "../../img/reco.png";
import Cards from "./Cards/Cards";
export const HomePage = () => {
  return (
    <React.Fragment>
      <Container fluid>
        <Row className="col-border">
          <Col>
            <SearchBar />
            <Maps></Maps>
          </Col>
        </Row>
        <h1 className="align quote">Recommended Products </h1>
        <Row>
          <Col className="extend">
            <div className="container-product">
              <CarouselWrapper></CarouselWrapper>
            </div>
          </Col>
        </Row>
        <h1 className="quote">#DailyDoseOfPositivity</h1>

        <Row>
          <Col className="margin quote">
            <Cards></Cards>
          </Col>
          <Col className="margin quote">
            <Cards value="Daily Quotes"></Cards>
          </Col>
          {/* <Col className="extend">
            <Cards></Cards>
          </Col> */}
        </Row>
        <Row>
          <div className="footer">
            <p>@Copyright 2020</p>
            <br />
            <p>
              <a href="mailto:hege@example.com">hege@example.com</a>
            </p>
          </div>
        </Row>
      </Container>
    </React.Fragment>
  );
};
