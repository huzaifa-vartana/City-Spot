import React, { useState } from "react";
import "./HomePage.css";
import { NavbarExport } from "./Navbar/Navbar";
import { Row, Col, Container } from "react-bootstrap";
import { SearchBar } from "./SearchBar/SearchBar";
// import { Maps } from "../Home/Maps/Maps";
import { Maps } from "./Maps/Maps";
import TestMaps from "./Maps/TestMaps";
import { CarouselWrapper } from "./Carousel/Carousel";
import reco from "../../img/reco.png";
import Cards from "./Cards/Cards";
import MapCard from "./Cards/Card/MapCard";
import ResultCard from "./Cards/Card/ResultCard";

export const HomePage = () => {
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const sendDataToParent1 = (lat) => {
    // the callback. Use a better name
    //   console.log(lat);
    setLat(lat);
  };
  const sendDataToParent2 = (lng) => {
    // the callback. Use a better name
    //   console.log(lng);
    setLng(lng);
  };

  return (
    <React.Fragment>
      <Container fluid>
        <Row className="col-border">
          <Col>
            {/* <SearchBar /> */}
            <Maps
              sendDataToParent1={sendDataToParent1}
              sendDataToParent2={sendDataToParent2}
            />
          </Col>
          {/* <TestMaps /> */}
          {/* <Maps
            sendDataToParent1={sendDataToParent1}
            sendDataToParent2={sendDataToParent2}
          /> */}
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
          <Col className="extend">
            <Cards></Cards>
          </Col>
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
