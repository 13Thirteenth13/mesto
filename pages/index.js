// массив 6 карточек
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
  modalPopUp.classList.toggle('popup_opened');
};
//данные профиля в поп ап редактирования профиля
function profileValue() {
  popUpInputName.value = profileName.textContent;
  popUpInputDescription.value = profileDescription.textContent;
};
//обработчик события сабмита поп апа редактирования профиля
function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = popUpInputName.value;
  profileDescription.textContent = popUpInputDescription.value;
  popUpToggle(popUpEditProfile);
};
//листенеры
buttonEditProfile.addEventListener("click", () => {
  popUpToggle(popUpEditProfile);
  profileValue();
});
buttonClosePopUp.addEventListener("click", () => {
  popUpToggle(popUpEditProfile);
});
popUpForm.addEventListener("submit", formSubmitHandler);
