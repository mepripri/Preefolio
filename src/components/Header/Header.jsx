import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";
import resume from "../../assets/Resume.pdf";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <div className="header">
      <div className="header_img">
        <img className="active" src={assets.profile_image} alt="" />
      </div>
      <div className="header-contents">
        <h2>PRIYAL PATEL</h2>
        <div className="header-btn-span">
          <span className="header-id" onClick={() => navigate("/feed")}>
            @mepripri
          </span>
          <button>
            <a href={resume} target="_blank" rel="noreferrer">
              Download Resume
            </a>
          </button>
        </div>
        <h1>
          Here <span>CrEAtiVity</span> Meets <span>&#x003C;Code/&#x003E;</span>
        </h1>
        <div className="header-bio">
          <p className="header-bio-text">👨‍💻 Frontend Developer</p>
          <p className="header-bio-text">🎨 Creative Coder</p>
          <p className="header-bio-text">
            🎓 Graduate Student at Saint Louis University '24
          </p>
          <p className="header-bio-text">📍 Saint Louis, MO, 63108</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
