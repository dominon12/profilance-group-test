import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
// pages
import Home from "./Pages/Home";
import Feed from "./Pages/Feed";
// components
import Header from "./Organisms/Header";

/**
 * The main component with routing logic.
 *
 * @return {*}  {JSX.Element}
 */
function App() {
  return (
    <Router>
      <div className="document">
        <Header />

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
