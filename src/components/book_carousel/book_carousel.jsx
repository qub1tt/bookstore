import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import "./book_carousel.css";
// <FontAwesomeIcon icon={faArrowRight} size="xl" style={{color: "#FFD43B",}} />
// <FontAwesomeIcon icon={faArrowLeft} size="xl" style={{color: "#FFD43B",}} />

import bs1 from "../../assets/bookstore/bookstore.jpg";
import bs2 from "../../assets/bookstore/bookstore2.jpg";
import bs3 from "../../assets/bookstore/bookstore3.jpg";
import bs4 from "../../assets/bookstore/bookstore4.jpg";
import bs5 from "../../assets/bookstore/bookstore1.jpg";

function Bcarousel () {
  const slides = [
    {
      url: bs1
    },
    {
      url: bs2
    },
    {
      url: bs3
    },
    {
      url: bs4
    },
    {
      url: bs5
    },
  ];  

const [currentIndex, setCurrentIndex] = useState(0);

const prevSlide = () => {
  const isFirstSlide = currentIndex ===0;
  const newIndex = isFirstSlide ? slides.length -1 : currentIndex -1;
  setCurrentIndex(newIndex);
};

const nextSlide = () => {
  const isLastSlide = currentIndex === slides.length - 1;
  const newIndex = isLastSlide ? 0 : currentIndex + 1;
  setCurrentIndex(newIndex);
};


  return (
    <div className="max-w-[940px] h-[500px] w-full m-auto py-8 relative group">
      <div style={{ background: `url(${slides[currentIndex].url})` }} className="w-full h-full rounded-2xl bg-center bg-cover duration-500"></div>
      
      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <FontAwesomeIcon icon={faArrowLeft} size="xl" style={{color: "white",}} onClick={prevSlide} />
      </div>

      <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <FontAwesomeIcon icon={faArrowRight} size="xl" style={{color: "white",}} onClick={nextSlide} />
      </div>
    </div>
  )
}

export default Bcarousel;
