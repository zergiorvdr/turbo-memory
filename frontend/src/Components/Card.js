import '../Card.css';
import React, { useState } from 'react';

function Card ({ talent, onCheckout, updateCount }) {
  const { title, image } = talent;

  const [count, setCount] = useState(0);
  const [showQuantityButtons, setShowQuantityButtons] = useState(false);
  const [countAnimation, setCountAnimation] = useState(false);

  const handleAddButtonClick = () => {
    setShowQuantityButtons(true);
    setCount(1);
    updateCount(1);
    onCheckout(1); 
  }

  const handleDecreaseClick = () => {
    setCount(prev => {
      setCountAnimation(true);
      const newCount = Math.max(prev - 1, 0);
      updateCount(newCount); // Memperbarui nilai count di komponen Card.js
      onCheckout(newCount); // Mengirimkan nilai terakhir dari Card.js ke onCheckout
      return newCount;
    });
  }

  const handleIncreaseClick = () => {
    setCount(prev => {
      setCountAnimation(true);
      const newCount = prev + 1;
      updateCount(newCount); // Memperbarui nilai count di komponen Card.js
      onCheckout(newCount); // Mengirimkan nilai terakhir dari Card.js ke onCheckout
      return newCount;
    });
  }

  return ( 
    <div className="card">
      <div className="card_video" style={{position: 'relative'}}>
        <img className="image" src={image} alt="image" />
        {count > 0 && (
          <div
            className={`count ${countAnimation ? 'count-animation' : ''}`}
            style={{
              position: 'absolute',
              fontSize: '20px',
              top: 0,
              right: 0,
              width: '20px',
              height: '20px',
              background: 'orange',
              padding: '4px',
              borderRadius: '9999px',
              color: 'white',
              animation: `${countAnimation ? 'bounce' : 'none'} 0.5s`,
            }}>
            {count}
          </div>
        )}
        <p className="card_title"> 
          {title}
        </p>
        {showQuantityButtons ? (
          <div className="kuantitas">
            <button onClick={handleDecreaseClick} className="button_kurang">-</button>
            <span>{count}</span>
            <button onClick={handleIncreaseClick} className="button_tambah">+</button> 
          </div>
        ) : null}
        {count === 0 && (
          <button className="ADD" onClick={handleAddButtonClick}>
            ADD
          </button>
        )}
      </div>
    </div>
  ) 
}

export default Card;
