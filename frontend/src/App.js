import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./screens/home/home.js";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/updates" element={<Updates />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/share" element={<Share />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
