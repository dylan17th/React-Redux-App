import React from "react";
import '../style/breakingbadcard.css'

const BreakBadCard = props => {
  return (
    <div className='card-container'>
      <h3>{props.character.series}</h3>
      <h4>{props.character.author}</h4>
      <div>{props.character.quote}</div>
    </div>
  );
};

export default BreakBadCard;