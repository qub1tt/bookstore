import React, { useState, useEffect } from "react";
import "./Modal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCartPlus,
    faX
} from "@fortawesome/free-solid-svg-icons";

function Modal(props) {
const [quantity, setQuantity] = useState(1);
const [showSuccessNotification, setShowSuccessNotification] = useState(false);

useEffect(() => {
    if (showSuccessNotification) {
    setTimeout(() => {
        setShowSuccessNotification(false);
    }, 1000);
    }
}, [showSuccessNotification]);

const submitOrder = () => {
    if (quantity <= 0) {
    return;
    } else {
    let product = { ...props.mproductDetail, count: quantity };
    props.addToCart(product);
    setShowSuccessNotification(true);
    }
};

const incrementQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
};

const decrementQuantity = () => {
    setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1));
};


return (
    <div className="Modal_container">
        <div className="Close_modal flex justify-end">
            <button className="Modal_exit">
                <FontAwesomeIcon icon={faX} size="2xl" className="mx-3 my-3" />
            </button>
        </div>
        <div className="Modal_content">
            <div className="Modal_img">
                <img src={props.mproductDetail.img} alt="book" />
            </div>
            <div className="BesideImage">
                <div className="Modal_describe">
                    <p className="Modal_describe_name">
                        {props.mproductDetail.name}
                    </p>
                    <p className="Modal_describe__">
                        <strong>Tác giả: </strong>
                        <span>{props.nameAuthor}</span>
                    </p>
                    <h3 className="Modal_describe__">
                        <strong>Giá: </strong>
                        <span  className="Modal_describe_price">{props.mproductDetail.price}</span>
                    </h3>
                </div>
                <div className="BesideImageBelow">
                    <div className="Modal_number">
                        <button
                            className="Modal_quantity-button"
                            onClick={decrementQuantity}
                        >
                            -
                        </button>
                        <input
                            type="number"
                            min="1"
                            readOnly
                            value={quantity}
                            className="Modal_quantity-input"
                        />
                        <button
                            className="Modal_quantity-button"
                            onClick={incrementQuantity}
                        >
                            +
                        </button>
                    </div>
                    <div className="">
                        <button
                            onClick={() => submitOrder()}
                            type="button"
                            className="ModalAddToCart"
                        >
                            <FontAwesomeIcon icon={faCartPlus} size="xl" style={{color: "#ffffff",}} />
                        </button>
                    </div>
                </div>
            </div>
            {showSuccessNotification && (
                <div className="success-notification">
                Sản phẩm đã được thêm vào giỏ hàng!
                </div>
            )}
        </div>
    </div>
);
}

export default Modal;
