import React from "react";
import "./Overlay.css";
import { assets } from "../../assets/assets";

function Overlay({
  handleClose,
  selectedImage,
  text,
  desc,
  star,
  nonStar,
  date,
  link,
}) {
  return (
    <div className="overlay">
      <div className="overlay-content">
        <span className="close-div" onClick={handleClose}>
          <img className="cross-icon" src={assets.cross} alt="" />
        </span>
        <img className="overlay-img" src={selectedImage} alt="" />
        <div className="text-div">
          <div className="text-date-div">
            <h1>{text}</h1>
            <p>{date}</p>
          </div>
          <ul>
            {desc.map((d) => (
              <li>{d}</li>
            ))}
          </ul>
          {link !== "" && <a href={link}>Github Link</a>}
          {[...Array(star)].map((x, i) => (
            <img className="star-img" key={i} src={assets.starGold} alt="" />
          ))}
          {[...Array(nonStar)].map((x, i) => (
            <img className="star-img" key={i} src={assets.star} alt="" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Overlay;
