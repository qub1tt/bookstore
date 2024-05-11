import React from "react";
import ContentLoginRegister from "../../components/login/loginDetails";

const LoginPage = ({
  setEmailLogin,
  setPasswordlogin,
  setEmail,
  setFirstname,
  setLastname,
  setAddress,
  setPhone,
  setPassword,
  setConfirm,
  notificationRegister,
  notificationLogin,
  registerSubmit,
  loginSubmit,
  islogin,
  logout,
  history,
}) => (
  <div>
    <ContentLoginRegister
      setEmailLogin={(value) => setEmailLogin(value)}
      setPasswordlogin={(value) => setPasswordlogin(value)}
      setEmail={(value) => setEmail(value)}
      setFirstname={(value) => setFirstname(value)}
      setLastname={(value) => setLastname(value)}
      setAddress={(value) => setAddress(value)}
      setPhone={(value) => setPhone(value)}
      setPassword={(value) => setPassword(value)}
      setConfirm={(value) => setConfirm(value)}
      notificationRegister={notificationRegister}
      notificationLogin={notificationLogin}
      registerSubmit={() => registerSubmit()}
      loginSubmit={() => loginSubmit()}
      history={history}
    />
  </div>
);
export default LoginPage;
