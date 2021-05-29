import React from "react";
import "./chat.css";
const ChatComponent = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="maintext">
                <h3>CitySpot Community Chat</h3>
                <h3>Share your experiences with Others</h3>
                <p>This is the beginning of this chat.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="chat-sec">
        <div className="container">
          <div className="row">
            <div
              style={{
                minHeight: "0px",
              }}
              className="col-12"
            >
              <div className="chat-box">
                <img
                  src="img/bandmember.jpg"
                  alt="Avatar"
                  style={{ width: "100%" }}
                />
                <p className="customer_name">
                  Noman Ali
                  <span className="time-right">Last Monday at 1:23 PM</span>
                </p>
                <p className="chat">Hello</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="row">
          <div className="col-12">
            <div className="input_field">
              <form>
                <input
                  type="text"
                  placeholder="Type Your Text here...."
                  name="lname"
                />
                <input type="button" value="SEND" />
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatComponent;
