import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = props.card.owner._id === currentUser._id;
  const cardTrashButtonClassName = (
    `element__trash-button ${isOwn ? '' : 'element__trash-button_hidden'}`
  );
  const isLiked = props.card.likes.some(user => user._id === currentUser._id);
  const cardLikeButtonClassName = (
    `element__like-button ${isLiked ? 'element__like-button_active' : ''}`
  );

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element">
      <img className="element__image" alt={props.card.name} src={props.card.link} onClick={handleClick} />
      <div className="element__title-container">
        <h2 className="element__title">{props.card.name}</h2>
        <div className="element__likes-container">
          <button type="button" className={cardLikeButtonClassName} />
          <p className="element__likes-count"></p>
        </div>
      </div>
      <button type="button" className={cardTrashButtonClassName} />
    </li>
  )
}

export default Card;
