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

const AllBooklowhigh = (props) => {
  const [bookIds, setBookIds] = useState([]);
  const { pageNumber } = useParams(); // Use useParams to get the page number from the URL
  const currentPage = pageNumber ? parseInt(pageNumber) : 1; // Convert the page number to an integer
  const booksPerPage = 12;

  useEffect(() => {
    fetch(`"${process.env.REACT_APP_API}/book"`)
      .then((response) => response.json())
      .then((data) => {
        // Sort the books by price in ascending order (from low to high)
        const sortedBooks = data.data.sort((a, b) => a.price - b.price);
        const ids = sortedBooks.map((book) => btoa(book._id));
        setBookIds(ids);
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
      });
  }, []);

  useEffect(() => {
    const url = `/allbook/page/priceLowToHigh/${currentPage}`;
    window.history.pushState({ path: url }, "", url);
  }, [currentPage]);

  const handlePageChange = (pageNumber) => {
    const url = `/allbook/page/priceLowToHigh/${pageNumber}`;
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
        <div className="categorysection_above_right">
          <select
            defaultValue="/allbook/page/priceLowToHigh/1"
            onChange={(e) => (window.location.href = e.target.value)}
          >
            <option value="/allbook/page/1">Mặc định</option>
            <option value="/allbook/page/az/1">A - Z</option>
            <option value="/allbook/page/za/1">Z - A</option>
            <option value="/allbook/page/priceHighToLow/1">
              Giá cao - thấp
            </option>
            <option value="/allbook/page/priceLowToHigh/1">
              Giá thấp - cao
            </option>
          </select>
        </div>
      </div>
      <div className="content1_below mt-5">
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

export default AllBooklowhigh;
