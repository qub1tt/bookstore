import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ModalContainer from "../../containers/modal.container";
import Loading from "../loading/Loading";

export default function BookSlide(props) {
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

    const handleCartClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    if (!bookData ) {
        return <Loading />
    }

    return (
        <div className="content0_scroll_item">
            <div className="content0_feature_image">
                <img src={bookData.img} alt={bookData.name} title={bookData.name} />
            </div>
            <div className="content0_feature_content">
                <h3>{bookData.name}</h3>
                <div className="content0_price">
                {new Intl.NumberFormat("de-DE", {
                              currency: "EUR",
                            }).format(bookData.price)}đ <span>{new Intl.NumberFormat("de-DE", {
                                currency: "EUR",
                              }).format(bookData.price * 1.3)}đ</span>
                </div>
                <div className="content0_content_btn">
                    <Link to={`/book/${props.bookId}`} className="content0_btn">
                        Detail book
                    </Link>
                    <a className="content0_btn" onClick={handleCartClick}>
                        Add to cart
                    </a>
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
