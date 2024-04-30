import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  faCartShopping,
  faCircleUser,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import "./abovenav.css";

const Abovenav = ({ toggle }) => {
  
  return (
    <nav className="abovenav">
      <div class="abovenav_open_close">
        <button onClick={toggle}><FontAwesomeIcon
              icon={faBars}
              size="2xl"
              style={{ color: "#737373" }}
            /></button>
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
          <a href="/cart">
            <FontAwesomeIcon
              icon={faCartShopping}
              size="2xl"
              style={{ color: "#737373" }}
            />
          </a>
        </li>
        <li>
          <a href="/profile">
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
