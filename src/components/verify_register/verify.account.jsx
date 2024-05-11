import React from "react";
import { Link } from "react-router-dom";
const VerifyRegisterAccount = () => (
  <div className=" text-center">
    <div>
      <img
        src={require("../../assets/logo1.gif")}
        alt=""
        className="rounded-full w-72 mx-auto"
      />
    </div>
    <div>
      <h1 className="mt-16">
        <b>Congratulations!!!</b> You have verified login successfully
      </h1>
      <h2>
        <Link
          to="/"
          className="mt-8 inline-block py-2 px-4 bg-blue-500 text-white rounded-md text-lg font-semibold text-center"
        >
          Trở Về Trang Chủ
        </Link>
      </h2>
    </div>
  </div>
);
export default VerifyRegisterAccount;
