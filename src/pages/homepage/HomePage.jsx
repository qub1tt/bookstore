import React from "react";
import Abovenav from "../../components/abovenav/abovenav";
import Sidebar from "../../components/sidebar/sidebar";
import Content1 from "../../components/content1/content1";
import Content0 from "../../components/content0/content0";
import Content2 from "../../components/content2/content2";
import Footer from "../../components/footer/footer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="contain">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="navbar">
        <Abovenav />
      </div>
        <div className="content"> 
          <Content0 />
          <Content1 />
          <Content2 />
          <Footer />
      </div>
      
    </div>
  );
};

export default HomePage;
