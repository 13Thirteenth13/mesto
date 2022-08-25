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
//кнопка поп ап добавления новой карточки
export const buttonPopupAdd = document.querySelector('.profile__add-button');

//поп ап просмотр изображения
export const popupView = document.querySelector('.popup_type_view-image');

//поп ап редактирование аватара
export const popupEditAvatar = document.querySelector('.popup_type_avatar');
//форма поп апа редактирования аватара
export const formPopupEditAvatar = popupEditAvatar.querySelector('.popup__form');
//кнопка поп ап редактирования аватара
export const buttonEditAvatar = document.querySelector('.profile__edit-avatar-button');

//поп ап подтверждение
export const popupConfirm = document.querySelector('.popup_type_confirm');

//объект с валидируемыми селекторами
export const validSet = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};
