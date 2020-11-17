import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import { api } from '../utils/api';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddCardPopupOpen, setIsAddCardPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(<></>);
  const [currentUser, setCurrentUser] = React.useState({});

  React.useEffect(() => {
    api.getUserData()
      .then(userData => {
        setCurrentUser(userData);
      })
      .catch(err => {
        console.log(err);
      });
  });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddCardClick() {
    setIsAddCardPopupOpen(true);
  }

  function handleCardClick(card) {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddCardPopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard(<></>);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddCard={handleAddCardClick}
        onCardClick={handleCardClick} />
      <Footer />

      <ImagePopup onClose={closeAllPopups} card={selectedCard} isOpen={isImagePopupOpen} />

      <PopupWithForm onClose={closeAllPopups} name="confirm" title="Вы уверены?" />

      <PopupWithForm onClose={closeAllPopups} name="edit-avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen}>
        <fieldset className="popup__info">
          <input name="avatar-input" type="url" className="popup__input popup__input_type_avatar" placeholder="Ссылка на картинку" required />
          <span className="popup__input-error" id="avatar-input-error" />
        </fieldset>
      </PopupWithForm>

      <PopupWithForm onClose={closeAllPopups} name="edit-profile" title="Редактирование профиля" isOpen={isEditProfilePopupOpen}>
        <fieldset className="popup__info">
          <input name="name-input" type="text" className="popup__input popup__input_type_name" placeholder="Имя" required minLength="2" maxLength="40" />
          <span className="popup__input-error" id="name-input-error" />
          <input name="job-input" type="text" className="popup__input popup__input_type_job" placeholder="Занятие" required minLength="2" maxLength="200" />
          <span className="popup__input-error" id="job-input-error" />
        </fieldset>
      </PopupWithForm>

      <PopupWithForm onClose={closeAllPopups} name="add-card" title="Новое место" isOpen={isAddCardPopupOpen}>
        <fieldset className="popup__info">
          <input name="place-input" type="text" className="popup__input popup__input_type_place"  placeholder = 'Название' required minLength="1" maxLength="30" />
          <span className="popup__input-error" id="place-input-error" />
          <input name="link-input" type="url" className="popup__input popup__input_type_link" placeholder = 'Ссылка на картинку' required />
          <span className="popup__input-error" id="link-input-error" />
        </fieldset>
      </PopupWithForm>
    </CurrentUserContext.Provider>
  );
}

export default App;
