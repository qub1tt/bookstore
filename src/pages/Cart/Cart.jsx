import "./Cart.css";
import Sidebar from "../../components/sidebar/sidebar";
import Abovenav from "../../components/abovenav/abovenav";
import image from "../../assets/khoahoc/c.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
export default function Cart() {
  return (
    <>
      <div className="contain">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="navbar">
          <Abovenav />
        </div>
        <div className="content">
          <div class="article">
            <div class="contentt">
              <div class="left_content">
                <h3 class="left_content--title">Giỏ hàng</h3>

                <div class="cart">
                  <div class="cart_item">
                    <img src={image} alt="..." />
                    <div class="cart_item--detail">
                      <h3 class="cart_item--name">
                        Doraemon - Chú khủng long của Nobita
                      </h3>
                      <h3 class="cart_item--status primary_col">Còn hàng</h3>
                      <h3 class="cart_item--price">
                        10.000 <u>đ</u>
                      </h3>
                    </div>

                    <div class="add_amount">
                      <button class="add input">
                        <span>
                          <FontAwesomeIcon icon={faPlus} size="s" />
                        </span>
                      </button>
                      <input type="text" value="1" />
                      <button class="sub input">
                        <span>
                          <FontAwesomeIcon icon={faMinus} size="s" />
                        </span>
                      </button>
                    </div>

                    <div class="total_price">
                      <h3>
                        10.000 <u>đ</u>
                      </h3>
                    </div>

                    <div class="delete">
                      <button>Xóa</button>
                    </div>
                  </div>

                  <div class="cart_item">
                    <img src={image} alt="..." />
                    <div class="cart_item--detail">
                      <h3 class="cart_item--name">Bảy viên ngọc rồng</h3>
                      <h3 class="cart_item--status primary_col">Còn hàng</h3>
                      <h3 class="cart_item--price">
                        10.000 <u>đ</u>
                      </h3>
                    </div>

                    <div class="add_amount">
                      <button class="add input">
                        <span>
                          <FontAwesomeIcon icon={faPlus} size="s" />
                        </span>
                      </button>
                      <input type="text" value="1" />
                      <button class="sub input">
                        <span>
                          <FontAwesomeIcon icon={faMinus} size="s" />
                        </span>
                      </button>
                    </div>

                    <div class="total_price">
                      <h3>
                        10.000 <u>đ</u>
                      </h3>
                    </div>

                    <div class="delete">
                      <button>Xóa</button>
                    </div>
                  </div>

                  <div class="cart_item">
                    <img src={image} alt="..." />
                    <div class="cart_item--detail">
                      <h3 class="cart_item--name">One punch man</h3>
                      <h3 class="cart_item--status primary_col">Còn hàng</h3>
                      <h3 class="cart_item--price">
                        10.000 <u>đ</u>
                      </h3>
                    </div>

                    <div class="add_amount">
                      <button class="add input">
                        <span>
                          <FontAwesomeIcon icon={faPlus} size="s" />
                        </span>
                      </button>
                      <input type="text" value="1" />
                      <button class="sub input">
                        <span>
                          <FontAwesomeIcon icon={faMinus} size="s" />
                        </span>
                      </button>
                    </div>

                    <div class="total_price">
                      <h3>
                        10.000 <u>đ</u>
                      </h3>
                    </div>

                    <div class="delete">
                      <button>Xóa</button>
                    </div>
                  </div>
                </div>
              </div>

              <div class="right_content">
                <div class="right_content--top">
                  <div class="top">
                    <span>Tùy chọn</span>
                    <div class="discount mid_item">
                      <span>Phiếu giảm giá</span>
                      <a href="">
                        <strong>Áp dụng</strong>
                      </a>
                    </div>
                  </div>

                  <div class="mid">
                    <h3 class="mid_header">Chi tiết</h3>

                    <div class="mid_item">
                      <span class="mid_item--name">Tổng tiền</span>
                      <span class="mid_item--price">100.000đ</span>
                    </div>

                    <div class="mid_item">
                      <span class="mid_item--name">Giảm giá</span>
                      <span class="mid_item--price primary_col">100.000đ</span>
                    </div>

                    <div class="mid_item">
                      <span class="mid_item--name">Thuế VAT</span>
                      <span class="mid_item--price">100.000đ</span>
                    </div>

                    <div class="mid_item">
                      <span class="mid_item--name">Phí vận chuyển</span>
                      <span class="mid_item--price primary_col">Miễn phí</span>
                    </div>
                  </div>

                  <div class="bot">
                    <div class="bot_item mid_item">
                      <span class="bot_item--name">Tổng</span>
                      <span class="bot_item--price">100.000đ</span>
                    </div>

                    <button class="bot_item--pay">Thanh toán</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
