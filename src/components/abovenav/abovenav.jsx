import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, Navigate } from "react-router-dom";
import SearchBar from "./Search";
import storeConfig from "../../config/storage.config";
import {
  faBell,
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
      toggle: true,
      isAcc: false,
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

  hoverlogin = () => {
    if (this.props.islogin) {
      return (
        <ul className="sub-menu">
          <li onClick={() => this.handleProfile()}>
            <Link to={"/"}>Hồ Sơ </Link>
          </li>
          <li>
            <Link to="/purchase_history">Đơn Hàng </Link>
          </li>
        </ul>
      );
    }
  };

  render() {
    if (this.state.isAcc) {
      return <Navigate to={`/profile/${this.state.email}`} />;
    }

    return (
      <nav className="abovenav">
        <div className="abovenav_open_close">
          <button onClick={this.state.toggle}>
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
            <a href="#">
              <FontAwesomeIcon
                icon={faBell}
                size="2xl"
                style={{ color: "#737373" }}
              />
            </a>
          </li>
          <li>
            <a href="/cart">
              <FontAwesomeIcon
                icon={faCartShopping}
                size="2xl"
                style={{ color: "#737373" }}
              />
            </a>
          </li>
          <li className="dropdown relative">
            <FontAwesomeIcon
              icon={faCircleUser}
              size="2xl"
              className="text-gray-700 mr-2 cursor-pointer"
            />
            {this.hoverlogin()}
          </li>
        </div>
      </nav>
    );
  }
}

export default Abovenav;
