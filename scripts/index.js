//Попапы
const popUpAll = document.querySelectorAll('.popup');

//поп ап редактирование профиля
const popUpEdit = document.querySelector('.popup_type_edit-profile');
//форма поп апа редактирования профиля
const editFormPopUp = popUpEdit.querySelector('.popup__form');
//инпуты формы поп апа редактирования профиля
const inputNamePopUpEdit = editFormPopUp.querySelector('#name');
const inputDescriptionPopUpEdit = editFormPopUp.querySelector('#description');

//секция profile
const profile = document.querySelector('.profile');
//кнопка поп ап редактирования профиля
const buttonProfileEdit = profile.querySelector('.profile__edit-button');
//имя профиля
const profileName = profile.querySelector('.profile__name');
//описание профиля
const profileDescription = profile.querySelector('.profile__description');
//кнопка поп ап добавление новой карточки
const buttonOpenPopUpAdd = document.querySelector('.profile__add-button');

//поп ап добавление карточки
const popUpAdd = document.querySelector('.popup_type_new-element');
//форма поп апа добавления карточки
const formPopUpAdd = popUpAdd.querySelector('.popup__form');
//инпуты формы поп апа добавления карточки
const inputTitlePopUpAdd = formPopUpAdd.querySelector('#title');
const inputLinkPopUpAdd = formPopUpAdd.querySelector('#link');

//секция elements
const elementsSection = document.querySelector('.elements');
const elementsContainer = elementsSection.insertAdjacentHTML('afterbegin', `<ul class="elements__cards"></ul>`);
const cardsContainer = elementsSection.querySelector('.elements__cards');

//темплейт карточка
const cardTemplate = document.querySelector('.element-template').content;

//поп ап просмотр изображения
const popUpView = document.querySelector('.popup_type_view-image');
//название изображения поп апа просмотра
const figcaptionPopUpView = popUpView.querySelector('.popup__figcaption');
//изображение поп апа просмотра
const imagePopUpView = popUpView.querySelector('.popup__image');

//открытие поп апа
function openPopUp(popUp) {
  popUp.classList.add('popup_opened');
  document.addEventListener('keydown', closePopUpEsc);
};
//закрытие поп апа
function closePopUp(popUp) {
  popUp.classList.remove('popup_opened');
  document.removeEventListener('keydown', closePopUpEsc);
};
//закрытие поп апа клавишей Esc
function closePopUpEsc(evt) {
  if (evt.key === 'Escape') {
    const openedPopUp = document.querySelector('.popup_opened');
    closePopUp(openedPopUp);
  };
};
//закрытие поп апа нажатием на кнопку закрытия или оверлей
popUpAll.forEach((popUp) => {
  popUp.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopUp(popUp);
    };
    if (evt.target.classList.contains('popup__close-button')) {
      closePopUp(popUp);
    };
  });
});

//поп ап редактирование профиля
//данные профиля в поп ап редактирования профиля
function setProfileData() {
  inputNamePopUpEdit.value = profileName.textContent;
  inputDescriptionPopUpEdit.value = profileDescription.textContent;
};
//обработчик события сабмита поп апа редактирования профиля
function submitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = inputNamePopUpEdit.value;
  profileDescription.textContent = inputDescriptionPopUpEdit.value;
  closePopUp(popUpEdit);
};
//листенеры
buttonProfileEdit.addEventListener('click', () => {
  openPopUp(popUpEdit);
  setProfileData();
});
editFormPopUp.addEventListener('submit', submitProfileForm);

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
  function openPopUpView() {
    openPopUp(popUpView);
    imagePopUpView.src = cardImage.src;
    figcaptionPopUpView.textContent = cardHeading.textContent;
    imagePopUpView.alt = cardHeading.textContent;
  };
  // листенер
  cardImage.addEventListener('click', openPopUpView);

  return cardElement;
};

//добавление новой карточки
const addCardElement = (card) => cardsContainer.prepend(card);

//добавление 6 карточек из массива initialCards (расположение: scripts/initial-cards.js)
function uploadInitialCards(item) {
  const newCard = createCard(item.name, item.link);
  addCardElement(newCard);
};
initialCards.forEach(uploadInitialCards);

//листенеры
buttonOpenPopUpAdd.addEventListener('click', () => {
  openPopUp(popUpAdd);
});
formPopUpAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardName = inputTitlePopUpAdd;
  const cardLink = inputLinkPopUpAdd;
  const newCard = createCard(cardName.value, cardLink.value);
  addCardElement(newCard);
  closePopUp(popUpAdd);
  formPopUpAdd.reset();
  const buttonElement = formPopUpAdd.querySelector('.popup__submit-button');
  disableSubmitButton(buttonElement, validSet);
});
