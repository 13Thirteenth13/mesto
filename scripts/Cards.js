import {popupView, imagePopupView, figcaptionPopupView} from './index.js';

import{openPopup} from './index.js';

export class Card {
  constructor(cardData, cardSelector) {
    this._title = cardData.name;
    this._link = cardData.link;
    this._cardSelector = cardSelector;
    this._cardTemplate = document.querySelector(this._cardSelector).content.querySelector('.element');
  };

  _setEventListeners() {
    //слушатель удаление карточки
    this._cardElement.querySelector('.element__trash-button').addEventListener('click', () => {
      this._cardElement.remove();
    });
    //слушатель переключатель лайка
    this._buttonCardLike.addEventListener('click', (evt) => {
      evt.target.classList.toggle('element__like-button_active');
    });
    //слушатель просмотр изображения
    this._cardImage.addEventListener('click', () => {
      imagePopupView.src = this._link;
      imagePopupView.alt = this._title;
      figcaptionPopupView.textContent = this._title;
      openPopup(popupView);
    });
  };

  createCard() {
    this._cardElement = this._cardTemplate.cloneNode(true);
    this._cardImage = this._cardElement.querySelector('.element__image');
    this._buttonCardLike = this._cardElement.querySelector('.element__like-button');

    this._cardImage.title = this._cardElement.querySelector('.element__heading').textContent = this._title;
    this._cardImage.src = this._cardImage.src = this._link;
    this._cardImage.alt = this._cardImage.alt = this._title;

    this._setEventListeners();

    return this._cardElement;
  };
};
