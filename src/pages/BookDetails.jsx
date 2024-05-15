import React, { useState, useEffect } from "react";
import Abovenav from "../components/abovenav/abovenav";
import Sidebar from "../components/sidebar/sidebar";
import DetailsSection from "../components/DetailsSection/DetailsSection";
import Footer from "../components/footer/footer";
import Chatbot from "../components/Chatbot/Chatbot";

function BookDetailsPage(props) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location]);

  const [isOpen, setIsOpen] = useState(window.innerWidth > 1150);

  const handleResize = () => {
    setIsOpen(window.innerWidth > 1150);
  };

  const toggleSidebar = () => {
    setIsOpen((prevState) => !prevState);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="contain">
      <div className="sidebar">
        <Sidebar
          isOpen={isOpen}
          islogin={props.islogin}
          logout={props.logout}
        />
      </div>
      <div className="navbar">
        <Abovenav toggle={toggleSidebar} />
      </div>
      <div className="content">
        <DetailsSection
          mproductDetail={props.mproductDetail}
          nameCategory={props.nameCategory}
          namePublisher={props.namePublisher}
          islogin={props.islogin}
          id_book={props.id_book}
          submitComment={(name, comment, id_book) =>
            props.submitComment(name, comment, id_book)
          }
          comment={props.comment}
          nameAuthor={props.nameAuthor}
          addToCart={(product) => props.addToCart(product)}
          totalpage={props.totalpage}
          page={props.page}
          backPage={() => props.backPage()}
          nextPage={() => props.nextPage()}
          setPage={(page) => props.setPage(page)}
        />
        <Chatbot />
      </div>
      <Footer />
    </div>
  );
}

export default BookDetailsPage;
