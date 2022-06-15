//поп ап редактирование профиля
const popUpEditProfile = document.querySelector(".popup_type_edit-profile");
//кнопка закрытия поп апа редактирования профиля
const buttonClosePopUp = popUpEditProfile.querySelector(".popup__close-button");
//форма поп апа редактирования профиля
const popUpForm = popUpEditProfile.querySelector(".popup__form");
//инпуты формы поп апа редактирования профиля
let popUpInputName = popUpForm.querySelector("#name");
let popUpInputDescription = popUpForm.querySelector("#description");
//секция profile
const profile = document.querySelector(".profile");
//кнопка редактирования профиля
const buttonEditProfile = profile.querySelector(".profile__edit-button");
//имя профиля
let profileName = profile.querySelector(".profile__name");
//описание профиля
let profileDescription = profile.querySelector(".profile__description");

//переключатель поп апа
const popUpToggle = (modalPopUp) => {
  modalPopUp.classList.toggle("popup_opened");
};
//данные профиля в поп ап редактирования профиля
function profileValue() {
  popUpInputName.value = profileName.textContent;
  popUpInputDescription.value = profileDescription.textContent;
}
//обработчик события сабмита поп апа редактирования профиля
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popUpInputName.value;
  profileDescription.textContent = popUpInputDescription.value;
  popUpToggle(popUpEditProfile);
}
//листенеры
buttonEditProfile.addEventListener("click", () => {
  popUpToggle(popUpEditProfile);
  profileValue();
});
buttonClosePopUp.addEventListener("click", () => {
  popUpToggle(popUpEditProfile);
});
popUpForm.addEventListener("submit", formSubmitHandler);

//массив 6 карточек
const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

//секция elements
const cardsContainer = document.querySelector(".elements__cards");
//темплейт карточка
const cardTemplate = document.querySelector(".element-template").content;

function addCardElement(cardName, cardLink) {
  //карточка
  const cardElement = cardTemplate.querySelector(".element").cloneNode(true);
  //изображение карточки
  const cardImage = cardElement.querySelector(".element__image");
  //заголовок карточки
  const cardHeading = cardElement.querySelector(".element__heading");
  //кнопка лайк карточки
  const cardLikeButton = cardElement.querySelector(".element__like-button");
  //кнопка удаления карточки
  const cardTrashButton = cardElement.querySelector(".element__trash-button");

  cardHeading.textContent = cardName;
  cardImage.src = cardLink;
  cardsContainer.prepend(cardElement);

}

//добавление 6 карточек из массива initialCards
function uploadInitialCards (array) {
  array.map((item) => {
  return addCardElement(item.name, item.link);
  });
};

uploadInitialCards(initialCards);
