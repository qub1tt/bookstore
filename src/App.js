import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/HomePage";
import BookDetailsPage from "./pages/BookDetails";
import Cart from "./pages/Cart";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/book-details/:id" element={<BookDetailsPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;

