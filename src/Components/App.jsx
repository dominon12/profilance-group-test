import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
// pages
import Home from "./Pages/Home";
import Feed from "./Pages/Feed";

function App() {
  return (
    <Router>
      <div className="document">
        <div className="document__content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/feed" element={<Feed />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
