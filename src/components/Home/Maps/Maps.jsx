import React, { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Row, Col, Container, Card } from "react-bootstrap";
import "./Maps.css";
const containerStyle = {
  width: "100%",
  height: "45vh",
};
const googleMapsApiKey = "AIzaSyB-ys_gzU0iYE1HflHesIpB5Obth3Tig8A";

export const Maps = (props) => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapsApiKey,
  });
  const [center, setCenter] = React.useState({
    lat: "32.00",
    lng: "79.04",
  });
  const getCurrentLocaion = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  };
  useEffect(() => {
    getCurrentLocaion();
  }, [center]);
  props.sendDataToParent1(center.lat);
  props.sendDataToParent2(center.lng);

  return (
    <div className="container-middle depth">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <Marker position={center}></Marker>
      </GoogleMap>
    </div>
  );
};
