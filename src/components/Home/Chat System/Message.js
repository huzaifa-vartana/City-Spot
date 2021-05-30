import React from "react";
import PropTypes from "prop-types";
import { formatRelative } from "date-fns";

const formatDate = (date) => {
  let formattedDate = "";
  if (date) {
    // Convert the date in words relative to the current date
    formattedDate = formatRelative(date, new Date());
    // Uppercase the first letter
    formattedDate =
      formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  }
  return formattedDate;
};

const Message = ({
  createdAt = null,
  text = "",
  displayName = "",
  photoURL = "",
}) => {
  if (!text) return null;

  return (
    <div className="row">
      <div className="col-12">
        <div className="chat-box">
          {photoURL ? (
            <img
              src={photoURL}
              alt="Avatar"
              style={{ width: "100%", borderRadius: "50%" }}
            />
          ) : null}
          {displayName ? (
            <p className="customer_name">
              {displayName}
              {createdAt?.seconds ? (
                <span className="time-right">
                  {formatDate(new Date(createdAt.seconds * 1000))}
                </span>
              ) : null}
            </p>
          ) : null}
          <p className="chat">{text}</p>
        </div>
      </div>
    </div>
  );
};
Message.propTypes = {
  text: PropTypes.string,
  createdAt: PropTypes.shape({
    seconds: PropTypes.number,
  }),
  displayName: PropTypes.string,
  photoURL: PropTypes.string,
};

export default Message;
