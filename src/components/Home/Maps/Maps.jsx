import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { Row, Col, Container, Card } from "react-bootstrap";
import "./Maps.css";
const containerStyle = {
  width: "100%",
  height: "45vh",
};
const googleMapsApiKey = "";
const center = {
  lat: 34.0691,
  lng: 72.6441,
};
export const Maps = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: googleMapsApiKey,
  });
  return (
    <div className="container-middle depth">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <></>
      </GoogleMap>
    </div>
  );
};
