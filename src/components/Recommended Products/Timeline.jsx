import React, { useState, useEffect } from "react";
import "./Timeline.css";
import fire from "../../config";
import { useAuth } from "../AuthContext";
import TimelineComponent from "./TimelineComponent";
import InfiniteScroll from "react-infinite-scroll-component";
import Post from "./Post";
import VendorComponent from "./VendorComponent";
import img1 from "../../img/trend.png";

export default function Timeline() {
  const { currentUser } = useAuth();
  const [details, setDetails] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [vendors, setVendors] = useState([]);
  const refItem = fire.firestore().collection("User");
  const refReviews = fire
    .firestore()
    .collection("VendorReviews")
    .orderBy("date", "desc");
  const [posts, setPosts] = useState([]);
  const [lastKey, setLastKey] = useState("");
  const [nextPosts_loading, setNextPostsLoading] = useState(false);
  useEffect(() => {
    fetchUserDetails();
    fetchVendorDetails();
  }, []);

  useEffect(() => {
    // first 5 posts
    Post.postsFirstBatch()
      .then((res) => {
        setPosts(res.posts);
        setLastKey(res.lastKey);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const fetchMorePosts = (key) => {
    if (key.length > 0) {
      setNextPostsLoading(true);
      Post.postsNextBatch(key)
        .then((res) => {
          setLastKey(res.lastKey);
          setPosts(posts.concat(res.posts));
          setNextPostsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setNextPostsLoading(false);
        });
    }
  };

  const allPosts = posts.map((post) => {
    console.log(post);
    return (
      <TimelineComponent
        vendorid={post.vendorId}
        review={post.review}
        username={post.username}
        userid={post.useremail}
        vendorname={post.vendorname}
        rating={post.rating}
        date={post.date}
        photourl={post.photourl}
      />
    );
  });
  // console.log(posts);
  const fetchUserDetails = () => {
    refItem.doc(currentUser.email).onSnapshot((doc) => {
      if (doc.exists) {
        setDetails(doc.data());
      } else {
        console.log("No such document!");
      }
    });
  };

  const fetchVendorDetails = () => {
    const ref = fire
      .firestore()
      .collection("Vendor")
      .orderBy("totalviews", "desc")
      .limit(3);
    ref.onSnapshot((querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
        items.push(doc.data());
      });
      setVendors(items);
    });
  };

  return (
    <>
      <div
        className="ui-bg-cover ui-bg-overlay-container text-white"
        style={{
          background: "#00bfff",
        }}
      >
        <div className="ui-bg-overlay bg-dark opacity-50"></div>
        <div
          style={{
            marginTop: "0px",
          }}
          className="container py-5"
        >
          <div className="media col-md-10 col-lg-8 col-xl-7 p-0 my-4 mx-auto">
            <img
              style={{
                height: "150px",
                maxWidth: "150px",
                width: "150px !important",
              }}
              src={details.photourl}
              alt
              className="d-block ui-w-100 rounded-circle"
            />
            <div className="media-body ml-5">
              <h4 className="font-weight-bold mb-4">{details.username}</h4>
              <div className="opacity-75 mb-4">{details.status}</div>
              <a href="#" className="d-inline-block text-white">
                <strong>Member Since</strong>
                <span className="opacity-75">: {details.joindate}</span>
              </a>
            </div>
          </div>
        </div>

        <div className="ui-bg-overlay-container">
          <div className="ui-bg-overlay bg-dark opacity-25"></div>
          <ul className="nav nav-tabs tabs-alt justify-content-center border-transparent">
            <li className="nav-item">
              <a
                style={{
                  fontFamily: "sans-serif",
                }}
                className="nav-link text-white py-4 active"
                href="#"
              >
                Your Homepage
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div
        style={{
          maxWidth: "1500px",
        }}
        className="container gedf-wrapper"
      >
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <div className="card-body">
                <div className="h3">Vendor of the Month</div>
                <div className="h3 text-muted">Test Vendor 1</div>

                <div className="h7">
                  <strong>Category:</strong> Food
                </div>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <div className="h6 text-muted">Category</div>
                  <div className="h5">Food</div>
                </li>
                <li className="list-group-item">
                  <div className="h6 text-muted">Number</div>
                  <div className="h5">03004416110</div>
                </li>
                <li className="list-group-item">CitySpot Featured Vendor</li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 gedf-main">
            <InfiniteScroll
              dataLength={posts.length}
              next={() => {
                fetchMorePosts(lastKey);
              }}
              hasMore={true}
              loader={
                nextPosts_loading ? (
                  <h4
                    style={{
                      textAlign: "center",
                    }}
                  >
                    Loading..
                  </h4>
                ) : lastKey.length > 0 ? null : (
                  <h6
                    style={{
                      textAlign: "center",
                    }}
                  >
                    You are up to date!
                  </h6>
                )
              }
            >
              {allPosts}
            </InfiniteScroll>
          </div>

          <div className="col-md-3">
            <div className="h2">
              Trending Vendors
              <img
                style={{
                  width: "50px",
                  height: "50px",
                }}
                src={img1}
                alt=""
              />
            </div>
            {vendors.map((v) => {
              return (
                <VendorComponent
                  vendorid={v.id}
                  name={v.name}
                  views={v.totalviews}
                />
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
