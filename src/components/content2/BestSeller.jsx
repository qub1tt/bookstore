import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom"; // Import thêm Link từ React Router
import {
    faStar,
    faCartShopping,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";

export default function BestSeller(props) {
    const [bookData, setBookData] = useState(null);
    const [authorName, setAuthorName] = useState(null);
    const [shortDescription, setShortDescription] = useState('');
    const [longDescription, setLongDescription] = useState('');

    const [quantity, setQuantity] = useState(1);

    

    useEffect(() => {
        fetchBookData();
    }, [props.bookId]);

    const fetchBookData = () => {
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
                
                const description = data.data.describe;
                setShortDescription(description.slice(0, 130));
                setLongDescription(description.slice(0, 350));
            })
            .catch(error => console.error('Error fetching book data:', error));
    };

    if (!bookData || !authorName) {
        return <div>Loading...</div>;
    }

    return (
        <div className="content2_left_below">
            <div className="content2_left_below_img">
                <Link to={`/book/${props.bookId}`}>
                    <img src={bookData.img} alt="" />
                </Link>
            </div>

            <div className="content2_left_below_describe">
                <div>
                    <strong>{bookData.name}</strong>
                </div>
                <div>
                    <i>{authorName}</i>
                </div>
                <div>
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
                <div className="content2_left_below_describe_book">
                    <span className="span1">{shortDescription}</span>
                    <span className="span2">{longDescription}</span>
                </div>
                <div className="content2_left_below_describe_add_to_cart">
                    <button style={{ textDecoration: "none" }} href="#">
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            size="xl"
                            style={{ color: "#FFD43B", margin: "10px 0 0 10px" }}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
