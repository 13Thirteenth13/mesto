import {
  initialCards,
  validSet,
  formPopupEdit,
  formPopupAdd,
  buttonProfileEdit,
  buttonPopupAdd,
  inputNamePopupEdit,
  inputDescriptionPopupEdit,
  popupEdit,
  popupAdd,
  popupView,
  cardTemplate,
  cardsContainer
} from '../utils/constants.js';
import FormValidator from '../components/FormValidator.js';
import Card from '../components/Card.js';
import Section from '../components/Section.js';
import PopupWithImage from '../components/PopupWithImage.js';
import PopupWithForm from '../components/PopupWithForm.js';
import UserInfo from '../components/UserInfo.js';

//экземпляр с данными профиля
const profile = new UserInfo({
  profileName: '.profile__name',
  profileDescription: '.profile__description'
});

//поп ап редактирования профиля
const popupEditProfile = new PopupWithForm(popupEdit, {
  handleSubmitForm: (formData) => {
      profile.setUserInfo({
        name: formData.name,
        info: formData.info
      });
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
      cards.addItem({
        name: formData.title,
        link: formData.link
      });
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
          }
      }, cardTemplate);
  return card;
};

popupViewImage.setEventListeners();

//добавление 6 готовых карточек из массива
const cards = new Section({
  items: initialCards, renderer: (initialCards) => {
      const card = createNewCard(initialCards);
      return card.createCard();
  }
}, cardsContainer);

cards.renderItems();

//валидация
const profileValidator = new FormValidator(validSet, formPopupEdit);
const addCardValidator = new FormValidator(validSet, formPopupAdd);
profileValidator.enableValidation();
addCardValidator.enableValidation();
