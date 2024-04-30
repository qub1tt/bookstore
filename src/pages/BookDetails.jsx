import React, {useState, useEffect} from "react";
import Abovenav from "../components/abovenav/abovenav";
import Sidebar from "../components/sidebar/sidebar";
import DetailsSection from "../components/DetailsSection/DetailsSection";
import Footer from "../components/footer/footer";
export default function BookDetailsPage() {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="contain">
      <div className="sidebar">
        <Sidebar isOpen={isOpen} toggle={toggleSidebar}/>
      </div>
      <div className="navbar">
        <Abovenav toggle={toggleSidebar} />
      </div>
      <div className="content">
        <DetailsSection />
      </div>
         <Footer />
    </div>
  );
}
