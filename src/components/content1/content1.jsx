import React from "react";
import "./content1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faStar,
  faCartShopping,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import Bleach1 from "../../assets/truyen/bleach5.png";
import C from "../../assets/khoahoc/c.png";
import Algorithm from "../../assets/khoahoc/algorithm.png";
import Chienluoc from "../../assets/kinhte/chienluoc.png";
import Nhancach from "../../assets/tamly/nhancach.png";
import Thaotung from "../../assets/tamly/thaotung.png";

const Content1 = () => {
  return (
    <div className="content1">
      <div className="content1_above">
        <div className="content1_above_left">
          <span>
            <FontAwesomeIcon
              icon={faLightbulb}
              size="2xl"
              style={{ color: "#FFD43B" }}
            />
            <span style={{ paddingLeft: "10px" }}>
              <strong>Gợi ý cho bạn:</strong>
            </span>
          </span>
        </div>
        <div className="content1_above_right">
          <div class="content1_xemthem">
            <a href="#" class="content1_xemthem_bt">
              Xem thêm
            </a>
          </div>
        </div>
      </div>

      <div className="content1_below">
        <div className="content1_below_above">
          <div className="content1_below_box">
            <div className="content1_below_book_img">
              <img src={Bleach1} alt="" />
              <button class="content1_below_book_img_hover-button">
                Mua ngay
              </button>
            </div>
            <div className="content1_below_book_describe">
              <strong>Bleach1</strong>
              <div style={{ padding: "4px 0 4px 0" }}>Tite Kubo</div>
              <div style={{ padding: "4px 0 4px 0" }}>
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
              </div>
              <div style={{ padding: "4px 0 8px 0", fontSize: "larger" }}>
                <strong>16.000 VND</strong>
              </div>
              <div>
                <span>
                  <a style={{ textDecoration: "none" }} href="#">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      size="xl"
                      style={{ color: "#FFD43B" }}
                    />
                  </a>
                </span>
                <span style={{ paddingLeft: "10px" }}>
                  <a style={{ textDecoration: "none" }} href="#">
                    <FontAwesomeIcon
                      icon={faHeart}
                      size="xl"
                      style={{ color: "#FFD43B" }}
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="content1_below_box">
            <div className="content1_below_book_img">
              <img src={C} alt="" />
              <button class="content1_below_book_img_hover-button">
                Mua ngay
              </button>
            </div>
            <div className="content1_below_book_describe">
              <strong>Bleach1</strong>
              <div style={{ padding: "4px 0 4px 0" }}>Tite Kubo</div>
              <div style={{ padding: "4px 0 4px 0" }}>
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
              </div>
              <div style={{ padding: "4px 0 8px 0", fontSize: "larger" }}>
                <strong>16.000 VND</strong>
              </div>
              <div>
                <span>
                  <a style={{ textDecoration: "none" }} href="#">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      size="xl"
                      style={{ color: "#FFD43B" }}
                    />
                  </a>
                </span>
                <span style={{ paddingLeft: "10px" }}>
                  <a style={{ textDecoration: "none" }} href="#">
                    <FontAwesomeIcon
                      icon={faHeart}
                      size="xl"
                      style={{ color: "#FFD43B" }}
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="content1_below_box">
            <div className="content1_below_book_img">
              <img src={Chienluoc} alt="" />
              <button class="content1_below_book_img_hover-button">
                Mua ngay
              </button>
            </div>
            <div className="content1_below_book_describe">
              <strong>Bleach1</strong>
              <div style={{ padding: "4px 0 4px 0" }}>Tite Kubo</div>
              <div style={{ padding: "4px 0 4px 0" }}>
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
              </div>
              <div style={{ padding: "4px 0 8px 0", fontSize: "larger" }}>
                <strong>16.000 VND</strong>
              </div>
              <div>
                <span>
                  <a style={{ textDecoration: "none" }} href="#">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      size="xl"
                      style={{ color: "#FFD43B" }}
                    />
                  </a>
                </span>
                <span style={{ paddingLeft: "10px" }}>
                  <a style={{ textDecoration: "none" }} href="#">
                    <FontAwesomeIcon
                      icon={faHeart}
                      size="xl"
                      style={{ color: "#FFD43B" }}
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="content1_below_box">
            <div className="content1_below_book_img">
              <img src={Nhancach} alt="" />
              <button class="content1_below_book_img_hover-button">
                Mua ngay
              </button>
            </div>
            <div className="content1_below_book_describe">
              <strong>Bleach1</strong>
              <div style={{ padding: "4px 0 4px 0" }}>Tite Kubo</div>
              <div style={{ padding: "4px 0 4px 0" }}>
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
              </div>
              <div style={{ padding: "4px 0 8px 0", fontSize: "larger" }}>
                <strong>16.000 VND</strong>
              </div>
              <div>
                <span>
                  <a style={{ textDecoration: "none" }} href="#">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      size="xl"
                      style={{ color: "#FFD43B" }}
                    />
                  </a>
                </span>
                <span style={{ paddingLeft: "10px" }}>
                  <a style={{ textDecoration: "none" }} href="#">
                    <FontAwesomeIcon
                      icon={faHeart}
                      size="xl"
                      style={{ color: "#FFD43B" }}
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="content1_below_box">
            <div className="content1_below_book_img">
              <img src={Thaotung} alt="" />
              <button class="content1_below_book_img_hover-button">
                Mua ngay
              </button>
            </div>
            <div className="content1_below_book_describe">
              <strong>Bleach1</strong>
              <div style={{ padding: "4px 0 4px 0" }}>Tite Kubo</div>
              <div style={{ padding: "4px 0 4px 0" }}>
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
              </div>
              <div style={{ padding: "4px 0 8px 0", fontSize: "larger" }}>
                <strong>16.000 VND</strong>
              </div>
              <div>
                <span>
                  <a style={{ textDecoration: "none" }} href="#">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      size="xl"
                      style={{ color: "#FFD43B" }}
                    />
                  </a>
                </span>
                <span style={{ paddingLeft: "10px" }}>
                  <a style={{ textDecoration: "none" }} href="#">
                    <FontAwesomeIcon
                      icon={faHeart}
                      size="xl"
                      style={{ color: "#FFD43B" }}
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="content1_below_box">
            <div className="content1_below_book_img">
              <img src={Algorithm} alt="" />
              <button class="content1_below_book_img_hover-button">
                Mua ngay
              </button>
            </div>
            <div className="content1_below_book_describe">
              <strong>Bleach1</strong>
              <div style={{ padding: "4px 0 4px 0" }}>Tite Kubo</div>
              <div style={{ padding: "4px 0 4px 0" }}>
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
                <FontAwesomeIcon
                  icon={faStar}
                  size="2xs"
                  style={{ color: "#FFD43B" }}
                />
              </div>
              <div style={{ padding: "4px 0 8px 0", fontSize: "larger" }}>
                <strong>16.000 VND</strong>
              </div>
              <div>
                <span>
                  <a style={{ textDecoration: "none" }} href="#">
                    <FontAwesomeIcon
                      icon={faCartShopping}
                      size="xl"
                      style={{ color: "#FFD43B" }}
                    />
                  </a>
                </span>
                <span style={{ paddingLeft: "10px" }}>
                  <a style={{ textDecoration: "none" }} href="#">
                    <FontAwesomeIcon
                      icon={faHeart}
                      size="xl"
                      style={{ color: "#FFD43B" }}
                    />
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content1;
