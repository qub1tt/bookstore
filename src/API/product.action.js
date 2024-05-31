import axios from "axios";
import { productTypes } from "../constants/action.types";
import storeConfig from "../config/storage.config";
export const getBookDetail = (id) => async (dispatch) => {
  let res;
  try {
    res = await axios.get("http://localhost:8080/book/" + id);
  } catch (err) {
    return;
  }
  dispatch(setProductDetail(res.data.data));
};

export const getBookRelated = (id) => async (dispatch) => {
  let res;
  try {
    res = await axios.get("http://localhost:8080/book/related/" + id);
  } catch (err) {
    return;
  }
  dispatch(setBookRelated(res.data.data));
};
export const getNameCategoryByID = (id) => async (dispatch) => {
  let res;
  try {
    res = await axios.get("http://localhost:8080/category/name/" + id);
  } catch (err) {
    return;
  }
  dispatch(setNameCategory(res.data.name));
};
export const getNamePublisherByID = (id) => async (dispatch) => {
  let res;
  try {
    res = await axios.get("http://localhost:8080/publisher/name/" + id);
  } catch (err) {
    return;
  }

  dispatch(setNamePubliser(res.data.name));
};
export const getNameAuthorByID = (id) => async (dispatch) => {
  let res;
  try {
    res = await axios.get("http://localhost:8080/author/name/" + id);
  } catch (err) {
    return;
  }

  dispatch(setNameAuthor(res.data.name));
};
export const setProductDetail = (productDetail) => ({
  type: productTypes.SET_PRODUCT_DETAIL,
  productDetail,
});
export const setNameCategory = (name) => ({
  type: productTypes.SET_NAME_CATEGORY,
  name,
});
export const setNamePubliser = (name) => ({
  type: productTypes.SET_NAME_PUBLICSHER,
  name,
});

export const setBookRelated = (bookrelated) => ({
  type: productTypes.SET_BOOK_RELATED,
  bookrelated,
});
export const setNameAuthor = (name) => ({
  type: productTypes.SET_NAME_AUTHOR,
  name,
});

export const submitComment = (name, comment, id_book) => async (dispatch) => {
  let id = null;
  if (storeConfig.getUser() && storeConfig.getUser().id)
    id = storeConfig.getUser().id;
  let res;
  try {
    res = await axios.post(`${process.env.REACT_APP_API}/comment`, {
      id_user: id,
      id_book: atob(id_book),
      name: name,
      comment: comment,
    });
  } catch (err) {
    console.log(JSON.stringify(err.response));
    return;
  }
  dispatch(getCommentByIDBook(id_book));
};

export const getCommentByIDBook = (id) => async (dispatch, getState) => {
  let res;
  try {
    res = await axios.post(`${process.env.REACT_APP_API}/comment/book`, {
      id_book:atob(id),
    });
  } catch (err) {
    console.log(JSON.stringify(err.response));
    return;
  }
  dispatch(setComment(res.data.data));
};
export const setComment = (data) => ({
  type: productTypes.SET_COMMENT,
  data,
});

export const addToCart = (product) => async (dispatch, getState) => {
  if (getState().userReducers.login.islogin) {
    let res;
    try {
      res = await axios.post(`${process.env.REACT_APP_API}/cart/addtocart`, {
        id_user: storeConfig.getUser().id,
        products: [product],
      });
      // Dispatch an action to update the state after the operation is completed
      dispatch({ type: "ADD_TO_CART_SUCCESS", payload: res.data.data });
    } catch (err) {
      console.log(JSON.stringify(err.response));
      // Dispatch an action for error handling if needed
      dispatch({ type: "ADD_TO_CART_ERROR", payload: err });
      return;
    }
  } else {
    storeConfig.addProductToCart(product);
    // Dispatch an action if needed for the non-logged in scenario
    dispatch({ type: "ADD_TO_CART_NON_LOGGED_IN", payload: product });
  }
};
