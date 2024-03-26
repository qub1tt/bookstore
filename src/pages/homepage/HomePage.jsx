import React from "react";
import Abovenav from "../../components/abovenav/abovenav";
import Sidebar from "../../components/sidebar/sidebar";
import Content1 from "../../components/content1/content1";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="contain">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Abovenav />

        <Content1 />
      </div>
    </div>
  );
};

export default HomePage;
