//поп ап редактирование профиля
export const popupEdit = document.querySelector('.popup_type_edit-profile');
//кнопка поп ап редактирования профиля
export const buttonProfileEdit = document.querySelector('.profile__edit-button');
//форма поп апа редактирования профиля
export const formPopupEdit = popupEdit.querySelector('.popup__form');
//инпуты формы поп апа редактирования профиля
export const inputNamePopupEdit = formPopupEdit.querySelector('#name');
export const inputDescriptionPopupEdit = formPopupEdit.querySelector('#description');
//поп ап добавление карточки
export const popupAdd = document.querySelector('.popup_type_new-element');
//форма поп апа добавления карточки
export const formPopupAdd = popupAdd.querySelector('.popup__form');
//кнопка поп ап добавление новой карточки
export const buttonPopupAdd = document.querySelector('.profile__add-button');
//поп ап просмотр изображения
export const popupView = document.querySelector('.popup_type_view-image');
//темплейт
export const cardTemplate = '.element-template';
export const cardsContainer = '.elements__cards';

//массив 6 карточек
export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg',
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg',
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg',
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg',
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg',
  },
];

//объект с валидируемыми селекторами
export const validSet = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};