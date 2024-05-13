import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { bindActionCreators } from "redux";
import Profile from "../pages/Profile/Profile";
import * as userActions from "../API/user.action";
import * as profileActions from "../API/profile.action";
import Loading from "../components/loading/Loading";
import storeConfig from "../config/storage.config";
import { Navigate } from "react-router-dom";
class ProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      firstName: null,
      lastName: null,
      address: null,
      phone_number: null,
      notiupdatePassword: null,
      isAuthed: true,
      isUpdatingInfo: false, // Thêm biến này
    };
  }
  async componentDidMount() {
    let res = await this.props.actions.auth();
    if (res === false) this.setState({ isAuthed: false });
    if (storeConfig.getUser() !== null) {
      this.setState({
        email: storeConfig.getUser().email,
        firstName: storeConfig.getUser().firstName,
        lastName: storeConfig.getUser().lastName,
        address: storeConfig.getUser().address,
        phone_number: storeConfig.getUser().phone_number,
      });
    }
  }
  updateInfor = async () => {
    // Đặt isUpdatingInfo thành true khi bắt đầu quá trình cập nhật
    this.setState({ isUpdatingInfo: true });

    // Tiến hành cập nhật thông tin người dùng
    await this.props.profileActions.updateInfor(
      this.state.email,
      this.state.firstName,
      this.state.lastName,
      this.state.address,
      this.state.phone_number
    );

    // Sau khi quá trình cập nhật hoàn thành, đặt isUpdatingInfo thành false
    this.setState({ isUpdatingInfo: false });
  };
  componentWillUnmount() {
    this.props.profileActions.resetProfile();
  }
  updatePassword = async (oldpassword, newpassword) => {
    let res = null;
    try {
      res = await axios.post("http://localhost:8080/user/updatepassword", {
        email: storeConfig.getUser().email,
        oldpassword: oldpassword,
        newpassword: newpassword,
      });
    } catch (err) {
      console.log(err);
      this.setState({ notiupdatePassword: false });
      return false;
    }

    this.setState({ notiupdatePassword: true });
  };
  resetUpdatePassword = () => {
    this.setState({
      notiupdatePassword: null,
    });
  };
  render() {
    if (!this.state.isAuthed) {
      return <Navigate to="/" />;
    }
    if (this.props.islogin) {
      if (this.state.isUpdatingInfo) {
        // Hiển thị Loading khi đang trong quá trình cập nhật
        return <Loading />;
      } else {
        // Hiển thị Profile khi không trong quá trình cập nhật
        return (
          <div>
            <Profile
              islogin={this.props.islogin}
              logout={() => this.props.actions.logout()}
              email={this.state.email}
              firstName={this.state.firstName}
              lastName={this.state.lastName}
              address={this.state.address}
              phone_number={this.state.phone_number}
              setFirstName={(value) => this.setState({ firstName: value })}
              setLastName={(value) => this.setState({ lastName: value })}
              setAddress={(value) => this.setState({ address: value })}
              setPhoneNumber={(value) => this.setState({ phone_number: value })}
              updateInfor={() => this.updateInfor()}
              isupdate={this.props.isupdate}
              updatePassword={(oldpassword, newpassword) =>
                this.updatePassword(oldpassword, newpassword)
              }
              notiupdatePassword={this.state.notiupdatePassword}
              resetUpdatePassword={() => this.resetUpdatePassword()}
            />
          </div>
        );
      }
    } else {
      return <Loading />;
    }
  }
}
const mapStateToProps = (state) => ({
  islogin: state.userReducers.login.islogin,
  isupdate: state.profileReducers.profile.isupdate,
});

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch),
    profileActions: bindActionCreators(profileActions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
