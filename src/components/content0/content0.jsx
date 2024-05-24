import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./content0.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Content0 = () => {
  const [books, setBooks] = useState([]);
  const scrollContainerRef = useRef(null);

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
        const sortedBooks = data.data.sort(
          (a, b) => b.view_counts - a.view_counts
        );
        // Take top 10 books
        const top10Books = sortedBooks.slice(0, 10);
        // Duplicate the books array to create an infinite loop effect
        setBooks([...top10Books, ...top10Books, ...top10Books]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    // Call the fetchData function
    fetchData();
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      scrollContainer.classList.add("active");
      startX = e.pageX - scrollContainer.offsetLeft;
      scrollLeft = scrollContainer.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      scrollContainer.classList.remove("active");
    };

    const handleMouseUp = () => {
      isDown = false;
      scrollContainer.classList.remove("active");
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scrollContainer.offsetLeft;
      const walk = (x - startX) * 2; //scroll-fast
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    const handleScroll = () => {
      // When scrolled to the end, reset scroll position to the middle set of books
      if (
        scrollContainer.scrollLeft >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollContainer.scrollLeft =
          scrollContainer.scrollWidth / 3 - scrollContainer.clientWidth;
      } else if (scrollContainer.scrollLeft <= 0) {
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
      }
    };

    scrollContainer.addEventListener("mousedown", handleMouseDown);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);
    scrollContainer.addEventListener("mouseup", handleMouseUp);
    scrollContainer.addEventListener("mousemove", handleMouseMove);
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("mousedown", handleMouseDown);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
      scrollContainer.removeEventListener("mouseup", handleMouseUp);
      scrollContainer.removeEventListener("mousemove", handleMouseMove);
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [books]);

  return (
    <section className="content0_feature">
      <div className="content0_title">
        <span>
          <FontAwesomeIcon
            icon={faStar}
            size="2xl"
            style={{ color: "#FFD43B" }}
          />
          <span style={{ paddingLeft: "10px" }}>
            <strong>Sách yêu thích:</strong>
          </span>
        </span>
      </div>

      <div className="content0_scroll_container" ref={scrollContainerRef}>
        {books.map((book, index) => (
          <div key={`${book._id}-${index}`} className="content0_scroll_item">
            <div className="content0_feature_image">
              <img src={book.img} alt={book.name} title={book.name} />
            </div>
            <div className="content0_feature_content">
              <h3>{book.name}</h3>
              <div className="content0_price">
                {book.price}đ <span>{book.price * 1.3}đ</span>
              </div>
              <div className="content0_content_btn">
                <Link to={`/book/${btoa(book._id)}`} className="content0_btn">
                  Detail book
                </Link>
                <a href="#" className="content0_btn">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Content0;
