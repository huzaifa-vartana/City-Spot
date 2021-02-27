import { render } from "@testing-library/react";
import React, { useState, useEffect, useRef } from "react";
import {
  Form,
  Col,
  InputGroup,
  Row,
  Button,
  Jumbotron,
  Alert,
  Badge,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Maps } from "../Maps/Maps";
import fire from "../../../config";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useAuth } from "../.././AuthContext";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";

export default function RegisterNewVendor() {
  function FormExample() {
    const [validated, setValidated] = useState(false);
    const [image, setImage] = useState(null);
    const history = useHistory();

    const [url, setUrl] = useState("");
    const [error, setError] = useState("");
    const [vDetails, setVDetails] = useState([]);
    const [lat, setLat] = useState("");
    const [lng, setLng] = useState("");
    const [progress, setProgress] = useState(0);
    const handleImageChange = (e) => {
      if (e.target.files[0]) {
        setImage(e.target.files[0]);
      }
    };
    const handleUpload = () => {
      const uploadTask = fire
        .storage()
        .ref(`VendorImages/${nameRef.current.value}/${image.name}`)
        .put(image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.log(error);
        },
        () => {
          fire
            .storage()
            .ref(`VendorImages/${nameRef.current.value}`)
            .child(image.name)
            .getDownloadURL()
            .then((url) => {
              setUrl(url);

              const data = {
                id: uuidv4(),
                name: nameRef.current.value,
                lat: lat,
                lng: lng,
                number: numRef.current.value,
                image: url,
                city: cityRef.current.value,
                date: new Date().toDateString(),
              };
              addVendor(data);
              setError("Vendor Registered");
              // history.push("/allvendors");
            });
        }
      );
    };
    const nameRef = useRef();
    const numRef = useRef();
    const cityRef = useRef();
    const latRef = useRef();
    const lngRef = useRef();
    const imgRef = useRef();

    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
      }
      if (nameRef.current.value) {
        handleUpload();
      }

      setValidated(true);
    };
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
    const { addVendor } = useAuth();

    return (
      <Jumbotron>
        <Alert variant="success">
          <Alert.Heading>Note</Alert.Heading>
          <hr />
          <p>
            To avoid duplication, check to see if the Vendor is already
            registered.
          </p>
        </Alert>
        {error && <Alert variant="primary">{error}</Alert>}

        <h1>
          Register New Vendor <Badge variant="secondary">New</Badge>
        </h1>
        <Form noValidate validated={validated}>
          <Form.Row>
            <Form.Group as={Col} controlId="validationCustom01">
              <Form.Label>Vendor Name</Form.Label>
              <Form.Control
                name="name"
                // value={vDetails.name}
                ref={nameRef}
                // onChange={(e) => setVDetails({ name: e.target.value })}
                required
                type="text"
                placeholder="Name"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} controlId="validationCustom02">
              <Form.Label>Contact Information</Form.Label>
              <Form.Control
                name="number"
                ref={numRef}
                // value={vDetails.number}
                // onChange={(e) => setVDetails({ number: e.target.value })}
                required
                type="text"
                placeholder="Phone Number"
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="validationCustom03">
              <Form.Label>City</Form.Label>
              <Form.Control
                name="city"
                type="text"
                ref={cityRef}
                // onChange={(e) => setVDetails({ city: e.target.value })}
                // value={vDetails.city}
                placeholder="City"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid city.
              </Form.Control.Feedback>
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} controlId="validationCustom03">
              <Form.Label>Vendor Images</Form.Label>
              <Form.File
                id="custom-file"
                name="image"
                ref={imgRef}
                // value={vDetails.image}
                onChange={(e) => handleImageChange(e)}
                label="Custom file input"
                custom
              />
              <LinearProgress
                variant="buffer"
                value={progress}
                color="secondary"
                valueBuffer={progress}
              />
            </Form.Group>
          </Form.Row>
          <Form.Group>
            <Form.Check
              label="Agree to terms and conditions"
              feedback="You must agree before submitting."
            />
          </Form.Group>
          <Button type="submit" onClick={handleSubmit}>
            Submit form
          </Button>
        </Form>
        <Maps
          sendDataToParent1={sendDataToParent1}
          sendDataToParent2={sendDataToParent2}
        />
      </Jumbotron>
    );
  }

  return (
    <>
      <FormExample />
    </>
  );
}
