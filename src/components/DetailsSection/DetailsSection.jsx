import React, { useState, useEffect } from "react";
import storeConfig from "../../config/storage.config";
import "./DetailsSection.css";

function DetailsSection(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notificationComment, setNotificationComment] = useState("");
  const [comment, setComment] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [pagination, setPagination] = useState([]);
  const [showSuccessNotification, setShowSuccessNotification] = useState(false);

  useEffect(() => {
    let tmp = [];
    for (let i = 1; i <= props.totalpage; i++) {
      tmp.push(i);
    }
    setPagination(tmp);
    if (storeConfig.getUser() !== null) {
      setName(storeConfig.getUser().firstName);
      setEmail(storeConfig.getUser().email);
    } else {
      setName("");
      setEmail("");
    }
  }, [props.totalpage]);

  useEffect(() => {
    if (!props.islogin) {
      setName("");
      setEmail("");
    }
  }, [props.islogin]);

  useEffect(() => {
    if (showSuccessNotification) {
      setTimeout(() => {
        setShowSuccessNotification(false);
      }, 2000);
    }
  }, [showSuccessNotification]);

  const renderPagination = () => {
    if (pagination.length === 0) {
      return null;
    } else {
      return (
        <ul className="pagination pagination-custom">
          <li onClick={() => props.backPage()}>
            <a>&laquo;</a>
          </li>
          {pagination.map((element, index) => {
            if (props.page === element) {
              return (
                <li
                  className="active"
                  onClick={() => props.setPage(element)}
                  key={index}
                >
                  <a>{element}</a>
                </li>
              );
            } else {
              return (
                <li onClick={() => props.setPage(element)} key={index}>
                  <a>{element}</a>
                </li>
              );
            }
          })}
          <li onClick={() => props.nextPage()}>
            <a>&raquo;</a>
          </li>
        </ul>
      );
    }
  };

  const submitComment = () => {
    if (name === "") {
      setNotificationComment("Vui lòng đăng nhập trước khi bình luận");
      return;
    } else {
      setNotificationComment("");
    }
    if (comment === "") {
      setNotificationComment("Bình luận không được để trống");
      return;
    } else {
      setNotificationComment("");
    }
    props.submitComment(name, comment, props.id_book);
    setComment("");
  };

  const submitOrder = () => {
    if (quantity <= 0) {
      return;
    } else {
      let product = { ...props.mproductDetail, count: quantity };
      props.addToCart(product);
      setShowSuccessNotification(true);
    }
    setTimeout(() => {
      window.location.reload();
    }, 500);
  };

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => Math.max(prevQuantity - 1, 1));
  };

  return (
    <div className="book_detail_container">
      <div className="book_detail_img_describe">
        <div className="book_detail_img">
          <img src={props.mproductDetail.img} alt="book" />
        </div>
        <div className="book_detail_describe">
          <p className="book_detail_describe_name">
            {props.mproductDetail.name}
          </p>
          <p className="book_detail_describe__">
            <strong>Tác giả: </strong>
            <span>{props.nameAuthor}</span>
          </p>
          <p className="book_detail_describe__">
            <strong>Nhà xuất bản: </strong>
            <span>{props.namePublisher}</span>
          </p>
          <p className="book_detail_describe__">
            <strong>Thể loại: </strong>
            <span>{props.nameCategory}</span>
          </p>
          <p className="book_detail_describe__">
            <strong>Ngày phát hành: </strong>
            <span>
              {new Date(props.mproductDetail.release_date).toDateString(
                "yyyy-MM-dd"
              )}
            </span>
          </p>
          <h3 className="book_detail_describe__">
            <strong>Giá: </strong>
            <span>{props.mproductDetail.price}</span>
          </h3>
          <div className="Modal_number mt-4">
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
          <button
            onClick={() => submitOrder()}
            type="button"
            className="addtocartbtn"
          >
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
      <div className="book_detail_super_describe">
        <strong>Mô tả: </strong>
        <p>{props.mproductDetail.describe}</p>
      </div>
      <div className="book_detail_comment">
        <div>
          <strong>Đánh giá sản phẩm</strong>
        </div>
        <div>
          <div className="client_comment_field">
            {props.comment.map((element, index) => {
              return (
                <p key={index}>
                  <span>{element.name}:</span> {element.comment}
                </p>
              );
            })}
          </div>
          <hr />
          <p>{notificationComment}</p>
          <p>
            <h4>
              <b>Bình Luận</b>
            </h4>
          </p>
          <form action="#">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="comment_field"
            />
          </form>
          <button
            type="button"
            onClick={() => submitComment()}
            className="cmbtn"
          >
            Bình Luận
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

export default DetailsSection;
