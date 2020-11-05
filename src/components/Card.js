import React from 'react';

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <img className="element__image" alt={props.card.name} src={props.card.link} onClick={handleClick} />
      <div className="element__title-container">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__likes-container">
          <button type="button" className="element__like-button"></button>
          <p className="element__likes-count"></p>
        </div>
      </div>
      <button type="button" className="element__trash-button"></button>
    </li>
  )
}

export default Card;
