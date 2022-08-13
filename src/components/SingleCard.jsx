import React from 'react';
import "./SingleCard.css"

const SingleCard = ({card, handleChoice, flipped,disabled}) => {
  const handleClick = () => {
    if(!disabled){
      handleChoice(card)
    }
  }

  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className='front' alt="card front" src={card.src}/>
        <img className='back' alt="card back" src="/img/cover.png" onClick={handleClick}/>
      </div>
    </div>
  );
};

export default SingleCard;
