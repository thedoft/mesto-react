import React from 'react';

function ImagePopup(props) {
  return (
    <div className={`popup popup_type_image ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <img className="popup__image" src={props.card.link} alt={props.card.name} />
          <p className="popup__subtitle">{props.card.name}</p>
        <button onClick={props.onClose} type="reset" className="popup__close-button" />
      </div>
    </div>
  )
}

export default ImagePopup;
