import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import "./login.css";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";
export default function ContentLoginRegister({
  setEmailLogin,
  setPasswordlogin,
  setEmail,
  setFirstname,
  setLastname,
  setAddress,
  setPhone,
  setPassword,
  setConfirm,
  notificationRegister,
  notificationLogin,
  registerSubmit,
  loginSubmit,
  responseGoogle,
}) {
  const [Login, setLogin] = useState(true);
  const [Register, setRegister] = useState(false);
  const clientId =
    "714095224184-4f9pah6q369megu0q2581fk09a6f635f.apps.googleusercontent.com";
  function handleLogin(event) {
    event.preventDefault();
    setLogin(true);
    setRegister(false);
  }

  function handleRegister(event) {
    event.preventDefault();
    setRegister(true);
    setLogin(false);
  }

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }
    gapi.load("client:auth2", start);
  });

  let xhtmlLogin = "";
  let xhtmlRegister = "";
  if (Login) {
    xhtmlLogin = (
      <div className="login-page">
        <div className="login-form1">
          <h2 className="login-title">Login to your account</h2>
          <div className="noti">{notificationLogin}</div>

          <div className="login-input">
            <input
              type="email"
              onChange={(e) => {
                setEmailLogin(e.target.value);
              }}
              className=""
              placeholder="Email"
            />
          </div>

          <div className="login-input">
            <input
              type="password"
              onChange={(e) => {
                setPasswordlogin(e.target.value);
              }}
              className=""
              placeholder="Password"
            />
          </div>

          <button
            type="submit"
            className="login-button"
            onClick={() => loginSubmit()}
          >
            {" "}
            Sign in{" "}
          </button>
          <div className="my-2">
            <GoogleLogin
              clientId={clientId}
              buttonText="Login with Google"
              onSuccess={responseGoogle}
              onFailure={responseGoogle}
              cookiePolicy={"single_host_origin"}
            />
          </div>

          <div className="login-link">
            {" "}
            <Link to="/forgotpass/" className="">
              {" "}
              Forgot Password?{" "}
            </Link>{" "}
          </div>

          <div className="login-link flex justify-between items-center my-5">
            <p>Don't have an account?</p>
            <Link
              onClick={handleRegister}
              className="login-link text-base"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    );
  }

  if (Register) {
    xhtmlRegister = (
      <div className="login-page">
        <div className="login-form">
          <h2 className="login-title2">Sign Up</h2>
          <div className="noti">{notificationRegister}</div>
          <div className="login-input">
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className=""
              placeholder="Email"
            />
          </div>
          <div className="login-input">
            <input
              type="text"
              onChange={(e) => {
                setFirstname(e.target.value);
              }}
              className=""
              placeholder="First Name"
            />
          </div>
          <div className="login-input">
            <input
              type="text"
              onChange={(e) => {
                setLastname(e.target.value);
              }}
              className=""
              placeholder="Last Name"
            />
          </div>
          <div className="login-input">
            <input
              type="text"
              onChange={(e) => {
                setAddress(e.target.value);
              }}
              className=""
              placeholder="Address"
            />
          </div>
          <div className="login-input">
            <input
              type="number"
              onChange={(e) => {
                setPhone(e.target.value);
              }}
              className=""
              placeholder="Phone Number"
            />
          </div>
          <div className="login-input">
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className=""
              placeholder="Password"
            />
          </div>
          <div className="login-input">
            <input
              type="password"
              onChange={(e) => {
                setConfirm(e.target.value);
              }}
              className=""
              placeholder="Confirm Password"
            />
          </div>
          <button
            type="submit"
            className="login-button"
            onClick={() => registerSubmit()}
          >
            Sign up
          </button>
          <div className="login-link flex justify-between items-center">
            <p>Already have an account?</p>
            <Link
              onClick={handleLogin}
              className="login-link text-base"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    );
  }
  return (
    <section className="homePage">
      <div className="login-register">
        <div className="menu-profile">
          <div className="btn-container flex justify-center"></div>
          <hr />
        </div>
        <div>
          {xhtmlRegister}
          {xhtmlLogin}
        </div>
      </div>
    </section>
  );
}
