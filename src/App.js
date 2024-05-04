import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useParams } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import BooksDetailContainer from "./containers/book.detail.container";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
import Order from "./pages/Profile/Order";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book/:id" element={<BooksDetailContainer/>} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </Router>
  );
};

export default App;
