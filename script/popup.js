let popUp = document.querySelector('.popup');
let buttonClosePopUp = popUp.querySelector('.popup__close-button');
let popUpForm = popUp.querySelector('.popup__form');
let popUpInputName = popUpForm.querySelector('#name');
let popUpInputDescription = popUpForm.querySelector('#description');

let profile = document.querySelector('.profile');
let profileName = profile.querySelector('.profile__name');
let profileDescription = profile.querySelector('.profile__description');
let buttonEditProfile = profile.querySelector('.profile__edit-button');

function PopUpOpen () {
  popUp.classList.add('popup_opened');
  popUpInputName.value = profileName.textContent;
  popUpInputDescription.value = profileDescription.textContent;
}

function PopUpClose () {
  popUp.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = popUpInputName.value;
  profileDescription.textContent = popUpInputDescription.value;
  PopUpClose ();
}

buttonEditProfile.addEventListener('click', PopUpOpen);
buttonClosePopUp.addEventListener('click', PopUpClose);
popUpForm.addEventListener('submit', formSubmitHandler);
