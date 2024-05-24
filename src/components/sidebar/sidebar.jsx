import React, { Component } from "react";
import "./sidebar.css";
import { Link, Navigate } from "react-router-dom";
import logo from "./../../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faList,
  faBookOpen,
  faBook,
  faChessBoard,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

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
          <div className="main_logo">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>
          </div>
          <div className="sidebar_content">
            <ul className="category">
              <li>
                <span className="sidebar_icon">
                  <FontAwesomeIcon
                    icon={faHouse}
                    size="2xl"
                    style={{ color: "#737373" }}
                  />
                </span>
                <a href="/" className="sidebar_title">
                  Trang chủ
                </a>
              </li>
              <li>
                <span className="sidebar_icon">
                  <FontAwesomeIcon
                    icon={faBookOpen}
                    size="2xl"
                    style={{ color: "#737373" }}
                  />
                </span>
                <a href="/allbook/page/1" className="sidebar_title">
                  Tất cả sách
                </a>
              </li>
              <li>
                <span className="sidebar_icon">
                  <FontAwesomeIcon
                    icon={faList}
                    size="2xl"
                    style={{ color: "#737373" }}
                  />
                </span>
                <a className="sidebar_title">Thể loại</a>
                <ul className="subitems">
                  <li>
                    <span className="subsidebar_icon">
                      <FontAwesomeIcon
                        icon={faBook}
                        size="2xl"
                        style={{ color: "#737373" }}
                      />
                    </span>
                    <Link
                      to="/category/662a796042e68c567e688052"
                      className="sidebar_title"
                    >
                      Tâm lý
                    </Link>
                  </li>
                  <li>
                    <span className="subsidebar_icon">
                      <FontAwesomeIcon
                        icon={faBook}
                        size="2xl"
                        style={{ color: "#737373" }}
                      />
                    </span>
                    <Link
                      to="/category/662a796642e68c567e688053"
                      className="sidebar_title"
                    >
                      Kinh tế
                    </Link>
                  </li>
                  <li>
                    <span className="subsidebar_icon">
                      <FontAwesomeIcon
                        icon={faBook}
                        size="2xl"
                        style={{ color: "#737373" }}
                      />
                    </span>
                    <Link
                      to="/category/662a796a42e68c567e688054"
                      className="sidebar_title"
                    >
                      Văn học
                    </Link>
                  </li>
                  <li>
                    <span className="subsidebar_icon">
                      <FontAwesomeIcon
                        icon={faBook}
                        size="2xl"
                        style={{ color: "#737373" }}
                      />
                    </span>
                    <Link
                      to="/category/662a796d42e68c567e688055"
                      className="sidebar_title"
                    >
                      Truyện tranh
                    </Link>
                  </li>
                  <li>
                    <span className="subsidebar_icon">
                      <FontAwesomeIcon
                        icon={faBook}
                        size="2xl"
                        style={{ color: "#737373" }}
                      />
                    </span>
                    <Link
                      to="/category/662a7a5142e68c567e688057"
                      className="sidebar_title"
                    >
                      Khoa học
                    </Link>
                  </li>
                  <li>
                    <span className="subsidebar_icon">
                      <FontAwesomeIcon
                        icon={faBook}
                        size="2xl"
                        style={{ color: "#737373" }}
                      />
                    </span>
                    <Link
                      to="/category/662a7a5842e68c567e688058"
                      className="sidebar_title"
                    >
                      Sách giáo khoa
                    </Link>
                  </li>
                </ul>
              </li>
              {this.props.islogin && (
                <li>
                  <span className="sidebar_icon">
                    <FontAwesomeIcon
                      icon={faChessBoard}
                      size="2xl"
                      style={{ color: "#737373" }}
                    />
                  </span>
                  <a href="#" className="sidebar_title">
                    User
                  </a>
                  <ul className="subitems">
                    <li>
                      <span className="subsidebar_icon">
                        <FontAwesomeIcon
                          icon={faChessBoard}
                          size="2xl"
                          style={{ color: "#737373" }}
                        />
                      </span>
                      <a
                        href={`/profile/${this.state.email}`}
                        className="sidebar_title"
                      >
                        Hồ sơ
                      </a>
                    </li>
                    <li>
                      <span className="subsidebar_icon">
                        <FontAwesomeIcon
                          icon={faChessBoard}
                          size="2xl"
                          style={{ color: "#737373" }}
                        />
                      </span>
                      <a href="/purchase_history" className="sidebar_title">
                        Đơn hàng
                      </a>
                    </li>
                  </ul>
                </li>
              )}
              <li>
                <span className="sidebar_icon">
                  <FontAwesomeIcon
                    icon={faUser}
                    size="2xl"
                    style={{ color: "#737373" }}
                  />
                </span>
                <a className="sidebar_title">{this.handlelogin()}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
