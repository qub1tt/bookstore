import { cartTypes } from "../constants/action.types";
import axios from "axios";
import storeConfig from "../config/storage.config";

export const setCart = (data) => ({
  type: cartTypes.SET_CART,
  data,
});

export const getCart = () => async (dispatch, getState) => {
  let cart = null;
  cart = storeConfig.getCart();
  if (cart !== null) {
    dispatch(setCart(cart));
    return;
  }
  if (storeConfig.getUser() === null) return;
  let id_user = storeConfig.getUser().id;
  try {
    cart = await axios.get(`${process.env.REACT_APP_API}/cart/` + id_user);
  } catch (err) {
    console.log(err);
    return;
  }
  if (cart.data.data !== null) {
    dispatch(setCart(cart.data.data.products));
  }
};

export const updateProductInCart = (product) => async (dispatch, getState) => {
  if (!getState().userReducers.login.islogin) {
    storeConfig.updateProductInCart(product);
  } else {
    try {
      await axios.post(`${process.env.REACT_APP_API}/cart/update`, {
        id_user: storeConfig.getUser().id,
        product: product,
      });
    } catch (err) {
      console.log(err.response);
    }
  }
  dispatch(getCart());
};
export const deteleProductInCart =
  (id_product) => async (dispatch, getState) => {
    if (!getState().userReducers.login.islogin) {
      storeConfig.deteleProductInCart(id_product);
    } else {
      try {
        await axios.post(`${process.env.REACT_APP_API}/cart/delete`, {
          id_user: storeConfig.getUser().id,
          id_product: id_product,
        });
      } catch (err) {
        console.log(err.response);
      }
    }
    dispatch(getCart());
  };

export const paymentSuccess = () => ({
  type: cartTypes.PAYMENT_SUCCESS,
});
export const paymentFail = () => ({
  type: cartTypes.PAYMENT_FAIL,
});
export const resetPayment = () => ({
  type: cartTypes.RESET_PAYMENT,
});
export const payment =
  (address, phone, name, total) => async (dispatch, getState) => {
    let res = null;
    try {
      console.log(total);
      console.log(address);
      console.log(phone);
      console.log(name);
      res = await axios.post(`${process.env.REACT_APP_API}/bill/add`, {
        id_user: storeConfig.getUser().id,
        email: storeConfig.getUser().email,
        address: address,
        phone: phone,
        name: name,
        total: total,
      });
    } catch (err) {
      console.log(total);
      console.log(address);
      console.log(phone);
      console.log(name);
      dispatch(paymentFail());
      console.log(err.response);
      dispatch(resetPayment());
      return;
    }
    dispatch(paymentSuccess());
    dispatch(resetPayment());
    dispatch(getCart());
  };
