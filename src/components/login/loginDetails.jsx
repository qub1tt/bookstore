import { Link } from "react-router-dom";
import React, { useState } from "react";
import "./style.css";
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
}) {
  const [Login, setLogin] = useState(true);
  const [Register, setRegister] = useState(false);
  function handleLogin(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút

    setLogin(true);
    setRegister(false);
  }
  function handleRegister(event) {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của nút

    setRegister(true);
    setLogin(false);
  }
  let xhtmlLogin = "";
  let xhtmlRegister = "";
  if (Login) {
    xhtmlLogin = (
      <div className="wrapper">
        <div className="form-box">
          <div className="login-container" id="login">
            <div className="top">
              <span>
                Don't have an account?
                <a href="#" onClick={handleRegister}>
                  Sign Up
                </a>
              </span>
              <header>Login</header>
              {/* <div className="noti">{notificationLogin}</div> */}
            </div>
            <div class="input-box">
              <input
                type="email"
                onChange={(e) => {
                  setEmailLogin(e.target.value);
                }}
                class="input-field"
                placeholder="Username or Email"
              />
              <i class="bx bx-user"></i>
            </div>

            <div class="input-box">
              <input
                type="password"
                onChange={(e) => {
                  setPasswordlogin(e.target.value);
                }}
                className="input-field"
                placeholder="Password"
              />
              <i class="bx bx-lock-alt"></i>
            </div>
            <div class="input-box">
              <button
                type="submit"
                onClick={() => loginSubmit()}
                class="submit"
                value="Sign In"
              >
                Sign In
              </button>
            </div>
            <div class="two-col">
              <div class="two">
                <Link to="/forgotpass/" className="two">
                  Forgot Password?
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (Register) {
    xhtmlRegister = (
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign Up
          </h2>
          <div className="noti">{notificationRegister}</div>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                First Name
              </label>

              <div className="mt-2">
                <input
                  type="text"
                  onChange={(e) => {
                    setFirstname(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Last Name
              </label>

              <div className="mt-2">
                <input
                  type="text"
                  onChange={(e) => {
                    setLastname(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Address
              </label>

              <div className="mt-2">
                <input
                  type="text"
                  onChange={(e) => {
                    setAddress(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>

              <div className="mt-2">
                <input
                  type="number"
                  onChange={(e) => {
                    setPhone(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>

              <div className="mt-2">
                <input
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Confirm Password
              </label>

              <div className="mt-2">
                <input
                  type="password"
                  onChange={(e) => {
                    setConfirm(e.target.value);
                  }}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={() => registerSubmit()}
              >
                Sign up
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <section>
      <div>
        {xhtmlRegister}
        {xhtmlLogin}
      </div>
    </section>
  );
}
