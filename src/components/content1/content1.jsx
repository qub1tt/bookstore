import React, { useState, useEffect } from "react";
import "./content1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import SmallBoxDetail from "../SmallBoxDetail/SmallBoxDetail";
import { Link } from "react-router-dom";

export default function Content1(props) {
  const [bookIds, setBookIds] = useState([]);
  const [displayedBooks, setDisplayedBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/book")
      .then((response) => response.json())
      .then((data) => {
        const ids = data.data.map((book) => btoa(book._id));
        setBookIds(ids);
        setDisplayedBooks(ids.slice(14, 20));
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
      });
  }, []);

  return (
    <div className="content1">
      <div className="content1_above">
        <div className="content1_above_left">
          <span>
            <FontAwesomeIcon
              icon={faLightbulb}
              size="2xl"
              style={{ color: "#FFD43B" }}
            />
            <span style={{ paddingLeft: "10px" }}>
              <strong>Gợi ý:</strong>
            </span>
          </span>
        </div>
        <div className="content1_above_right">
          <div class="content1_xemthem">
          <Link to={'/allbook/page/1'} className="content1_xemthem_bt">
              Xem thêm
              </Link>
          </div>
        </div>
      </div>

      <div className="content1_below">
        <div className="content1_below_above">
          {displayedBooks.map((bookId, index) => (
            <SmallBoxDetail key={index} bookId={bookId} />
          ))}
        </div>
      </div>
    </div>
  );
}
