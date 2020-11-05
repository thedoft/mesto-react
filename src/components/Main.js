import React from 'react';
import { api } from '../utils/api';
import Card from './Card';

function Main(props) {
  const [userAvatar, setUserAvatar] = React.useState();
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getUserData()
      .then(userData => {
        setUserAvatar(userData.avatar);
        setUserName(userData.name);
        setUserDescription(userData.about);
      })
      .catch(err => {
        console.log(err);
      });
  });

  React.useEffect(() => {
    api.getInitialCards()
      .then(initialCards => {
        setCards(initialCards);
      })
      .catch(err => {
        console.log(err);
      });
  });

  return (
    <>
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container">
            <img alt="Аватар" className="profile__avatar" src={userAvatar} />
            <button onClick={props.onEditAvatar} type="button" className="profile__edit-button profile__edit-button_type_avatar"></button>
          </div>
          <div className="profile__info">
            <div className="profile__title-container">
              <h1 className="profile__title">{userName}</h1>
              <button onClick={props.onEditProfile} type="button" className="profile__edit-button profile__edit-button_type_profile"></button>
            </div>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button onClick={props.onAddCard} type="button" className="profile__add-button"></button>
        </section>

        <section className="elements">
          <ul className="elements__list">
            {cards.map(card => (
              <Card card={card} key={card._id} onCardClick={props.onCardClick} />
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}

export default Main;
