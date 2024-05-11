import React, { Component } from "react";
import storeConfig from "../../config/storage.config";
import { Modal, Button } from "react-bootstrap";
class DetailsSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      notificationComment: "",
      comment: "",
      quantity: 1,
      noti: false,
      show: false,
      pagination: [],
    };
  }
  componentDidMount() {
    let tmp = [];
    for (let i = 1; i <= this.props.totalpage; i++) {
      tmp.push(i);
    }
    this.setState({ pagination: tmp });
    if (storeConfig.getUser() !== null) {
      this.setState({
        name: storeConfig.getUser().firstName,
        email: storeConfig.getUser().email,
      });
    } else {
      this.setState({
        name: "",
        email: "",
      });
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.totalpage !== prevProps.totalpage) {
      let tmp = [];
      for (let i = 1; i <= this.props.totalpage; i++) {
        tmp.push(i);
      }
      this.setState({ pagination: tmp });
    }
    if (this.props.islogin === false && prevProps.islogin === true) {
      this.setState({
        name: "",
        email: "",
      });
    }
  }

  renderPagination() {
    if (this.state.pagination.length === 0) {
      return null;
    } else {
      return (
        <ul className="pagination pagination-custom">
          <li onClick={() => this.props.backPage()}>
            <a>&laquo;</a>
          </li>
          {this.state.pagination.map((element, index) => {
            if (this.props.page === element) {
              return (
                <li
                  className="active"
                  onClick={() => this.props.setPage(element)}
                >
                  <a>{element}</a>
                </li>
              );
            } else {
              return (
                <li onClick={() => this.props.setPage(element)}>
                  <a>{element}</a>
                </li>
              );
            }
          })}
          <li onClick={() => this.props.nextPage()}>
            <a>&raquo;</a>
          </li>
        </ul>
      );
    }
  }
  handlename = (name) => {
    if (this.state.name === "") {
      this.setState({ name: name });
    }
  };
  submitComment = () => {
    if (this.state.name === "") {
      this.setState({ notificationComment: "Name must not be blank " });
      return;
    } else {
      this.setState({ notificationComment: "" });
    }
    if (this.state.comment === "") {
      this.setState({ notificationComment: "Comment must not be blank " });
      return;
    } else {
      this.setState({ notificationComment: "" });
    }
    this.props.submitComment(
      this.state.name,
      this.state.email,
      this.state.comment,
      this.props.id_book
    );
    this.setState({ comment: "" });
  };
  submitOrder = () => {
    if (this.state.quantity < 0) {
      this.setState({ noti: false });
      return;
    } else {
      this.setState({ noti: true });
    }
    let product = this.props.mproductDetail;
    product.count = this.state.quantity;
    this.props.addToCart(product);
  };
  render() {
    let xhtml = "";
    console.log(this.state.noti);
    if (this.state.noti) {
      xhtml = (
        <div className="aler-box">
          <div
            className="btn-close "
            onClick={() => this.setState({ noti: false })}
          >
            X
          </div>
          <div className="aler-title">
            <h3 className="title">Thông Tin Đơn Hàng</h3>
          </div>
          <div className="aler-body">Đặt Hàng thành công</div>
          <div className="alert-footer">
            <button
              className="roduct-variation"
              onClick={() => this.setState({ noti: false })}
            >
              Cancel
            </button>
          </div>
        </div>
      );
    }
    return (
      <section className="pt-12 pb-32">
        <div className="flex items-center gap-12 ">
          <div className="w-3/4	">
            <img
              className=" border border-solid"
              src={this.props.mproductDetail.img}
              alt="book"
              style={{ border: "1px solid black" }}
            />
          </div>

          <div className="w-1/2">
            <h2 className="text-4xl">{this.props.mproductDetail.name}</h2>
            <p className="py-4 px-0">
              <strong>Tác giả: </strong>
              {this.props.nameAuthor}
            </p>
            <p className="pb-4 px-0">
              <strong>Nhà xuất bản: </strong> {this.props.namePublisher}
            </p>
            <p className="pb-4 px-0">
              <strong>Thể loại: </strong> {this.props.nameCategory}
            </p>

            <p className="pb-4 px-0">
              <strong>Ngày phát hành: </strong>{" "}
              {new Date(this.props.mproductDetail.release_date).toDateString(
                "yyyy-MM-dd"
              )}
            </p>

            <strong>Mô tả: </strong>

            <p className="py-4 px-0 leading-7 h-500 overflow-auto mb-10">
              {this.props.mproductDetail.describe}
            </p>

            <h3 className="text-2xl	pt-4 text-primary-color-bright">
              <strong>Giá: </strong>
              {this.props.mproductDetail.price}
            </h3>
            <div className="count-product">
              <p className="count">Số Lượng:</p>
              <input
                type="number"
                min="0"
                onChange={(e) => this.setState({ quantity: e.target.value })}
                value={this.state.quantity}
              />
            </div>
            <button
              onClick={() => this.submitOrder()}
              type="button"
              className="inline-block py-4 px-8 bg-primary-color-bright text-white no-underline mt-8 shadow-md transition duration-200 ease-in border-none font-chivo-mono text-base"
            >
              <i className="fa fa-shopping-cart" />
              Add to cart
            </button>

            <Modal
              show={this.state.show}
              onHide={() => this.setState({ show: false })}
              container={this}
              aria-labelledby="contained-modal-title"
            >
              <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title">
                  showfication
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>Đặt Hàng Thành Công</Modal.Body>
              <Modal.Footer>
                <Button onClick={() => this.setState({ show: false })}>
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
                    {this.props.comment.map((element, index) => {
                      return (
                        <p>
                          <span>{element.name}:</span> {element.comment}
                        </p>
                      );
                    })}
                    <div className="Pagination-flex">
                      {this.renderPagination()}
                    </div>
                  </div>
                  <hr />
                  <p style={{ color: "#5BBCEC" }}>
                    {this.state.notificationComment}
                  </p>
                  <p>
                    <h4>
                      <b>Bình Luận</b>
                    </h4>
                  </p>

                  <form action="#">
                    <textarea
                      value={this.state.comment}
                      onChange={(e) =>
                        this.setState({ comment: e.target.value })
                      }
                    />
                    <button
                      type="button"
                      className="btn btn-default pull-right"
                      onClick={() => this.submitComment()}
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
}

export default DetailsSection;
