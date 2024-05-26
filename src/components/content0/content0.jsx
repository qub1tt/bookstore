import React, { useEffect, useState, useRef } from "react";
import "./content0.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import BookSlide from "./BookSlide";

export default function Content0(props) {
    const [bookIds, setBookIds] = useState([]);
    const [displayedBooks, setDisplayedBooks] = useState([]);
    const scrollContainerRef = useRef(null);


    useEffect(() => {
        fetch("http://localhost:8080/book")
          .then((response) => response.json())
          .then((data) => {
            // Sắp xếp mảng sách theo view_counts giảm dần
            const sortedBooks = data.data.sort((a, b) => b.view_counts - a.view_counts);
            const top10Books = sortedBooks.slice(0, 10);
            const ids = top10Books.map((book) => btoa(book._id));
            setBookIds([...ids,...ids,...ids]);
            setDisplayedBooks(ids);
          })
          .catch((error) => {
            console.error("Error fetching book data:", error);
          });
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
    }, [bookIds]);

    const scrollLeft = () => {
        const container = scrollContainerRef.current;
        container.scrollLeft -= 200; 
    };

    const scrollRight = () => {
        const container = scrollContainerRef.current;
        container.scrollLeft += 200; 
    };

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
                {displayedBooks.map((bookId, index) => (
                    <BookSlide key={index} bookId={bookId} />
                ))}
            </div>
        </section>
    );
};
