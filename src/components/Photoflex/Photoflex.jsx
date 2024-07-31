import React, { useState } from "react";
import "./Photoflex.css";
import { skill_images, exp_images, proj_images } from "../../assets/assets";
import Overlay from "../Overlay/Overlay";

function Photoflex({ tab }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [text, setText] = useState("");
  const [desc, setDesc] = useState([]);
  const [star, setStar] = useState(0);
  const [nonStar, setNonStar] = useState(0);
  const [date, setDate] = useState("");
  const [link, setLink] = useState("");

  const handleImgClick = (img) => {
    setSelectedImage(img.img);
    setText(img.name);
    setDesc(img.desc);
    setStar(img.star);
    setNonStar(img.nonStar);
    setDate(img.date);
    setLink(img.link);
  };

  const handleClose = () => {
    setSelectedImage(null);
    setText("");
    setDesc([]);
    setStar(0);
    setNonStar(0);
    setDate("");
    setLink("");
  };

  return (
    <div>
      {tab === "experience" && (
        <div className="photoflex">
          {exp_images.map((img, i) => (
            <div
              key={i}
              className="photoflex-item"
              onClick={() => handleImgClick(img)}
            >
              <img src={img.img} alt="" />
            </div>
          ))}
        </div>
      )}
      {tab === "projects" && (
        <div className="photoflex">
          {proj_images.map((img, i) => (
            <div
              key={i}
              className="projects"
              onClick={() => handleImgClick(img)}
            >
              <img src={img.img} alt="" />
            </div>
          ))}
        </div>
      )}
      {tab === "skills" && (
        <div className="photoflex">
          {skill_images.map((img, i) => (
            <div
              key={i}
              className="photoflex-item"
              onClick={() => handleImgClick(img)}
            >
              <img src={img.img} alt="" />
            </div>
          ))}
        </div>
      )}

      {selectedImage && (
        <Overlay
          handleClose={handleClose}
          selectedImage={selectedImage}
          text={text}
          desc={desc}
          star={star}
          nonStar={nonStar}
          date={date}
          link={link}
        />
      )}
    </div>
  );
}

export default Photoflex;
