import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import "./Reviews.css";
import { useAuth } from "../../AuthContext";
import { v4 as uuidv4 } from "uuid";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";
import { Alert } from "react-bootstrap";
import ReviewComponent from "./ReviewComponent";
import fire from "../../../config";

export default function Review(props) {
  //   console.log(props.match.params.vendorid);
  const { postReview, currentUser } = useAuth();
  const [items, setItems] = useState([]);
  const [vendorDetails, setVendorDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setid] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [value, setValue] = useState(0);
  const refReviews = fire
    .firestore()
    .collection(`/Vendor/${props.match.params.vendorid}/VendorReviews`)
    .orderBy("date", "desc");
  const refVendor = fire
    .firestore()
    .collection("/Vendor")
    .doc(`${props.match.params.vendorid}`);
  const reviewRef = React.useRef();
  const [review, setReview] = useState("");
  const fetchData = () => {
    setLoading(true);
    refReviews.onSnapshot((querySnapshot) => {
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
  console.log(items);
  const handleSubmit = (e) => {
    try {
      if (reviewRef.current.value) {
        setMessage("");
        setError("");

        const data = {
          id: uuidv4(),
          userid: currentUser.uid,
          useremail: currentUser.email,
          username: currentUser.displayName,
          vendorId: props.match.params.vendorid,
          review: reviewRef.current.value,
          rating: value,
          date: new Date().toLocaleString(),
        };
        postReview(data);
        reviewRef.current.value = "";
        setValue(1);
        setMessage("Review Posted");
      } else {
        setError("Enter Review to Post");
      }
    } catch (error) {}
    // setError("Error");
    // console.log(data);
  };
  const handleChange = (e) => {
    // console.log(reviewRef.current.value);
    setReview(reviewRef.current.value);
  };
  useEffect(() => {
    fetchData();
    fetchVendorDetails();
    setid(props.match.params.vendorid);
  }, []);
  return (
    <>
      <div className="container">
        <div className="col-md-12">
          <div className="offer-dedicated-body-left">
            <div className="tab-content" id="pills-tabContent">
              <div
                className="tab-pane fade active show"
                id="pills-reviews"
                role="tabpanel"
                aria-labelledby="pills-reviews-tab"
              >
                <div
                  id="ratings-and-reviews"
                  className="bg-white rounded shadow-sm p-4 mb-4 clearfix restaurant-detailed-star-rating"
                >
                  <span className="star-rating float-right">
                    <a href="#">
                      <i className="icofont-ui-rating icofont-2x active"></i>
                    </a>
                    <a href="#">
                      <i className="icofont-ui-rating icofont-2x active"></i>
                    </a>
                    <a href="#">
                      <i className="icofont-ui-rating icofont-2x active"></i>
                    </a>
                    <a href="#">
                      <i className="icofont-ui-rating icofont-2x active"></i>
                    </a>
                    <a href="#">
                      <i className="icofont-ui-rating icofont-2x"></i>
                    </a>
                  </span>
                  <h1 className="mb-0 pt-1 t-align">Rate this Place</h1>
                </div>

                <div className="bg-white rounded shadow-sm p-4 mb-4 clearfix graph-star-rating">
                  <h5 className="mb-0 mb-4">Ratings and Reviews</h5>
                  <div className="graph-star-rating-header">
                    <div className="star-rating">
                      <a href="#">
                        <i className="icofont-ui-rating active"></i>
                      </a>
                      <a href="#">
                        <i className="icofont-ui-rating active"></i>
                      </a>
                      <a href="#">
                        <i className="icofont-ui-rating active"></i>
                      </a>
                      <a href="#">
                        <i className="icofont-ui-rating active"></i>
                      </a>
                      <a href="#">
                        <i className="icofont-ui-rating"></i>
                      </a>{" "}
                      <b className="text-black ml-2">334</b>
                    </div>
                    <p className="text-black mb-4 mt-2">Rated 3.5 out of 5</p>
                  </div>
                  <div className="graph-star-rating-body">
                    <div className="rating-list">
                      <div className="rating-list-left text-black">5 Star</div>
                      <div className="rating-list-center">
                        <div className="progress">
                          <div
                            aria-valuemax="5"
                            aria-valuemin="0"
                            aria-valuenow="5"
                            role="progressbar"
                            className="progress-bar bg-primary"
                          >
                            <span className="sr-only">
                              80% Complete (danger)
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="rating-list-right text-black">56%</div>
                    </div>
                    <div className="rating-list">
                      <div className="rating-list-left text-black">4 Star</div>
                      <div className="rating-list-center">
                        <div className="progress">
                          <div
                            aria-valuemax="5"
                            aria-valuemin="0"
                            aria-valuenow="5"
                            role="progressbar"
                            className="progress-bar bg-primary"
                          >
                            <span className="sr-only">
                              80% Complete (danger)
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="rating-list-right text-black">23%</div>
                    </div>
                    <div className="rating-list">
                      <div className="rating-list-left text-black">3 Star</div>
                      <div className="rating-list-center">
                        <div className="progress">
                          <div
                            aria-valuemax="5"
                            aria-valuemin="0"
                            aria-valuenow="5"
                            role="progressbar"
                            className="progress-bar bg-primary"
                          >
                            <span className="sr-only">
                              80% Complete (danger)
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="rating-list-right text-black">11%</div>
                    </div>
                    <div className="rating-list">
                      <div className="rating-list-left text-black">2 Star</div>
                      <div className="rating-list-center">
                        <div className="progress">
                          <div
                            aria-valuemax="5"
                            aria-valuemin="0"
                            aria-valuenow="5"
                            role="progressbar"
                            className="progress-bar bg-primary"
                          >
                            <span className="sr-only">
                              80% Complete (danger)
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="rating-list-right text-black">02%</div>
                    </div>
                  </div>
                  <div className="graph-star-rating-footer text-center mt-3 mb-3">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Rate and Review
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded shadow-sm p-4 mb-5 rating-review-select-page">
                  <h5 className="mb-4">Leave Comment</h5>
                  <p className="mb-2">Rate the Vendor</p>
                  <div className="mb-4">
                    <span className="star-rating">
                      <a href="#">
                        <i className="icofont-ui-rating icofont-2x"></i>
                      </a>
                      <a href="#">
                        <i className="icofont-ui-rating icofont-2x"></i>
                      </a>
                      <a href="#">
                        <i className="icofont-ui-rating icofont-2x"></i>
                      </a>
                      <a href="#">
                        <i className="icofont-ui-rating icofont-2x"></i>
                      </a>
                      <a href="#">
                        <i className="icofont-ui-rating icofont-2x"></i>
                      </a>
                    </span>
                  </div>
                  <form>
                    <div className="form-group">
                      <label>Your Review</label>
                      <textarea
                        className="form-control"
                        ref={reviewRef}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                    <div className="form-group">
                      <RangeSlider
                        value={value}
                        min={1}
                        max={5}
                        size="sm"
                        step={1}
                        onChange={(e) => setValue(e.target.value)}
                      />
                    </div>

                    <div className="form-group">
                      {message && (
                        <Alert variant="success" transition="boolean">
                          {message}
                        </Alert>
                      )}
                      {error && (
                        <Alert variant="danger" transition="boolean">
                          {error}
                        </Alert>
                      )}
                      <button
                        className="btn btn-primary btn-sm"
                        type="button"
                        onClick={handleSubmit}
                      >
                        Submit Review
                      </button>
                    </div>
                  </form>
                </div>
                <div className="bg-white rounded shadow-sm p-4 mb-4 restaurant-detailed-ratings-and-reviews">
                  <h5 className="mb-1">All Ratings and Reviews</h5>
                  {items.map((v) => {
                    return (
                      <ReviewComponent
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

                  <hr />
                  <hr />
                  <a
                    className="text-center w-100 d-block mt-4 font-weight-bold"
                    href="#"
                  >
                    See All Reviews
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
