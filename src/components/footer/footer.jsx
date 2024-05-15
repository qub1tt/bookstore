import React from "react";
import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import im1 from "../../assets/doitac/jtexpress.jpg"
import im2 from "../../assets/doitac/ninjavan.jpg"
import im3 from "../../assets/doitac/momopay.jpg"
import im4 from "../../assets/doitac/vnpay_logo.jpg"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="sb-footer-section-padding">
            <div className="sb-footer-links">
                <div className="sb-footer-links-div">
                    <h4>DỊCH VỤ : </h4>
                    <a href="/">
                        <p>Điều khoản sử dụng</p>
                    </a>
                    <a href="/">
                        <p>Bảo mật thông tin cá nhân</p>
                    </a>
                    <a href="/">
                        <p>Bảo mật thanh toán</p>
                    </a>
                </div>
                <div className="sb-footer-links-div">
                    <h4>HỖ TRỢ :</h4>
                    <a href="/">
                        <p>Chính sách đổi - trả - hoàn tiền</p>
                    </a>
                    <a href="/">
                        <p>Chính sách bảo hành</p>
                    </a>
                    <a href="/">
                        <p>Chính sách vận chuyển</p>
                    </a>
                    <a href="/">
                        <p>Phương thức thanh toán và xuất hóa đơn</p>
                    </a>
                </div>
                <div className="sb-footer-links-div">
                    <h4>ĐỐI TÁC :</h4>
                    <a href="/">
                        <img src={im1}></img>
                    </a>
                    <a href="/">
                        <img src={im2}></img>
                    </a>
                    <a href="/">
                        <img src={im3}></img>
                    </a>
                    <a href="/">
                        <img src={im4}></img>
                    </a>
                </div>
                <div className="sb-footer-links-div">
                    <h4>CONTACT US: </h4>
                    <div className="socialmedia">
                        <p>
                          <a href="">
                            <FontAwesomeIcon
                              icon={faFacebook}
                              size="xl"
                              style={{ color: "#FFD43B" }}
                            />
                          </a>
                        </p>
                        <p>
                          <a href="">
                            <FontAwesomeIcon
                              icon={faTwitter}
                              size="xl"
                              style={{ color: "#FFD43B" }}
                            />
                          </a>
                        </p>
                        <p>
                          <a href="">
                            <FontAwesomeIcon
                              icon={faEnvelope}
                              size="xl"
                              style={{ color: "#FFD43B" }}
                            />
                          </a>
                        </p>
                        <p>
                          <a href="">
                            <FontAwesomeIcon
                              icon={faPhone}
                              size="xl"
                              style={{ color: "#FFD43B" }}
                            />
                          </a>
                        </p>
                        <p>
                          <a href="">
                            <FontAwesomeIcon
                              icon={faMapLocationDot}
                              size="xl"
                              style={{ color: "#FFD43B" }}
                            />
                          </a>
                        </p>
                    </div>
                </div>
            </div>
            <hr></hr>

                <div className="sb-footer-below">
                    <div className="sb-footer-copyright">
                        <p>@{new Date().getFullYear()} All right reserved</p>
                    </div>
                </div>
        </div>
    </div>
  );
};

export default Footer;
