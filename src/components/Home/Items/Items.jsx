import React, { useState, useEffect } from "react";
import fire from "../../../config";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import ItemCard from "../Cards/Card/ItemCard";
import ResultCard from "../Cards/Card/ResultCard";
import { Grid } from "@material-ui/core";
// import SeacrhBarInput from "../SearchBar/SeacrhBarInput";
import { makeStyles } from "@material-ui/core/styles";
import Spinner from "../Spinner/Spinner";
import FAB from "../FAB/FAB";
import { useAuth } from "../../AuthContext";
import { MDBCol, MDBIcon, MDBInput, MDBFormInline } from "mdbreact";
import "../Cards/Card/ItemCard.css";
import { Link } from "react-router-dom";
import { MapsSimple } from "../Maps/MapsSimple";
import DisplayReviewComponent from "../Reviews/DisplayReviewComponent";
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

export default function Items(props) {
  const [items, setItems] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [vendorDetails, setVendorDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setid] = useState("");
  const [state, setstate] = useState("");
  const [firstReview, setFirstReview] = useState();
  const [lat, setLat] = useState("");
  const [lng, setLng] = useState("");
  const [lastReview, setLasttReview] = useState();
  //   console.log(getVendorId());
  const refItem = fire
    .firestore()
    .collection(`/Vendor/${props.location.state.vendorId}/VendorItems`);
  const refVendor = fire
    .firestore()
    .collection("/Vendor")
    .doc(`${props.location.state.vendorId}`);
  const classes = useStyles();
  const refReviews = fire
    .firestore()
    .collection(`/Vendor/${props.location.state.vendorId}/VendorReviews`)
    .orderBy("date", "desc");

  // console.log(`/Vendor/${props.location.state.vendorId}/VendorItems`);
  const fetchReviews = () => {
    setLoading(true);
    refReviews.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setReviews(items);
      setLoading(false);
    });
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
  const fetchData = () => {
    setLoading(true);
    refItem.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setItems(items);
      setLoading(false);
    });
  };
  const fetchVendorDetails = () => {
    refVendor
      .get()
      .then((doc) => {
        if (doc.exists) {
          setVendorDetails(doc.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  };

  useEffect(() => {
    fetchData();
    fetchVendorDetails();
    fetchReviews();
    setid(props.location.state.vendorId);
    // setFirstReview(reviews.slice(-1));
    console.log(reviews.lastItem);
    // console.log(reviews.slice((-1)[0]));
  }, []);
  const filteredResult = items.filter((c) => {
    return c.name.toLowerCase().includes(state.toLowerCase());
  });
  const handleChange = (e) => {
    setstate(e.target.value);
  };
  if (loading) {
    return (
      <div className="App">
        <Spinner />
      </div>
    );
  }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 card-margin">
            <h1 className="h3 mb-3 t-align ">Vendor Homepage</h1>
          </div>
        </div>

        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-xl-4">
              <div className="card">
                <div className="card-header">
                  <div className="card-actions float-right">
                    <div className="dropdown show">
                      <a href="#" data-toggle="dropdown" data-display="static">
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
                          className="feather feather-more-horizontal align-middle"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </a>

                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  <h5 className="card-title mb-0">{vendorDetails.name}</h5>
                </div>
                <div className="card-body">
                  <div className="row g-0">
                    <div className="col-sm-3 col-xl-12 col-xxl-3 text-center">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar3.png"
                        width="64"
                        height="64"
                        className="rounded-circle mt-2"
                        alt="Angelica Ramos"
                      />
                    </div>
                    <div className="col-sm-9 col-xl-12 col-xxl-9">
                      <strong>About the Vendor</strong>
                      <p>{vendorDetails.id}</p>
                    </div>
                  </div>

                  <table className="table table-sm mt-2 mb-4">
                    <tbody>
                      <tr>
                        <th>Vendor Name</th>
                        <td>{vendorDetails.name}</td>
                      </tr>
                      <tr>
                        <th>City</th>
                        <td>{vendorDetails.city}</td>
                      </tr>
                      <tr></tr>
                      <tr>
                        <th>Phone</th>
                        <td>{vendorDetails.number}</td>
                      </tr>
                      <tr>
                        <th>Status</th>
                        <td>
                          <span className="badge bg-success">Active</span>
                        </td>
                      </tr>
                      <tr>
                        <th>Total Reviews</th>
                        <td>{reviews.length}</td>
                      </tr>
                    </tbody>
                  </table>

                  <strong>Activity</strong>

                  <ul className="timeline mt-2 mb-0">
                    <li className="timeline-item">
                      <strong>Registration Date</strong>
                      <span className="float-right text-muted text-sm"></span>
                      <p>{vendorDetails.date}</p>
                    </li>
                    <li className="timeline-item">
                      <strong>First Review</strong>
                      <span className="float-right text-muted text-sm">
                        {reviews.slice(-1).map((v) => {
                          return v.date;
                        })}
                      </span>
                      <p>
                        {reviews.slice(-1).map((v) => {
                          return v.review;
                        })}
                      </p>
                    </li>
                    <li className="timeline-item">
                      <strong>Latest Review</strong>
                      <span className="float-right text-muted text-sm">
                        {reviews.slice(0, 1).map((v) => {
                          return v.date;
                        })}{" "}
                      </span>
                      <p>
                        {reviews.slice(0, 1).map((v) => {
                          return v.review;
                        })}
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="card">
                <div className="card-header pb-0">
                  <div className="card-actions float-right">
                    <div className="dropdown show">
                      <a href="#" data-toggle="dropdown" data-display="static">
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
                          className="feather feather-more-horizontal align-middle"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </a>

                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  <h5 className="card-title mb-0">Vendor Location</h5>
                </div>
                <MapsSimple
                  // sendDataToParent1={sendDataToParent1}
                  // sendDataToParent2={sendDataToParent2}
                  lat={vendorDetails.lat}
                  lng={vendorDetails.lng}
                />
                {/* <div className="card-body"></div> */}
              </div>
            </div>
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
                              <line
                                x1="21"
                                y1="21"
                                x2="16.65"
                                y2="16.65"
                              ></line>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-xl-8">
              <div className="card">
                <div className="card-header pb-0">
                  <div className="card-actions float-right">
                    <div className="dropdown show">
                      <a href="#" data-toggle="dropdown" data-display="static">
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
                          className="feather feather-more-horizontal align-middle"
                        >
                          <circle cx="12" cy="12" r="1"></circle>
                          <circle cx="19" cy="12" r="1"></circle>
                          <circle cx="5" cy="12" r="1"></circle>
                        </svg>
                      </a>

                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          Action
                        </a>
                        <a className="dropdown-item" href="#">
                          Another action
                        </a>
                        <a className="dropdown-item" href="#">
                          Something else here
                        </a>
                      </div>
                    </div>
                  </div>
                  <h5 className="card-title mb-0">Items</h5>
                </div>
                <div className="card-body">
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Type</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredResult.map((v) => {
                        return (
                          <ItemCard
                            name={v.name}
                            id={v.name}
                            type={v.type}
                            id={v.id}
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
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="row">
                <div className="col-sm-12 col-lg-4">
                  <div className="card-body">
                    <h4 className="card-title">Reviews</h4>
                    <h5 className="card-subtitle">Overview of Review</h5>
                    <h2 className="font-medium mt-5 mb-0">{reviews.length}</h2>
                    <span className="text-muted">
                      This month we got {reviews.length} New Reviews
                    </span>

                    <Link
                      to={`/allvendors/${id}/allreviews`}
                      className="btn btn-lg btn-info waves-effect waves-light"
                    >
                      Checkout All Reviews
                    </Link>
                  </div>
                </div>
                <div className="col-sm-12 col-lg-8 border-left">
                  <div className="card-body">
                    <div className="mgb-40 padb-30 auto-invert line-b-4 align-center">
                      <h4
                        className="font-cond-l fg-accent lts-md mgb-10"
                        contenteditable="false"
                      >
                        Not Yet Convinced?
                      </h4>
                      <h1
                        className="font-cond-b fg-text-d lts-md fs-300 fs-300-xs no-mg"
                        contenteditable="false"
                      >
                        Read Customer Reviews
                      </h1>
                    </div>
                    <ul className="hash-list cols-3 cols-1-xs pad-30-all align-center text-sm">
                      {reviews.slice(0, 2).map((v) => {
                        return (
                          <DisplayReviewComponent
                            vendorid={v.vendorId}
                            rating={v.rating}
                            review={v.review}
                            useremail={v.useremail}
                            username={v.username}
                            userid={v.userid}
                            date={v.date}
                            id={v.id}
                          />
                        );
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <FAB
        name="Add New Item"
        // itemDetails={items}
        vendorDetails={vendorDetails}
        link={`/allvendors/${id}/addnewitem`}
      />
    </>
  );
}
