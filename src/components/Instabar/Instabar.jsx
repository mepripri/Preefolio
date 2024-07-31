import React, { useState } from "react";
import "./Instabar.css";
import Photoflex from "../Photoflex/Photoflex";

function Instabar() {
  const [select, setSelect] = useState("experience");
  return (
    <div>
      <div className="insta-bar">
        <div
          className={
            select === "experience" ? "insta-bar-item active" : "insta-bar-item"
          }
          onClick={() => setSelect("experience")}
        >
          EXPERIENCE
        </div>
        <div
          className={
            select === "projects" ? "insta-bar-item active" : "insta-bar-item"
          }
          onClick={() => setSelect("projects")}
        >
          PROJECTS
        </div>
        <div
          className={
            select === "skills" ? "insta-bar-item active" : "insta-bar-item"
          }
          onClick={() => setSelect("skills")}
        >
          SKILLS
        </div>
      </div>
      {select === "skills" && <Photoflex tab="skills" />}
      {select === "experience" && <Photoflex tab="experience" />}
      {select === "projects" && <Photoflex tab="projects" />}
    </div>
  );
}

export default Instabar;
