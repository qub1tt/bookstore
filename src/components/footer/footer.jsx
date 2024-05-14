import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer_below_container">
          <div className="footer_below_content">
            <h2>DỊCH VỤ : </h2>
            <ul>
              <li>
                <a href="#">Điều khoản sử dụng</a>
              </li>
              <li>
                <a href="#">Chính sách bảo mật thông tin cá nhân</a>
              </li>
              <li>
                <a href="#">Chính sách bảo mật thanh toán</a>
              </li>
            </ul>
          </div>
          <div className="footer_below_content">
            <h2>HỖ TRỢ :</h2>
            <ul>
              <li>
                <a href="#">Chính sách đổi - trả - hoàn tiền</a>
              </li>
              <li>
                <a href="#">Chính sách bảo hành - bồi hoàn</a>
              </li>
              <li>
                <a href="#">Chính sách vận chuyển</a>
              </li>
              <li>
                <a href="#">Phương thức thanh toán và xuất hóa đơn</a>
              </li>
            </ul>
          </div>
          <div className="foot_below_content2">
            <h2 id="footer_contact_with_us">contact with us</h2>
            <ul className="footer_above_icon">
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    size="2xl"
                    style={{ color: "#FFD43B" }}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faFacebook}
                    size="2xl"
                    style={{ color: "#FFD43B" }}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    size="2xl"
                    style={{ color: "#FFD43B" }}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faPhone}
                    size="2xl"
                    style={{ color: "#FFD43B" }}
                  />
                </a>
              </li>
              <li>
                <a href="">
                  <FontAwesomeIcon
                    icon={faMapLocationDot}
                    size="2xl"
                    style={{ color: "#FFD43B" }}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      
    </div>
  );
};

export default Footer;
