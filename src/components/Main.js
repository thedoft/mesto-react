import React from 'react';

function Main(props) {
  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container">
            <img alt="Аватар" className="profile__avatar" />
            <button onClick={props.onEditAvatar} type="button" className="profile__edit-button profile__edit-button_type_avatar"></button>
          </div>
          <div className="profile__info">
            <div className="profile__title-container">
              <h1 className="profile__title">Somebody</h1>
              <button onClick={props.onEditProfile} type="button" className="profile__edit-button profile__edit-button_type_profile"></button>
            </div>
            <p className="profile__subtitle">Doing nothing</p>
          </div>
          <button onClick={props.onAddCard} type="button" className="profile__add-button"></button>
        </section>

        <section className="elements">
          <ul className="elements__list">
          </ul>
        </section>
      </main>
    </>
  )
}

export default Main;
