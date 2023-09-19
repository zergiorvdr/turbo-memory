import React, { useState } from 'react';
import '../Card.css';

function Card ({talent}) {
  const [isActive, setIsActive] = useState(false);
  const [count, setCount] = useState(0);
  const { title, image, id } = talent;

  const toggleHover = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`card ${isActive ? 'active' : ''}`} onClick={toggleHover}>
      <span className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}>
        {count}
      </span>
      <div className="card_video">
        <img className="image"src={image} alt="image" />
        <h4 className="card_title"> 
          {title}
        </h4>
      </div>
    </div>
  ) 
}

export default Card;
