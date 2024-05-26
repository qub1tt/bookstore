import React, { useState, useEffect } from "react";
import "./content1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import modalContainer from "../../containers/modal.container";
import SmallBoxDetail from "../SmallBoxDetail/SmallBoxDetail";

export default function Content1(props) {
  const [bookIds, setBookIds] = useState([]);
  const [displayedBooks, setDisplayedBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/book")
      .then((response) => response.json())
      .then((data) => {
        const ids = data.data.map((book) => btoa(book._id));
        setBookIds(ids);
        // Ban đầu, hiển thị 6 cuốn sách ngẫu nhiên
        setDisplayedBooks(shuffleArray(ids).slice(0, 6));
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
      });
  }, []);

  // Hàm trộn mảng ngẫu nhiên
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Hàm xử lý khi nhấn vào nút "Xem thêm"
  const handleLoadMore = () => {
    // Trộn lại danh sách và hiển thị 6 cuốn sách mới
    setDisplayedBooks(shuffleArray(bookIds).slice(0, 6));
  };

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
            <button onClick={handleLoadMore} className="content1_xemthem_bt">
              Xem thêm
            </button>
          </div>
        </div>
      </div>

      <div className="content1_below">
        <div className="content1_below_above">
        {displayedBooks.map((bookId, index) => (
            <SmallBoxDetail key={index} bookId={bookId}/>
          ))}
        </div>
      </div>
    </div>
  );
}
