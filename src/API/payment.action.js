import axios from "axios";

export const getConfig = async () => {
  const res = await axios.get("http://localhost:8080/payment/config");
  return res.data;
};
