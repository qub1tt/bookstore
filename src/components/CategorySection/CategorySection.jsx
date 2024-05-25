import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./CategorySection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SmallboxContainer from "../../containers/smallbox.container";
import {
  faLightbulb,
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import SmallBoxDetail from "../SmallBoxDetail/SmallBoxDetail";

export default function CategorySection(props) {
  const { id } = useParams();
  const [books, setBooks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategoryName, setSelectedCategoryName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const booksPerPage = 12;

  useEffect(() => {
    fetchCategories();
    fetchBooks();
  }, [id]);

  const fetchCategories = () => {
    fetch("http://localhost:8080/category/")
      .then((response) => response.json())
      .then((data) => {
        setCategories(data.data);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

  const fetchBooks = () => {
    fetch("http://localhost:8080/book/")
      .then((response) => response.json())
      .then((data) => {
        setBooks(data.data);
      })
      .catch((error) => {
        console.error("Error fetching book data:", error);
      });
  };

  useEffect(() => {
    const category = categories.find((cat) => cat._id === atob(id));
    if (category) {
      setSelectedCategoryName(category.name);
    }
  }, [id, categories]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filteredBooks = books.filter(
    (book) => id === "" || book.id_category === atob(id)
  );
  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const startIndex = (currentPage - 1) * booksPerPage;
  const endIndex = startIndex + booksPerPage;
  const displayedBooks = filteredBooks.slice(startIndex, endIndex);

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
          <span>
            <FontAwesomeIcon
              icon={faLightbulb}
              size="2xl"
              style={{ color: "#FFD43B" }}
            />
            <span style={{ paddingLeft: "10px" }}>
              <strong>Thể Loại:</strong>
              <strong className="selectedCategory">
                {" "}
                {selectedCategoryName}{" "}
              </strong>
            </span>
          </span>
        </div>
        <div className="categorysection_above_right">
          <div className="categorysection_dropdown">
            <select
              value={id}
              onChange={(e) =>
                (window.location.href = `/category/${e.target.value}`)
              }
            >
              {categories.map((category) => (
                <option key={btoa(category._id)} value={btoa(category._id)}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="content1_below">
        <div className="content1_below_above">
          {displayedBooks.map((book) => (
            <SmallboxContainer key={btoa(book._id)} bookId={btoa(book._id)} />
          ))}
        </div>
      </div>

      <div className="bookpagination">
        {currentPage > 1 && (
          <>
            <button onClick={() => handlePageChange(1)} aria-label="First Page">
              <FontAwesomeIcon icon={faAnglesLeft} />
            </button>
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              aria-label="Previous Page"
            >
              <FontAwesomeIcon icon={faAngleLeft} />
            </button>
          </>
        )}
        {getPagination().map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={currentPage === page ? "active" : ""}
            aria-label={`Page ${page}`}
          >
            {page}
          </button>
        ))}
        {currentPage < totalPages && (
          <>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              aria-label="Next Page"
            >
              <FontAwesomeIcon icon={faAngleRight} />
            </button>
            <button
              onClick={() => handlePageChange(totalPages)}
              aria-label="Last Page"
            >
              <FontAwesomeIcon icon={faAnglesRight} />
            </button>
          </>
        )}
      </div>
    </div>
  );
}
