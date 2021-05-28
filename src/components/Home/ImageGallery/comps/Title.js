import React from "react";

const Title = (props) => {
  return (
    <div
      className="title-1"
      style={{
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        padding: "25px",
      }}
    >
      <h2
        style={{
          marginTop: "25px",
        }}
      >
        {props.name} Gallery
      </h2>
      <p>Upload and View Images</p>
    </div>
  );
};

export default Title;
