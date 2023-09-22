import React, { useState, useEffect } from 'react';
import '../Card.css';

function Card ({talent}) {
  const { title, image, id } = talent;

  const [count, setCount] = useState(0);
  const [showQuantityButtons, setShowQuantityButtons] = useState(false);

  const handleAddButtonClick = () => {
    setShowQuantityButtons(true);
    setCount(1);
  }

  const handleDecreaseClick = () => {
    setCount(prev => {
      if (prev === 1) {
        setShowQuantityButtons(false);
      }
      return Math.max(prev - 1, 0);
    });
  }

  const handleIncreaseClick = () => {
    setCount(prev => prev + 1);
  }

  return ( 
    <div className="card">
      <div className="card_video" style={{position: 'relative'}}>
        <img className="image" src={image} alt="image" />
        {count > 0 && (
          <p 
            style={{
              position: 'absolute',
              fontSize: '10px',
              top: 0,
              right: 0,
              width: '10px',
              background: 'orange',
              padding: '4px',
              borderRadius: '9999px',
              color: 'white'
            }}>
            {count}
          </p>
        )}
        <p className="card_title"> 
          {title}
        </p>
        {showQuantityButtons ? (
          <div className="kuantitas">
            <button onClick={handleDecreaseClick} className="button_kurang">-</button>
            <button onClick={handleIncreaseClick} className="button_tambah">+</button> 
          </div>
        ) : (
          <button className="ADD" onClick={handleAddButtonClick}>
           ADD
          </button>
        )}
      </div>
    </div>
  ) 
}

export default Card;
