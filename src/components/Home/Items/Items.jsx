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
  const [vendorDetails, setVendorDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [id, setid] = useState("");
  const [state, setstate] = useState("");

  //   console.log(getVendorId());
  const refItem = fire
    .firestore()
    .collection(`/Vendor/${props.location.state.vendorId}/VendorItems`);
  const refVendor = fire
    .firestore()
    .collection("/Vendor")
    .doc(`${props.location.state.vendorId}`);
  const classes = useStyles();
  // console.log(`/Vendor/${props.location.state.vendorId}/VendorItems`);

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
  // console.log();
  useEffect(() => {
    fetchData();
    fetchVendorDetails();
    setid(props.location.state.vendorId);
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
          </div>
        </div>

        <div className="container-fluid p-0">
          <h1 className="h3 mb-3">Items</h1>
          <div className="row">
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
                          <ItemCard name={v.name} id={v.name} type={v.type} />
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

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
                        <td>...</td>
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
                        2h ago
                      </span>
                      <p>Sed aliquam ultrices mauris. Integer ante arcu...</p>
                    </li>
                    <li className="timeline-item">
                      <strong>Latest Review</strong>
                      <span className="float-right text-muted text-sm">
                        3h ago
                      </span>
                      <p>
                        Nam pretium turpis et arcu. Duis arcu tortor,
                        suscipit...
                      </p>
                    </li>
                  </ul>
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
