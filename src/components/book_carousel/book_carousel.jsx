import React, { useState, useEffect } from 'react';
import "./book_carousel.css";

import bs1 from "../../assets/bookstore/bookstore.jpg";
import bs2 from "../../assets/bookstore/bookstore2.jpg";
import bs3 from "../../assets/bookstore/bookstore3.jpg";
import bs4 from "../../assets/bookstore/bookstore4.jpg";
import bs5 from "../../assets/bookstore/bookstore1.jpg";
function Bcarousel() {
  const slides = [
    { url: bs1 },
    { url: bs2 },
    { url: bs3 },
    { url: bs4 },
    { url: bs5 },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="carousel-container group">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="carousel-slide"
      ></div>
    </div>
  );
}

export default Bcarousel;
