import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Feed from "./pages/Feed/Feed";
import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/Preefolio" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Preefolio/feed" element={<Feed />} />
        <Route path="/Preefolio/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
