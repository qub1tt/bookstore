import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import BookPageaz from "../pages/BookPage/BookPageaz";
import * as userActions from "../API/user.action";

class BookPageContaineraz extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.actions.auth();
  }

  render() {
    return (
      <div>
        <BookPageaz
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
export default connect(mapStateToProps, mapDispatchToProps)(BookPageContaineraz);
