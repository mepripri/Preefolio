import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

function Navbar() {
  return (
    <div className="navbar">
      <div className="inner-navbar">
        <p
          onClick={() =>
            (window.location =
              "https://www.linkedin.com/in/priyal-patel-178ba31b1/")
          }
        >
          priyal-patel
        </p>
        <img src={assets.chevron} alt="" />
      </div>
    </div>
  );
}

export default Navbar;
