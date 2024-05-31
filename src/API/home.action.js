import axios from "axios";
import { homeTypes, sortTypes } from "../constants/action.types";
export const getCategory = () => async (dispatch, getState) => {
  let res;
  try {
    res = await axios.get(`'${process.env.REACT_APP_API}/category'`);
  } catch (err) {
    return;
  }
  dispatch(setCategory(res.data.data));
};

export const getPublisher = () => async (dispatch, getState) => {
  let res;
  try {
    res = await axios.get(`'${process.env.REACT_APP_API}/publisher'`);
  } catch (err) {
    return;
  }
  dispatch(setPublisher(res.data.data));
};

export const getAuthor = () => async (dispatch, getState) => {
  let res;
  try {
    res = await axios.get(`'${process.env.REACT_APP_API}/author'`);
  } catch (err) {
    return;
  }
  dispatch(setAuthor(res.data.data));
};


export const setBook = (data) => ({
  type: homeTypes.SET_BOOK,
  data,
});
export const setPage = (page) => ({
  type: homeTypes.SET_PAGE,
  page,
});
export const setTotalPage = (totalpage) => ({
  type: homeTypes.SET_TOTAL_PAGE,
  totalpage,
});
export const setCategory = (data) => ({
  type: homeTypes.SET_CATEGORY_BOOK,
  data,
});

export const setPublisher = (data) => ({
  type: homeTypes.SET_PUBLISHSER,
  data,
});

export const setAuthor = (data) => ({
  type: homeTypes.SET_AUTHOR,
  data,
});
