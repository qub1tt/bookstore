import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import storeConfig from "../../config/storage.config";
import {
    faStar,
    faCartShopping,
    faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function SmallBoxDetail2(props) {
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

return (
    <div className="content1_below_box">
        <div className="content1_below_book_img">
            <img src={props.mproductDetail.img} alt="" />
            <button className="content1_below_book_img_hover-button">
                Mua ngay
            </button>
        </div>
        <div className="content1_below_book_describe">
            <strong>
                {/* Wrap book name in Link */}
                <Link to={`/book/${props.bookId}`}>{truncateBookName(props.mproductDetail.name, 25)}</Link>
            </strong>
            <div style={{ padding: "4px 0 4px 0" }}>{props.nameAuthor}</div>
            <div style={{ padding: "4px 0 4px 0" }}>
                {/* Star ratings */}
            </div>
            <div style={{ padding: "4px 0 8px 0" }}>
                <strong>{props.mproductDetail.price}đ</strong>
            </div>
            <div>
                <span>
                    <button style={{ textDecoration: "none" }} onClick={() => submitOrder()}>
                        <FontAwesomeIcon
                            icon={faCartShopping}
                            size="xl"
                            style={{ color: "#FFD43B" }}
                        />
                    </button>
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
        {showSuccessNotification && (
        <div className="success-notification">
            Sản phẩm đã được thêm vào giỏ hàng!
        </div>
        )}
    </div>
);
}

export default SmallBoxDetail2;
