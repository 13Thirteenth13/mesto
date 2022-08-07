import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector); //
    this._popupImage = this._popupSelector.querySelector('.popup__image'); //
    this._popupFigcaption = this._popupSelector.querySelector('.popup__figcaption');
  };

  open(name, link) {
    this._popupImage.src = link;
    this._popupFigcaption.textContent = name;
    this._popupImage.alt = name;
    super.open();
  };
};
