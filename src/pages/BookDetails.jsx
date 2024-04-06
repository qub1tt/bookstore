import React from "react";
import Abovenav from "../components/abovenav/abovenav";
import Sidebar from "../components/sidebar/sidebar";
import DetailsSection from "../components/DetailsSection/DetailsSection";
import Footer from "../components/footer/footer";
export default function BookDetailsPage() {
  return (
    <div className="contain">
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="navbar">
        <Abovenav />
      </div>
      <div className="content">
        <DetailsSection />
      </div>
      <Footer />
    </div>
  );
}
