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
        <div className="text-date-div">
          <div className="text-cross-div">
            <h1>{text}</h1>
            <span className="close-div" onClick={handleClose}>
              <img className="cross-icon" src={assets.crossWhite} alt="" />
            </span>
          </div>
          {date !== "" && (
            <div className="date-div">
              <p>{date}</p>
            </div>
          )}
        </div>
        <img className="overlay-img" src={selectedImage} alt="" />
        <div className="text-div">
          {desc.length !== 0 && (
            <ul>{desc.length !== 0 && desc.map((d) => <li>{d}</li>)} </ul>
          )}
          {link !== "" && (
            <div className="link-div">
              <a href={link}>Github Link</a>
            </div>
          )}
          {(star !== 0 || nonStar !== 0) && (
            <div className="star-div">
              {star !== 0 &&
                [...Array(star)].map((x, i) => (
                  <img
                    className="star-img"
                    key={i}
                    src={assets.starGold}
                    alt=""
                  />
                ))}
              {nonStar !== 0 &&
                [...Array(nonStar)].map((x, i) => (
                  <img className="star-img" key={i} src={assets.star} alt="" />
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Overlay;
