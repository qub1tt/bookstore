import React from "react";
import { Link } from "react-router-dom";

const Fail = () => (
  <div className="flex flex-col items-center justify-center h-screen bg-white-100 text-center">
    <div className="logo-404"></div>
    <div className="content-404">
      <h1 className="text-4xl font-bold mb-4">
        <b>OPPS!</b> Fail
      </h1>
      <p>
        Uh... So it looks like you broke something. The page you are looking for
        has up and Vanished.
      </p>
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

export default Fail;
