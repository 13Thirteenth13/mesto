//Попапы
const popupAll = document.querySelectorAll('.popup');

//поп ап редактирование профиля
const popupEdit = document.querySelector('.popup_type_edit-profile');
//форма поп апа редактирования профиля
const editFormPopup = popupEdit.querySelector('.popup__form');
//инпуты формы поп апа редактирования профиля
const inputNamePopupEdit = editFormPopup.querySelector('#name');
const inputDescriptionPopupEdit = editFormPopup.querySelector('#description');

//секция profile
const profile = document.querySelector('.profile');
//кнопка поп ап редактирования профиля
const buttonProfileEdit = profile.querySelector('.profile__edit-button');
//имя профиля
const profileName = profile.querySelector('.profile__name');
//описание профиля
const profileDescription = profile.querySelector('.profile__description');
//кнопка поп ап добавление новой карточки
const buttonOpenPopupAdd = document.querySelector('.profile__add-button');

//поп ап добавление карточки
const popupAdd = document.querySelector('.popup_type_new-element');
//форма поп апа добавления карточки
const formPopupAdd = popupAdd.querySelector('.popup__form');
//инпуты формы поп апа добавления карточки
const inputTitlePopupAdd = formPopupAdd.querySelector('#title');
const inputLinkPopupAdd = formPopupAdd.querySelector('#link');

//секция elements
const elementsSection = document.querySelector('.elements');
const elementsContainer = elementsSection.insertAdjacentHTML('afterbegin', `<ul class="elements__cards"></ul>`);
const cardsContainer = elementsSection.querySelector('.elements__cards');

//темплейт карточка
const cardTemplate = document.querySelector('.element-template').content;

//поп ап просмотр изображения
const popupView = document.querySelector('.popup_type_view-image');
//название изображения поп апа просмотра
const figcaptionPopupView = popupView.querySelector('.popup__figcaption');
//изображение поп апа просмотра
const imagePopupView = popupView.querySelector('.popup__image');

//открытие поп апа
function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', closePopupEsc);
};
//закрытие поп апа
function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopupEsc);
};
//закрытие поп апа клавишей Esc
function closePopupEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(openedPopup);
  };
};
//закрытие поп апа нажатием на кнопку закрытия или оверлей
popupAll.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    };
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    };
  });
});

//поп ап редактирование профиля
//обработчик сабмита поп апа редактирования профиля
function submitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = inputNamePopupEdit.value;
  profileDescription.textContent = inputDescriptionPopupEdit.value;
  closePopup(popupEdit);
};
//листенеры
buttonProfileEdit.addEventListener('click', () => {
  inputNamePopupEdit.value = profileName.textContent;
  inputDescriptionPopupEdit.value = profileDescription.textContent;
  openPopup(popupEdit);
});
editFormPopup.addEventListener('submit', submitProfileForm);

//класс Card
class Card {
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
    this._buttonCardLike.addEventListener('click', function (evt) {
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

//создание новой карточки
function createCard(cardData, cardSelector) {
  const card = new Card(cardData, cardSelector);
  return card.createCard();
};

//добавление новой карточки
function addCard(cardData, cardSelector) {
  const cardElement = createCard(cardData, cardSelector)
  cardsContainer.prepend(cardElement);
};

//добавление 6 карточек
initialCards.forEach(function (item) {
  addCard(item, '.element-template');
});

//листенеры
buttonOpenPopupAdd.addEventListener('click', () => {
  openPopup(popupAdd);
});

formPopupAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const data = {
    name: inputTitlePopupAdd.value,
    link: inputLinkPopupAdd.value
  };
  addCard(data, '.element-template');
  closePopup(popupAdd);
  formPopupAdd.reset();
  const buttonElement = formPopupAdd.querySelector('.popup__submit-button');
  disableSubmitButton(buttonElement, validSet);
});
