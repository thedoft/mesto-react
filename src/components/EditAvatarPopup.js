import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup(props) {
  const avatar = React.useRef();

  function handleSubmit(evt) {
    evt.preventDefault();
    props.onUpdateAvatar({ avatar: avatar.current.value });
  }

  return (
    <PopupWithForm onSubmit={handleSubmit} onClose={props.onClose} name="edit-avatar" title="Обновить аватар" isOpen={props.isOpen}>
      <fieldset className="popup__info">
        <input ref={avatar} name="avatar-input" type="url" className="popup__input popup__input_type_avatar" placeholder="Ссылка на картинку" required />
        <span className="popup__input-error" id="avatar-input-error" />
      </fieldset>
    </PopupWithForm>
  )
}

export default EditAvatarPopup;
