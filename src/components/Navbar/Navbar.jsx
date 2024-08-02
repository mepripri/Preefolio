import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

function Navbar() {
  return (
    <div className="navbar">
      <div className="inner-navbar">
        <p
          onClick={() =>
            (window.location = "https://www.linkedin.com/in/priyaldpatel/")
          }
        >
          priyaldpatel
        </p>
        <img
          src={assets.chevron}
          alt=""
          onClick={() =>
            (window.location = "https://www.linkedin.com/in/priyaldpatel/")
          }
        />
      </div>
    </div>
  );
}

export default Navbar;
