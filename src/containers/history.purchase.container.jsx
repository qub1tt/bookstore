import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../API/user.action";
import * as purchaseHistoryActions from "../API/purchase.history.action";
import HistoryPurchase from "../pages/Purchase/purchase.history";
class HistoryPurchaseContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.actions.auth();
    this.props.purchaseHistoryActions.getPurchaseHitory();
  }
  render() {
    return (
      <div>
        <HistoryPurchase
          islogin={this.props.islogin}
          logout={() => this.props.actions.logout()}
          purchaseHistory={this.props.purchaseHistory}
          deleteBill={(id) => this.props.purchaseHistoryActions.deleteBill(id)}
        />
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  islogin: state.userReducers.login.islogin,
  purchaseHistory: state.purchaseReducers.purchaseHistory.data,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch),
    purchaseHistoryActions: bindActionCreators(
      purchaseHistoryActions,
      dispatch
    ),
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HistoryPurchaseContainer);
