import React from "react";
import Abovenav from "../components/abovenav/abovenav";
import Sidebar from "../components/sidebar/sidebar";
import DetailsSection from "../components/DetailsSection/DetailsSection";
export default function BookDetailsPage() {
  return (
    <div>
      <Abovenav />
      <Sidebar />
      <DetailsSection />
    </div>
  );
}
