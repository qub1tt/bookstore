import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import "./cartDetail.css";
import { PayPalButton } from "react-paypal-button-v2";
import * as PaymentService from "../../API/payment.action";

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
      showSuccessNotification: false,
      notification: "",
      sdkReady: false,
    };
  }

  componentDidMount() {
    let total = 0;
    for (let i = 0; i < this.props.cart.length; i++) {
      total +=
        Number(this.props.cart[i].price) * Number(this.props.cart[i].count);
    }
    this.setState({ total });

    if (!window.paypal) {
      this.addPaypalScript();
    } else {
      this.setState({ sdkReady: true });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.cart !== this.props.cart) {
      let total = 0;
      for (let i = 0; i < this.props.cart.length; i++) {
        total +=
          Number(this.props.cart[i].price) * Number(this.props.cart[i].count);
      }
      this.setState({ total });
    }

    if (prevProps.ispay !== this.props.ispay && this.props.ispay === true) {
      this.setState({ ispay: true, showpaymentfail: false });
    }

    if (prevProps.ispay !== this.props.ispay && this.props.ispay === false) {
      this.setState({ ispay: false, showpaymentfail: true });
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

  addPaypalScript = async () => {
    const { data } = await PaymentService.getConfig();
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = `https://www.paypal.com/sdk/js?client-id=${data}`;
    script.async = true;
    script.onload = () => {
      this.setState({ sdkReady: true });
    };
    document.body.appendChild(script);
  };

  handlePayment = () => {
    let check = true;
    if (this.state.name.length < 3) {
      this.setState({ notiName: "Name invalid" });
      check = false;
    } else {
      this.setState({ notiName: "" });
    }
    if (!this.isvaidPhone(this.state.phone)) {
      this.setState({ notiPhone: "Phone invalid" });
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
    return check;
  };

  truncateWords = (text, wordLimit) => {
    const words = text.split(" ");
    if (words.length <= wordLimit) {
      return text;
    }
    return words.slice(0, wordLimit).join(" ") + "...";
  };


  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
      notiName: name === 'name' && value.length < 3 ? "Name invalid" : "",
      notiPhone: name === 'phone' && !this.isValidPhone(value) ? "Phone invalid" : "",
      notiDetailAddress: name === 'address' && value === "" ? "Address invalid" : ""
    });
  };
  
  isValidPhone = (phone) => {
    if (phone.length < 10 || phone.length > 11) return false;
    for (let i = 0; i < phone.length; i++) {
      if (phone.charAt(i) < "0" || phone.charAt(i) > "9") return false;
    }
    return true;
  };
  

  renderSuccessNotification = () => {
    if (!this.state.showSuccessNotification && !this.state.notification) {
      return null;
    }
    return (
      <div className="success-notification">
        {this.state.showSuccessNotification
          ? "Order Successfully!"
          : this.state.notification}
      </div>
    );
  };

  render() {
    if (this.props.cart.length === 0) {
      return (
        <div className="text-center mt-8">
          <p className="pb-72">Không có sản phẩm trong giỏ hàng.</p>
        </div>
      );
    }
    const isFormFilled =
      this.state.name.length >= 3 &&
      this.isvaidPhone(this.state.phone) &&
      this.state.address !== "";
    return (
      <div>
        {this.renderSuccessNotification()}
        <section
          id="cart_items"
          className="md:col-span-2 overflow-hidden border border-gray-200 rounded-lg"
        >
          <div>
            <div className="bg-gray-100">
            <table className="min-w-full divide-y divide-gray-200">
              <thead>
                <tr className="cart_title bg-gray-50">
                  <th
                    scope="col"
                    className="text-xs font-medium text-gray-500 uppercase tracking-wider w-24 md:w-28 lg:w-28"
                  >
                    Item
                  </th>
                  <th
                    scope="col"
                    className="py-2 text-xs font-medium text-gray-500 uppercase tracking-wider w-24 md:w-40 lg:w-80"
                    style={{ width: "200px" }}
                  >
                    Description
                  </th>
                  <th
                    scope="col"
                    className="text-xs font-medium text-gray-500 uppercase tracking-wider w-8 md:w-16 lg:w-16"
                  >
                    Price
                  </th>
                  <th
                    scope="col"
                    className="px-2 text-xs font-medium text-gray-500 uppercase tracking-wider w-8 md:w-16 lg:w-16"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="text-xs font-medium text-gray-500 uppercase tracking-wider w-8 md:w-16 lg:w-16"
                  >
                    Total
                  </th>
                  <th scope="col" className="relative w-10 md:w-16 lg:w-16">
                    <span className="sr-only ">Delete</span>
                  </th>
                </tr>
              </thead>
                <tbody>
                  {this.props.cart.map((element, index) => {
                    const updateCount = (newCount) => {
                      const updatedElement = { ...element, count: newCount };
                      this.props.updateProductInCart(updatedElement);
                    };
                    return (
                      <tr key={index} className="cart_info">
                        <td className="cart_product">
                          <a>
                            <img
                              src={element.img}
                              alt=""
                              className="cart_image"
                            />
                          </a>
                        </td>
                        <td className="cart_description">
                          <p className="ml-2">{this.truncateWords(element.name, 6)}</p>
                        </td>
                        <td className="cart_price">
                          <p>{new Intl.NumberFormat("de-DE", {
                              currency: "EUR",
                            }).format(element.price)}</p>
                        </td>
                        <td className="cart_quantity">
                          <div className="cart_quantity_button">
                            <button
                              className="cart_quantity_up"
                              onClick={() => updateCount(element.count + 1)}
                            >
                              {" "}
                              +{" "}
                            </button>
                            <input
                              className="cart_quantity_input"
                              type="text"
                              name="quantity"
                              value={element.count}
                              autoComplete="off"
                              size="2"
                            />
                            <button
                              className="cart_quantity_down"
                              onClick={() => {
                                if (element.count === 1) {
                                  return;
                                }
                                updateCount(element.count - 1);
                              }}
                            >
                              {" "}
                              -{" "}
                            </button>
                          </div>
                        </td>
                        <td className="cart_total">
                          <p className="cart_total_price mr-2">
                            {new Intl.NumberFormat("de-DE", {
                              currency: "EUR",
                            }).format(element.price * element.count)}
                            
                          </p>
                        </td>
                        <td className="cart_delete">
                          <button
                            className="cart_quantity_delete flex items-center justify-center hover:text-red-700"
                            onClick={() => {
                              this.props.deteleProductInCart(element._id);
                              window.location.reload();
                            }}
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </button>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <section id="do_action" className="rounded-lg my-5">
          <div>
            <div className="total_area bg-gray-200">
              <ul className="text-sm my-4 py-4">
                <li className="flex justify-between mx-4 mb-2">
                  Phí Vận Chuyển
                  <span className="font-medium mx-2">
                    0<sup>đ</sup>{" "}
                  </span>
                </li>
                <li className="flex justify-between mx-4">
                  Tổng Tiền
                  <span className="font-medium mx-2">
                    {" "}
                    {new Intl.NumberFormat("de-DE", { currency: "EUR" }).format(
                      this.state.total
                    )}
                    <sup>đ</sup>
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-12 bg-gray-200 py-4">
            <div className="chose_area mx-4">
              <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">
                <div className="user_option flex-1">
                <input
                    type="text"
                    name="name"
                    value={this.state.name}
                    onChange={this.handleInputChange}
                    className="border border-gray-300 rounded-md p-2 w-full md:w-1/2 lg:w-96"
                    placeholder="Name"
                  />
                  <span className="px-3 text-red-500">{this.state.notiName}</span>
                </div>
                <div className="user_option flex-1">
                <input
                    type="text"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                    className="border border-gray-300 rounded-md p-2 w-full md:w-1/2 lg:w-96"
                    placeholder="Phone"
                  />
                  <span className="px-3 text-red-500">{this.state.notiPhone}</span>
                </div>
                <div className="user_option flex-1">
                    <input
                        type="text"
                        name="address"
                        value={this.state.address}
                        onChange={this.handleInputChange}
                        className="border border-gray-300 rounded-md p-2 w-full md:w-1/2 lg:w-96"
                        placeholder="Address"
                      />
                  <span className="px-3 text-red-500">{this.state.notiDetailAddress}</span>
                </div>
              </div>
              <div className="cart-option flex justify-between">
                <div className="ppip mr-2 mt-6 w-48">
                  {this.props.islogin ? (
                    isFormFilled ? (
                      this.state.sdkReady ? (
                        <PayPalButton
                          amount={(this.state.total / 25000).toFixed(2)}
                          onSuccess={(details, data) => {
                            this.handlePayment();
                            return fetch("/paypal-transaction-complete", {
                              method: "post",
                              body: JSON.stringify({
                                orderID: data.orderID,
                              }),
                            });
                          }}
                          onError={() => {
                            alert("Error paypal");
                          }}
                        />
                      ) : (
                        console.log(2)
                      )
                    ) : (
                      <p className="text-red-500 text-center ml-2">Vui lòng nhập đầy đủ thông tin.</p>
                    )
                  ) : (
                    <p className="text-red-500 text-center ml-2">Đăng nhập để thanh toán.</p>
                  )}
                </div>
                <div className="ctnsp flex justify-center items-center">
                  <Link
                    className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-md mt-6 w-auto flex items-center justify-center"
                    to={"/"}
                  >
                    Continue shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ContentCart;
