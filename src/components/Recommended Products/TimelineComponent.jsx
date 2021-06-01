import React from "react";
import ShowRating from "../Home/Reviews/ShowRating";
import img1 from "../../img/locationmarker.png";
import { Link } from "react-router-dom";
import { FacebookShareButton } from "react-share";
const TimelineComponent = (props) => {
  return (
    <>
      <div className="card gedf-card">
        <div
          style={{
            color: "white",
            background: "darkseagreen",
          }}
          className="card-header"
        >
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex justify-content-between align-items-center">
              <div className="mr-2">
                <img
                  className="rounded-circle"
                  width="45"
                  src={props.photourl}
                  alt=""
                />
              </div>
              <div className="ml-2">
                <div className="h5 m-0">@{props.username}</div>
                <div className="h7 text-muted">{props.useremail}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div
            style={{
              fontWeight: "bold",
            }}
            className="text-muted h7 mb-2"
          >
            <i
              style={{
                fontWeight: "bold",
                marginRight: "5px",
              }}
              className="fa fa-clock-o"
            ></i>
            {props.date}
          </div>

          <Link
            to={`/allvendors/${props.vendorid}`}
            className="card-link"
            href="#"
          >
            <h5 className="card-title">
              <img
                src={img1}
                alt=""
                style={{
                  width: "40px",
                  height: "40px",
                }}
              />
              {props.vendorname} <ShowRating rating={props.rating} />
            </h5>
          </Link>

          <p
            style={{
              fontFamily: "sans-serif",
            }}
            className="card-text"
          >
            {props.review}
          </p>
        </div>
        <div className="card-footer">
          <a href="#" className="card-link">
            <FacebookShareButton
              style={{
                backgroundColor: "#3b5998 ",
                color: "white",
                padding: "4px 8px",
                fontFamily: "sans-serif",
                fontSize: "14px",
              }}
              className="btn btn-sm btn-info waves-effect waves-light"
              url={window.location.href}
              size={32}
            >
              <i className="fa fa-mail-forward"></i>Share
            </FacebookShareButton>
          </a>
        </div>
      </div>
    </>
  );
};

export default TimelineComponent;
