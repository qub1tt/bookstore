import React from "react";
import { Link } from "react-router-dom";
const VerifyRegisterAccount = () => (
  <div className="flex flex-col items-center justify-center h-screen text-center">
    <div className="mb-8">
      <img
        src={require("../../assets/payment.avif")}
        alt="Logo"
        className="w-96"
      />
    </div>
    <div className="text-3xl font-bold mb-4">
      <b>Congratulations!!!</b> You have verified login successfully
    </div>
    <div className="text-xl">
      <Link to="/">
        <button className="bg-blue-500 text-white py-2 px-6 rounded-lg text-xl hover:bg-blue-700">
          Trở Về Trang Chủ
        </button>
      </Link>
    </div>
  </div>
);
export default VerifyRegisterAccount;
