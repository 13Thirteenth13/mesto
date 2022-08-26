import Popup from "./Popup.js";

export default class PopupWithConfirm extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
  };

  handleSubmitConfirm(submitConfirm) {
    this._handleSubmit = submitConfirm;
  };

  open() {
    super.open();
  };

  close() {
    super.close();
  };

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmit();
    });
  }
};
