//все поп апы
export const popupAll = document.querySelectorAll('.popup');

//поп ап редактирование профиля
export const popupEdit = document.querySelector('.popup_type_edit-profile');
//форма поп апа редактирования профиля
export const editFormPopup = popupEdit.querySelector('.popup__form');
//инпуты формы поп апа редактирования профиля
export const inputNamePopupEdit = editFormPopup.querySelector('#name');
export const inputDescriptionPopupEdit = editFormPopup.querySelector('#description');

//секция profile
export const profile = document.querySelector('.profile');
//кнопка поп ап редактирования профиля
export const buttonProfileEdit = profile.querySelector('.profile__edit-button');
//имя профиля
export const profileName = profile.querySelector('.profile__name');
//описание профиля
export const profileDescription = profile.querySelector('.profile__description');
//кнопка поп ап добавление новой карточки
export const buttonPopupAdd = document.querySelector('.profile__add-button');

//поп ап добавление карточки
export const popupAdd = document.querySelector('.popup_type_new-element');
//форма поп апа добавления карточки
export const formPopupAdd = popupAdd.querySelector('.popup__form');
//инпуты формы поп апа добавления карточки
export const inputTitlePopupAdd = formPopupAdd.querySelector('#title');
export const inputLinkPopupAdd = formPopupAdd.querySelector('#link');

//секция elements
export const elementsSection = document.querySelector('.elements');
export const elementsContainer = elementsSection.insertAdjacentHTML('afterbegin', `<ul class="elements__cards"></ul>`);
export const cardsContainer = elementsSection.querySelector('.elements__cards');

//поп ап просмотр изображения
export const popupView = document.querySelector('.popup_type_view-image');
//название изображения поп апа просмотра
export const figcaptionPopupView = popupView.querySelector('.popup__figcaption');
//изображение поп апа просмотра
export const imagePopupView = popupView.querySelector('.popup__image');

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
