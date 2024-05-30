import React, { Component } from "react";
import Abovenav from "../../components/abovenav/abovenav";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import Chatbot from "../../components/Chatbot/Chatbot";
import "./purchase.css";
class HistoryPurchase extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: window.innerWidth > 1150,
    };
  }

  componentDidMount() {
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize = () => {
    this.setState({
      isOpen: window.innerWidth > 1150,
    });
  };

  toggleSidebar = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  caculatorTotalBill = (products) => {
    let total = 0;
    products.map((element, index) => {
      total += element.count * element.price;
    });
    return total;
  };
  renderBill = () => {
    if (this.state.issend === "99") {
      let count = 0;
      let xhtml = this.props.purchaseHistory.map((element, index) => {
        if (element.issend === "99") {
          count++;
          return (
            <div
              className="table-responsive cart_info "
              
            >
              <span className="text-xl">
                Date: {new Date(element.date).toDateString("yyyy-MM-dd")}
              </span>
              <p className="cart_total_price text-red-500">
                Total: {new Intl.NumberFormat("de-DE", {
                              currency: "EUR",
                            }).format(this.caculatorTotalBill(element.products))}
                <sup>đ</sup>
              </p>
            <div className="bg-gray-100">
              <table className="table table-condensed min-w-full divide-y divide-gray-200">
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
                  </tr>
                </thead>
                <tbody>
                  {element.products.map((item, index) => {
                    return (
                      <tr>
                        <td className="cart_product">
                          <a href="">
                            <img src={item.img} />
                          </a>
                        </td>
                        <td className="cart_description">
                          <h4>
                            <a>{item.name} </a>
                          </h4>
                        </td>
                        <td className="cart_price">
                          <p>{new Intl.NumberFormat("de-DE", {
                              currency: "EUR",
                            }).format(item.price)}</p>
                        </td>
                        <td className="cart_quantity">
                          <div className="cart_quantity_button">
                            <input
                              className="cart_quantity_input"
                              type="text"
                              name="quantity"
                              value={item.count}
                              autocomplete="off"
                              size="2"
                            />
                          </div>
                        </td>
                        <td className="cart_total">
                          <p className="cart_total_price">
                          {new Intl.NumberFormat("de-DE", {
                              currency: "EUR",
                            }).format(item.count * item.price)}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              </div>
              <div className="cancel-purchase bg-gray-100">
                <div className="delete-cart">
                  <button
                    onClick={() => this.props.deleteBill(element._id)}
                    className="destroy btn btn-default bg-red-500 py-2 px-2 mb-4 rounded-lg hover:bg-red-600"
                  >
                    Hủy Đơn Hàng
                  </button>
                </div>
              </div>
              <hr />
            </div>
          );
        }
      });
      if (count === 0) {
        xhtml = (
          <div className="no-bill">
            <div className="logo-404">
              <div className="pb-32">
                <h3 className="title my-10 bg-gray-100 rounded-2xl py-32">Không Có Đơn Hàng</h3>
              </div>
            </div>
          </div>
        );
      }
      return xhtml;
    }

    if (this.state.issend === "0") {
      let count = 0;
      let xhtml = this.props.purchaseHistory.map((element, index) => {
        if (element.issend === "0") {
          count++;
          return (
            <div
              className="table-responsive cart_info"
              
            >
              <span className="text-xl">
                Date: {new Date(element.date).toDateString("yyyy-MM-dd")}
              </span>
              <p className="cart_total_price text-red-500">
              
                Total: {new Intl.NumberFormat("de-DE", {
                              currency: "EUR",
                            }).format(this.caculatorTotalBill(element.products))}
                <sup>đ</sup>
              </p>
              <div className="bg-gray-100">
              <table className="table table-condensed min-w-full divide-y divide-gray-200">
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
                  </tr>
                </thead>
                <tbody>
                  {element.products.map((item, index) => {
                    return (
                      <tr>
                        <td className="cart_product">
                          <a href="">
                            <img src={item.img} />
                          </a>
                        </td>
                        <td className="cart_description">
                          <h4>
                            <a>{item.name} </a>
                          </h4>
                        </td>
                        <td className="cart_price">
                          <p>
                          {new Intl.NumberFormat("de-DE", {
                              currency: "EUR",
                            }).format(item.price)}</p>
                        </td>
                        <td className="cart_quantity">
                          <div className="cart_quantity_button">
                            <input
                              className="cart_quantity_input"
                              type="text"
                              name="quantity"
                              value={item.count}
                              autocomplete="off"
                              size="2"
                            />
                          </div>
                        </td>
                        <td className="cart_total">
                          <p className="cart_total_price">
                          {new Intl.NumberFormat("de-DE", {
                              currency: "EUR",
                            }).format(item.count * item.price)}
                            
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              </div>
              <hr />
            </div>
          );
        }
      });
      if (count === 0) {
        xhtml = (
          <div className="no-bill">
            <div className="logo-404">
              <div className="pb-32">
                <h3 className="title my-10 bg-gray-100 rounded-2xl py-32" >Không Có Đơn Hàng</h3>
              </div>
            </div>
          </div>
        );
      }
      return xhtml;
    }

    if (this.state.issend === "1") {
      let count = 0;
      let xhtml = this.props.purchaseHistory.map((element, index) => {
        if (element.issend === "1") {
          count++;
          return (
            <div
              className="table-responsive cart_info"
              
            >
              <span className="text-xl">
                Date: {new Date(element.date).toDateString("yyyy-MM-dd")}
              </span>
              <p className="cart_total_price text-red-500">
                Total: {new Intl.NumberFormat("de-DE", {
                              currency: "EUR",
                            }).format(this.caculatorTotalBill(element.products))}
                <sup>đ</sup>{" "}
              </p>
            <div className="bg-gray-100 ">
              <table className="table table-condensed min-w-full divide-y divide-gray-200 ">
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
                  </tr>
                </thead>
                <tbody>
                  {element.products.map((item, index) => {
                    return (
                      <tr className="cart_info">
                        <td className="cart_product" >
                        <a href="">
                            <img
                              src={item.img}
                              alt=""
                              className="cart_image"
                            />
                          </a>
                        </td>
                        <td className="cart_description">
                          <h4>
                            <a>{item.name} </a>
                          </h4>
                        </td>
                        <td className="cart_price">
                          <p>{new Intl.NumberFormat("de-DE", {
                              currency: "EUR",
                            }).format(item.price)}</p>
                        </td>
                        <td className="cart_quantity">
                          <div className="cart_quantity_button">
                            <input
                              className="cart_quantity_input"
                              type="text"
                              name="quantity"
                              value={item.count}
                              autocomplete="off"
                              size="2"
                            />
                          </div>
                        </td>
                        <td className="cart_total">
                          <p className="cart_total_price">
                          {new Intl.NumberFormat("de-DE", {
                              currency: "EUR",
                            }).format(item.count * item.price)}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              </div>
              <hr />
            </div>
          );
        }
      });
      if (count === 0) {
        xhtml = (
          <div className="no-bill">
            <div className="logo-404">
              <div className="pb-32">
                <h3 className="title my-10 bg-gray-100 rounded-2xl py-32">Không Có Đơn Hàng</h3>
              </div>
            </div>
          </div>
        );
      }
      return xhtml;
    }
  };
  handleClick99() {
    this.setState({
      issend: "99",
    });
  }
  handleClick0() {
    this.setState({
      issend: "0",
    });
  }
  handleClick1() {
    this.setState({
      issend: "1",
    });
  }
  render() {
    console.log(this.state.issend);
    return (
      <div className="contain">
        <Sidebar
          isOpen={this.state.isOpen}
          islogin={this.props.islogin}
          logout={() => this.props.logout()}
        />
        <div className="navbar">
          <Abovenav toggle={this.toggleSidebar} />
        </div>

        <div className="content">
          <section id="cart_items">
            <div className="purchase_history_container ">
              <div className="purchase_history_bill-title bg-gray-100 rounded-2xl">
                <h2 className="pl-4">Đơn Hàng Của Bạn</h2>
                <div className="purchase_history_menu-profile">
                  <ul className="purchase_state">
                    <li>
                      <button
                        onClick={() => this.handleClick99()}
                        className="purchase_history_menu-custom_btn"
                      >
                        Đang Chờ Xử Lý
                      </button>
                    </li>
                    <li>
                      {" "}
                      <button
                        onClick={() => this.handleClick0()}
                        className="purchase_history_menu-custom_btn"
                      >
                        Đang Giao Hàng
                      </button>
                    </li>
                    <li>
                      {" "}
                      <button
                        onClick={() => this.handleClick1()}
                        className="purchase_history_menu-custom_btn"
                      >
                        Đã Giao Hàng
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              
              {this.renderBill()}
            </div>
          </section>
          <Chatbot />
        </div>

        <Footer />
      </div>
    );
  }
}
export default HistoryPurchase;
