import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home/home.js";
import About from "./screens/about-us/about-us.js";
import Involve from "./screens/get-involved/get-involved.js";
import Share from "./screens/share-your-story/share-your-story.js";
import Updates from "./screens/news-updates/news-updates.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/update" element={<Updates />} />
          <Route path="/contact" element={<Involve />} />
          <Route path="/share" element={<Share />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
