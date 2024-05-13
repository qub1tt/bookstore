import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
class ContentCart extends Component {
  constructor() {
    super();
    this.state = {
      total: 0,
      show: false,
      name: "",
      phone: "",
      address: "",
      notiName: "",
      notiPhone: "",
      notiAddress: "",
      notiDetailAddress: "",
      ispay: false,
      showpaymentfail: false,
    };
  }
  componentDidMount() {
    let total = 0;
    for (let i = 0; i < this.props.cart.length; i++) {
      total +=
        Number(this.props.cart[i].price) * Number(this.props.cart[i].count);
    }
  }
  componentDidUpdate(nextProps) {
    if (nextProps.cart !== this.props.cart) {
      let total = 0;
      for (let i = 0; i < nextProps.cart.length; i++) {
        total +=
          Number(nextProps.cart[i].price) * Number(nextProps.cart[i].count);
      }
      this.setState({ total: total });
    }
    if (nextProps.ispay !== this.props.ispay && nextProps.ispay === true) {
      this.setState({ ispay: true });
    }
    if (nextProps.ispay !== this.props.ispay && nextProps.ispay === false) {
      this.setState({ showpaymentfail: true });
    }
  }
  reset = () => {
    this.setState({
      show: false,
      name: "",
      phone: "",
      address: "",
      notiName: "",
      notiPhone: "",
      notiAddress: "",
      notiDetailAddress: "",
      ispay: false,
      showpaymentfail: false,
    });
  };
  handlePayment = () => {
    if (!this.props.islogin) {
      this.setState({ show: true });
      return;
    } else {
      this.setState({ show: false });
    }
    let check = true;
    if (this.state.name.length < 3) {
      this.setState({
        notiName: "Name invalid",
      });
      check = false;
    } else {
      this.setState({
        notiName: "",
      });
    }
    if (!this.isvaidPhone(this.state.phone)) {
      this.setState({
        notiPhone: "Phone invalid",
      });
      check = false;
    } else {
      this.setState({ notiPhone: "" });
    }

    if (this.state.address === "") {
      this.setState({ notiDetailAddress: "Address invalid" });
      check = false;
    } else {
      this.setState({ notiDetailAddress: "" });
    }
    if (check === false) return;
    this.props.payment(
      this.state.address,
      this.state.phone,
      this.state.name,
      this.state.total
    );
  };
  isvaidPhone = (phone) => {
    if (phone.length < 10 || phone.length > 11) return false;
    for (let i = 0; i < phone.length; i++) {
      if (phone.charAt(i) < "0" || phone.charAt(i) > "9") return false;
    }
    return true;
  };

  render() {
    return (
      <div>
        <section
          id="cart_items"
          className="md:col-span-2 overflow-hidden border border-gray-200 rounded-lg"
        >
          <div>
            <div className="bg-gray-100">
              <table className="min-w-full divide-y divide-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Item
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Description
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Quantity
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Total
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Delete</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.cart.map((element, index) => {
                    return (
                      <tr>
                        <td className="cart_product">
                          <a href="">
                            <img src={element.img} alt="" />
                          </a>
                        </td>
                        <td className="cart_description">
                          <h4>
                            <a href="">{element.name}</a>
                          </h4>
                        </td>
                        <td className="cart_price">
                          <p>{element.price}</p>
                        </td>
                        <td className="cart_quantity">
                          <div className="cart_quantity_button">
                            <span
                              className="cart_quantity_up"
                              onClick={() => {
                                element.count += 1;
                                this.props.updateProductInCart(element);
                              }}
                            >
                              {" "}
                              +{" "}
                            </span>
                            <input
                              className="cart_quantity_input"
                              type="text"
                              name="quantity"
                              value={element.count}
                              autocomplete="off"
                              size="2"
                            />
                            <span
                              className="cart_quantity_down"
                              onClick={() => {
                                if (element.count === 1) {
                                  return;
                                }
                                element.count -= 1;
                                this.props.updateProductInCart(element);
                              }}
                            >
                              {" "}
                              -{" "}
                            </span>
                          </div>
                        </td>
                        <td className="cart_total">
                          <p className="cart_total_price">
                            {new Intl.NumberFormat("de-DE", {
                              currency: "EUR",
                            }).format(element.price * element.count)}
                            <sup>đ</sup>
                          </p>
                        </td>
                        <td className="cart_delete">
                          <a
                            className="cart_quantity_delete"
                            onClick={() =>
                              this.props.deteleProductInCart(element._id)
                            }
                          >
                            <i className="fa fa-times" />
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section
          id="do_action"
          className="rounded-lg  my-5"
        >
              <div>
                <div class="total_area bg-gray-200">
                  <ul className="text-sm my-4 py-4">
                    <li className="flex justify-between mx-4 mb-2">
                      Phí Vận Chuyển
                      <span className="font-medium mx-2">
                        0<sup>đ</sup>{" "}
                      </span>
                    </li>
                    <li className="flex justify-between mx-4">
                      Tổng Tiền{" "}
                      <span className="font-medium mx-2">
                        {" "}
                        {new Intl.NumberFormat("de-DE", {
                          currency: "EUR",
                        }).format(this.state.total)}
                        <sup>đ</sup>
                      </span>
                    </li>
                  </ul>
                  <Modal
                    show={this.state.show}
                    onHide={() => this.setState({ show: false })}
                    container={this}
                    aria-labelledby="contained-modal-title"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title">
                        Notification
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Vui Lòng Đăng Nhập Để Thanh Toán</Modal.Body>
                    <Modal.Footer>
                      <Button onClick={() => this.setState({ show: false })}>
                        <a>Cancel</a>
                      </Button>
                      <Button onClick={this.handleHide}>
                        <Link to="/login">Login</Link>
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </div>
              </div>
              <div className="col-md-12  bg-gray-200 py-4">
                <div className="chose_area mx-4">
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                    <div className="user_option flex-1 mr-4">
                      <label className="block">Name</label>
                      <input
                        type="text"
                        value={this.state.name}
                        onChange={(e) =>
                          this.setState({ name: e.target.value })
                        }
                        className="border border-gray-300 rounded-md p-2 w-full md:w-auto lg:w-96"
                      />
                      <span>{this.state.notiName}</span>
                    </div>
                    <div className="user_option flex-1 mr-4">
                      <label className="block">Phone</label>
                      <input
                        type="text"
                        value={this.state.phone}
                        onChange={(e) =>
                          this.setState({ phone: e.target.value })
                        }
                        className="border border-gray-300 rounded-md p-2 w-full md:w-auto lg:w-96"
                      />
                      <span>{this.state.notiPhone}</span>
                    </div>
                    <div className="user_option flex-1">
                      <label className="block">Address</label>
                      <input
                        type="text"
                        value={this.state.address}
                        onChange={(e) =>
                          this.setState({ address: e.target.value })
                        }
                        className="border border-gray-300 rounded-md p-2 w-full md:w-auto lg:w-96"
                      />
                      <span>{this.state.notiDetailAddress}</span>
                    </div>
                  </div>

                  <Modal
                    show={this.state.ispay}
                    onHide={() => this.setState({ ispay: false })}
                    container={this}
                    aria-labelledby="contained-modal-title"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title">
                        Notification
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      Đặt Hàng Thành Công, Vui Lòng Vào Đơn Hàng Để Xem Chi Tiết
                    </Modal.Body>
                    <Modal.Footer>
                      <Button
                        onClick={() => {
                          this.reset();
                          window.location.reload();
                        }}
                      >
                        <a>OK</a>
                      </Button>
                    </Modal.Footer>
                  </Modal>

                  <Modal
                    show={this.state.showpaymentfail}
                    onHide={() => this.setState({ showpaymentfail: false })}
                    container={this}
                    aria-labelledby="contained-modal-title"
                  >
                    <Modal.Header closeButton>
                      <Modal.Title id="contained-modal-title">
                        Notification
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Đặt Hàng Thất Bại</Modal.Body>
                    <Modal.Footer>
                      <Button
                        onClick={() =>
                          this.setState({ showpaymentfail: false })
                        }
                      >
                        <a>Cancel</a>
                      </Button>
                    </Modal.Footer>
                  </Modal>
                  <div className="cart-option flex justify-between">
                    <button
                      className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mr-2 mt-6 w-48"
                      onClick={() => this.handlePayment()}
                    >
                      Payment
                    </button>
                    <Link className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-6 w-48 flex items-center justify-center" to={"/"}>
                      Continue shopping
                    </Link>
                  </div>
                </div>
              </div>
        </section>
      </div>
    );
  }
}
export default ContentCart;
