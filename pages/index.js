//поп ап редактирование профиля
const popUpEdit = document.querySelector('.popup_type_edit-profile');
//кнопка закрытия поп апа редактирования профиля
const popUpEditButtonClose = popUpEdit.querySelector('.popup__close-button');
//форма поп апа редактирования профиля
const popUpEditForm = popUpEdit.querySelector('.popup__form');
//инпуты формы поп апа редактирования профиля
let popUpEditInputName = popUpEditForm.querySelector('#name');
let popUpEditInputDescription = popUpEditForm.querySelector('#description');
//секция profile
const profile = document.querySelector('.profile');
//кнопка поп ап редактирования профиля
const profileButtonEdit = profile.querySelector('.profile__edit-button');
//имя профиля
let profileName = profile.querySelector('.profile__name');
//описание профиля
let profileDescription = profile.querySelector('.profile__description');
//кнопка поп ап добавление новой карточки
const popUpAddButtonOpen = document.querySelector('.profile__add-button');

//переключатель поп апа
function popUpToggle(modalPopUp) {
  modalPopUp.classList.toggle('popup_opened');
};
//данные профиля в поп ап редактирования профиля
function profileDataValue() {
  popUpEditInputName.value = profileName.textContent;
  popUpEditInputDescription.value = profileDescription.textContent;
};
//обработчик события сабмита поп апа редактирования профиля
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popUpInputName.value;
  profileDescription.textContent = popUpInputDescription.value;
  popUpToggle(popUpEditProfile);
};
//листенеры
profileButtonEdit.addEventListener('click', () => {
  popUpToggle(popUpEdit);
  profileDataValue();
});
popUpEditButtonClose.addEventListener('click', () => {
  popUpToggle(popUpEdit);
});
popUpEditForm.addEventListener('submit', formSubmitHandler);

//массив 6 карточек
const initialCards = [
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
const cardsContainer = document.querySelector('.elements__cards');
//темплейт карточка
const cardTemplate = document.querySelector('.element-template').content;
//поп ап просмотр
const popUpView = document.querySelector('.popup_type_view-image');
//название изображения поп апа просмотра
const popUpViewFigcaption = popUpView.querySelector('.popup__figcaption');
//изображение поп апа просмотра
const PopupViewImage = popUpView.querySelector('.popup__image');
//кнопка закрытия поп апа просмотра
const popUpViewButtonClose = popUpView.querySelector('.popup__close-button');

//добавление новой карточки
function addCardElement(cardName, cardLink) {
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
  cardsContainer.prepend(cardElement);

  //листенеры
  cardLikeButton.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like-button_active');
  });
  cardTrashButton.addEventListener('click', (evt) => {
    evt.target.closest('.element').remove();
  });

  //функция поп апа просмотра
  function openPopUpView() {
    popUpToggle(popUpView);
    PopupViewImage.src = cardImage.src;
    popUpViewFigcaption.textContent = cardHeading.textContent;
    PopupViewImage.alt = cardHeading.textContent;
    popUpViewButtonClose.onclick = () => popUpToggle(popUpView);
  };

  // листенер
  cardImage.addEventListener('click', openPopUpView);
};

//добавление 6 карточек из массива initialCards
function uploadInitialCards(array) {
  array.map((item) => {
    addCardElement(item.name, item.link);
  });
}
uploadInitialCards(initialCards);

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
  addCardElement(title.value, link.value);
  title.value = '';
  link.value = '';
  popUpToggle(popUpAdd);
});
