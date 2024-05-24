import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BookPage from "../pages/BookPage/BookPage";
import * as userActions from "../API/user.action";

class BookPageContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.actions.auth();
  }

  render() {
    return (
      <div>
        <BookPage
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
export default connect(mapStateToProps, mapDispatchToProps)(BookPageContainer);
