import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";
import img from "../../../../img/vendor.svg";

export default function ResultCard(props) {
  return (
    <div>
      <tr>
        <td>
          <div className="widget-26-job-emp-img">
            <img src={img} alt="Company" />
          </div>
        </td>
        <td>
          <div className="widget-26-job-title">
            <Link
              to={{
                pathname: `/allvendors/${props.id}`,
                state: {
                  vendorId: props.id,
                },
              }}
            >
              {props.name}
            </Link>

            <p className="m-0">
              <a href="#" className="employer-name"></a>
              <span className="text-muted time">{props.date}</span>
            </p>
          </div>
        </td>
        <td>
          <div className="widget-26-job-info">
            <p className="type m-0">Full-Time</p>
            <p className="text-muted m-0">
              in <span className="location">{props.city}</span>
            </p>
          </div>
        </td>
        <td>
          <div className="widget-26-job-salary">{props.number}</div>
        </td>
        <td>
          <div className="widget-26-job-category bg-soft-base">
            <i className="indicator bg-base"></i>
            <span>Vendor</span>
          </div>
        </td>
        <td>
          <div className="widget-26-job-starred">
            <a href="#">
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
                className="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </a>
            <a href="#">
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
                className="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </a>
            <a href="#">
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
                className="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </a>
            <a href="#">
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
                className="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </a>
            <a href="#">
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
                className="feather feather-star"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            </a>
          </div>
        </td>
      </tr>
    </div>
  );
}
