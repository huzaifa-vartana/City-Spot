import React from "react";
import "./RecentReviews.css";

export default function RecentReviewComponent(props) {
  return (
    <>
      <div className="col-md-4 col-xl-3">
        <div className="card bg-c-pink  order-card">
          <div className="card-block">
            <h6 className="m-b-20">{props.username}</h6>
            <p className="m-b-0">{props.review}</p>
            <p className="m-b-0">
              {" "}
              <span className="f-right">{props.date}</span>
            </p>
            <br />

            <h6 className="text-right">
              <span>{props.vendorname}</span>
            </h6>
            <h6 className="text-right">
              <span>Rating: {props.rating}/5</span>
            </h6>
          </div>
        </div>
      </div>
    </>
  );
}
