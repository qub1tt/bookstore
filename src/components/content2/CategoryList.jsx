import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faBookOpen,
  faBrain,
  faSchool,
  faBook,
  faMoneyCheckDollar,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export default function Category(props) {
  const [categories, setCategories] = useState([]);
  const [categoryCounts, setCategoryCounts] = useState({});

  useEffect(() => {
    fetch(`"${process.env.REACT_APP_API}/category/"`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          setCategories(data.data);
        }
      })
      .catch((error) => console.error("Error fetching categories:", error));
  }, []);

  useEffect(() => {
    fetch(`"${process.env.REACT_APP_API}/book"`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.data) {
          const counts = {};

          // Đếm số sách cho mỗi danh mục
          data.data.forEach((book) => {
            if (counts[book.id_category]) {
              counts[book.id_category]++;
            } else {
              counts[book.id_category] = 1;
            }
          });

          setCategoryCounts(counts);
        }
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="content2_right_below">
      {categories.map((category) => (
        <div className="content2_right_theloai" key={btoa(category._id)}>
          {getCategoryIcon(category.name)}
          <span className="content2_right_theloai_title">
            <Link to={`/category/${btoa(category._id)}`}>{category.name}</Link>
          </span>
          <div className="content2_right_theloai_public_book">
            <p>
              Public book: <a href="">{categoryCounts[category._id] || 0}</a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

function getCategoryIcon(categoryName) {
  switch (categoryName) {
    case "Khoa học":
      return (
        <FontAwesomeIcon
          icon={faGear}
          size="2xl"
          style={{ color: "#FFD43B" }}
        />
      );
    case "Kinh tế":
      return (
        <FontAwesomeIcon
          icon={faMoneyCheckDollar}
          size="2xl"
          style={{ color: "#FFD43B" }}
        />
      );
    case "Sách giáo khoa":
      return (
        <FontAwesomeIcon
          icon={faSchool}
          size="xl"
          style={{ color: "#FFD43B" }}
        />
      );
    case "Tâm lý":
      return (
        <FontAwesomeIcon
          icon={faBrain}
          size="2xl"
          style={{ color: "#FFD43B" }}
        />
      );
    case "Văn học":
      return (
        <FontAwesomeIcon
          icon={faBook}
          size="2xl"
          style={{ color: "#FFD43B" }}
        />
      );
    case "Truyện tranh":
      return (
        <FontAwesomeIcon
          icon={faBookOpen}
          size="2xl"
          style={{ color: "#FFD43B" }}
        />
      );
    default:
      return null;
  }
}
