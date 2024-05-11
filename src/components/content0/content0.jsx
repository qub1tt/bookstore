import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; 
import { Swiper, SwiperSlide } from "swiper/react"; // Import Swiper and SwiperSlide from swiper/react
import "swiper/swiper-bundle.css";
import "./content0.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Content0 = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Function to fetch data from API
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/book/");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        // Sort books by view_counts in descending order
        const sortedBooks = data.data.sort((a, b) => b.view_counts - a.view_counts);
        // Take top 10 books
        const top10Books = sortedBooks.slice(0, 10);
        // Set the fetched data to the state
        setBooks(top10Books);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  return (
    <section className="content0_feature">
      <div className="content0_title">
        <span>
          <FontAwesomeIcon icon={faStar} size="2xl" style={{ color: "#FFD43B" }} />
          <span style={{ paddingLeft: "10px" }}>
            <strong>Sách yêu thích:</strong>
          </span>
        </span>
      </div>

      <Swiper
        className="content0_feature-slider"
        spaceBetween={10}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 9500, disableOnInteraction: false }}
        navigation={{ nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" }}
        breakpoints={{ 0: { slidesPerView: 1 }, 450: { slidesPerView: 2 }, 768: { slidesPerView: 3 }, 1024: { slidesPerView: 4 } }}
      >
        {books.map((book) => (
          <SwiperSlide key={book._id} className="box">
            <div className="content0_feature_image">
              <img src={book.img} alt={book.name} title={book.name} />
            </div>
            <div className="content0_feature_content">
              <h3>{book.name}</h3>
              <div className="content0_price">
                {book.price}đ <span>{(book.price * 1.3)}đ</span>
              </div>
              <div className="content0_content_btn">
                <Link to={`/book/${book._id}`} className="content0_btn">
                  Detail book
                </Link>
                <a href="#" className="content0_btn">
                  Add to cart
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Content0;
