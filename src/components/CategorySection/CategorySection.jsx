import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "./CategorySection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import SmallBoxDetail from "../SmallBoxDetail/SmallBoxDetail";

export default function CategorySection(props) {
    const { id } = useParams();
    const [books, setBooks] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategoryName, setSelectedCategoryName] = useState("");

    useEffect(() => {
        fetchCategories();
        fetchBooks();
    }, [id]);

    const fetchCategories = () => {
        fetch("http://localhost:8080/category/")
            .then(response => response.json())
            .then(data => {
                setCategories(data.data);
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
            });
    };

    const fetchBooks = () => {
        fetch("http://localhost:8080/book/")
            .then(response => response.json())
            .then(data => {
                setBooks(data.data);
            })
            .catch(error => {
                console.error("Error fetching book data:", error);
            });
    };

    useEffect(() => {
        const category = categories.find(cat => cat._id === id);
        if (category) {
            setSelectedCategoryName(category.name);
        }
    }, [id, categories]);

    return (
        <div className="categorysection">
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
                            <strong className="selectedCategory"> {selectedCategoryName} </strong> 
                        </span>
                    </span>
                </div>
                <div className="categorysection_above_right">
                    <div className="categorysection_dropdown">
                        <select value={id} onChange={(e) => window.location.href = `/category/${e.target.value}`}>
                            {categories.map(category => (
                                <option key={category._id} value={category._id}>{category.name}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            <div className="categorysection_below">
                <div className="categorysection_below_above">
                    {books.map(book => (
                        (id === "" || book.id_category === id) && <SmallBoxDetail key={book._id} bookId={book._id} />
                    ))}
                </div>
            </div>
        </div>
    );
}
