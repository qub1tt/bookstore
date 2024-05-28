import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Navigate } from "react-router-dom";
import SearchBar from "./Search";
import storeConfig from "../../config/storage.config";
import axios from "axios"; // Import axios

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
      cartCount: 0,
    };
  }

  componentDidMount() {
    this.updateCartCount(); // Fetch cart count when component mounts
    const user = storeConfig.getUser();
    if (user !== null) {
      this.setState({
        email: user.email,
      });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.islogin !== this.props.islogin) {
      this.updateUserEmail();
    }
  }

  updateUserEmail = () => {
    if (this.props.islogin) {
      const user = storeConfig.getUser();
      if (user !== null) {
        this.setState({
          email: user.email,
        });
      }
    } else {
      this.setState({
        email: "Account",
      });
    }
  };

  updateCartCount = () => {
    const user = storeConfig.getUser();
    if (user !== null) {
      // If user is logged in, fetch cart count from API
      axios.get(`http://localhost:8080/cart/${user.id}`)
        .then(response => {
          const cartCount = response.data.data.products.length;
          this.setState({ cartCount });
        })
        .catch(error => {
          console.error("Error fetching cart data:", error);
        });
    } else {
      // If user is not logged in, fetch cart count from storage config
      const cartCount = storeConfig.getCartCount();
      this.setState({ cartCount });
    }
  };

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

  const { email, dropdownVisible, cartCount } = this.state;
  const isLoggedIn = email !== "Account";

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
          <a href="/cart" className="cart-icon">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="2xl"
              style={{ color: "#737373" }}
            />
            {cartCount > 0 && (
              <span className="cart-badge">{cartCount}</span>
            )}
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
          {dropdownVisible && (
            <div className="dropdown-menu text-center">
              {isLoggedIn ? (
                <>
                  <a href={`/profile/${btoa(email)}`}>Hồ sơ</a>
                  <a href="/purchase_history">Đơn hàng</a>
                </>
              ) : (
                <a href="/login">Login</a>
              )}
            </div>
          )}
        </li>
      </div>
    </nav>
  );
}
}

export default Abovenav;
