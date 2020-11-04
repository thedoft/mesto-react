import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import PopupWithImage from './PopupWithImage';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddCardClick() {
    setIsAddCardPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
  }

  return (
    <>
      <Header />
      <Main onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddCard={handleAddCardClick} />
      <Footer />
      <PopupWithImage />
      <PopupWithForm onClose={closeAllPopups} name="confirm" title="Вы уверены?" />

      <PopupWithForm onClose={closeAllPopups} name="edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen}>
        <fieldset className="popup__info">
          <input name="avatar-input" type="url" className="popup__input popup__input_type_avatar" placeholder="Ссылка на картинку" required />
          <span className="popup__input-error" id="avatar-input-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm onClose={closeAllPopups} name="edit-profile" title="Редактирование профиля" isOpen={isEditProfilePopupOpen}>
        <fieldset className="popup__info">
          <input name="name-input" type="text" className="popup__input popup__input_type_name" placeholder="Имя" required minLength="2" maxLength="40" />
          <span className="popup__input-error" id="name-input-error"></span>
          <input name="job-input" type="text" className="popup__input popup__input_type_job" placeholder="Занятие" required minLength="2" maxLength="200" />
          <span className="popup__input-error" id="job-input-error"></span>
        </fieldset>
      </PopupWithForm>

      <PopupWithForm onClose={closeAllPopups} name="add-card" title="Новое место" isOpen={isAddCardPopupOpen}>
        <fieldset className="popup__info">
          <input name="place-input" type="text" className="popup__input popup__input_type_place"  placeholder = 'Название' required minLength="1" maxLength="30" />
          <span className="popup__input-error" id="place-input-error"></span>
          <input name="link-input" type="url" className="popup__input popup__input_type_link" placeholder = 'Ссылка на картинку' required />
          <span className="popup__input-error" id="link-input-error"></span>
        </fieldset>
      </PopupWithForm>

      <template id="element">
        <li className="element">
          <img className="element__image" alt="#"/>
          <div className="element__title-container">
            <h2 className="element__title"> </h2>
            <div className="element__likes-container">
              <button type="button" className="element__like-button"></button>
              <p className="element__likes-count"></p>
            </div>
          </div>
          <button type="button" className="element__trash-button"></button>
        </li>
      </template>
    </>
  );
}

export default App;
