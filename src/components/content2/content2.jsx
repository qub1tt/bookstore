import React from "react";
import "./content2.css";
import Algorithm from "./../../assets/khoahoc/algorithm.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faCartShopping,
  faGear,
  faBookOpen,
  faBrain,
  faSchool,
  faBook,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";

const Content2 = () => {
  return (
    <div className="content2">
      <div className="content2_left">
        <div className="content2_left_above">
          <div className="content2_left_above_left">
            <span>
              <strong>Best seller</strong>{" "}
            </span>
          </div>

          <div className="content2_left_above_right">
            <select id="content2_left_above_right_dropdown">
              <option value="date">Trong ngày</option>
              <option value="month">Trong tháng</option>
              <option value="year">Trong năm</option>
            </select>
          </div>
        </div>

        <div className="content2_left_below">
          <div className="content2_left_below_img">
            <a href="">
              <img src={Algorithm} />
            </a>
          </div>

          <div className="content2_left_below_describe">
            <div>
              <strong>Introduction to Algorithms 4th edition</strong>
            </div>
            <div>
              <i>Nhiều tác giả</i>
            </div>
            <div>
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
              <div className="content2_left_below_describe_book">
                <span className="span1">
                  Some books on algorithms are rigorous but incomplete; others
                  cover masses of material but lack rigor. Introduction to
                  Algorithms...
                </span>
                <span className="span2">
                  Some books on algorithms are rigorous but incomplete; others
                  cover masses of material but lack rigor. Introduction to
                  Algorithms uniquely combines rigor and comprehensiveness. It
                  covers a broad range of algorithms in depth, yet makes their
                  design and analysis accessible to all levels of readers, with
                  self-contained chapters and algorithms in pseudocode...
                </span>
              </div>
              <div className="content2_left_below_describe_add_to_cart">
                <a style={{ textDecoration: "none" }} href="#">
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    size="xl"
                    style={{ color: "#FFD43B", margin: "10px 0 0 10px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content2_right">
        <div className="content2_right_above">
          <div className="content2_right_above_left">
            <span>
              <strong>Thể loại</strong>{" "}
            </span>
          </div>
        </div>
        <div className="content2_right_below">
          <div className="content2_right_theloai">
            <FontAwesomeIcon
              icon={faGear}
              size="2xl"
              style={{ color: "#FFD43B" }}
            />
            <span className="content2_right_theloai_title">Khoa Học</span>
            <div className="content2_right_theloai_public_book">
              <p>
                Public book: <a href=""> 123 </a>{" "}
              </p>
            </div>
          </div>

          <div className="content2_right_theloai">
            <FontAwesomeIcon
              icon={faMoneyCheckDollar}
              size="2xl"
              style={{ color: "#FFD43B" }}
            />
            <span className="content2_right_theloai_title">Kinh Tế</span>
            <div className="content2_right_theloai_public_book">
              <p>
                Public book: <a href=""> 123 </a>{" "}
              </p>
            </div>
          </div>

          <div className="content2_right_theloai">
            <FontAwesomeIcon
              icon={faSchool}
              size="xl"
              style={{ color: "#FFD43B" }}
            />
            <span className="content2_right_theloai_title">Sách Giáo Khoa</span>
            <div className="content2_right_theloai_public_book">
              <p>
                Public book: <a href=""> 123 </a>{" "}
              </p>
            </div>
          </div>

          <div className="content2_right_theloai">
            <FontAwesomeIcon
              icon={faBrain}
              size="2xl"
              style={{ color: "#FFD43B" }}
            />
            <span
              className="content2_right_theloai_title"
              style={{ paddingLeft: "24px" }}
            >
              Tâm Lý
            </span>
            <div className="content2_right_theloai_public_book">
              <p>
                Public book: <a href=""> 123 </a>{" "}
              </p>
            </div>
          </div>

          <div className="content2_right_theloai">
            <FontAwesomeIcon
              icon={faBook}
              size="2xl"
              style={{ color: "#FFD43B" }}
            />
            <span className="content2_right_theloai_title">Văn Học</span>
            <div className="content2_right_theloai_public_book">
              <p>
                Public book: <a href=""> 123 </a>{" "}
              </p>
            </div>
          </div>

          <div className="content2_right_theloai">
            <FontAwesomeIcon
              icon={faBookOpen}
              size="2xl"
              style={{ color: "#FFD43B" }}
            />
            <span className="content2_right_theloai_title">Truyện Tranh</span>
            <div className="content2_right_theloai_public_book">
              <p>
                Public book: <a href=""> 123 </a>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content2;
