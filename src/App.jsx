import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Footer from "./footer";
import Header from "./Header";
import About from "./components/About";
import Dishes from "./components/Dishes";
import Order from "./components/Order";
import Header_About from "./Header_About";
import Home from "./Home";
import Header_Lunches from "./components/Header_Lunches"

function App() {
  return (
    <div className="App-wrapper">
      <div className="App">
        <Routes>
          <Route path='*' element={<Header />} />
          <Route path='/about' element={<Header_About />} />
          <Route path='/lunches' element={<Header_Lunches />} />
        </Routes>
        <Routes>
          <Route path='*' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/lunches' element={<About />} />
          {/* <Route path="*" element={NotFoundPage} /> */}
        </Routes>
        <Dishes/>
        <Order/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
