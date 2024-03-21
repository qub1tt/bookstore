import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faCartShopping,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import "./abovenav.css";

const Abovenav = () => {
  return (
    <nav className="abovenav">
      <div class="abovenav_trangchu">
        <a href="">
          <h1>Trang chủ</h1>
        </a>
      </div>
      <div class="abovenav_searchbox">
        <input type="text" placeholder="Search..." />
        <span className="abovenav_search-icon">
          <a href="#">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              style={{ color: "#737373" }}
            />
          </a>
        </span>
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
          <a href="#">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="2xl"
              style={{ color: "#737373" }}
            />
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon
              icon={faCircleUser}
              size="2xl"
              style={{ color: "#737373" }}
            />
          </a>
        </li>
      </div>
    </nav>
  );
};

export default Abovenav;
