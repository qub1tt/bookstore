import React, { Component } from "react";
import Abovenav from "../../components/abovenav/abovenav";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import "./Profile.css";
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: window.innerWidth > 768,
      notiUpdateInfor: "",
      oldPassword: "",
      newPassword: "",
      confirm: "",
      notiUpdatePassword: "",
      profile: false,
    };
    this.handleClickprofile = this.handleClickprofile.bind(this);
    this.handleClickpassword = this.handleClickpassword.bind(this);
  }
  toggleSidebar = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };
  componentDidMount() {
    if (this.props.isupdate) {
      this.setState({ notiUpdateInfor: "UPDATE SUCCESS" });
    } else if (this.props.isupdate === false) {
      this.setState({ notiUpdateInfor: "UPDATE FAIL" });
    } else {
      this.setState({ notiUpdateInfor: "" });
    }
  }
  handleClickprofile() {
    this.setState({
      profile: false,
    });
  }
  handleClickpassword() {
    this.setState({
      profile: true,
    });
  }
  componentDidUpdate(prevProps) {
    if (this.props.isupdate !== prevProps.isupdate) {
      if (this.props.isupdate === true) {
        this.setState({ notiUpdateInfor: "UPDATE SUCCESS" });
      } else if (this.props.isupdate === false) {
        this.setState({ notiUpdateInfor: "UPDATE FAIL" });
      } else {
        this.setState({ notiUpdateInfor: "" });
      }
    }

    if (this.props.notiupdatePassword !== prevProps.notiupdatePassword) {
      if (this.props.notiupdatePassword === true) {
        this.setState({
          notiUpdatePassword: "Update password success",
          oldPassword: "",
          newPassword: "",
          confirm: "",
        });
        this.props.resetUpdatePassword();
      } else if (this.props.notiupdatePassword === false) {
        this.setState({ notiUpdatePassword: "Update password fail" });
        this.props.resetUpdatePassword();
      }
    }
  }

  handleUpdatePassword() {
    if (this.state.newPassword.length < 6) {
      this.setState({ notiUpdatePassword: "New Password invalid" });
      return;
    } else {
      this.setState({ notiUpdatePassword: "" });
    }
    if (this.state.confirm.length < 6) {
      this.setState({ notiUpdatePassword: "Confirm Password invalid" });
      return;
    } else {
      this.setState({ notiUpdatePassword: "" });
    }
    this.props.updatePassword(this.state.oldPassword, this.state.newPassword);
  }
  render() {
    let xhtml = (
      <div className="chung">
        <div className="information">
          <div className="info-header">
            Thông tin tài khoản
            <hr />
            <p className="error">{this.state.notiUpdateInfor}</p>
          </div>

          <div class="avatar">
            <div class="avatar-view">
              <img
                src="https://frontend.tikicdn.com/_desktop-next/static/img/account/avatar.png"
                alt="avatar"
                class="default"
              />
              <div class="edit">
                <img
                  src="https://frontend.tikicdn.com/_desktop-next/static/img/account/edit.png"
                  class="edit-img"
                  alt
                />
              </div>
            </div>
          </div>

          <div className="info-body">
            <div class="info-content">
              <div class="info-left">
                <span class="info-title">Thông tin cá nhân</span>
                <div class="account-info">
                  <form>
                    <div class="form-info">
                      {/* <div class="form-avatar">
                        <div class="avatar">
                          
                            <div class="avatar-view">
                              <img
                                src="https://frontend.tikicdn.com/_desktop-next/static/img/account/avatar.png"
                                alt="avatar"
                                class="default"
                              />
                              <div class="edit">
                                <img
                                  src="https://frontend.tikicdn.com/_desktop-next/static/img/account/edit.png"
                                  class="edit-img"
                                  alt
                                />
                              </div>
                            </div>
                        
                        </div>
                      </div> */}
                      <div class="form-name">
                        <div class="form-control">
                          <label class="input-label">Họ</label>
                          <div>
                            <div class="style-input">
                              <input
                                class="input"
                                type="search"
                                name="userName"
                                maxlength="128"
                                placeholder="First name"
                                value={this.props.firstName}
                                onChange={(e) =>
                                  this.props.setFirstName(e.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-control">
                          <label class="input-label">Tên</label>
                          <div>
                            <div class="style-input">
                              <input
                                class="input"
                                type="search"
                                name="userName"
                                maxlength="128"
                                placeholder="Last Name"
                                value={this.props.lastName}
                                onChange={(e) =>
                                  this.props.setLastName(e.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>
                        <div class="form-control">
                          <label class="input-label">Địa chỉ</label>
                          <div>
                            <div class="style-input">
                              <input
                                class="input"
                                type="search"
                                name="userName"
                                maxlength="128"
                                placeholder="Address"
                                value={this.props.address}
                                onChange={(e) =>
                                  this.props.setAddress(e.target.value)
                                }
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                   
                  </form>
                </div>
              </div>

              <div class="info-right">
                <span class="info-title">Thông tin liên hệ</span>

                <div class="account-info">
                  <form>
                    <div class="form-name">
                      <div class="form-control">
                        <label class="input-label">Số điện thoại</label>
                        <div>
                          <div class="style-input">
                            <input
                              class="input"
                              type="search"
                              name="userName"
                              maxlength="128"
                              placeholder="Phone"
                              value={this.props.phone_number}
                              onChange={(e) =>
                                this.props.setPhoneNumber(e.target.value)
                              }
                            />
                          </div>
                        </div>
                      </div>
                      <div class="form-control">
                        <label class="input-label">Email</label>
                        <div>
                          <div class="style-input">
                            <input
                              className="input"
                              type="search"
                              name="userName"
                              maxlength="128"
                              placeholder="Email"
                              value={this.props.email}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="button-save">
              <button
                type="submit"
                onClick={() => this.props.updateInfor()}
                class="style-btn-submit"
              >
                Lưu thay đổi
              </button>
            </div>
          </div>
        </div>
      </div>
    );
    if (this.state.profile) {
      xhtml = (
        <div className="login-form">
          <div className="login-content col-sm-6">
            <div className="shopper-info">
              <p>UPDATE PASSWORD</p>
              <p className="error">{this.state.notiUpdatePassword}</p>
              <input
                value={this.state.oldPassword}
                onChange={(e) => this.setState({ oldPassword: e.target.value })}
                type="password"
                placeholder="Old password"
              />
              <input
                value={this.state.newPassword}
                onChange={(e) => this.setState({ newPassword: e.target.value })}
                type="password"
                placeholder="New Password"
              />
              <input
                value={this.state.confirm}
                onChange={(e) => this.setState({ confirm: e.target.value })}
                type="password"
                placeholder="Confirm"
              />
              <button
                onClick={() => this.handleUpdatePassword()}
                className="btn btn-default"
              >
                update
              </button>
            </div>
          </div>
        </div>
      );
    }
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

        <div className="shopper-informations ">
          <ul class="grid grid-cols-2 gap-5">
            <li>
              <button
                onClick={() => this.handleClickprofile()}
                class="text-white p-4 rounded bg-blue-500 shadow-md flex items-center justify-center w-full"
              >
                Thông Tin Tài Khoản
              </button>
            </li>
            <li>
              {" "}
              <button
                onClick={() => this.handleClickpassword()}
                class="text-white p-4 rounded bg-blue-500 shadow-md flex items-center justify-center w-full"
              >
                Thay Đổi Mật Khẩu
              </button>
            </li>
          </ul>
          <hr></hr>
          <div>{xhtml}</div>
        </div>

         <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}
export default Profile;
