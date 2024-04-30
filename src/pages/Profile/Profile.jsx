import React, {useState, useEffect} from "react";
import Abovenav from "../../components/abovenav/abovenav";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import "./Profile.css";
export default function Profile() {
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
              <button class="text-white p-4 rounded bg-blue-500 shadow-md flex items-center justify-center w-full">
                Thông tin tài khoản
              </button>
              <button class="p-4 rounded bg-white text-black shadow-md flex items-center justify-center w-full">
                Quản lý đơn hàng
              </button>
            </div>
          </div>
        </div>

        <div class="information">
          <div class="info-header">
            Thông tin tài khoản
            <hr />
          </div>
          <div class="info-body">
            <div class="info-content">
              <div class="info-left">
                <span class="info-title">Thông tin cá nhân</span>
                <div class="account-info">
                  <form>
                    <div class="form-info">
                      <div class="form-avatar">
                        <div class="avatar">
                          <div>
                            <div class="avatar-view">
                              <img
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/account/avatar.png"
                                alt="avatar"
                                class="default"
                              />
                              <div class="edit">
                                <img
                                  src="https://frontend.tikicdn.com/_desktop-next/static/img/account/edit.png"
                                  class="edit-img"
                                  alt
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="form-name">
                        <div class="form-control">
                          <label class="input-label">Họ và Tên</label>
                          <div>
                            <div class="style-input">
                              <input
                                class="input"
                                type="search"
                                name="fullName"
                                maxlength="128"
                                placeholder="Thêm họ tên"
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-control">
                          <label class="input-label">Nickname</label>
                          <div>
                            <div class="style-input">
                              <input
                                class="input"
                                type="search"
                                name="userName"
                                maxlength="128"
                                placeholder="Thêm nickname"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="form-control">
                      <label class="input-label">Ngày sinh</label>
                      <div class="style-birthday">
                        <select name="day">
                          <option value="0">Ngày</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                          <option value="13">13</option>
                          <option value="14">14</option>
                          <option value="15">15</option>
                          <option value="16">16</option>
                          <option value="17">17</option>
                          <option value="18">18</option>
                          <option value="19">19</option>
                          <option value="20">20</option>
                          <option value="21">21</option>
                          <option value="22">22</option>
                          <option value="23">23</option>
                          <option value="24">24</option>
                          <option value="25">25</option>
                          <option value="26">26</option>
                          <option value="27">27</option>
                          <option value="28">28</option>
                          <option value="29">29</option>
                          <option value="30">30</option>
                          <option value="31">31</option>
                        </select>
                        <select name="month">
                          <option value="0">Tháng</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                          <option value="9">9</option>
                          <option value="10">10</option>
                          <option value="11">11</option>
                          <option value="12">12</option>
                        </select>
                        <select name="year">
                          <option value="0">Năm</option>
                          <option value="2024">2024</option>
                          <option value="2023">2023</option>
                          <option value="2022">2022</option>
                          <option value="2021">2021</option>
                          <option value="2020">2020</option>
                          <option value="2019">2019</option>
                          <option value="2018">2018</option>
                          <option value="2017">2017</option>
                          <option value="2016">2016</option>
                          <option value="2015">2015</option>
                          <option value="2014">2014</option>
                          <option value="2013">2013</option>
                          <option value="2012">2012</option>
                          <option value="2011">2011</option>
                          <option value="2010">2010</option>
                          <option value="2009">2009</option>
                          <option value="2008">2008</option>
                          <option value="2007">2007</option>
                          <option value="2006">2006</option>
                          <option value="2005">2005</option>
                          <option value="2004">2004</option>
                          <option value="2003">2003</option>
                          <option value="2002">2002</option>
                          <option value="2001">2001</option>
                          <option value="2000">2000</option>
                          <option value="1999">1999</option>
                          <option value="1998">1998</option>
                          <option value="1997">1997</option>
                          <option value="1996">1996</option>
                          <option value="1995">1995</option>
                          <option value="1994">1994</option>
                          <option value="1993">1993</option>
                          <option value="1992">1992</option>
                          <option value="1991">1991</option>
                          <option value="1990">1990</option>
                          <option value="1989">1989</option>
                          <option value="1988">1988</option>
                          <option value="1987">1987</option>
                          <option value="1986">1986</option>
                          <option value="1985">1985</option>
                          <option value="1984">1984</option>
                          <option value="1983">1983</option>
                          <option value="1982">1982</option>
                          <option value="1981">1981</option>
                          <option value="1980">1980</option>
                          <option value="1979">1979</option>
                          <option value="1978">1978</option>
                          <option value="1977">1977</option>
                          <option value="1976">1976</option>
                          <option value="1975">1975</option>
                          <option value="1974">1974</option>
                          <option value="1973">1973</option>
                          <option value="1972">1972</option>
                          <option value="1971">1971</option>
                          <option value="1970">1970</option>
                          <option value="1969">1969</option>
                          <option value="1968">1968</option>
                          <option value="1967">1967</option>
                          <option value="1966">1966</option>
                          <option value="1965">1965</option>
                          <option value="1964">1964</option>
                          <option value="1963">1963</option>
                          <option value="1962">1962</option>
                          <option value="1961">1961</option>
                          <option value="1960">1960</option>
                          <option value="1959">1959</option>
                          <option value="1958">1958</option>
                          <option value="1957">1957</option>
                          <option value="1956">1956</option>
                          <option value="1955">1955</option>
                          <option value="1954">1954</option>
                          <option value="1953">1953</option>
                          <option value="1952">1952</option>
                          <option value="1951">1951</option>
                          <option value="1950">1950</option>
                          <option value="1949">1949</option>
                          <option value="1948">1948</option>
                          <option value="1947">1947</option>
                          <option value="1946">1946</option>
                          <option value="1945">1945</option>
                          <option value="1944">1944</option>
                          <option value="1943">1943</option>
                          <option value="1942">1942</option>
                          <option value="1941">1941</option>
                          <option value="1940">1940</option>
                          <option value="1939">1939</option>
                          <option value="1938">1938</option>
                          <option value="1937">1937</option>
                          <option value="1936">1936</option>
                          <option value="1935">1935</option>
                          <option value="1934">1934</option>
                          <option value="1933">1933</option>
                          <option value="1932">1932</option>
                          <option value="1931">1931</option>
                          <option value="1930">1930</option>
                          <option value="1929">1929</option>
                          <option value="1928">1928</option>
                          <option value="1927">1927</option>
                          <option value="1926">1926</option>
                          <option value="1925">1925</option>
                          <option value="1924">1924</option>
                          <option value="1923">1923</option>
                          <option value="1922">1922</option>
                          <option value="1921">1921</option>
                          <option value="1920">1920</option>
                          <option value="1919">1919</option>
                          <option value="1918">1918</option>
                          <option value="1917">1917</option>
                          <option value="1916">1916</option>
                          <option value="1915">1915</option>
                          <option value="1914">1914</option>
                          <option value="1913">1913</option>
                          <option value="1912">1912</option>
                          <option value="1911">1911</option>
                          <option value="1910">1910</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-control">
                      <label class="input-label">Giới tính</label>
                      <label class="style-radio">
                        <input
                          type="radio"
                          name="gender"
                          value="male"
                          checked="checked"
                        />
                        <span class="label">Nam</span>
                      </label>
                      <label class="style-radio">
                        <input type="radio" name="gender" value="female" />
                        <span class="label">Nữ</span>
                      </label>
                      <label class="style-radio">
                        <input type="radio" name="gender" value="other" />
                        <span class="label">Khác</span>
                      </label>
                    </div>
                    <div class="form-control">
                      <label class="input-label">Quốc tịch</label>
                      <div>
                        <div class="style-input">
                          <select name="nationality">
                            <option value="Quốc tịch">Quốc tịch</option>
                            <option value="Việt Nam">Việt Nam</option>
                            <option value="Thái Lan">Thái Lan</option>
                            <option value="Hàn Quốc">Hàn Quốc</option>
                            <option value="Đức">Đức</option>
                            <option value="Pháp">Pháp</option>
                            <option value="Mỹ">Mỹ</option>
                            <option value="Anh">Anh</option>
                            <option value="Tây Ban Nha">Tây Ban Nha</option>
                            <option value="Bỉ">Bỉ</option>
                            <option value="Ý">Ý</option>
                            <option value="Nhật Bản">Nhật Bản</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Nam Phi">Nam Phi</option>
                          </select>
                        </div>
                      </div>
                    </div>
                    <div class="form-control">
                      <label class="input-label"></label>
                      <button type="submit" class="style-btn-submit">
                        Lưu thay đổi
                      </button>
                    </div>
                  </form>
                </div>
              </div>
              <div class="info-vertical"></div>
              <div class="info-right">
                <span class="info-title">Thông tin liên hệ</span>
                <div class="style-list-item">
                  <div class="list-item">
                    <div class="infomation">
                      <img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/account/phone.png"
                        class="icon"
                        alt
                      />
                      <div class="detail">
                        <span>Số điện thoại</span>
                        <span>0915786243</span>
                      </div>
                    </div>
                    <div class="status">
                      <span></span>
                      <button class="butuon">Cập nhật</button>
                    </div>
                  </div>
                  <div class="list-item">
                    <div class="infomation">
                      <img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/account/email.png"
                        class="icon"
                        alt
                      />
                      <div class="detail">
                        <span>Địa chỉ Email</span>
                        <span>user@gmail.com</span>
                      </div>
                    </div>
                    <div class="status">
                      <span></span>
                      <button class="butuon">Cập nhật</button>
                    </div>
                  </div>
                </div>
                <span class="info-tilte">Bảo mật</span>
                <div class="style-list-item">
                  <div class="list-item">
                    <div>
                      <img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/account/lock.png"
                        class="icon"
                        alt
                      />
                      <span>Đổi mật khẩu</span>
                    </div>
                    <div class="status">
                      <span></span>
                      <button class="button">Cập nhật</button>
                    </div>
                  </div>
                  <div class="list-item">
                    <div>
                      <img
                        src="https://salt.tikicdn.com/ts/upload/99/50/d7/cc0504daa05199e1fb99cd9a89e60fa5.jpg"
                        class="icon"
                        alt
                      />
                      <span>Thiết lập mã PIN</span>
                    </div>
                    <div class="status">
                      <span></span>
                      <button class="button">Thiết lập</button>
                    </div>
                  </div>
                </div>
                <span class="info-tilte">Liên kết mạng xã hội</span>
                <div class="style-list-item">
                  <div class="list-item">
                    <div>
                      <img
                        src="	https://frontend.tikicdn.com/_desktop-next/static/img/account/facebook.png"
                        class="icon"
                      />
                      <span>Facebook</span>
                    </div>
                    <div class="status">
                      <span></span>
                      <button class="button">Liên kết</button>
                    </div>
                  </div>
                  <div class="list-item">
                    <div>
                      <img
                        src="https://frontend.tikicdn.com/_desktop-next/static/img/account/google.png"
                        class="icon"
                      />
                      <span>Google</span>
                    </div>
                    <div class="status">
                      <span></span>
                      <button class="button">Liên kết</button>
                    </div>
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
