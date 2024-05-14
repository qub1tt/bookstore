import React from "react";
import { Link } from "react-router-dom";

const ForgotPassword = ({ setEmail, submit, notification }) => (
  <div className="flex flex-col items-center justify-center h-screen bg-white-100 text-center">
    <div className="absolute top-0 mt-8">
      <Link to="/">
        <img
          src={require("../../assets/forgot.webp")}
          className=" w-96 mx-auto"
          alt="Logo"
        />
      </Link>
    </div>
    <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-md mt-20">
      <h1 className="text-4xl font-bold mb-4">
        <b>FORGOT PASSWORD</b>
      </h1>
      {notification && <span className="text-red-500">{notification}</span>}
      <div className="my-4">
        <input
          type="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg"
        />
      </div>
      <button
        className="bg-blue-500 text-white py-2 px-6 rounded-lg text-xl hover:bg-blue-700 mb-4"
        onClick={() => submit()}
      >
        Submit
      </button>
      <h2>
        <Link
          to="/"
          className="bg-gray-500 text-white py-2 px-6 rounded-lg text-xl hover:bg-gray-700"
        >
          Bring me back Home
        </Link>
      </h2>
    </div>
  </div>
);

export default ForgotPassword;
