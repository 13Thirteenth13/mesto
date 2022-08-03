import {
  initialCards,
  validSet,
  popupEdit,
  popupAdd,
  popupAll,
  buttonProfileEdit,
  editFormPopup,
  cardsContainer,
  buttonPopupAdd,
  formPopupAdd,
  inputNamePopupEdit,
  profileName,
  inputDescriptionPopupEdit,
  profileDescription,
  inputTitlePopupAdd,
  inputLinkPopupAdd
} from '../utils/constants.js';
import {FormValidator} from '../components/FormValidator.js';
import {Card} from '../components/Card.js';

//экземпляры валидации
const profileValidator = new FormValidator(validSet, popupEdit);
const addCardValidator = new FormValidator(validSet, popupAdd);
profileValidator.enableValidation();
addCardValidator.enableValidation();

//открытие поп апа
export function openPopup(popup) {
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
    if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    };
  });
});

//обработчик сабмита поп апа редактирования профиля
function submitProfileForm(evt) {
  evt.preventDefault();
  profileName.textContent = inputNamePopupEdit.value;
  profileDescription.textContent = inputDescriptionPopupEdit.value;
  closePopup(popupEdit);
};

//слушатель кнопки редактирования профиля
buttonProfileEdit.addEventListener('click', () => {
  inputNamePopupEdit.value = profileName.textContent;
  inputDescriptionPopupEdit.value = profileDescription.textContent;
  profileValidator.resetValidation();
  profileValidator.enableSubmitButton();
  openPopup(popupEdit);
});

//слушатель формы редактирования профиля
editFormPopup.addEventListener('submit', submitProfileForm);

//создание новой карточки
function createCard(cardData, cardSelector) {
  const card = new Card(cardData, cardSelector);
  return card.createCard();
};

//добавление новой карточки
function addCard(cardData, cardSelector) {
  const cardElement = createCard(cardData, cardSelector);
  cardsContainer.prepend(cardElement);
};

//добавление 6 карточек
initialCards.forEach((item) => {
  addCard(item, '.element-template');
});

//слушатель кнопки добавления новой карточки
buttonPopupAdd.addEventListener('click', () => {
  addCardValidator.resetValidation();
  formPopupAdd.reset();
  openPopup(popupAdd);
});

//слушатель формы добавления новой карточки
formPopupAdd.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const data = {
    name: inputTitlePopupAdd.value,
    link: inputLinkPopupAdd.value
  };
  addCard(data, '.element-template');
  closePopup(popupAdd);
  formPopupAdd.reset();
  addCardValidator.disableSubmitButton();
});
