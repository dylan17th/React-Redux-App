import React from "react";
import '../style/breakingbadcard.css'

const BreakBadCard = props => {
  return (
    <div className='card-container'>
      <h4 className='series'>{props.character.series}</h4>
      <div className='name'>{props.character.author}</div>
      <div>'{props.character.quote}'</div>
    </div>
  );
};

export default BreakBadCard;