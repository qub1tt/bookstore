import React, {useState, useEffect} from "react";
import Abovenav from "../../components/abovenav/abovenav";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import "./Order.css";

export default function Order() {
  const [isOpen, setIsOpen] = useState(window.innerWidth > 768);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsOpen(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="contain">
      <div className="sidebar">
        <Sidebar isOpen={isOpen} toggle={toggleSidebar}/>
      </div>
      <div className="navbar">
        <Abovenav toggle={toggleSidebar} />
      </div>
      <div className="content">
        <div class="dir-card">
          <div>
            <div class="grid grid-cols-2 gap-5">
              <button class="text-black p-4 rounded  shadow-md flex items-center justify-center w-full">
                Thông tin tài khoản
              </button>
              <button class="p-4 rounded bg-blue-500 text-white shadow-md flex items-center justify-center w-full">
                Quản lý đơn hàng
              </button>
            </div>
          </div>
        </div>

        <div>
          <div class="info-header">
            Đơn hàng của tôi
            <hr />
          </div>
          <div class="info-body">
            <div class="info-content">
              <div class="style-tab">
                <div class="tab active">Tất cả đơn</div>
                <div class="tab">Chờ thanh toán</div>
                <div class="tab">Đang xử lý</div>
                <div class="tab">Đang vận chuyển</div>
                <div class="tab">Đã giao</div>
                <div class="tab">Đã hủy</div>
              </div>
            </div>
            <div class="style-input">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                color="#808089"
                class="icon-left"
                height="1em"
                xmlns="https://www.w3.org/2000/svg"
                styles="color: rgb(128, 128, 137)"
              >
                <path d="M 15.5 14 h -0.79 l -0.28 -0.27 C 15.41 12.59 16 11.11 16 9.5 C 16 5.91 13.09 3 9.5 3 S 3 5.91 3 9.5 S 5.91 16 9.5 16 c 1.61 0 3.09 -0.59 4.23 -1.57 l 0.27 0.28 v 0.79 l 5 4.99 L 20.49 19 l -4.99 -5 Z m -6 0 C 7.01 14 5 11.99 5 9.5 S 7.01 5 9.5 5 S 14 7.01 14 9.5 S 11.99 14 9.5 14 Z"></path>
              </svg>
              <input
                type="search"
                placeholder="Tìm đơn hàng theo Mã đơn hàng, Nhà bán hoặc Tên sản phẩm"
                class="input with-icon-left"
              />
              <div class="search-right">Tìm đơn hàng</div>
            </div>
            <div class="list-order">
              <div class="style-order">
                <div class="style-order-header">
                  <span class="main-status">
                    <i class="fa-solid fa-truck-fast"></i>
                    Giao hàng thành công
                  </span>
                </div>
                <div class="style-order-info">
                  <div>
                    <div class="product">
                      <div class="detail">
                        <div class="product-img">
                          <img src="bookjpg/bleach1.jpg" alt="product" />
                          <span class="quantity">x1</span>
                        </div>
                        <div class="product-info">
                          <p class="product-name">Tên sách 1</p>
                          <div class="store">
                            <span>
                              <i class="fa-solid fa-store"></i>
                              Store....
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="price">
                        <span>29.000 đ</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="style-order-footer">
                  <div class="total-money">
                    <div class="money_title">Tổng tiền</div>
                    <div class="total">39.000 đ</div>
                  </div>
                  <div class="button-group">
                    <div>Mua lại</div>
                    <div>Xem chi tiết</div>
                  </div>
                </div>
              </div>
              <div class="style-order">
                <div class="style-order-header">
                  <span class="main-status">
                    <i class="fa-solid fa-spinner"></i>
                    Đang xử lý
                  </span>
                </div>
                <div class="style-order-info">
                  <div>
                    <div class="product">
                      <div class="detail">
                        <div class="product-img">
                          <img src="bookjpg/bleach2.jpg" alt="product" />
                          <span class="quantity">x1</span>
                        </div>
                        <div class="product-info">
                          <p class="product-name">Tên sách 2</p>
                          <div class="store">
                            <span>
                              <i class="fa-solid fa-store"></i>
                              Store....
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="price">
                        <span>129.000 đ</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="style-order-footer">
                  <div class="total-money">
                    <div class="money_title">Tổng tiền</div>
                    <div class="total">139.000 đ</div>
                  </div>
                  <div class="button-group">
                    <div>Xem chi tiết</div>
                  </div>
                </div>
              </div>
              <div class="style-order">
                <div class="style-order-header">
                  <span class="main-status">
                    <i class="fa-solid fa-truck-fast"></i>
                    Giao hàng thành công
                  </span>
                </div>
                <div class="style-order-info">
                  <div>
                    <div class="product">
                      <div class="detail">
                        <div class="product-img">
                          <img src="bookjpg/dragon-ball-1.jpg" alt="product" />
                          <span class="quantity">x1</span>
                        </div>
                        <div class="product-info">
                          <p class="product-name">Tên sách 3</p>
                          <div class="store">
                            <span>
                              <i class="fa-solid fa-store"></i>
                              Store....
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="price">
                        <span>69.000 đ</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="style-order-footer">
                  <div class="total-money">
                    <div class="money_title">Tổng tiền</div>
                    <div class="total">79.000 đ</div>
                  </div>
                  <div class="button-group">
                    <div>Mua lại</div>
                    <div>Xem chi tiết</div>
                  </div>
                </div>
              </div>
              <div class="style-order">
                <div class="style-order-header">
                  <span class="main-status">
                    <i class="fa-solid fa-ban"></i>
                    Đã hủy
                  </span>
                </div>
                <div class="style-order-info">
                  <div>
                    <div class="product">
                      <div class="detail">
                        <div class="product-img">
                          <img src="bookjpg/dora.webp" alt="product" />
                          <span class="quantity">x1</span>
                        </div>
                        <div class="product-info">
                          <p class="product-name">Tên sách 4</p>
                          <div class="store">
                            <span>
                              <i class="fa-solid fa-store"></i>
                              Store....
                            </span>
                          </div>
                        </div>
                      </div>
                      <div class="price">
                        <span>49.000 đ</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="style-order-footer">
                  <div class="total-money">
                    <div class="money_title">Tổng tiền</div>
                    <div class="total">59.000 đ</div>
                  </div>
                  <div class="button-group">
                    <div>Xem chi tiết</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}
