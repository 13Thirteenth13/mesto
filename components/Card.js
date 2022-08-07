export default class Card {
  constructor({ data, handleCardClick }, cardSelector) {
    this._title = data.name;
    this._link = data.link;
    this._cardSelector = cardSelector;
    this.handleCardClick = handleCardClick;
  };

  _getTemplate() {
    const cardTemplate = document
      .querySelector(this._cardSelector)
      .content
      .querySelector('.element')
      .cloneNode(true);

    return cardTemplate;
  };

  _handleLikeButton() {
    this._buttonLike.classList.toggle('element__like-button_active');
  };

  _handleDeleteCard() {
    this._cardElement.remove();
    this._cardElement = null;
  };

  _setEventListeners() {
    //слушатель переключатель лайка
    this._cardElement.querySelector('.element__like-button').addEventListener('click', () => {
      this._handleLikeButton();
    });
    //слушатель удаление карточки
    this._cardElement.querySelector('.element__trash-button').addEventListener('click', () => {
      this._handleDeleteCard();
    });
    //слушатель просмотр изображения
    this._cardImage.addEventListener('click', () => {
      this.handleCardClick();
    });
  };

  createCard() {
    this._cardElement = this._getTemplate();
    this._cardImage = this._cardElement.querySelector('.element__image');
    this._buttonLike = this._cardElement.querySelector('.element__like-button');

    this._cardElement.querySelector('.element__heading').textContent = this._title;
    this._cardImage.src = this._link;
    this._cardImage.alt = this._title;

    this._setEventListeners();

    return this._cardElement;
  };
};
