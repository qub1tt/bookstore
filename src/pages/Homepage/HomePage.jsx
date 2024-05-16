import React, { Component } from "react";
import Abovenav from "../../components/abovenav/abovenav";
import Sidebar from "../../components/sidebar/sidebar";
import Content1 from "../../components/content1/content1";
import Content0 from "../../components/content0/content0";
import Content2 from "../../components/content2/content2";
import Footer from "../../components/footer/footer";
import Chatbot from "../../components/Chatbot/Chatbot";
import Book_Carousel from "../../components/book_carousel/book_carousel";
import "./HomePage.css";

class HomePage extends Component {
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
          <div className="book_carousel">
            <Book_Carousel />
          </div>
          <Content1 />
          <Content2 />
          <Content0 />
          <Chatbot />
        </div>
          <Footer />
      </div>
    );
  }
}

export default HomePage;
