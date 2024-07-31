import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

function Navbar() {
  return (
    <div className="navbar">
      <img className="navbar-img" src={assets.settings} alt="" />
      <div className="inner-navbar">
        <p>mepripri</p>
        <img src={assets.chevron} alt="" />
      </div>
      <div className="navbar-dot">
        <img className="navbar-img" src={assets.threads} alt="" />
        <div className="dot">
          <p>9+</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
