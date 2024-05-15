import React, { Component } from "react";
import "./sidebar.css";
import { Link } from "react-router-dom";
import logo from "./../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faList,
  faBook,
  faChessBoard,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Navigate } from "react-router-dom";
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
    };
  }
  handlelogin = () => {
    if (this.props.islogin) {
      return (
        <button
          onClick={() => {
            window.location.reload();
            this.props.logout();
            this.setState({ isLoggedIn: true });
          }}
        >
          Logout
        </button>
      );
    } else {
      return <Link to="/login">Login</Link>;
    }
  };
  render() {
    if (this.state.isLoggedIn) {
      return <Navigate to="/" />;
    }
    return (
      <div className={`sidebar ${this.props.isOpen ? "open" : ""}`}>
        <div className="sidebar-content">
          <div class="main_logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="sidebar_content">
            <ul className="category">
              <li>
                <span class="sidebar_icon">
                  <FontAwesomeIcon
                    icon={faHouse}
                    size="2xl"
                    style={{ color: "#737373" }}
                  />
                </span>
                <a href="/" class="sidebar_title">
                  Trang chủ
                </a>
              </li>
              <li>
                <span class="sidebar_icon">
                  <FontAwesomeIcon
                    icon={faList}
                    size="2xl"
                    style={{ color: "#737373" }}
                  />
                </span>
                <a href="#" class="sidebar_title">
                  Thể loại
                </a>
                <ul class="subitems">
                  <li>
                    <span class="subsidebar_icon">
                      <FontAwesomeIcon
                        icon={faBook}
                        size="2xl"
                        style={{ color: "#737373" }}
                      />
                    </span>
                    <a
                      href="/category/662a796042e68c567e688052"
                      class="sidebar_title"
                    >
                      Tâm lý
                    </a>
                  </li>
                  <li>
                    <span class="subsidebar_icon">
                      <FontAwesomeIcon
                        icon={faBook}
                        size="2xl"
                        style={{ color: "#737373" }}
                      />
                    </span>
                    <a
                      href="/category/662a796642e68c567e688053"
                      class="sidebar_title"
                    >
                      Kinh tế
                    </a>
                  </li>
                  <li>
                    <span class="subsidebar_icon">
                      <FontAwesomeIcon
                        icon={faBook}
                        size="2xl"
                        style={{ color: "#737373" }}
                      />
                    </span>
                    <a
                      href="/category/662a796a42e68c567e688054"
                      class="sidebar_title"
                    >
                      Văn học
                    </a>
                  </li>
                  <li>
                    <span class="subsidebar_icon">
                      <FontAwesomeIcon
                        icon={faBook}
                        size="2xl"
                        style={{ color: "#737373" }}
                      />
                    </span>
                    <a
                      href="/category/662a796d42e68c567e688055"
                      class="sidebar_title"
                    >
                      Truyện tranh
                    </a>
                  </li>
                  <li>
                    <span class="subsidebar_icon">
                      <FontAwesomeIcon
                        icon={faBook}
                        size="2xl"
                        style={{ color: "#737373" }}
                      />
                    </span>
                    <a
                      href="/category/662a7a5142e68c567e688057"
                      class="sidebar_title"
                    >
                      Khoa học
                    </a>
                  </li>
                  <li>
                    <span class="subsidebar_icon">
                      <FontAwesomeIcon
                        icon={faBook}
                        size="2xl"
                        style={{ color: "#737373" }}
                      />
                    </span>
                    <a
                      href="/category/662a7a5842e68c567e688058"
                      class="sidebar_title"
                    >
                      Sách giáo khoa
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <span class="sidebar_icon">
                  <FontAwesomeIcon
                    icon={faChessBoard}
                    size="2xl"
                    style={{ color: "#737373" }}
                  />
                </span>
                <a href="#" class="sidebar_title">
                  Admin
                </a>
                <ul class="subitems">
                  <li>
                    <span class="subsidebar_icon">
                      <FontAwesomeIcon
                        icon={faChessBoard}
                        size="2xl"
                        style={{ color: "#737373" }}
                      />
                    </span>
                    <a
                      href="/profile/${this.state.email}"
                      class="sidebar_title"
                    >
                      Hồ sơ
                    </a>
                  </li>
                  <li>
                    <span class="subsidebar_icon">
                      <FontAwesomeIcon
                        icon={faChessBoard}
                        size="2xl"
                        style={{ color: "#737373" }}
                      />
                    </span>
                    <a href="/purchase_history" class="sidebar_title">
                      Đơn hàng
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <span class="sidebar_icon">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="2xl"
                    style={{ color: "#737373" }}
                  />
                </span>
                <a class="sidebar_title">{this.handlelogin()}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
