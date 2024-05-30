import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import ModalContainer from "../../containers/modal.container"
import Loading from "../loading/Loading";

export default function SmallBoxDetail(props) {
    const [bookData, setBookData] = useState(null);
    const [authorName, setAuthorName] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

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

    const handleCartClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    if (!bookData || !authorName) {
        return <Loading />
    }

    return (
        <div className="content1_below_box">
            <div className="content1_below_book_img">
                <img src={bookData.img} alt="" />
                <button className="content1_below_book_img_hover-button" onClick={handleCartClick}>
                    Mua ngay
                </button>
            </div>
            <div className="content1_below_book_describe">
                <strong>
                    <Link to={`/book/${props.bookId}`}>{truncateBookName(bookData.name, 25)}</Link>
                </strong>
                <div style={{ padding: "4px 0 4px 0" }}>{authorName}</div>
                <div style={{ padding: "4px 0 4px 0" }}>
                    {/* Star ratings */}
                </div>
                <div style={{ padding: "4px 0 8px 0" }}>
                    <strong>{new Intl.NumberFormat("de-DE", {
                              currency: "EUR",
                            }).format(bookData.price)}đ</strong>
                </div>
                <div>
                    <span>
                        <button style={{ textDecoration: "none" }} onClick={handleCartClick}>
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                size="xl"
                                style={{ color: "#FFD43B" }}
                            />
                        </button>
                    </span>
                </div>
            </div>

            {isModalOpen && (
                <ModalContainer
                    bookId={props.bookId}
                    closeModal={closeModal}
                />
            )}
        </div>
    );
}
