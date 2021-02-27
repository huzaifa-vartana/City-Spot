import React, { useState, useEffect } from "react";
import { useAuth } from "../../AuthContext";
import fire from "../../../config";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ReviewCard from "../Cards/Card/ComplexCard";
import ResultCard from "../Cards/Card/ResultCard";
import { Grid } from "@material-ui/core";
// import SeacrhBarInput from "../SearchBar/SeacrhBarInput";
import { makeStyles } from "@material-ui/core/styles";
import Spinner from "../Spinner/Spinner";
import FAB from "../FAB/FAB";
import { MDBCol, MDBIcon, MDBInput, MDBFormInline } from "mdbreact";
import { Container, Row, Col } from "react-bootstrap";
import MapCard from "../Cards/Card/MapCard";
import { Link } from "react-router-dom";
import "../Cards/Card/Card.css";
// import img from "../../../img/bg-vendors.jpg";
// Can be a string as well. Need to ensure each key-value pair ends with ;

const useStyles = makeStyles({
  gridContainer: {
    paddingLeft: "40px",
    paddingRight: "40px",
    width: "100%",
  },
  gridContainerSearch: {
    paddingLeft: "40px",
    paddingRight: "40px",
    marginTop: "2rem",
    marginBottom: "2rem",
  },
});

export default function Vendor() {
  //   const { fetchVendors } = useAuth();
  const [vendors, setVendors] = useState([]);
  const [state, setstate] = useState("");
  const [loading, setLoading] = useState(false);
  const ref = fire.firestore().collection("Vendor");
  const classes = useStyles();
  const handleChange = (e) => {
    setstate(e.target.value);
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (loading) {
    return (
      <div className="App">
        <Spinner />
      </div>
    );
  }

  const fetchData = () => {
    setLoading(true);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setVendors(items);
      setLoading(false);
    });
  };
  const filteredResult = vendors.filter((c) => {
    return c.name.toLowerCase().includes(state.toLowerCase());
  });

  // return (
  // <>
  {
    /* <Grid container justify="center" className={classes.gridContainerSearch}>
        <MDBCol md="6">
          <MDBInput
            value={state}
            hint="Search"
            type="text"
            onChange={handleChange}
            containerClass="active-pink active-pink-2 "
          />
        </MDBCol>
      </Grid>

      <Grid
        container
        className={classes.gridContainer}
        spacing={6}
        justify="center"
      >
        {/* <Container> */
  }
  {
    /* {filteredResult.map((v) => {
          return (
            <Grid item>
              <ReviewCard
                name={v.name}
                id={v.id}
                key={v.id}
                date={v.date}
                imageUrl={v.image}
                lat={v.lat}
                lng={v.lng}
                // image={url}
              /> */
  }
  {
    /* <MapCard
              name={v.name}
              id={v.id}
              city={v.city}
              key={v.id}
              date={v.date}
              imageUrl={v.image}
            /> */
  }
  {
    /* </Grid> */
  }
  {
    /* ); */
  }
  {
    /* })} */
  }
  {
    /* </Container> */
  }
  {
    /* // </Grid> */
  }
  {
  }
  // </>
  // );
  // } */}

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-12 card-margin">
          <div className="card search-form">
            <div className="card-body p-0">
              <form id="search-form">
                <div className="row">
                  <div className="col-12">
                    <div className="row no-gutters">
                      <div className="col-lg-8 col-md-6 col-sm-12 p-0">
                        <input
                          value={state}
                          hint="Search"
                          type="text"
                          onChange={handleChange}
                          placeholder="Search..."
                          className="form-control"
                          // id="search"
                          // name="search"
                        />
                      </div>
                      <div className="col-lg-1 col-md-3 col-sm-12 p-0">
                        <button className="btn btn-base">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="feather feather-search"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card card-margin">
            <div className="card-body">
              <div className="row search-body">
                <div className="col-lg-12">
                  <div className="search-result">
                    <div className="result-header">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="records">
                            Showing: <b>1-20</b> of <b>200</b> result
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="result-actions">
                            <div className="result-sorting">
                              <span>Sort By:</span>
                              <select
                                className="form-control border-0"
                                id="exampleOption"
                              >
                                <option value="1">Relevance</option>
                                <option value="2">Names (A-Z)</option>
                                <option value="3">Names (Z-A)</option>
                              </select>
                            </div>
                            <div className="result-views">
                              <button
                                type="button"
                                className="btn btn-soft-base btn-icon"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-list"
                                >
                                  <line x1="8" y1="6" x2="21" y2="6"></line>
                                  <line x1="8" y1="12" x2="21" y2="12"></line>
                                  <line x1="8" y1="18" x2="21" y2="18"></line>
                                  <line x1="3" y1="6" x2="3" y2="6"></line>
                                  <line x1="3" y1="12" x2="3" y2="12"></line>
                                  <line x1="3" y1="18" x2="3" y2="18"></line>
                                </svg>
                              </button>
                              <button
                                type="button"
                                className="btn btn-soft-base btn-icon"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  className="feather feather-grid"
                                >
                                  <rect x="3" y="3" width="7" height="7"></rect>
                                  <rect
                                    x="14"
                                    y="3"
                                    width="7"
                                    height="7"
                                  ></rect>
                                  <rect
                                    x="14"
                                    y="14"
                                    width="7"
                                    height="7"
                                  ></rect>
                                  <rect
                                    x="3"
                                    y="14"
                                    width="7"
                                    height="7"
                                  ></rect>
                                </svg>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="result-body">
                      <div className="table-responsive">
                        <table className="table widget-26">
                          <tbody>
                            {filteredResult.map((v) => {
                              return (
                                <ResultCard
                                  name={v.name}
                                  id={v.id}
                                  city={v.city}
                                  key={v.id}
                                  date={v.date}
                                  imageUrl={v.image}
                                  number={v.number}
                                />
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FAB
        name="Register new Vendor"
        link="/registernewvendor"
        vendorDetails=""
      />
    </div>
  );
}
