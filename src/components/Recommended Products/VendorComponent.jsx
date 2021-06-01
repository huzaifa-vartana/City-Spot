import React from "react";
import { Link } from "react-router-dom";
const VendorComponent = (props) => {
  return (
    <>
      <div className="card gedf-card">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            <strong>Views:</strong> {props.views}
          </p>
          <Link to={`/allvendors/${props.vendorid}`} className="card-link">
            Visit Vendor
          </Link>

          <Link
            to={{
              pathname: `/allvendors/${props.vendorid}/allimages`,
              state: {
                vendor: props.name,
              },
            }}
            className="card-link"
          >
            View Image Gallery
          </Link>
        </div>
      </div>
    </>
  );
};

export default VendorComponent;
