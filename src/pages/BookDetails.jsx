import React, { useState, useEffect } from "react";
import Abovenav from "../components/abovenav/abovenav";
import Sidebar from "../components/sidebar/sidebar";
import DetailsSection from "../components/DetailsSection/DetailsSection";
import Footer from "../components/footer/footer";

function BookDetailsPage(props) {
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location]);

  return (
    <div className="contain">
      <div className="sidebar">
        <Sidebar
          isOpen={isOpen}
          toggle={toggleSidebar}
          islogin={props.islogin}
          logout={() => props.logout()}
        />
      </div>
      <div className="navbar">
        <Abovenav toggle={toggleSidebar} />
      </div>

      <div className="content">
        <DetailsSection
          mproductDetail={props.mproductDetail}
          nameCategory={props.nameCategory}
          namePublicsher={props.namePublicsher}
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
      </div>

      <Footer />
    </div>
  );
}

export default BookDetailsPage;
