import { combineReducers } from "redux";
import cartReducers from "./cart.reducer";
import bookReducers from "./book.reducer";
import userReducers from "./user.reducer";
import purchaseReducers from "./purchase.reducer";
import profileReducers from "./profile.reducer";
import homeReducers from "./home.reducer";
export default combineReducers({
  bookReducers,
  userReducers,
  homeReducers,
  cartReducers,
  purchaseReducers,
  profileReducers,
});
