import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

function Navbar() {
  return (
    <div className="navbar">
      <div className="inner-navbar">
        <p>mepripri</p>
        <img src={assets.chevron} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
