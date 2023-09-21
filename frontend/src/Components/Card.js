import '../Card.css';
import React, { useState } from 'react';

function Card ({talent, onCheckout}) {
  const { title, image } = talent;

  const [count, setCount] = useState(0);
  const [showQuantityButtons, setShowQuantityButtons] = useState(false);

  const handleAddButtonClick = () => {
    setShowQuantityButtons(true);
    setCount(1);
    onCheckout(); // Panggil onCheckout untuk menjalankan tg.MainButton.onClick
  }
  
const [countAnimation, setCountAnimation] = useState(false);

  const handleDecreaseClick = () => {
  setCount(prev => {
    if (prev === 1) {
      setShowQuantityButtons(false);
    }
    setCountAnimation(true); // Aktifkan animasi count
    return Math.max(prev - 1, 0);
  });
}

const handleIncreaseClick = () => {
  setCount(prev => {
    setCountAnimation(true); // Aktifkan animasi count
    return prev + 1;
  });
}


  return ( 
    <div className="card">
      <div className="card_video" style={{position: 'relative'}}>
        <img className="image" src={image} alt="image" />
       {count > 0 && (
  <p 
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
