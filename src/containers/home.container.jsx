import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Home from "../pages/Homepage/HomePage";
import * as userActions from "../API/user.action";
import * as homeActions from "../API/home.action";
import * as productActions from "../API/product.action";

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.actions.auth();
  }
  componentDidUpdate(prevProps) {
    if (this.props.page !== prevProps.page) {
      this.props.homeActions.getBook();
    }
  }

  render() {
    return (
      <div>
        <Home
          islogin={this.props.islogin}
          logout={() => this.props.actions.logout()}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  islogin: state.userReducers.login.islogin,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);
