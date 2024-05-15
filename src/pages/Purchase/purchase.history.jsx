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
              className="table-responsive cart_info"
              style={{ marginBottom: "50px" }}
            >
              <span>
                Date: {new Date(element.date).toDateString("yyyy-MM-dd")}
              </span>
              <p className="cart_total_price">
                Total: {this.caculatorTotalBill(element.products)}
                <sup>đ</sup>
              </p>

              <table className="table table-condensed">
                <thead>
                  <tr className="cart_menu">
                    <td className="image">Item</td>
                    <td className="description" />
                    <td className="price">Price</td>
                    <td className="quantity">Quantity</td>
                    <td className="total">Total</td>
                    <td />
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
                          <p>{item.price}</p>
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
                            {item.count * item.price}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="login-form">
                <div className="delete-cart">
                  <button
                    onClick={() => this.props.deleteBill(element._id)}
                    className="destroy btn btn-default bg-red-500 py-2 px-2"
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
              <div>
                <h3 className="title">Không Có Đơn Hàng</h3>
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
              style={{ marginBottom: "50px" }}
            >
              <span>
                Date: {new Date(element.date).toDateString("yyyy-MM-dd")}
              </span>
              <p className="cart_total_price">
                Total: {this.caculatorTotalBill(element.products)}
                <sup>đ</sup>
              </p>

              <table className="table table-condensed">
                <thead>
                  <tr className="cart_menu">
                    <td className="image">Item</td>
                    <td className="description" />
                    <td className="price">Price</td>
                    <td className="quantity">Quantity</td>
                    <td className="total">Total</td>
                    <td />
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
                          <p>{item.price}</p>
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
                            {item.count * item.price}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <hr />
            </div>
          );
        }
      });
      if (count === 0) {
        xhtml = (
          <div className="no-bill">
            <div className="logo-404">
              <div>
                <h3 className="title">Không Có Đơn Hàng</h3>
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
              style={{ marginBottom: "50px" }}
            >
              <span>
                Date: {new Date(element.date).toDateString("yyyy-MM-dd")}
              </span>
              <p className="cart_total_price">
                Total: {this.caculatorTotalBill(element.products)}
                <sup>đ</sup>{" "}
              </p>

              <table className="table table-condensed">
                <thead>
                  <tr className="cart_menu">
                    <td className="image">Item</td>
                    <td className="description" />
                    <td className="price">Price</td>
                    <td className="quantity">Quantity</td>
                    <td className="total">Total</td>
                    <td />
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
                          <p>{item.price}</p>
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
                            {item.count * item.price}
                          </p>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <hr />
            </div>
          );
        }
      });
      if (count === 0) {
        xhtml = (
          <div className="no-bill">
            <div className="logo-404">
              <div>
                <h3 className="title">Không Có Đơn Hàng</h3>
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
            <div className="purchase_history_container">
              <div className="purchase_history_bill-title">
                <h2>Đơn Hàng Của Bạn</h2>
              </div>
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
                <hr style={{ marginBottom: "20px" }} />
              </div>
              {this.renderBill()}
            </div>
          </section>
          <Chatbot />
        </div>

        {/* <div className="footer">
          <Footer />
        </div> */}
      </div>
    );
  }
}
export default HistoryPurchase;
