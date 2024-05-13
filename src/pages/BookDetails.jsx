import React, { Component } from "react";
import Abovenav from "../components/abovenav/abovenav";
import Sidebar from "../components/sidebar/sidebar";
import DetailsSection from "../components/DetailsSection/DetailsSection";
import Footer from "../components/footer/footer";

class BookDetailsPage extends Component {
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

  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return (
      <div className="contain">
        <div className="sidebar">
          <Sidebar
            isOpen={this.isOpen}
            toggle={this.toggleSidebar}
            islogin={this.props.islogin}
            logout={() => this.props.logout()}
          />
        </div>
        <div className="navbar">
          <Abovenav toggle={this.toggleSidebar} />
        </div>

        <div className="content">
          <DetailsSection
            mproductDetail={this.props.mproductDetail}
            nameCategory={this.props.nameCategory}
            namePublicsher={this.props.namePublicsher}
            islogin={this.props.islogin}
            id_book={this.props.id_book}
            submitComment={(name, comment, id_book) =>
              this.props.submitComment(name, comment, id_book)
            }
            comment={this.props.comment}
            nameAuthor={this.props.nameAuthor}
            addToCart={(product) => this.props.addToCart(product)}
            totalpage={this.props.totalpage}
            page={this.props.page}
            backPage={() => this.props.backPage()}
            nextPage={() => this.props.nextPage()}
            setPage={(page) => this.props.setPage(page)}
          />
        </div>

        <Footer />
      </div>
    );
  }
}

export default BookDetailsPage;
