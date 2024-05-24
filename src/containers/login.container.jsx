import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import LoginPage from "../pages/LoginPage/LoginPage";
import * as userActions from "../API/user.action";
import { Navigate } from "react-router-dom";

class LoginRegisterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailLogin: "",
      passwordLogin: "",
      email: "",
      firstname: "",
      lastname: "",
      address: "",
      phone: "",
      password: "",
      confirm: "",
      notificationRegister: "",
      notificationLogin: "",
      isLoggedIn: false,
      loginSuccessMessage: "",
      registerSuccess: false,
      registerSuccessMessage: "",
    };
  }
  componentDidMount() {
    this.props.actions.auth();
  }
  isvalidFirstName = (firstName) => {
    if (firstName === "") return false;
    return true;
  };
  isvalidLastName = (lastname) => {
    if (lastname === "") return false;
    return true;
  };
  isvalidPassword = (password) => {
    if (password.length < 6) return false;
    return true;
  };
  isvalidConfirm = (password, confirm) => {
    if (confirm !== password) return false;
    return true;
  };
  isvalidEmail = (email) => {
    if (email === "" || email.indexOf("@") === -1 || email.indexOf(".") === -1)
      return false;
    return true;
  };
  registerSubmit = async () => {
    if (!this.isvalidEmail(this.state.email)) {
      this.setState({ notificationRegister: "Email invalid" });
      return;
    } else {
      this.setState({ notificationRegister: "" });
    }
    if (!this.isvalidPassword(this.state.password)) {
      this.setState({ notificationRegister: "Password invalid" });
      return;
    } else {
      this.setState({ notificationRegister: "" });
    }
    if (!this.isvalidConfirm(this.state.password, this.state.confirm)) {
      this.setState({ notificationRegister: "Confirm invalid" });
      return;
    } else {
      this.setState({ notificationRegister: "" });
    }
    if (!this.isvalidFirstName(this.state.firstname)) {
      this.setState({ notificationRegister: "Firstname invalid" });
      return;
    } else {
      this.setState({ notificationRegister: "" });
    }
    if (!this.isvalidLastName(this.state.lastname)) {
      this.setState({ notificationRegister: "Lastname invalid" });
      return;
    } else {
      this.setState({ notificationRegister: "" });
    }
    try {
      await axios.post("http://localhost:8080/user/register", {
        email: this.state.email,
        password: this.state.password,
        firstName: this.state.firstname,
        lastName: this.state.lastname,
        address: this.state.address,
        phone_number: this.state.phone,
      });
      this.setState({
        registerSuccess: true,
        registerSuccessMessage: "Đăng ký thành công",
      });
    } catch (err) {
      if (err.response.data.msg === "Email already exist")
        this.setState({ notificationRegister: "Email already exist" });
      else this.setState({ notificationRegister: "Đăng Ký Thất Bại" });
      return;
    }
  };

  loginSubmit = async () => {
    if (!this.isvalidEmail(this.state.emailLogin)) {
      this.setState({ notificationLogin: "Email invalid" });
      return;
    } else {
      this.setState({ notificationLogin: "" });
    }
    let res;
    try {
      res = await axios.post("http://localhost:8080/user/login", {
        email: this.state.emailLogin,
        password: this.state.passwordLogin,
      });
    } catch (err) {
      if (err.response !== undefined) {
        if (err.response.data.msg === "Account not verified")
          this.setState({
            notificationLogin:
              "Tài Khoản Chưa Được Kích Hoạt, Vui Lòng Vào mail Để Kích Hoạt",
          });
        else {
          this.setState({ notificationLogin: "Email or password invalid" });
        }
      } else {
        this.setState({ notificationLogin: "Some thing went wrong" });
      }
      return;
    }
    this.props.actions.loginSuccess(res.data.token, res.data.user);
    this.setState({
      isLoggedIn: true,
      loginSuccessMessage: "Đăng nhập thành công",
    });
    setTimeout(() => {
      this.setState({ redirectToHome: true });
    }, 1000);
  };
  render() {
    const {
      isLoggedIn,
      loginSuccessMessage,
      registerSuccess,
      redirectToHome,
      registerSuccessMessage,
    } = this.state;

    if (isLoggedIn) {
      return (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            backgroundColor: "green",
            borderRadius: "10px",
          }}
        >
          <p
            style={{
              color: "white",
              height: "30px",
              fontSize: "16px",
              textAlign: "center",
            }}
          >
            {loginSuccessMessage}
          </p>
          {redirectToHome && <Navigate to="/" />}
        </div>
      );
    }
    if (registerSuccess) {
      setTimeout(() => {
        window.location.reload();
      }, 1000);
      return (
        <div
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            width: "250px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px",
            backgroundColor: "green",
            borderRadius: "10px",
          }}
        >
          <p
            style={{
              color: "white",
              height: "30px",
              fontSize: "16px",
              textAlign: "center",
            }}
          >
            {registerSuccessMessage}
          </p>
        </div>
      );
    }

    return (
      <div>
        <LoginPage
          setEmailLogin={(value) => this.setState({ emailLogin: value })}
          setPasswordlogin={(value) => this.setState({ passwordLogin: value })}
          setEmail={(value) => this.setState({ email: value })}
          setFirstname={(value) => this.setState({ firstname: value })}
          setLastname={(value) => this.setState({ lastname: value })}
          setAddress={(value) => this.setState({ address: value })}
          setPhone={(value) => this.setState({ phone: value })}
          notificationRegister={this.state.notificationRegister}
          notificationLogin={this.state.notificationLogin}
          setPassword={(value) => this.setState({ password: value })}
          setConfirm={(value) => this.setState({ confirm: value })}
          registerSubmit={() => this.registerSubmit()}
          loginSubmit={() => this.loginSubmit()}
          islogin={this.props.islogin}
          logout={() => this.props.actions.logout()}
          history={this.props.history}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  islogin: state.userReducers.login.islogin,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(userActions, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginRegisterContainer);
