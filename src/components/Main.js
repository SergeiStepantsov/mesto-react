import profileEditIcon from '../images/pen.svg';
import addIcon from '../images/plus.svg';
//import waitImg from '../images/waiting-user-info.png';
import React from 'react';
import Api from '../utils/Api';
import Card from './Card';

function Main(props) {

  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();
  const [cards, setCards] = React.useState([]);


  React.useEffect(() => {
    Api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => console.log(err))
  }, [])
  
  React.useEffect(() => {
    Api.getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err))
  }, [])


  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar">
          <button className="profile__avatar-edit" onClick={props.onEditAvatar}></button>
          <img className="profile__avatar-img" src={userAvatar} alt="" />
        </div>

        <div className="profile__info">
          <div className="profile__info-conteiner">
            <h1 className="profile__name">{userName}</h1>
            <button className="profile__edit-button" type="button" onClick={props.onEditProfile} aria-label="Кнопка редактирования профиля">
              <img className="profile__edit-button-pen" src={profileEditIcon} aria-label="Кнопка редактирования аватара" />
            </button>
          </div>
          <p className="profile__activity">{userDescription}</p>
        </div>
        <button className="profile__add-button" type="button" onClick={props.onAddPlace}>
          <img className="profile__add-button-plus" src={addIcon} aria-label="Кнопка добваления карточки" />
        </button>
      </section>

      <section className="elements">
      {cards.map((card) => (
            <Card 
              key={card._id}
              name={card.name}
              link={card.link}
              likes={card.likes}
              onCardClick={props.onCardClick}
              card={card}
            >
            </Card>
          ))}

      </section>
    </main>
  )
}

export default Main;