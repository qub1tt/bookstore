import React, { Component } from "react";
import ContentCart from "../../components/cart/cartDetail";
import Abovenav from "../../components/abovenav/abovenav";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
class Cart extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: window.innerWidth > 768,
    };
  }
  toggleSidebar = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };
  render() {
    return (
      <>
        <div className="contain">
          <div className="sidebar">
            <Sidebar
              isOpen={this.isOpen}
              toggleSidebar={this.toggleSidebar}
              islogin={this.props.islogin}
              logout={() => this.props.logout()}
            />
          </div>
          <div className="navbar">
            <Abovenav toggle={this.toggleSidebar} />
          </div>
          <div className="content">
            <ContentCart
              islogin={this.props.islogin}
              cart={this.props.cart}
              updateProductInCart={(product) =>
                this.props.updateProductInCart(product)
              }
              deteleProductInCart={(id_product) =>
                this.props.deteleProductInCart(id_product)
              }
              payment={(address, phone, name, total) =>
                this.props.payment(address, phone, name, total)
              }
              ispay={this.props.ispay}
            />
          </div>
          <div className="footer">
            <Footer />
          </div>
        </div>
      </>
    );
  }
}
export default Cart;
