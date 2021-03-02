import "./RecentReviews.css";
import React, { useState, useEffect } from "react";
import fire from "../../../config";
import RecentReviewComponent from "./RecentReviewComponent";
import { Typography } from "@material-ui/core";
export default function RecentReviews() {
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

  const refReviews = fire
    .firestore()
    .collection("VendorReviews")
    .orderBy("date", "desc")
    .limit(8);
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
  useEffect(() => {
    fetchReviews();
  }, []);
  return (
    <>
      <Typography variant="h1" component="h2" className="t-align" gutterBottom>
        Recent Reviews
      </Typography>
      <div className="row">
        {reviews.map((v) => {
          return (
            <RecentReviewComponent
              vendorid={v.vendorId}
              rating={v.rating}
              vendorname={v.vendorname}
              review={v.review}
              useremail={v.useremail}
              username={v.username}
              userid={v.userid}
              date={v.date}
              id={v.id}
            />
          );
        })}
      </div>
    </>
  );
}
