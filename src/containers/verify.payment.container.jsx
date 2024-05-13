import React, { useState, useEffect } from "react";
import axios from "axios";
import VerifyPayment from "../components/verify.payment/verify.payment";
import NotFound from "../components/404/NotFound";
import { useParams } from "react-router-dom";

function VerifyPaymentContainer() {
  const [isConfirm, setIsConfirm] = useState(true);
  const { token } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        await axios.get(`http://localhost:8080/bill/verify/${token}`);
      } catch (err) {
        setIsConfirm(false);
      }
    }
    fetchData();
  }, [token]);

  return isConfirm ? <VerifyPayment /> : <NotFound />;
}

export default VerifyPaymentContainer;
