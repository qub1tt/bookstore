import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BookPageza from "../pages/BookPage/BookPageza";
import * as userActions from "../API/user.action";

class BookPageContainerza extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.actions.auth();
  }

  render() {
    return (
      <div>
        <BookPageza
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
export default connect(mapStateToProps, mapDispatchToProps)(BookPageContainerza);
