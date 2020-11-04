import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <>
      <Header />
      <Main />
      <Footer />

      <div class="popup popup_type_edit-avatar">
        <form name="edit-avatar-form" class="popup__form" novalidate>
          <fieldset class="popup__info">
            <legend class="popup__title">Обновить аватар</legend>
            <input name="avatar-input" type="url" class="popup__input popup__input_type_avatar" placeholder="Ссылка на картинку" required />
            <span class="popup__input-error" id="avatar-input-error"></span>
          </fieldset>
          <button type="submit" class="popup__submit-button">Сохранить</button>
          <button type="reset" class="popup__close-button"></button>
        </form>
      </div>

      <div class="popup popup_type_edit-profile">
        <form name="edit-profile-form" class="popup__form" novalidate>
          <fieldset class="popup__info">
            <legend class="popup__title">Редактирование профиля</legend>
            <input name="name-input" type="text" class="popup__input popup__input_type_name" placeholder="Имя" required minlength="2" maxlength="40" />
            <span class="popup__input-error" id="name-input-error"></span>
            <input name="job-input" type="text" class="popup__input popup__input_type_job" placeholder="Занятие" required minlength="2" maxlength="200" />
            <span class="popup__input-error" id="job-input-error"></span>
          </fieldset>
          <button type="submit" class="popup__submit-button">Сохранить</button>
          <button type="reset" class="popup__close-button"></button>
        </form>
      </div>

      <div class="popup popup_type_add-card">
        <form name="add-card-form" class="popup__form" novalidate>
          <fieldset class="popup__info">
            <legend class="popup__title">Новое место</legend>
            <input name="place-input" type="text" class="popup__input popup__input_type_place"  placeholder = 'Название' required minlength="1" maxlength="30" />
            <span class="popup__input-error" id="place-input-error"></span>
            <input name="link-input" type="url" class="popup__input popup__input_type_link" placeholder = 'Ссылка на картинку' required />
            <span class="popup__input-error" id="link-input-error"></span>
          </fieldset>
          <button type="submit" class="popup__submit-button">Сохранить</button>
          <button type="reset" class="popup__close-button"></button>
        </form>
      </div>

      <div class="popup popup_type_image">
        <div class="popup__container">
          <img class="popup__image" />
          <p class="popup__subtitle"></p>
          <button type="reset" class="popup__close-button"></button>
        </div>
      </div>

      <div class="popup popup_type_confirm">
        <form name="confirm-form" class="popup__form" novalidate>
          <h2 class="popup__title">Вы уверены?</h2>
          <button type="submit" class="popup__submit-button">Да</button>
          <button type="reset" class="popup__close-button"></button>
        </form>
      </div>

      <template id="element">
        <li class="element">
          <img class="element__image" />
          <div class="element__title-container">
            <h2 class="element__title"></h2>
            <div class="element__likes-container">
              <button type="button" class="element__like-button"></button>
              <p class="element__likes-count"></p>
            </div>
          </div>
          <button type="button" class="element__trash-button"></button>
        </li>
      </template>
    </>
  );
}

export default App;
