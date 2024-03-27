import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import BookDetailsPage from "./pages/BookDetails";
import Cart from "./pages/Cart/Cart";
import Profile from "./pages/Profile/Profile";
import Order  from "./pages/Profile/Order";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-details/:id" element={<BookDetailsPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
};

export default App;
