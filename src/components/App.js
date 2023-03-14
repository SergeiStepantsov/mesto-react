
import '../index.css';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import ImagePopup from './ImagePopup';
import PopupWithForm from './PopupWithForm';
import React from 'react';

function App() {
  const[isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState();
  const[isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState();
  const[isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState();
  const[selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true)
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true)
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true)
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});  
  }

  function handleCardClick(link, name) {
    setSelectedCard({
      link: link,
      name: name
    })
  }
  return (
    
    <div className="page">
      <Header/>
      <Main 
      onEditAvatar={handleEditAvatarClick}
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onCardClick={handleCardClick}

      />
      <Footer/>
      
      <PopupWithForm
        name="edit-profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}>  
        <input className="form__input form__input_field_name" id="profile-name" placeholder="Введите Ваше имя" type="text" name="name" minLength="2" maxLength="40" required />
          <span className="form__input-error" id="profile-name-error"></span>
        <input className="form__input form__input_field_activity" id="profile-activity" placeholder="Ведите Вашу сферу деятельности" type="text" name="about" minLength="2" maxLength="200" required />
          <span className="form__input-error" id="profile-activity-error"></span>
      </PopupWithForm>
      
      <PopupWithForm 
        name="add-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}>
        <input className="form__input form__input_field_place" id="card-name" placeholder="Название" type="text" name="name" minLength="2" maxLength="30" required />
          <span className="form__input-error" id="card-name-error"></span>
        <input className="form__input form__input_field_link" id="card-link" placeholder="Ссылка на картинку" type="url" name="link" required />
          <span className="form__input-error" id="card-link-error"></span>
      </PopupWithForm> 
      <PopupWithForm 
        name="delete-card"
        title="Вы уверены?">
      </PopupWithForm> 
      <PopupWithForm 
        name="edit-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}>
        <input className="form__input form__input_field_avatar" id="avatar-link" placeholder="Ссылка на картинку" type="url" name="avatar" required />
          <span className="form__input-error" id="avatar-link-error"></span>
      </PopupWithForm> 

      <ImagePopup
        onClose={closeAllPopups}
        card={selectedCard}
        link={selectedCard}
        isOpen={selectedCard}
      >
      </ImagePopup>
    </div>
  );
}
export default App;

