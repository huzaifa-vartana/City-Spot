import React from "react";

export default function DisplayReviewComponent(props) {
  return (
    <>
      <li
        style={{
          borderRight: "0px",
          width: "50%",
        }}
      >
        <img
          src={props.photourl}
          style={{
            float: "none",
            marginRight: "0px",
            maxWidth: "100px",
          }}
          className="wpx-100 img-round mgb-20"
          title=""
          alt=""
          data-edit="false"
          data-editor="field"
          data-field="src[Image Path]; title[Image Title]; alt[Image Alternate Text]"
        />
        <p className="fs-110 font-cond-l" contenteditable="false">
          {props.review}
        </p>
        <h5
          className="font-cond mgb-5 fg-text-d fs-130"
          contenteditable="false"
        >
          {props.username}
        </h5>
        <small
          className="font-cond case-u lts-sm fs-80 fg-text-l"
          contenteditable="false"
        >
          {props.date}
        </small>
      </li>
    </>
  );
}
