import './index.css';

import {
  initialCards,
  validSet,
  formPopupEdit,
  formPopupAdd,
  buttonProfileEdit,
  buttonPopupAdd,
  buttonEditAvatar,
  inputNamePopupEdit,
  inputDescriptionPopupEdit,
  popupEdit,
  popupAdd,
  popupView,
  popupEditAvatar,
  popupConfirm,
  cardTemplate,
  cardsContainer
} from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import PopupWithConfirm from '../components/PopupWithConfirm.js';
import UserInfo from '../components/UserInfo.js';

//экземпляр с данными профиля
const profile = new UserInfo({
  profileName: '.profile__name',
  profileDescription: '.profile__description'
});

//поп ап редактирования профиля
const popupEditProfile = new PopupWithForm(popupEdit, {
  handleSubmitForm: (formData) => {
    profile.setUserInfo(formData);
    popupEditProfile.close();
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
});

//поп ап добавления новой карточки
const popupAddCard = new PopupWithForm(popupAdd, {
  handleSubmitForm: (formData) => {
    cards.addItem(createNewCard(formData));
    popupAddCard.close();
  }
});

popupAddCard.setEventListeners();

//обработчик кнопки поп апа добавления новой карточки
buttonPopupAdd.addEventListener('click', () => {
  popupAddCard.open();
  addCardValidator.toggleButtonState();
  addCardValidator.resetValidation();
});

//поп ап просмотр изображения
const popupViewImage = new PopupWithImage(popupView);

//создание новой карточки
const createNewCard = (data) => {
  const card = new Card({
    data, handleCardClick: () => {
      popupViewImage.open(data.name, data.link);
    },
    handleDeleteClick: () => {
      popupConfirmDelete.open();
    }
  }, cardTemplate);
  const cardElement = card.createCard();
  return cardElement;
};

popupViewImage.setEventListeners();

//добавление 6 готовых карточек из массива
const cards = new Section({
  items: initialCards,
  renderer: (item) => {
    cards.addItem(createNewCard(item));
  }
}, cardsContainer);

cards.renderItems();

//поп ап редактирование аватара
const popupEditUserAvatar = new PopupWithForm(popupEditAvatar, {
  handleSubmitForm: (formData) => {
    //
    popupEditUserAvatar.close();
  }

});

popupEditUserAvatar.setEventListeners();

//обработчик кнопки поп апа редактирования аватара
buttonEditAvatar.addEventListener('click', () => {
  popupEditUserAvatar.open();
  avatarValidator.toggleButtonState();
  avatarValidator.resetValidation();
});

const popupConfirmDelete = new PopupWithConfirm(popupConfirm);

//валидация
const profileValidator = new FormValidator(validSet, formPopupEdit);
const addCardValidator = new FormValidator(validSet, formPopupAdd);
const avatarValidator = new FormValidator(validSet, popupEditAvatar);
profileValidator.enableValidation();
addCardValidator.enableValidation();
avatarValidator.enableValidation();

