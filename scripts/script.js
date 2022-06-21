//поп ап редактирование профиля
const popUpEdit = document.querySelector('.popup_type_edit-profile');
//кнопка закрытия поп апа редактирования профиля
const popUpEditButtonClose = popUpEdit.querySelector('.popup__close-button');
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
//кнопка закрытия поп апа добавления карточки
const popupAddButtonClose = popUpAdd.querySelector('.popup__close-button');
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
//кнопка закрытия поп апа просмотра
const popUpViewButtonClose = popUpView.querySelector('.popup__close-button');

//переключатель поп апа
function popUpToggle(modalPopUp) {
  modalPopUp.classList.toggle('popup_opened');
};

//поп ап редактирование профиля
//данные профиля в поп ап редактирования профиля
function profileDataValue() {
  popUpEditInputName.value = profileName.textContent;
  popUpEditInputDescription.value = profileDescription.textContent;
};
//обработчик события сабмита поп апа редактирования профиля
function profileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = popUpEditInputName.value;
  profileDescription.textContent = popUpEditInputDescription.value;
  popUpToggle(popUpEdit);
};
//листенеры
profileButtonEdit.addEventListener('click', () => {
  popUpToggle(popUpEdit);
  profileDataValue();
});
popUpEditButtonClose.addEventListener('click', () => {
  popUpToggle(popUpEdit);
});
popUpEditForm.addEventListener('submit', profileFormSubmit);

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
    popUpToggle(popUpView);
    popUpViewImage.src = cardImage.src;
    popUpViewFigcaption.textContent = cardHeading.textContent;
    popUpViewImage.alt = cardHeading.textContent;
  };

  // листенеры
  popUpViewButtonClose.onclick = () => popUpToggle(popUpView);
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
  popUpToggle(popUpAdd);
});
popupAddButtonClose.addEventListener('click', () => {
  popUpToggle(popUpAdd);
});
popUpAddForm.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const title = popUpAddInputTitle;
  const link = popUpAddLinkInputLink;
  const newCard = createCard(title.value, link.value);
  addCardElement(newCard);
  title.value = '';
  link.value = '';
  popUpToggle(popUpAdd);
});
