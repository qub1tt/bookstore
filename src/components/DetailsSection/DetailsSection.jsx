import React, { useState, useEffect } from "react";
import storeConfig from "../../config/storage.config";
import { Modal, Button } from "react-bootstrap";

function DetailsSection(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [notificationComment, setNotificationComment] = useState("");
  const [comment, setComment] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [noti, setNoti] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [pagination, setPagination] = useState([]);

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
      setNotificationComment("Name must not be blank ");
      return;
    } else {
      setNotificationComment("");
    }
    if (comment === "") {
      setNotificationComment("Comment must not be blank ");
      return;
    } else {
      setNotificationComment("");
    }
    props.submitComment(name, comment, props.id_book);
    setComment("");
  };

  const submitOrder = () => {
    if (quantity <= 0) {
      setNoti(false);
      return;
    } else {
      setNoti(true);
    }
    let product = { ...props.mproductDetail, count: quantity };
    props.addToCart(product);
  };

  let xhtml = noti ? (
    <div className="aler-box">
      <div className="btn-close" onClick={() => setNoti(false)}>
        X
      </div>
      <div className="aler-title">
        <h3 className="title">Thông Tin Đơn Hàng</h3>
      </div>
      <div className="aler-body">Đặt Hàng thành công</div>
      <div className="alert-footer">
        <button className="roduct-variation" onClick={() => setNoti(false)}>
          Cancel
        </button>
      </div>
    </div>
  ) : null;

  return (
    <section className="pt-12 pb-32">
      <div className="flex items-center gap-12">
        <div className="w-3/4">
          <img
            className="border border-solid"
            src={props.mproductDetail.img}
            alt="book"
            style={{ border: "1px solid black" }}
          />
        </div>

        <div className="w-1/2">
          <h2 className="text-4xl">{props.mproductDetail.name}</h2>
          <p className="py-4 px-0">
            <strong>Tác giả: </strong>
            {props.nameAuthor}
          </p>
          <p className="pb-4 px-0">
            <strong>Nhà xuất bản: </strong> {props.namePublisher}
          </p>
          <p className="pb-4 px-0">
            <strong>Thể loại: </strong> {props.nameCategory}
          </p>

          <p className="pb-4 px-0">
            <strong>Ngày phát hành: </strong>{" "}
            {new Date(props.mproductDetail.release_date).toDateString(
              "yyyy-MM-dd"
            )}
          </p>

          <strong>Mô tả: </strong>

          <p className="py-4 px-0 leading-7 h-500 overflow-auto mb-10">
            {props.mproductDetail.describe}
          </p>

          <h3 className="text-2xl	pt-4 text-primary-color-bright">
            <strong>Giá: </strong>
            {props.mproductDetail.price}
          </h3>
          <div className="count-product">
            <p className="count">Số Lượng:</p>
            <input
              type="number"
              min="0"
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
            />
          </div>
          <button
            onClick={() => submitOrder()}
            type="button"
            className="inline-block py-4 px-8 bg-primary-color-bright text-white no-underline mt-8 shadow-md transition duration-200 ease-in border-none font-chivo-mono text-base"
          >
            <i className="fa fa-shopping-cart" />
            Add to cart
          </button>

          <Modal
            show={showModal}
            onHide={() => setShowModal(false)}
            container={this}
            aria-labelledby="contained-modal-title"
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title">showfication</Modal.Title>
            </Modal.Header>
            <Modal.Body>Đặt Hàng Thành Công</Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setShowModal(false)}>
                <a>Cancel</a>
              </Button>
            </Modal.Footer>
          </Modal>

          {xhtml}

          <div className="col-sm-12 review-product">
            <div>
              <h3>Review Sách</h3>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane fade active in" id="reviews">
              <div className="col-sm-12">
                <div className="content-conment">
                  {props.comment.map((element, index) => {
                    return (
                      <p key={index}>
                        <span>{element.name}:</span> {element.comment}
                      </p>
                    );
                  })}
                  <div className="Pagination-flex">{renderPagination()}</div>
                </div>
                <hr />
                <p style={{ color: "#5BBCEC" }}>{notificationComment}</p>
                <p>
                  <h4>
                    <b>Bình Luận</b>
                  </h4>
                </p>

                <form action="#">
                  <textarea
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <button
                    type="button"
                    className="btn btn-default pull-right"
                    onClick={() => submitComment()}
                  >
                    Bình Luận
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default DetailsSection;
