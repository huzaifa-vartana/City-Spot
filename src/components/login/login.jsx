// import React from "react";

// export class Login extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {

//   }
// }
import React from "react";

import { Redirect, useHistory } from "react-router-dom";
import loginImg from "../../img/login.svg";
import axios from "axios";
let data;

function handleSubmit(e) {
  console.log(data.status);
  if (data.status === 200) {
    // history.push("/home");
    // moveToHome(e);
    console.log("hello");
  } else {
    console.log("not okay");
  }
}
export const Login = ({ setStatus }) => {
  // const history = useHistory();

  const [response, handleResponse] = React.useState("");
  React.useEffect(() => {
    axios
      .post("/api/auth", {
        email: "huzaifamalik47@gmail.com",
        password: "explorer",
      })
      .then(function (response) {
        data = response;
        setStatus(data.status);
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <div className="base-container">
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" placeholder="password" />
          </div>
        </div>
      </div>
      <div className="footer-btn">
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          className="btn-new"
        >
          Login
        </button>
      </div>
    </div>
  );
};
