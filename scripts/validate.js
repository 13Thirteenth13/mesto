//объект с валидируемыми селекторами
const validSet = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

//показать ошибку
function showInputError(formElement, inputElement, errorMessage, validSet) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validSet.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validSet.errorClass);
};

//спрятать ошибку
function hideInputError(formElement, inputElement, validSet) {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validSet.inputErrorClass);
  errorElement.classList.remove(validSet.errorClass);
  errorElement.textContent = '';
};

//валидность инпута
function checkInputValidity(formElement, inputElement, validSet) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, validSet);
  } else {
    hideInputError(formElement, inputElement, validSet);
  };
};

//проверка инпутов на прохождение валидности
function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

//состояние кнопки сабмит
function disableSubmitButton(buttonElement, validSet) {
  buttonElement.disabled = true;
  buttonElement.classList.add(validSet.inactiveButtonClass);
};
function enableSubmitButton(buttonElement, validSet) {
  buttonElement.disabled = false;
  buttonElement.classList.remove(validSet.inactiveButtonClass);
};

//переключатель состояния кнопки сабмит
function toggleButtonState(inputList, buttonElement, validSet) {
  if (hasInvalidInput(inputList)) {
    disableSubmitButton(buttonElement, validSet);
  } else {
    enableSubmitButton(buttonElement, validSet);
  };
};

//листенеры на все инпуты
function setEventListeners(formElement, validSet) {
  const inputList = Array.from(formElement.querySelectorAll(validSet.inputSelector));
  const buttonElement = formElement.querySelector(validSet.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, validSet);
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInputValidity(formElement, inputElement, validSet)
      toggleButtonState(inputList, buttonElement, validSet);
    });
  });
};

//включение валидации всех форм
function enableValidation(validSet) {
  const formList = Array.from(document.querySelectorAll(validSet.formSelector));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement, validSet);
  });
};

enableValidation(validSet);
