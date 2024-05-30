import React, { Component } from "react";
import "./sidebar.css";
import storeConfig from "../../config/storage.config";
import { Link, Navigate } from "react-router-dom";
import logo1 from "./../../assets/logo.png";
import logo from "./../../assets/logo/logo3.jpg";
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
      email: null,
    };
  }
  componentDidMount() {
    const user = storeConfig.getUser();
    if (user !== null) {
      this.setState({
        email: user.email,
      });
    }
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
                      to="/category/NjYyYTc5NjA0MmU2OGM1NjdlNjg4MDUy"
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
                      to="/category/NjYyYTc5NjY0MmU2OGM1NjdlNjg4MDUz"
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
                      to="/category/NjYyYTc5NmE0MmU2OGM1NjdlNjg4MDU0"
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
                      to="/category/NjYyYTc5NmQ0MmU2OGM1NjdlNjg4MDU1"
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
                      to="/category/NjYyYTdhNTE0MmU2OGM1NjdlNjg4MDU3"
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
                      to="/category/NjYyYTdhNTg0MmU2OGM1NjdlNjg4MDU4"
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
                        href={`/profile/${btoa(this.state.email)}`}
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
