import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faCartShopping,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; // Import Link
import Modal from "../Modal/Modal";

export default function SmallBoxDetail(props) {
    const [bookData, setBookData] = useState(null);
    const [authorName, setAuthorName] = useState(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    useEffect(() => {
        fetch(`http://localhost:8080/book/${props.bookId}`)
            .then(response => response.json())
            .then(data => {
                setBookData(data.data);
                const authorId = data.data.id_author;
                fetch(`http://localhost:8080/author/`)
                    .then(response => response.json())
                    .then(authorData => {
                        const author = authorData.data.find(author => author._id === authorId);
                        if (author) {
                            setAuthorName(author.name);
                        }
                    })
                    .catch(error => console.error('Error fetching author data:', error));
            })
            .catch(error => console.error('Error fetching book data:', error));
    }, [props.bookId]);

    const truncateBookName = (name, maxLength) => {
        if (name.length > maxLength) {
            const words = name.split(' ');
            let truncatedName = '';
            let length = 0;
            for (const word of words) {
                if (length + word.length <= maxLength) {
                    truncatedName += word + ' ';
                    length += word.length;
                } else {
                    break;
                }
            }
            return truncatedName.trim() + '...';
        }
        return name;
    };

    if (!bookData || !authorName) {
        return <div className="flex justify-center items-center">Loading...</div>;
    }

    return (
        <div className="content1_below_box">
            <div className="content1_below_book_img">
                <img src={bookData.img} alt="" />
                <button className="content1_below_book_img_hover-button">
                    Mua ngay
                </button>
            </div>
            <div className="content1_below_book_describe">
                <strong>
                    {/* Wrap book name in Link */}
                    <Link to={`/book/${props.bookId}`}>{truncateBookName(bookData.name, 25)}</Link>
                </strong>
                <div style={{ padding: "4px 0 4px 0" }}>{authorName}</div>
                <div style={{ padding: "4px 0 4px 0" }}>
                    {/* Star ratings */}
                </div>
                <div style={{ padding: "4px 0 8px 0" }}>
                    <strong>{bookData.price}đ</strong>
                </div>
                <div>
                    <span>
                        <button style={{ textDecoration: "none" }} onClick={openModal}>
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                size="xl"
                                style={{ color: "#FFD43B" }}
                            />
                        </button>
                        {isModalOpen && (
                            <Modal 
                                mproductDetail={props.mproductDetail}
                                id_book={props.id_book}
                                addToCart={(product) => props.addToCart(product)}
                                nameAuthor={props.nameAuthor}
                                closeModal={() => setIsModalOpen(false)}
                            />
                        )}
                    </span>
                    
                    <span style={{ paddingLeft: "10px" }}>
                        <a style={{ textDecoration: "none" }} href="#">
                            <FontAwesomeIcon
                                icon={faHeart}
                                size="xl"
                                style={{ color: "#FFD43B" }}
                            />
                        </a>
                    </span>
                </div>
            </div>
        </div>
    );
}
