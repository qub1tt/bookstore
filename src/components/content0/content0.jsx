import React, { useEffect, useState, useRef } from "react";
import "./content0.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import BookSlide from "./BookSlide";

export default function Content0(props) {
    const [bookIds, setBookIds] = useState([]);
    const [displayedBooks, setDisplayedBooks] = useState([]);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API}/book`)
          .then((response) => response.json())
          .then((data) => {
            const sortedBooks = data.data.sort((a, b) => b.view_counts - a.view_counts);
            const top10Books = sortedBooks.slice(0, 10);
            const ids = top10Books.map((book) => btoa(book._id));
            // Triple the books for infinite scrolling
            setBookIds([...ids, ...ids, ...ids]);
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
            const totalWidth = scrollContainer.scrollWidth;
            const visibleWidth = scrollContainer.clientWidth;
            const scrollLeft = scrollContainer.scrollLeft;

            if (scrollLeft + visibleWidth >= totalWidth - 1) {
                // Reached the end
                scrollContainer.scrollLeft = totalWidth / 3 - visibleWidth;
            } else if (scrollLeft <= 0) {
                // Reached the start
                scrollContainer.scrollLeft = totalWidth / 3;
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

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        // Initialize the scroll position to the middle set of books
        scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;
    }, [bookIds]);

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
                {bookIds.map((bookId, index) => (
                    <BookSlide key={index} bookId={bookId} />
                ))}
            </div>
        </section>
    );
}
