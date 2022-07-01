//Попапы
const popUpAll = document.querySelectorAll('.popup');

//поп ап редактирование профиля
const popUpEdit = document.querySelector('.popup_type_edit-profile');
//форма поп апа редактирования профиля
const popUpEditForm = popUpEdit.querySelector('.popup__form');
//инпуты формы поп апа редактирования профиля
const popUpEditInputName = popUpEditForm.querySelector('#name');
const popUpEditInputDescription = popUpEditForm.querySelector('#description');

//секция profile
const profile = document.querySelector('.profile');
//кнопка поп ап редактирования профиля
const profileButtonEdit = profile.querySelector('.profile__edit-button');
//имя профиля
const profileName = profile.querySelector('.profile__name');
//описание профиля
const profileDescription = profile.querySelector('.profile__description');
//кнопка поп ап добавление новой карточки
const popUpAddButtonOpen = document.querySelector('.profile__add-button');

//поп ап добавление карточки
const popUpAdd = document.querySelector('.popup_type_new-element');
//форма поп апа добавления карточки
const popUpAddForm = popUpAdd.querySelector('.popup__form');
//инпуты формы поп апа добавления карточки
const popUpAddInputTitle = popUpAddForm.querySelector('#title');
const popUpAddLinkInputLink = popUpAddForm.querySelector('#link');

//секция elements
const elementsSection = document.querySelector('.elements');
const elementsContainer = elementsSection.insertAdjacentHTML('afterbegin', `<ul class="elements__cards"></ul>`);
const cardsContainer = elementsSection.querySelector('.elements__cards');
//темплейт карточка
const cardTemplate = document.querySelector('.element-template').content;

//поп ап просмотр изображения
const popUpView = document.querySelector('.popup_type_view-image');
//название изображения поп апа просмотра
const popUpViewFigcaption = popUpView.querySelector('.popup__figcaption');
//изображение поп апа просмотра
const popUpViewImage = popUpView.querySelector('.popup__image');

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
function profileDataValue() {
  popUpEditInputName.value = profileName.textContent;
  popUpEditInputDescription.value = profileDescription.textContent;
};
//обработчик события сабмита поп апа редактирования профиля
function submitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = popUpEditInputName.value;
  profileDescription.textContent = popUpEditInputDescription.value;
  closePopUp(popUpEdit);
};
//листенеры
profileButtonEdit.addEventListener('click', () => {
  openPopUp(popUpEdit);
  profileDataValue();
});
popUpEditForm.addEventListener('submit', submitProfileForm);

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
  const cardLikeButton = cardElement.querySelector('.element__like-button');
  //кнопка удаления карточки
  const cardTrashButton = cardElement.querySelector('.element__trash-button');

  cardHeading.textContent = cardName;
  cardImage.src = cardLink;
  cardImage.alt = cardName;

  //листенеры
  cardLikeButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like-button_active');
  });
  cardTrashButton.addEventListener('click', (evt) => {
    evt.target.closest('.element').remove();
  });

  //поп ап просмотр изображения
  //функция поп апа просмотра
  function openPopUpView() {
    openPopUp(popUpView);
    popUpViewImage.src = cardImage.src;
    popUpViewFigcaption.textContent = cardHeading.textContent;
    popUpViewImage.alt = cardHeading.textContent;
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
popUpAddButtonOpen.addEventListener('click', () => {
  openPopUp(popUpAdd);
});
popUpAddForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const cardName = popUpAddInputTitle;
  const cardLink = popUpAddLinkInputLink;
  const newCard = createCard(cardName.value, cardLink.value);
  addCardElement(newCard);
  cardName.value = '';
  cardLink.value = '';
  closePopUp(popUpAdd);
});
