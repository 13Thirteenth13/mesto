import './index.css';

import {
  validSet, formPopupEdit, formPopupAdd, buttonProfileEdit, buttonPopupAdd,
  buttonEditAvatar, inputNamePopupEdit, inputDescriptionPopupEdit, popupEdit, popupAdd,
  popupView, popupEditAvatar, formPopupEditAvatar, popupConfirm, cardTemplate, cardsContainer
} from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import UserInfo from '../components/UserInfo.js';
import Api from '../components/Api.js';

//API
const api = new Api({
  url: 'https://mesto.nomoreparties.co/v1/cohort-48',
  headers: {
    authorization: '2e8fc64d-f56b-4a8b-9573-f07d48d61f79',
    'Content-Type': 'application/json'
  }
});

let userId = null;

//загрузка готовых карточек и данных пользователя с сервера
Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    userId = userData._id;

    profile.setUserInfo(userData);
    profile.setUserAvatar(userData);

    initialCards.reverse();
    cards.renderItems(initialCards);
  }
  )
  .catch((err) => {
    console.log(err);
  });

const cards = new Section({
  items: [],
  renderer: (items) => {
    const card = createNewCard(items);
    cards.addItem(card);
  }
}, cardsContainer);

//экземпляр с данными профиля
const profile = new UserInfo({
  profileName: '.profile__name',
  profileDescription: '.profile__description',
  profileAvatar: '.profile__avatar'
});

//поп ап редактирования профиля
const popupEditProfile = new PopupWithForm(popupEdit, {
  handleSubmitForm: (data) => {
    popupEditProfile.renderLoading(true);
    api.updateUserInfo(data)
      .then((res) => {
        profile.setUserInfo(res);
        popupEditProfile.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditProfile.renderLoading(false);
      })
  }
});

//заполнение инпутов формы редактирования профиля
function setDataInputsProfile() {
  const userData = profile.getUserInfo();
  inputNamePopupEdit.value = userData.userName;
  inputDescriptionPopupEdit.value = userData.userInfo;
};

popupEditProfile.setEventListeners();

//слушатель кнопки редактирования профиля
buttonProfileEdit.addEventListener('click', () => {
  setDataInputsProfile();
  popupEditProfile.open();
  profileValidator.toggleButtonState();
  profileValidator.resetValidation();
});

//поп ап редактирование аватара
const popupEditUserAvatar = new PopupWithForm(popupEditAvatar, {
  handleSubmitForm: (data) => {
    popupEditUserAvatar.renderLoading(true);
    api.updateAvatar(data)
      .then((res) => {
        profile.setUserAvatar(res);
        popupEditUserAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupEditUserAvatar.renderLoading(false);
      })
  }
});

popupEditUserAvatar.setEventListeners();

//обработчик кнопки поп апа редактирования аватара
buttonEditAvatar.addEventListener('click', () => {
  popupEditUserAvatar.open();
  avatarValidator.toggleButtonState();
  avatarValidator.resetValidation();
});

//поп ап добавления новой карточки
const popupAddCard = new PopupWithForm(popupAdd, {
  handleSubmitForm: (data) => {
    popupAddCard.renderLoading(true);
    api.sendCard(data)
      .then((data) => {
        const card = createNewCard(data);
        cards.addItem(card);
        popupAddCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        popupAddCard.renderLoading(false);
      })
  }
});

popupAddCard.setEventListeners();

//обработчик кнопки поп апа добавления новой карточки
buttonPopupAdd.addEventListener('click', () => {
  popupAddCard.open();
  addCardValidator.toggleButtonState();
  addCardValidator.resetValidation();
});

////поп ап подтверждение удаления карточки
const popupDeleteCard = new PopupWithConfirm(popupConfirm, {
  handleSubmit: (data) => {
    api.deleteCard(data)
      .then(() => {
        popupDeleteCard.close();
      })
      .catch((err) => {
        console.log(err);
      })
  }
})

popupDeleteCard.setEventListeners();

//поп ап просмотр изображения
const popupViewImage = new PopupWithImage(popupView);

popupViewImage.setEventListeners();

//создание новой карточки
const createNewCard = (data) => {
  const card = new Card({
    data, userId,
    handleCardClick: () => {
      popupViewImage.open(data.name, data.link);
    },
    handleDeleteClick: () => {
      popupDeleteCard.open();
      popupDeleteCard.handleSubmitConfirm(() => {
        api.deleteCard(card._id)
          .then(() => {
            card.deleteCard();
            popupDeleteCard.close();
          })
          .catch((err) => {
            console.log(err);
          })
      })
    },
    handleLikeCard: () => {
      if (card.isLiked()) {
        api.deleteLike(card._id)
          .then((data) => {
            card.deleteLike();
            card.setLike(data.likes);
          })
          .catch((err) => {
            console.log(err);
          })
      } else {
        api.setLike(card._id)
          .then((data) => {
            card.addLike();
            card.setLike(data.likes);
          })
          .catch((err) => {
            console.log(err);
          })
      }
    }
  }, cardTemplate);
  return card.createCard();
};

//валидация
const profileValidator = new FormValidator(validSet, formPopupEdit);
const addCardValidator = new FormValidator(validSet, formPopupAdd);
const avatarValidator = new FormValidator(validSet, formPopupEditAvatar);
profileValidator.enableValidation();
addCardValidator.enableValidation();
avatarValidator.enableValidation();
