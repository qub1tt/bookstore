import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import { thunk } from "redux-thunk";
import reducers from "./reducers";
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger, thunk),
});

const root = ReactDOM.createRoot(document.getElementById("app"));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
