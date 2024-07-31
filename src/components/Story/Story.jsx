import React from "react";
import "./Story.css";
import { certificate_list } from "../../assets/assets";

function Story() {
  return (
    <div className="story">
      {certificate_list.map((cer, i) => (
        <img src={cer} alt=""/>
      ))}
    </div>
  );
}

export default Story;
