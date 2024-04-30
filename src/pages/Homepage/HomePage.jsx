import React, {useState, useEffect} from "react";
import Abovenav from "../../components/abovenav/abovenav";
import Sidebar from "../../components/sidebar/sidebar";
import Content1 from "../../components/content1/content1";
import Content0 from "../../components/content0/content0";
import Content2 from "../../components/content2/content2";
import Footer from "../../components/footer/footer";
import Book_Carousel from "../../components/book_carousel/book_carousel";
import "./HomePage.css";

const HomePage = () => {
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
        <div className="book_carousel">
          <Book_Carousel />
        </div>
        <Content1 />
        <Content2 />
        <Content0 />
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
