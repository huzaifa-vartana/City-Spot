import React, { useState, useRef, useEffect } from "react";

import loginImg from "../../img/login.svg";
import axios from "axios";
import { withSuccess } from "antd/lib/modal/confirm";
import fire from "../../config";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../AuthContext";
import { Link, useHistory } from "react-router-dom";

export const Login = () => {
  // const history = useHistory();
  // // const [response, handleResponse] = React.useState("");
  // const [isAuth, setAuth] = React.useState(false);
  // const [email, setEmail] = React.useState("");
  // const [password, setPassword] = React.useState("");
  // const [userInfo, setUserInfo] = React.useState("");
  // const handleEmail = (e) => {
  //   setEmail(e.target.value);
  //   console.log(email);
  // };
  // let payload;
  // const handlePassword = (e) => {
  //   setPassword(e.target.value);
  //   console.log(password);
  // };
  // const handleSubmit = (e) => {
  //   console.log(email);
  //   const success = fire
  //     .auth()
  //     .signInWithEmailAndPassword(email, password)
  //     .then((u) => {
  //       // console.log(u);
  //       setAuth(true);
  //       payload = u;
  //       console.log(payload.user.displayName);
  //       // setUserInfo(u.user.toJSON());
  //       // console.log(userInfo);
  //       history.push("/home");
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // };
  // const userLogin = (email, password) => {
  //   let res = axios
  //     .post("/api/auth", {
  //       email: email,
  //       password: password,
  //     })
  //     .then(function (response) {
  //       data = response;
  //       console.log(response.data);
  //       if (response.status === 200) {
  //         setAuth(true);
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error.status);
  //     });
  // };
  // const reDirectToHome = () => {
  //   history.push("/home");
  // };
  // function reDirectToHome() {
  //   history.push("/home");
  // }
  // React.useEffect(() => {
  //   if (!isAuth) {
  //     handleSubmit();
  //   }
  // }, [isAuth]);
  // React.useEffect(() => {
  //   axios
  //     .post("/api/auth", {
  //       email: email,
  //       password: password,
  //     })
  //     .then(function (response) {
  //       data = response;
  //       console.log(response.data);
  //       if (response.status === 200) {
  //         setAuth(true);
  //       }
  //     })
  //     .catch(function (error) {
  //       console.log(error.status);
  //     });
  // }, []);

  // if (isAuthenticated) {
  //   // isAuth = true;
  //   history.push("/home");
  //   // return <Redirect to="home" />;
  // }
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/home");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <div className="base-container">
      <div className="header">Login</div>

      <div className="content">
        <div className="image">
          <img src={loginImg} />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              ref={emailRef}
              required
              type="text"
              name="email"
              // onChange={(e) => {
              //   handleEmail(e);
              // }}
              placeholder="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              ref={passwordRef}
              required
              name="password"
              // onChange={(e) => {
              //   handlePassword(e);
              // }}
              placeholder="password"
            />
          </div>
        </div>
        {error && <Alert variant="danger">{error}</Alert>}
      </div>

      <div className="footer-btn">
        <button
          type="button"
          disabled={loading}
          onClick={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          className="btn-new"
        >
          Login
        </button>
      </div>
      <div className="w-100 text-center mt-3">
        <Link to="/forgot-password">Forgot Password?</Link>
      </div>
    </div>
  );
};
