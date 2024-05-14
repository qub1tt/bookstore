import React from "react";
import { Link } from "react-router-dom";

const Success = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-white-100 text-center">
    <div className="logo-404"></div>
    <div className="content-404">
      <h1 className="text-4xl font-bold mb-10">
        <b>CONGRATULATIONS! You have changed your password</b>
      </h1>
      <p></p>
      <h2>
        <Link
          to="/"
          className="bg-blue-500 text-white py-2 px-6 rounded-lg text-xl hover:bg-blue-700"
        >
          Trở Về Trang Chủ
        </Link>
      </h2>
    </div>
  </div>
);

export default Success;
