import React, { useState, useEffect } from "react";
import axios from "axios";
import VerifyRegisterAccount from "../components/verify_register/verify.account";
import NotFound from "../components/404/NotFound";
import { useParams } from "react-router-dom";

function VerifyRegisterAccountContainer() {
  const [isConfirm, setIsConfirm] = useState(true);
  const { token } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        await axios.get(`${process.env.REACT_APP_API}/user/verify/${token}`);
      } catch (err) {
        setIsConfirm(false);
      }
    }
    fetchData();
  }, [token]);

  return isConfirm ? <VerifyRegisterAccount /> : <NotFound />;
}

export default VerifyRegisterAccountContainer;
