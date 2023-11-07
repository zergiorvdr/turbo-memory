import React, { useState } from 'react';
import '../Card.css'
//import image1 from '../images/viu.jpg'

function Card({ title, image }) {
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
      <div className="card_video" style={{ position: 'relative' }}>
        <img className="image" src={image} alt={title} />
        {count > 0 && (
          <p
            style={{
              position: 'absolute',
              fontSize: '12px',
              top: 0,
              right: 0,
              width: '12px',
              background: '#383838' ,
              padding: '4px',
              borderRadius: '9999px',
              color: 'white',
              marginRight: '2px'
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
