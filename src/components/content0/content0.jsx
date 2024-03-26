import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import "./content0.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faHeart,
  faEye,
} from "@fortawesome/free-solid-svg-icons";


import Bleach1 from "./../../assets/truyen/bleach5.jpg";
import C from "./../../assets/khoahoc/c.jpg";   
import Algorithm from "./../../assets/khoahoc/algorithm.jpg";
import Chienluoc from "./../../assets/kinhte/chienluoc.png";
import Nhancach from "./../../assets/tamly/nhancach.png";
import Thaotung from "./../../assets/tamly/thaotung.jpg";
import CS from "./../../assets/khoahoc/cs.jpg";
import GT from "./../../assets/sgk/giaitich.png";

const Content0 = () => {
    useEffect(() => {
        const content0_featureSwiper = new Swiper(".content0_feature-slider", {
          spaceBetween: 10,
          loop:true,
          centeredSlides: true,
          autoplay: {
            delay: 9500,
            disableOnInteraction: false,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            0: {
              slidesPerView: 1,
            },
            450: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          },
        });
        content0_featureSwiper.update();
      }, []);
    
      return (
        <section className="content0_feature">

          <h1 id="content0_feature">BOOK SWIPER</h1>

          <div className="swiper content0_feature-slider"  style={{ width: "100%", maxWidth: "1100px" }}>
            <div className="swiper-wrapper">

                <div  className="swiper-slide box">
                    <div  className="content0_feature_image">
                        <img src={Bleach1} alt=""/>
                    </div>
                    <div  className="content0_feature_content">
                        <h3>feature books</h3>
                        <div  className="content0_price">$15.99 <span>$20.99</span></div>
                        <div className='content0_content_btn'>
                            <a href="#"  className="content0_btn">Detail book</a>
                            <a href="#"  className="content0_btn">Add to cart</a>
                        </div>
                    </div>
                </div>

                <div  className="swiper-slide box">
                     
                    <div  className="content0_feature_image">
                        <img src={C} alt=""/>
                    </div>
                    <div  className="content0_feature_content">
                        <h3>feature books</h3>
                        <div  className="content0_price">$15.99 <span>$20.99</span></div>
                        <div className='content0_content_btn'>
                            <a href="#"  className="content0_btn">Detail book</a>
                            <a href="#"  className="content0_btn">Add to cart</a>
                        </div>
                    </div>
                </div>

                <div  className="swiper-slide box">
                     
                    <div  className="content0_feature_image">
                        <img src={Algorithm} alt=""/>
                    </div>
                    <div  className="content0_feature_content">
                        <h3>feature books</h3>
                        <div  className="content0_price">$15.99 <span>$20.99</span></div>
                        <div className='content0_content_btn'>
                            <a href="#"  className="content0_btn">Detail book</a>
                            <a href="#"  className="content0_btn">Add to cart</a>
                        </div>
                    </div>
                </div>


                <div  className="swiper-slide box">
                     
                    <div  className="content0_feature_image">
                        <img src={GT} alt=""/>
                    </div>
                    <div  className="content0_feature_content">
                        <h3>feature books</h3>
                        <div  className="content0_price">$15.99 <span>$20.99</span></div>
                        <div className='content0_content_btn'>
                            <a href="#"  className="content0_btn">Detail book</a>
                            <a href="#"  className="content0_btn">Add to cart</a>
                        </div>
                    </div>
                </div>
                
                
                <div  className="swiper-slide box">
                     
                    <div  className="content0_feature_image">
                        <img src={Thaotung} alt=""/>
                    </div>
                    <div  className="content0_feature_content">
                        <h3>feature books</h3>
                        <div  className="content0_price">$15.99 <span>$20.99</span></div>
                        <div className='content0_content_btn'>
                            <a href="#"  className="content0_btn">Detail book</a>
                            <a href="#"  className="content0_btn">Add to cart</a>
                        </div>
                    </div>
                </div>

                <div  className="swiper-slide box">
                     
                    <div  className="content0_feature_image">
                        <img src={Nhancach} alt=""/>
                    </div>
                    <div  className="content0_feature_content">
                        <h3>feature books</h3>
                        <div  className="content0_price">$15.99 <span>$20.99</span></div>
                        <div className='content0_content_btn'>
                            <a href="#"  className="content0_btn">Detail book</a>
                            <a href="#"  className="content0_btn">Add to cart</a>
                        </div>
                    </div>
                </div>

                <div  className="swiper-slide box">
                     
                    <div  className="content0_feature_image">
                        <img src={Chienluoc} alt=""/>
                    </div>
                    <div  className="content0_feature_content">
                        <h3>feature books</h3>
                        <div  className="content0_price">$15.99 <span>$20.99</span></div>
                        <div className='content0_content_btn'>
                            <a href="#"  className="content0_btn">Detail book</a>
                            <a href="#"  className="content0_btn">Add to cart</a>
                        </div>
                    </div>
                </div>

                <div  className="swiper-slide box">
                     
                    <div  className="content0_feature_image">
                        <img src={CS} alt=""/>
                    </div>
                    <div  className="content0_feature_content">
                        <h3>feature books</h3>
                        <div  className="content0_price">$15.99 <span>$20.99</span></div>
                        <div className='content0_content_btn'>
                            <a href="#"  className="content0_btn">Detail book</a>
                            <a href="#"  className="content0_btn">Add to cart</a>
                        </div>
                    </div>
                </div>


            </div>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </section>
      );
};

export default Content0;

