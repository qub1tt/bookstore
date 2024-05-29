import React, { Component } from "react";
import Abovenav from "../../components/abovenav/abovenav";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import Chatbot from "../../components/Chatbot/Chatbot";
import AllBookaz from "../../components/allbook/allbookaz";
class BookPageaz extends Component {
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
  render() {
    return (
      <>
        <div className="contain">
          <div className="sidebar">
            <Sidebar
              isOpen={this.state.isOpen}
              islogin={this.props.islogin}
              logout={() => this.props.logout()}
            />
          </div>
          <div className="navbar">
            <Abovenav toggle={this.toggleSidebar} />
          </div>
          <div className="content">
            <AllBookaz />
            <Chatbot />
          </div>
          <Footer />
        </div>
      </>
    );
  }
}
export default BookPageaz;
