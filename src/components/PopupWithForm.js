import React from 'react';

function PopupWithForm(props) {
  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <form name={props.name} className="popup__form" noValidate>
        <h2 className="popup__title">{props.title}</h2>
        {props.children}
        <button type="submit" className="popup__submit-button">Сохранить</button>
        <button onClick={props.onClose} type="reset" className="popup__close-button"></button>
      </form>
    </div>
  )
}

export default PopupWithForm;
