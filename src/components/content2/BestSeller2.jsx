import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function BestSeller(props) {
    const [bookData, setBookData] = useState(null);
    const [authorName, setAuthorName] = useState(null);
    const [showSuccessNotification, setShowSuccessNotification] = useState(false);

    useEffect(() => {
        if (showSuccessNotification) {
            setTimeout(() => {
                setShowSuccessNotification(false);
            }, 2000);
        }
    }, [showSuccessNotification]);

    const submitOrder = () => {
        let product = { ...props.mproductDetail, count: 1 };
        props.addToCart(product);
        setShowSuccessNotification(true);
    };

    return (
        <div className="content2_left_below">
            <div className="content2_left_below_img">
                <Link to={`/book/${props.bookId}`}>
                    <img src={props.mproductDetail.img} alt="" />
                </Link>
            </div>

            <div className="content2_left_below_describe">
                <div>
                    <strong>{props.mproductDetail.name}</strong>
                </div>
                <div>
                    <i>{props.nameAuthor}</i>
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
                    {/* Render mproductDetail.describe từ props */}
                    <span className="span1">{props.mproductDetail.describe.slice(0, 130)}</span>
                    <span className="span2">{props.mproductDetail.describe.slice(0, 350)}</span>
                </div>
                <div className="content2_left_below_describe_add_to_cart">
                    <button style={{ textDecoration: "none" }} onClick={() => submitOrder()}>
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            size="xl"
                            style={{ color: "#FFD43B", margin: "10px 0 0 10px" }}
                        />
                    </button>
                </div>
            </div>
            {showSuccessNotification && (
                <div className="success-notification">
                    Sản phẩm đã được thêm vào giỏ hàng!
                </div>
            )}
        </div>
    );
}
