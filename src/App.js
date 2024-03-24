import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";

const App = () => {
  return (
    <div className="scr">
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
};

export default App;
