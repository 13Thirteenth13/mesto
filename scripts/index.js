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
//данные профиля в поп ап редактирования профиля
function setProfileData() {
  inputNamePopupEdit.value = profileName.textContent;
  inputDescriptionPopupEdit.value = profileDescription.textContent;
};
//обработчик события сабмита поп апа редактирования профиля
function submitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = inputNamePopupEdit.value;
  profileDescription.textContent = inputDescriptionPopupEdit.value;
  closePopup(popupEdit);
};
//листенеры
buttonProfileEdit.addEventListener('click', () => {
  openPopup(popupEdit);
  setProfileData();
});
editFormPopup.addEventListener('submit', submitProfileForm);

//поп ап добавление карточки
//создание новой карточки
function createCard(cardName, cardLink) {
  //карточка
  const cardElement = cardTemplate.querySelector('.element').cloneNode(true);
  //изображение карточки
  const cardImage = cardElement.querySelector('.element__image');
  //заголовок карточки
  const cardHeading = cardElement.querySelector('.element__heading');
  //кнопка лайк карточки
  const buttonCardLike = cardElement.querySelector('.element__like-button');
  //кнопка удаления карточки
  const buttonCardTrash = cardElement.querySelector('.element__trash-button');

  cardHeading.textContent = cardName;
  cardImage.src = cardLink;
  cardImage.alt = cardName;

  //листенеры
  buttonCardLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like-button_active');
  });
  buttonCardTrash.addEventListener('click', (evt) => {
    evt.target.closest('.element').remove();
  });

  //поп ап просмотр изображения
  //функция поп апа просмотра
  function openPopupView() {
    openPopup(popupView);
    imagePopupView.src = cardImage.src;
    figcaptionPopupView.textContent = cardHeading.textContent;
    imagePopupView.alt = cardHeading.textContent;
  };
  // листенер
  cardImage.addEventListener('click', openPopupView);

  return cardElement;
};

//добавление новой карточки
function addCardElement(card) {
  cardsContainer.prepend(card);
};

//добавление 6 карточек из массива initialCards (расположение: scripts/initial-cards.js)
function uploadInitialCards(item) {
  const newCard = createCard(item.name, item.link);
  addCardElement(newCard);
};
initialCards.forEach(uploadInitialCards);

//листенеры
buttonOpenPopupAdd.addEventListener('click', () => {
  openPopup(popupAdd);
});
formPopupAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardName = inputTitlePopupAdd;
  const cardLink = inputLinkPopupAdd;
  const newCard = createCard(cardName.value, cardLink.value);
  addCardElement(newCard);
  closePopup(popupAdd);
  formPopupAdd.reset();
  const buttonElement = formPopupAdd.querySelector('.popup__submit-button');
  disableSubmitButton(buttonElement, validSet);
});
