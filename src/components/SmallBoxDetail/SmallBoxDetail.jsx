import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faStar,
    faCartShopping,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function SmallBoxDetail(props) {
    const [bookData, setBookData] = useState(null);
    const [authorName, setAuthorName] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:8080/book/${props.bookId}`)
            .then(response => response.json())
            .then(data => {
                setBookData(data.data);
                // Lấy id_author từ dữ liệu sách
                const authorId = data.data.id_author;
                // Gọi API để lấy thông tin tác giả
                fetch(`http://localhost:8080/author/`)
                    .then(response => response.json())
                    .then(authorData => {
                        // Tìm tên tác giả dựa trên id_author
                        const author = authorData.data.find(author => author._id === authorId);
                        // Nếu tìm thấy tác giả, lưu tên vào state
                        if (author) {
                            setAuthorName(author.name);
                        }
                    })
                    .catch(error => console.error('Error fetching author data:', error));
            })
            .catch(error => console.error('Error fetching book data:', error));
    }, [props.bookId]);

    if (!bookData || !authorName) {
        return <div>Loading...</div>;
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
                <strong>{bookData.name}</strong>
                <div style={{ padding: "4px 0 4px 0" }}>{authorName}</div>
                <div style={{ padding: "4px 0 4px 0" }}>
                    <FontAwesomeIcon
                        icon={faStar}
                        size="2xs"
                        style={{ color: "#FFD43B" }}
                    />
                    <FontAwesomeIcon
                        icon={faStar}
                        size="2xs"
                        style={{ color: "#FFD43B" }}
                    />
                    <FontAwesomeIcon
                        icon={faStar}
                        size="2xs"
                        style={{ color: "#FFD43B" }}
                    />
                    <FontAwesomeIcon
                        icon={faStar}
                        size="2xs"
                        style={{ color: "#FFD43B" }}
                    />
                    <FontAwesomeIcon
                        icon={faStar}
                        size="2xs"
                        style={{ color: "#FFD43B" }}
                    />
                </div>
                <div style={{ padding: "4px 0 8px 0" }}>
                    <strong>{bookData.price}đ</strong>
                </div>
                <div>
                    <span>
                        <a style={{ textDecoration: "none" }} href="#">
                            <FontAwesomeIcon
                                icon={faCartShopping}
                                size="xl"
                                style={{ color: "#FFD43B" }}
                            />
                        </a>
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
