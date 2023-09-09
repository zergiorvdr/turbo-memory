import React, { useState } from 'react';
import '../Card.css';

function Card ({talent}) {
  const [count, setCount] = useState(0);
  const { title, image, price, id } = talent;
  return (
    <div className="card">
      <span
      className={`${count !== 0 ? "card__badge" : "card__badge--hidden"}`}>
       {count}
      </span>
       <div className="card_video"> 
         <img src={image} alt="image" className="img" /> 
       </div>
         <h4 className="card_title"> 
           {title} <span className="price">{price} </span>
         </h4>
    </div>
     ) 
}

export default Card;