import React from 'react';

function Main() {
  function handleEditAvatarClick() {
      document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened');
  }

  function handleEditProfileClick() {
    document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
  }

  function handleAddCardClick() {
    document.querySelector('.popup_type_add-card').classList.add('popup_opened');
  }

  return (
    <>
      <main class="content">
        <section class="profile">
          <div class="profile__avatar-container">
            <img alt="Аватар" class="profile__avatar" />
            <button onClick={handleEditAvatarClick} type="button" class="profile__edit-button profile__edit-button_type_avatar"></button>
          </div>
          <div class="profile__info">
            <div class="profile__title-container">
              <h1 class="profile__title">Somebody</h1>
              <button onClick={handleEditProfileClick} type="button" class="profile__edit-button profile__edit-button_type_profile"></button>
            </div>
            <p class="profile__subtitle">Doing nothing</p>
          </div>
          <button onClick={handleAddCardClick} type="button" class="profile__add-button"></button>
        </section>

        <section class="elements">
          <ul class="elements__list">
          </ul>
        </section>
      </main>
    </>
  )
}

export default Main;
