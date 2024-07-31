import React, { useState } from "react";
import "./Highlights.css";
import { highlight_list } from "../../assets/assets";

function Highlights() {
  const [storyHighlights, setStoryHighlights] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentHighlight, setCurrentHighlight] = useState(null);

  const addStoryHighlight = (item) => {
    setStoryHighlights((prevHighlights) => [...prevHighlights, item]);
  };

  const openModal = (highlight) => {
    setCurrentHighlight(highlight);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentHighlight(null);
    setIsModalOpen(false);
  };

  return (
    <div className="highlights">
      <div className="highlight-menu" id="highlight-menu">
        <div className="highlight-menu-list">
          {highlight_list.map((item, index) => (
            <div key={index} className="highlight-menu-list-item">
              <img 
                className="active" 
                src={item.highlight_image} 
                alt={item.highlight_name} 
                onClick={() => openModal(item)} 
              />
              <p>{item.highlight_name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="story-highlights">
        <h2>Story Highlights</h2>
        {storyHighlights.map((highlight, index) => (
          <div key={index} className="story-highlight-item">
            <img src={highlight.highlight_image} alt={highlight.highlight_name} />
            <p>{highlight.highlight_name}</p>
          </div>
        ))}
      </div>
      {isModalOpen && currentHighlight && (
        <div className="modal" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={currentHighlight.highlight_image} alt={currentHighlight.highlight_name} />
            <p>{currentHighlight.highlight_name}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Highlights;
