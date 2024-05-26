import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./allbook.css";
import SmallBoxDetail from "../SmallBoxDetail/SmallBoxDetail";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";

const AllBook = (props) => {
  const [bookIds, setBookIds] = useState([]);
  const { pageNumber } = useParams(); // Use useParams to get the page number from the URL
  const currentPage = pageNumber ? parseInt(pageNumber) : 1; // Convert the page number to an integer
  const booksPerPage = 12;

  useEffect(() => {
    fetch("http://localhost:8080/book")
      .then((response) => response.json())
      .then((data) => {
        const ids = data.data.map((book) => btoa(book._id));
        setBookIds(ids);
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
      });
  }, []);

  useEffect(() => {
    const url = `/allbook/page/${currentPage}`;
    window.history.pushState({ path: url }, "", url);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    const url = `/allbook/page/${pageNumber}`;
    window.history.pushState({ path: url }, "", url);
    window.location.reload();
  };

  const totalPages = Math.ceil(bookIds.length / booksPerPage);
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const displayedBooks = bookIds.slice(startIndex, endIndex);

  const getPagination = () => {
    const pagination = [];
    const maxPagesToShow = 5;

    let startPage = Math.max(currentPage - Math.floor(maxPagesToShow / 2), 1);
    let endPage = startPage + maxPagesToShow - 1;

    if (endPage > totalPages) {
      endPage = totalPages;
      startPage = Math.max(endPage - maxPagesToShow + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pagination.push(i);
    }

    return pagination;
  };

  return (
    <div className="content1">
      <div className="categorysection_above">
        <div className="categorysection_above_left">
          <strong>Tất cả sách:</strong>
        </div>
        <div className="categorysection_above_right"></div>
      </div>
      <div className="content1_below">
        <div className="content1_below_above">
          {displayedBooks.map((bookId, index) => (
            <SmallBoxDetail key={index} bookId={bookId} />
          ))}
        </div>
      </div>
      <div className="bookpagination">
        {currentPage > 1 && (
          <>
            <button onClick={() => handlePageChange(1)}>
              <FontAwesomeIcon icon={faAnglesLeft} />
            </button>
            <button onClick={() => handlePageChange(currentPage - 1)}>
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
          </>
        )}
        {getPagination().map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? "active" : ""}
          >
            {page}
          </button>
        ))}
        {currentPage < totalPages && (
          <>
            <button onClick={() => handlePageChange(currentPage + 1)}>
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <button onClick={() => handlePageChange(totalPages)}>
              <FontAwesomeIcon icon={faAnglesRight} />
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default AllBook;
