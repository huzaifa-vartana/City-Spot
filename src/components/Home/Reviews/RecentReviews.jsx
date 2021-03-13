import "./RecentReviews.css";
import React, { useState, useEffect } from "react";
import fire from "../../../config";
import RecentReviewComponent from "./RecentReviewComponent";
import { Typography } from "@material-ui/core";
import ShowRating from "./ShowRating";
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
// import React from "react";
// import { CardSlideItem, CardSlide } from "react-card-slide/dist";
// import pic from "../../../img/sample.jpg";

// export default function RecentReviews() {
//   return (
//     <>
//       <CardSlide
//         items={[
//           {
//             cardName: "Card Name",
//             cardDescription: "Description",
//             cardTotal: 0,
//             showBodyImage: false,
//             bodyImage:
//               "https://c8.alamy.com/comp/M9DNR6/open-air-artisan-market-vendor-stalls-in-a-handicraft-fair-with-soapstone-handicraft-articles-for-sale-ouro-preto-minas-gerais-brazil-M9DNR6.jpg",
//           },
//           {
//             cardName: "Card Name 2",
//             cardDescription: "Description 2",
//             cardTotal: 1,
//           },
//           {
//             cardName: "Carde Name 3",
//             cardDescription: "Description 3",
//             cardTotal: 2,
//           },
//         ]}
//       />
//     </>
//   );
// }
