import React, { Component } from "react";
import Abovenav from "../../components/abovenav/abovenav";
import Sidebar from "../../components/sidebar/sidebar";
import Footer from "../../components/footer/footer";
import Chatbot from "../../components/Chatbot/Chatbot";
import { Image } from "antd";

import "./Profile.css";
class Profile extends Component {
  constructor() {
    super();
    this.state = {
      isOpen: window.innerWidth > 1150,
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
    window.addEventListener("resize", this.handleResize);
    if (this.props.isupdate) {
      this.setState({ notiUpdateInfor: "UPDATE SUCCESS" });
    } else if (this.props.isupdate === false) {
      this.setState({ notiUpdateInfor: "UPDATE FAIL" });
    } else {
      this.setState({ notiUpdateInfor: "" });
    }
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
          notiUpdatePassword: "UPDATE PASSWORD SUCCESS",
          oldPassword: "",
          newPassword: "",
          confirm: "",
        });
        this.props.resetUpdatePassword();
      } else if (this.props.notiupdatePassword === false) {
        this.setState({ notiUpdatePassword: "UPDATE PASSWORD FAIL" });
        this.props.resetUpdatePassword();
      }
    }
  }

  handleUpdatePassword() {
    if (this.state.newPassword.length < 6) {
      this.setState({ notiUpdatePassword: "NEW PASSWORD INVALID" });
      return;
    } else {
      this.setState({ notiUpdatePassword: "" });
    }
    if (this.state.confirm.length < 6) {
      this.setState({ notiUpdatePassword: "CONFIRM PASSWORD INVALID" });
      return;
    } else {
      this.setState({ notiUpdatePassword: "" });
    }
    this.props.updatePassword(this.state.oldPassword, this.state.newPassword);
  }
  render() {
    const IMAGE_URL =
      "https://frontend.tikicdn.com/_desktop-next/static/img/account/avatar.png";
    let xhtml = (
      <div className="chung">
        <div className="information">
          <div className="info-header">
            Thông tin tài khoản
            <hr />
            
          </div>

          <div class="avatar">
            <div class="avatar-view">
              <Image
                style={{
                  borderRadius: "50%",
                  overflow: "hidden",
                  objectFit: "cover",
                }}
                src={this.props.imageBase64 || this.props.avatar || IMAGE_URL}
              />
              <div className="edit">
                <label htmlFor="avatar_id">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/account/edit.png"
                    className="edit-img"
                    alt=""
                    style={{ cursor: "pointer" }}
                  />
                </label>
                <input
                  className="hidden"
                  id="avatar_id"
                  type="file"
                  accept="image/png, image/gif, image/jpeg"
                  onChange={(e) => this.props.changeImage(e)}
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
                                class="input123"
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
                                class="input123"
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
                                class="input123"
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
                              class="input123"
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
                              className="input123"
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
            <p className="hmmerror">{this.state.notiUpdateInfor}</p>
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
        <div className="chung">
          <div className="information">
            <div className="infor-header2">
              Thay đổi mật khẩu
              <hr />
              
            </div>
            <div className="infor-body">
              <div className="infro-content">
                <div class="account-info">
                  <form>
                    <div class="form-name2">
                      <div class="form-control2">
                        <label class="input-label">Old Password</label>
                        <div>
                          <div class="style-input">
                            <input
                              className="input2"
                              value={this.state.oldPassword}
                              onChange={(e) =>
                                this.setState({ oldPassword: e.target.value })
                              }
                              type="password"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="form-control2">
                        <label class="input-label">New Password</label>
                        <div>
                          <div class="style-input">
                            <input
                              className="input2"
                              maxlength="128"
                              value={this.state.newPassword}
                              onChange={(e) =>
                                this.setState({ newPassword: e.target.value })
                              }
                              type="password"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="form-control2">
                        <label class="input-label">Confirm password</label>
                        <div>
                          <div class="style-input">
                            <input
                              className="input2"
                              value={this.state.confirm}
                              onChange={(e) =>
                                this.setState({ confirm: e.target.value })
                              }
                              type="password"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                {/* <input
                  value={this.state.oldPassword}
                  onChange={(e) =>
                    this.setState({ oldPassword: e.target.value })
                  }
                  type="password"
                  placeholder="Old password"
                />
                <input
                  value={this.state.newPassword}
                  onChange={(e) =>
                    this.setState({ newPassword: e.target.value })
                  }
                  type="password"
                  placeholder="New Password"
                />
                <input
                  value={this.state.confirm}
                  onChange={(e) => this.setState({ confirm: e.target.value })}
                  type="password"
                  placeholder="Confirm"
                /> */}
                <p className="hmmerror">{this.state.notiUpdatePassword}</p>
                <div className="button-save">
                  <button
                    type="submit"
                    onClick={() => this.handleUpdatePassword()}
                    className="style-btn-submit"
                  >
                    Update
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
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
        {/* <div className="sidebar">
          <Sidebar
            isOpen={this.state.isOpen}
        
          />
        </div>
        <div className="navbar2">
          <div className="navbar">
            <Abovenav toggle={this.toggleSidebar} />
          </div>
        </div> */}

        <div className="content">
          <ul class="grid grid-cols-2 gap-4">
            <li className="btn0">
              <button
                onClick={() => this.handleClickprofile()}
                class="  text-white p-2 rounded bg-blue-500 shadow-md flex items-center justify-center w-full"
              >
                Thông tin tài khoản
              </button>
            </li>
            <li className="btn0">
              {" "}
              <button
                onClick={() => this.handleClickpassword()}
                class=" text-white p-2 rounded bg-blue-500 shadow-md flex items-center justify-center w-full"
              >
                Thay đổi mật khẩu
              </button>
            </li>
          </ul>
          <hr></hr>
          <div>{xhtml}</div>
          <Chatbot />
        </div>

        <Footer />
      </div>
    );
  }
}
export default Profile;
