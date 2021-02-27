import React, { useState, useEffect } from "react";
import { Link } from "react-router";
import "./Reviews.css";
import { useAuth } from "../../AuthContext";
import { v4 as uuidv4 } from "uuid";
import "react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css";
import RangeSlider from "react-bootstrap-range-slider";

export default function Review(props) {
  //   console.log(props.match.params.vendorid);
  const { postReview, currentUser } = useAuth();
  const [value, setValue] = useState(0);

  const reviewRef = React.useRef();
  const [review, setReview] = useState("");
  const handleSubmit = (e) => {
    const data = {
      id: uuidv4(),
      userid: currentUser.uid,
      useremail: currentUser.email,
      username: currentUser.displayName,
      vendorId: props.match.params.vendorid,
      review: reviewRef.current.value,
      rating: value,
    };
    postReview(data);
    reviewRef.current.value = "";
    // console.log(data);
  };
  const handleChange = (e) => {
    // console.log(reviewRef.current.value);
    setReview(reviewRef.current.value);
  };
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
                  <a
                    href="#"
                    className="btn btn-outline-primary btn-sm float-right"
                  >
                    Top Rated
                  </a>

                  <h5 className="mb-1">All Ratings and Reviews</h5>
                  <div className="reviews-members pt-4 pb-4">
                    <div className="media">
                      <a href="#">
                        <img
                          alt="Generic placeholder image"
                          src="http://bootdey.com/img/Content/avatar/avatar1.png"
                          className="mr-3 rounded-pill"
                        />
                      </a>
                      <div className="media-body">
                        <div className="reviews-members-header">
                          <span className="star-rating float-right">
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
                            </a>
                          </span>
                          <h6 className="mb-1">
                            <a className="text-black" href="#">
                              Singh Osahan
                            </a>
                          </h6>
                          <p className="text-gray">Tue, 20 Mar 2020</p>
                        </div>
                        <div className="reviews-members-body">
                          <p>
                            Contrary to popular belief, Lorem Ipsum is not
                            simply random text. It has roots in a piece of
                            classical Latin literature from 45 BC, making it
                            over 2000 years old. Richard McClintock, a Latin
                            professor at Hampden-Sydney College in Virginia,
                            looked up one of the more obscure Latin words,
                            consectetur, from a Lorem Ipsum passage, and going
                            through the cites of the word in classical
                            literature, discovered the undoubtable source. Lorem
                            Ipsum comes from sections{" "}
                          </p>
                        </div>
                        <div className="reviews-members-footer">
                          <a className="total-like" href="#">
                            <i className="icofont-thumbs-up"></i> 856M
                          </a>{" "}
                          <a className="total-like" href="#">
                            <i className="icofont-thumbs-down"></i> 158K
                          </a>
                          <span className="total-like-user-main ml-2" dir="rtl">
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              href="#"
                              data-original-title="Gurdeep Osahan"
                            >
                              <img
                                alt="Generic placeholder image"
                                src="http://bootdey.com/img/Content/avatar/avatar5.png"
                                className="total-like-user rounded-pill"
                              />
                            </a>
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              href="#"
                              data-original-title="Gurdeep Singh"
                            >
                              <img
                                alt="Generic placeholder image"
                                src="http://bootdey.com/img/Content/avatar/avatar2.png"
                                className="total-like-user rounded-pill"
                              />
                            </a>
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              href="#"
                              data-original-title="Askbootstrap"
                            >
                              <img
                                alt="Generic placeholder image"
                                src="http://bootdey.com/img/Content/avatar/avatar3.png"
                                className="total-like-user rounded-pill"
                              />
                            </a>
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              href="#"
                              data-original-title="Osahan"
                            >
                              <img
                                alt="Generic placeholder image"
                                src="http://bootdey.com/img/Content/avatar/avatar4.png"
                                className="total-like-user rounded-pill"
                              />
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div className="reviews-members pt-4 pb-4">
                    <div className="media">
                      <a href="#">
                        <img
                          alt="Generic placeholder image"
                          src="http://bootdey.com/img/Content/avatar/avatar6.png"
                          className="mr-3 rounded-pill"
                        />
                      </a>
                      <div className="media-body">
                        <div className="reviews-members-header">
                          <span className="star-rating float-right">
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
                            </a>
                          </span>
                          <h6 className="mb-1">
                            <a className="text-black" href="#">
                              Gurdeep Singh
                            </a>
                          </h6>
                          <p className="text-gray">Tue, 20 Mar 2020</p>
                        </div>
                        <div className="reviews-members-body">
                          <p>
                            It is a long established fact that a reader will be
                            distracted by the readable content of a page when
                            looking at its layout. The point of using Lorem
                            Ipsum is that it has a more-or-less normal
                            distribution of letters, as opposed to using
                            'Content here, content here', making it look like
                            readable English.
                          </p>
                        </div>
                        <div className="reviews-members-footer">
                          <a className="total-like" href="#">
                            <i className="icofont-thumbs-up"></i> 88K
                          </a>{" "}
                          <a className="total-like" href="#">
                            <i className="icofont-thumbs-down"></i> 1K
                          </a>
                          <span className="total-like-user-main ml-2" dir="rtl">
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              href="#"
                              data-original-title="Gurdeep Osahan"
                            >
                              <img
                                alt="Generic placeholder image"
                                src="http://bootdey.com/img/Content/avatar/avatar5.png"
                                className="total-like-user rounded-pill"
                              />
                            </a>
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              href="#"
                              data-original-title="Gurdeep Singh"
                            >
                              <img
                                alt="Generic placeholder image"
                                src="http://bootdey.com/img/Content/avatar/avatar2.png"
                                className="total-like-user rounded-pill"
                              />
                            </a>
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              href="#"
                              data-original-title="Askbootstrap"
                            >
                              <img
                                alt="Generic placeholder image"
                                src="http://bootdey.com/img/Content/avatar/avatar3.png"
                                className="total-like-user rounded-pill"
                              />
                            </a>
                            <a
                              data-toggle="tooltip"
                              data-placement="top"
                              title=""
                              href="#"
                              data-original-title="Osahan"
                            >
                              <img
                                alt="Generic placeholder image"
                                src="http://bootdey.com/img/Content/avatar/avatar4.png"
                                className="total-like-user rounded-pill"
                              />
                            </a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
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
