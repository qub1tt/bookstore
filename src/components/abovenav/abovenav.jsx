import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Navigate } from "react-router-dom";
import SearchBar from "./Search";
import storeConfig from "../../config/storage.config";
import {
  faCartShopping,
  faCircleUser,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./abovenav.css";

class Abovenav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "Account",
      isAcc: false,
      dropdownVisible: false,
    };
  }

  componentDidMount() {
    if (storeConfig.getUser() !== null) {
      this.setState({
        email: storeConfig.getUser().email,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.islogin !== this.props.islogin) {
      if (!this.props.islogin) {
        this.setState({
          email: "Account",
        });
      } else {
        this.setState({
          email: storeConfig.getUser().email,
        });
      }
    }
  }

  handleProfile = () => {
    if (this.state.email === "Account") {
      return;
    } else {
      this.setState({ isAcc: true });
    }
  };

  toggleDropdown = (visible) => {
    this.setState({ dropdownVisible: visible });
  };

  render() {
    if (this.state.isAcc) {
      return <Navigate to={`/profile/${this.state.email}`} />;
    }

    return (
      <nav className="abovenav">
        <div className="abovenav_open_close">
          <button onClick={this.props.toggle}>
            <FontAwesomeIcon
              icon={faBars}
              size="2xl"
              style={{ color: "#737373" }}
            />
          </button>
        </div>
        <div className="abovenav_searchbox">
          <SearchBar />
        </div>
        <div className="abovenav_items">
          <li>
            <a href="/cart">
              <FontAwesomeIcon
                icon={faCartShopping}
                size="2xl"
                style={{ color: "#737373" }}
              />
            </a>
          </li>
          <li
            onMouseEnter={() => this.toggleDropdown(true)}
            onMouseLeave={() => this.toggleDropdown(false)}
            className="user-icon-container"
          >
            <a href="#">
              <FontAwesomeIcon
                icon={faCircleUser}
                size="2xl"
                style={{ color: "#737373" }}
              />
            </a>
            {this.state.dropdownVisible && (
              <div className="dropdown-menu">
                <a href="/profile/${this.state.email}">Hồ sơ</a>
                <a href="/purchase_history">Đơn hàng</a>
              </div>
            )}
          </li>
        </div>
      </nav>
    );
  }
}

export default Abovenav;


