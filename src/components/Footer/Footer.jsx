import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

function Footer() {
  const navigate = useNavigate();
  return (
    <div className="footer">
      <div className="footer-div">
        <img
          className="footer-img footer-home"
          src={assets.home}
          alt=""
          onClick={() => navigate("/Preefolio")}
        />
      </div>
      <div className="footer-div">
        <img
          className="footer-img footer-menu"
          src={assets.menu}
          alt=""
          onClick={() => navigate("/Preefolio/feed")}
        />
      </div>
      <div className="footer-div">
        <img
          className="footer-img"
          src={assets.linkedin}
          alt=""
          onClick={() =>
            (window.location =
              "https://www.linkedin.com/in/priyal-patel-178ba31b1/")
          }
        />
      </div>
      <div className="footer-div">
        <img
          className="footer-img"
          src={assets.github}
          alt=""
          onClick={() => (window.location = "https://github.com/mepripri/")}
        />
      </div>
      <div className="footer-div">
        <img
          className="footer-img footer-profile"
          src={assets.profile_image}
          alt=""
          onClick={() => navigate("/Preefolio")}
        />
      </div>
    </div>
  );
}

export default Footer;
