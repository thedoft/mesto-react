import React from 'react';

function ImagePopup() {
  return (
    <div className="popup popup_type_image">
      <div className="popup__container">
        <img className="popup__image" alt="#" />
        <p className="popup__subtitle"></p>
        <button type="reset" className="popup__close-button"></button>
      </div>
    </div>
  )
}

export default ImagePopup;
