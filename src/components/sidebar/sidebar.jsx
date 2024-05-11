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
      isOpen: true,
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
      <div className={`sidebar ${this.state.isOpen ? "open" : ""}`}>
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
                <a href="#" class="sidebar_title">
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
                  Danh mục sản phẩm
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
                    <a href="#" class="sidebar_title">
                      Sách trong nước
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
                    <a href="#" class="sidebar_title">
                      Sách kinh tế
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
                    <a href="#" class="sidebar_title">
                      Sách ngoại ngữ
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
                    <a href="#" class="sidebar_title">
                      Sách văn học
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
                  Admin Dashboard
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
                    <a href="#" class="sidebar_title">
                      Dashboard
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
                    <a href="#" class="sidebar_title">
                      Extrapage
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <span class="sidebar_icon">
                  <FontAwesomeIcon
                    icon={faBook}
                    size="2xl"
                    style={{ color: "#737373" }}
                  />
                </span>
                <a href="#" class="sidebar_title">
                  Sách yêu thích
                </a>
              </li>
              <li>
                <span class="sidebar_icon">
                  <FontAwesomeIcon
                    icon={faBook}
                    size="2xl"
                    style={{ color: "#737373" }}
                  />
                </span>
                <a href="#" class="sidebar_title">
                  Sách PDF
                </a>
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
