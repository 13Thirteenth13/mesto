/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/Api.js":
/*!*******************************!*\
  !*** ./src/components/Api.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Api)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Api = /*#__PURE__*/function () {
  function Api(options) {
    _classCallCheck(this, Api);

    this._url = options.url;
    this._headers = options.headers;
  }

  _createClass(Api, [{
    key: "_checkServerResponse",
    value: //проверка ответа сервера
    function _checkServerResponse(res) {
      if (res.ok) {
        return res.json();
      }

      return Promise.reject("\u041E\u0448\u0438\u0431\u043A\u0430: ".concat(res.status));
    }
  }, {
    key: "getUserInfo",
    value: //загрузка данных пользователя с сервера
    function getUserInfo() {
      var _this = this;

      return fetch("".concat(this._url, "/users/me"), {
        headers: this._headers
      }).then(function (res) {
        return _this._checkServerResponse(res);
      });
    }
  }, {
    key: "updateAvatar",
    value: //обновление аватара
    function updateAvatar(data) {
      var _this2 = this;

      return fetch("".concat(this._url, "/users/me/avatar"), {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          avatar: data.avatar
        })
      }).then(function (res) {
        return _this2._checkServerResponse(res);
      });
    }
  }, {
    key: "updateUserInfo",
    value: //редактирование профиля
    function updateUserInfo(data) {
      var _this3 = this;

      return fetch("".concat(this._url, "/users/me"), {
        method: 'PATCH',
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          about: data.about
        })
      }).then(function (res) {
        return _this3._checkServerResponse(res);
      });
    }
  }, {
    key: "getInitialCards",
    value: //загрузка карточек с сервера
    function getInitialCards() {
      var _this4 = this;

      return fetch("".concat(this._url, "/cards"), {
        headers: this._headers
      }).then(function (res) {
        return _this4._checkServerResponse(res);
      });
    }
  }, {
    key: "sendCard",
    value: //добавить новую карточку
    function sendCard(data) {
      var _this5 = this;

      return fetch("".concat(this._url, "/cards"), {
        method: 'POST',
        headers: this._headers,
        body: JSON.stringify({
          name: data.name,
          link: data.link
        })
      }).then(function (res) {
        return _this5._checkServerResponse(res);
      });
    }
  }, {
    key: "deleteCard",
    value: //удалить карточку
    function deleteCard(cardID) {
      var _this6 = this;

      return fetch("".concat(this._url, "/cards/").concat(cardID), {
        method: 'DELETE',
        headers: this._headers
      }).then(function (res) {
        return _this6._checkServerResponse(res);
      });
    }
  }, {
    key: "setLike",
    value: //поставить лайк
    function setLike(cardID) {
      var _this7 = this;

      return fetch("".concat(this._url, "/cards/").concat(cardID, "/likes"), {
        method: 'PUT',
        headers: this._headers
      }).then(function (res) {
        return _this7._checkServerResponse(res);
      });
    }
  }, {
    key: "deleteLike",
    value: //снять лайк
    function deleteLike(cardID) {
      var _this8 = this;

      return fetch("".concat(this._url, "/cards/").concat(cardID, "/likes"), {
        method: 'DELETE',
        headers: this._headers
      }).then(function (res) {
        return _this8._checkServerResponse(res);
      });
    }
  }]);

  return Api;
}();


;

/***/ }),

/***/ "./src/components/Card.js":
/*!********************************!*\
  !*** ./src/components/Card.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Card)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Card = /*#__PURE__*/function () {
  function Card(_ref, cardSelector) {
    var _this = this;

    var data = _ref.data,
        userId = _ref.userId,
        handleCardClick = _ref.handleCardClick,
        handleDeleteClick = _ref.handleDeleteClick,
        handleLikeCard = _ref.handleLikeCard;

    _classCallCheck(this, Card);

    _defineProperty(this, "deleteCard", function () {
      _this._cardElement.remove();

      _this._cardElement = null;
    });

    _defineProperty(this, "addLike", function () {
      _this._buttonLike.classList.add('element__like-button_active');
    });

    _defineProperty(this, "deleteLike", function () {
      _this._buttonLike.classList.remove('element__like-button_active');
    });

    this._title = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data._id;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
    this._handleLikeCard = handleLikeCard;
    this._cardSelector = cardSelector;
  }

  _createClass(Card, [{
    key: "_getTemplate",
    value: function _getTemplate() {
      return document.querySelector(this._cardSelector).content.querySelector('.element').cloneNode(true);
    }
  }, {
    key: "createCard",
    value: function createCard() {
      this._cardElement = this._getTemplate();
      this._cardImage = this._cardElement.querySelector('.element__image');
      this._buttonLike = this._cardElement.querySelector('.element__like-button');
      this._likesCount = this._cardElement.querySelector('.element__like-count');
      this._buttonDelete = this._cardElement.querySelector('.element__trash-button');

      this._setEventListeners();

      this._cardElement.querySelector('.element__heading').textContent = this._title;
      this._cardImage.src = this._link;
      this._cardImage.alt = this._title;

      this._hideDeleteButton();

      this.setLike(this._likes);

      this._checkOwnLike();

      return this._cardElement;
    }
  }, {
    key: "_hideDeleteButton",
    value: function _hideDeleteButton() {
      if (this._ownerId !== this._userId) {
        this._buttonDelete.remove();
      }
    }
  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;

      this._buttonDelete.addEventListener('click', function () {
        _this2._handleDeleteClick();
      });

      this._buttonLike.addEventListener('click', function () {
        _this2._handleLikeCard();
      });

      this._cardImage.addEventListener('click', function () {
        _this2._handleCardClick();
      });
    }
  }, {
    key: "isLiked",
    value: function isLiked() {
      var _this3 = this;

      return this._likes.find(function (user) {
        return user._id === _this3._userId;
      });
    }
  }, {
    key: "_checkOwnLike",
    value: function _checkOwnLike() {
      this.isLiked() ? this.addLike() : this.deleteLike();
    }
  }, {
    key: "setLike",
    value: function setLike(data) {
      this._likes = data;
      this._likesCount.textContent = this._likes.length;
    }
  }]);

  return Card;
}();


;

/***/ }),

/***/ "./src/components/FormValidator.js":
/*!*****************************************!*\
  !*** ./src/components/FormValidator.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FormValidator)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var FormValidator = /*#__PURE__*/function () {
  function FormValidator(validSet, formElement) {
    _classCallCheck(this, FormValidator);

    this._formElement = formElement;
    this._inputSelector = validSet.inputSelector;
    this._submitButtonSelector = validSet.submitButtonSelector;
    this._inactiveButtonClass = validSet.inactiveButtonClass;
    this._inputErrorClass = validSet.inputErrorClass;
    this._errorClass = validSet.errorClass;
  }

  _createClass(FormValidator, [{
    key: "_showInputError",
    value: //показать ошибку
    function _showInputError(inputElement, errorMessage) {
      var errorElement = this._formElement.querySelector(".".concat(inputElement.id, "-error"));

      inputElement.classList.add(this._inputErrorClass);
      errorElement.textContent = errorMessage;
      errorElement.classList.add(this._errorClass);
    }
  }, {
    key: "_hideInputError",
    value: //спрятать ошибку
    function _hideInputError(inputElement) {
      var errorElement = this._formElement.querySelector(".".concat(inputElement.id, "-error"));

      inputElement.classList.remove(this._inputErrorClass);
      errorElement.classList.remove(this._errorClass);
      errorElement.textContent = '';
    }
  }, {
    key: "_checkInputValidity",
    value: //валидность инпута
    function _checkInputValidity(inputElement) {
      if (!inputElement.validity.valid) {
        this._showInputError(inputElement, inputElement.validationMessage);
      } else {
        this._hideInputError(inputElement);
      }

      ;
    }
  }, {
    key: "_hasInvalidInput",
    value: //проверка инпутов на прохождение валидности
    function _hasInvalidInput() {
      return this._inputList.some(function (inputElement) {
        return !inputElement.validity.valid;
      });
    }
  }, {
    key: "disableSubmitButton",
    value: //состояние кнопки сабмит
    function disableSubmitButton() {
      this._buttonElement.disabled = true;

      this._buttonElement.classList.add(this._inactiveButtonClass);
    }
  }, {
    key: "enableSubmitButton",
    value: function enableSubmitButton() {
      this._buttonElement.disabled = false;

      this._buttonElement.classList.remove(this._inactiveButtonClass);
    }
  }, {
    key: "toggleButtonState",
    value: //переключатель состояния кнопки сабмит
    function toggleButtonState() {
      if (this._hasInvalidInput()) {
        this.disableSubmitButton();
      } else {
        this.enableSubmitButton();
      }

      ;
    }
  }, {
    key: "resetValidation",
    value: //очистить ошибки
    function resetValidation() {
      var _this = this;

      this._inputList.forEach(function (inputElement) {
        _this._hideInputError(inputElement);
      });

      this.toggleButtonState();
    } //слушатели на все инпуты

  }, {
    key: "_setEventListeners",
    value: function _setEventListeners() {
      var _this2 = this;

      this._inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector));
      this._buttonElement = this._formElement.querySelector(this._submitButtonSelector);
      this.toggleButtonState();

      this._inputList.forEach(function (inputElement) {
        inputElement.addEventListener('input', function () {
          _this2._checkInputValidity(inputElement);

          _this2.toggleButtonState();
        });
      });
    }
  }, {
    key: "enableValidation",
    value: //включение валидации
    function enableValidation() {
      this._setEventListeners();
    }
  }]);

  return FormValidator;
}();


;

/***/ }),

/***/ "./src/components/Popup.js":
/*!*********************************!*\
  !*** ./src/components/Popup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Popup)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Popup = /*#__PURE__*/function () {
  function Popup(popupSelector) {
    _classCallCheck(this, Popup);

    this._popup = document.querySelector(popupSelector);
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popup.classList.add('popup_opened');

      document.addEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popup.classList.remove('popup_opened');

      document.removeEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "_handleEscClose",
    value: function _handleEscClose(evt) {
      if (evt.key === 'Escape') {
        this.close();
      }

      ;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this = this;

      this._popup.addEventListener('mousedown', function (evt) {
        if (evt.target.classList.contains('popup_opened') || evt.target.classList.contains('popup__close-button')) {
          _this.close();
        }

        ;
      });
    }
  }]);

  return Popup;
}();


;

/***/ }),

/***/ "./src/components/PopupWithConfirm.js":
/*!********************************************!*\
  !*** ./src/components/PopupWithConfirm.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithConfirm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithConfirm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithConfirm, _Popup);

  var _super = _createSuper(PopupWithConfirm);

  function PopupWithConfirm(_ref) {
    var _this;

    var popupSelector = _ref.popupSelector;

    _classCallCheck(this, PopupWithConfirm);

    _this = _super.call(this, popupSelector);
    _this._form = _this._popup.querySelector('.popup__form');
    _this._setEvent = _this._setEvent.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(PopupWithConfirm, [{
    key: "handleSubmitConfirm",
    value: function handleSubmitConfirm(submitConfirm) {
      this._handleSubmit = submitConfirm;
    }
  }, {
    key: "_setEvent",
    value: function _setEvent(evt) {
      evt.preventDefault();

      this._handleSubmit();
    }
  }, {
    key: "open",
    value: function open() {
      _get(_getPrototypeOf(PopupWithConfirm.prototype), "open", this).call(this);

      this._popup.addEventListener('submit', this._setEvent);
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithConfirm.prototype), "close", this).call(this);

      this._popup.removeEventListener('submit', this._setEvent);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(PopupWithConfirm.prototype), "setEventListeners", this).call(this);

      this._form.addEventListener('click', function (evt) {
        evt.preventDefault();

        _this2._handleSubmit();
      });
    }
  }]);

  return PopupWithConfirm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


;

/***/ }),

/***/ "./src/components/PopupWithForm.js":
/*!*****************************************!*\
  !*** ./src/components/PopupWithForm.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithForm)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithForm = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithForm, _Popup);

  var _super = _createSuper(PopupWithForm);

  function PopupWithForm(_ref) {
    var _this;

    var popupSelector = _ref.popupSelector,
        handleSubmitForm = _ref.handleSubmitForm;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._handleSubmitForm = handleSubmitForm;
    _this._form = _this._popup.querySelector('.popup__form');
    _this._inputList = Array.from(_this._form.querySelectorAll('.popup__input'));
    _this._buttonSubmit = _this._form.querySelector('.popup__submit-button');
    _this._buttonSubmitText = _this._buttonSubmit.textContent;
    return _this;
  }

  _createClass(PopupWithForm, [{
    key: "_getInputValues",
    value: function _getInputValues() {
      var _this2 = this;

      this._formValues = {};

      this._inputList.forEach(function (input) {
        _this2._formValues[input.name] = input.value;
      });

      return this._formValues;
    }
  }, {
    key: "renderLoading",
    value: function renderLoading(isLoading) {
      if (isLoading) {
        this._buttonSubmit.textContent = 'Сохранение...';
      } else {
        this._buttonSubmit.textContent = this._buttonSubmitText;
      }
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this3 = this;

      _get(_getPrototypeOf(PopupWithForm.prototype), "setEventListeners", this).call(this);

      this._form.addEventListener('submit', function (evt) {
        evt.preventDefault();

        _this3._handleSubmitForm(_this3._getInputValues());
      });
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithForm.prototype), "close", this).call(this);

      this._form.reset();
    }
  }]);

  return PopupWithForm;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


;

/***/ }),

/***/ "./src/components/PopupWithImage.js":
/*!******************************************!*\
  !*** ./src/components/PopupWithImage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PopupWithImage)
/* harmony export */ });
/* harmony import */ var _Popup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popup.js */ "./src/components/Popup.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var PopupWithImage = /*#__PURE__*/function (_Popup) {
  _inherits(PopupWithImage, _Popup);

  var _super = _createSuper(PopupWithImage);

  function PopupWithImage(_ref) {
    var _this;

    var popupSelector = _ref.popupSelector;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector);
    _this._popupImage = _this._popup.querySelector('.popup__image'); //

    _this._popupFigcaption = _this._popup.querySelector('.popup__figcaption');
    return _this;
  }

  _createClass(PopupWithImage, [{
    key: "open",
    value: function open(name, link) {
      this._popupImage.src = link;
      this._popupFigcaption.textContent = name;
      this._popupImage.alt = name;

      _get(_getPrototypeOf(PopupWithImage.prototype), "open", this).call(this);
    }
  }]);

  return PopupWithImage;
}(_Popup_js__WEBPACK_IMPORTED_MODULE_0__["default"]);


;

/***/ }),

/***/ "./src/components/Section.js":
/*!***********************************!*\
  !*** ./src/components/Section.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Section)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Section = /*#__PURE__*/function () {
  function Section(_ref, containerSelector) {
    var renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  _createClass(Section, [{
    key: "addItem",
    value: function addItem(element) {
      this._container.prepend(element);
    }
  }, {
    key: "renderItems",
    value: function renderItems(items) {
      var _this = this;

      items.forEach(function (item) {
        return _this._renderer(item);
      });
    }
  }]);

  return Section;
}();


;

/***/ }),

/***/ "./src/components/UserInfo.js":
/*!************************************!*\
  !*** ./src/components/UserInfo.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserInfo)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var UserInfo = /*#__PURE__*/function () {
  function UserInfo(_ref) {
    var profileName = _ref.profileName,
        profileDescription = _ref.profileDescription,
        profileAvatar = _ref.profileAvatar;

    _classCallCheck(this, UserInfo);

    this._name = document.querySelector(profileName);
    this._about = document.querySelector(profileDescription);
    this._avatar = document.querySelector(profileAvatar);
  }

  _createClass(UserInfo, [{
    key: "getUserInfo",
    value: function getUserInfo() {
      this._userData = {
        userName: this._name.textContent,
        userInfo: this._about.textContent
      };
      return this._userData;
    }
  }, {
    key: "setUserInfo",
    value: function setUserInfo(data) {
      this._name.textContent = data.name;
      this._about.textContent = data.about;
    }
  }, {
    key: "setUserAvatar",
    value: function setUserAvatar(url) {
      this._avatar.src = url.avatar;
    }
  }]);

  return UserInfo;
}();


;

/***/ }),

/***/ "./src/utils/constants.js":
/*!********************************!*\
  !*** ./src/utils/constants.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buttonEditAvatar": () => (/* binding */ buttonEditAvatar),
/* harmony export */   "buttonPopupAdd": () => (/* binding */ buttonPopupAdd),
/* harmony export */   "buttonProfileEdit": () => (/* binding */ buttonProfileEdit),
/* harmony export */   "cardTemplate": () => (/* binding */ cardTemplate),
/* harmony export */   "cardsContainer": () => (/* binding */ cardsContainer),
/* harmony export */   "formPopupAdd": () => (/* binding */ formPopupAdd),
/* harmony export */   "formPopupEdit": () => (/* binding */ formPopupEdit),
/* harmony export */   "formPopupEditAvatar": () => (/* binding */ formPopupEditAvatar),
/* harmony export */   "inputDescriptionPopupEdit": () => (/* binding */ inputDescriptionPopupEdit),
/* harmony export */   "inputNamePopupEdit": () => (/* binding */ inputNamePopupEdit),
/* harmony export */   "popupAdd": () => (/* binding */ popupAdd),
/* harmony export */   "popupConfirm": () => (/* binding */ popupConfirm),
/* harmony export */   "popupEdit": () => (/* binding */ popupEdit),
/* harmony export */   "popupEditAvatar": () => (/* binding */ popupEditAvatar),
/* harmony export */   "popupView": () => (/* binding */ popupView),
/* harmony export */   "validSet": () => (/* binding */ validSet)
/* harmony export */ });
//поп ап редактирование профиля
var popupEdit = document.querySelector('.popup_type_edit-profile'); //кнопка поп ап редактирования профиля

var buttonProfileEdit = document.querySelector('.profile__edit-button'); //форма поп апа редактирования профиля

var formPopupEdit = popupEdit.querySelector('.popup__form'); //инпуты формы поп апа редактирования профиля

var inputNamePopupEdit = formPopupEdit.querySelector('#name');
var inputDescriptionPopupEdit = formPopupEdit.querySelector('#description'); //поп ап добавление карточки

var popupAdd = document.querySelector('.popup_type_new-element'); //форма поп апа добавления карточки

var formPopupAdd = popupAdd.querySelector('.popup__form'); //кнопка поп ап добавления новой карточки

var buttonPopupAdd = document.querySelector('.profile__add-button'); //поп ап просмотр изображения

var popupView = document.querySelector('.popup_type_view-image'); //поп ап редактирование аватара

var popupEditAvatar = document.querySelector('.popup_type_avatar'); //форма поп апа редактирования аватара

var formPopupEditAvatar = popupEditAvatar.querySelector('.popup__form'); //кнопка поп ап редактирования аватара

var buttonEditAvatar = document.querySelector('.profile__edit-avatar-button'); //поп ап подтверждение

var popupConfirm = document.querySelector('.popup_type_confirm'); //темплейт

var cardTemplate = '.element-template'; //контейнер для карточек

var cardsContainer = '.elements__cards'; //объект с валидируемыми селекторами

var validSet = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
};

/***/ }),

/***/ "./src/pages/index.css":
/*!*****************************!*\
  !*** ./src/pages/index.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.css */ "./src/pages/index.css");
/* harmony import */ var _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/constants.js */ "./src/utils/constants.js");
/* harmony import */ var _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FormValidator.js */ "./src/components/FormValidator.js");
/* harmony import */ var _components_Card_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card.js */ "./src/components/Card.js");
/* harmony import */ var _components_Section_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Section.js */ "./src/components/Section.js");
/* harmony import */ var _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/PopupWithImage.js */ "./src/components/PopupWithImage.js");
/* harmony import */ var _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/PopupWithForm.js */ "./src/components/PopupWithForm.js");
/* harmony import */ var _components_PopupWithConfirm_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/PopupWithConfirm.js */ "./src/components/PopupWithConfirm.js");
/* harmony import */ var _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/UserInfo.js */ "./src/components/UserInfo.js");
/* harmony import */ var _components_Api_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Api.js */ "./src/components/Api.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










 //API

var api = new _components_Api_js__WEBPACK_IMPORTED_MODULE_9__["default"]({
  url: 'https://mesto.nomoreparties.co/v1/cohort-48',
  headers: {
    authorization: '2e8fc64d-f56b-4a8b-9573-f07d48d61f79',
    'Content-Type': 'application/json'
  }
});
var userId = null; //загрузка готовых карточек и данных пользователя с сервера

Promise.all([api.getUserInfo(), api.getInitialCards()]).then(function (_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      userData = _ref2[0],
      initialCards = _ref2[1];

  userId = userData._id;
  profile.setUserInfo(userData);
  profile.setUserAvatar(userData);
  initialCards.reverse();
  cards.renderItems(initialCards);
})["catch"](function (err) {
  console.log(err);
});
var cards = new _components_Section_js__WEBPACK_IMPORTED_MODULE_4__["default"]({
  renderer: function renderer(items) {
    cards.addItem(createNewCard(items));
  }
}, '.elements__cards'); //экземпляр с данными профиля

var profile = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
  profileName: '.profile__name',
  profileDescription: '.profile__description',
  profileAvatar: '.profile__avatar'
}); //поп ап редактирования профиля

var popupEditProfile = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  popupSelector: '.popup_type_edit-profile',
  handleSubmitForm: function handleSubmitForm(data) {
    popupEditProfile.renderLoading(true);
    api.updateUserInfo(data).then(function (res) {
      profile.setUserInfo(res);
      popupEditProfile.close();
    })["catch"](function (err) {
      console.log(err);
    })["finally"](function () {
      popupEditProfile.renderLoading(false);
    });
  }
}); //заполнение инпутов формы редактирования профиля

function setDataInputsProfile() {
  var userData = profile.getUserInfo();
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.inputNamePopupEdit.value = userData.userName;
  _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.inputDescriptionPopupEdit.value = userData.userInfo;
}

;
popupEditProfile.setEventListeners(); //слушатель кнопки редактирования профиля

_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.buttonProfileEdit.addEventListener('click', function () {
  setDataInputsProfile();
  popupEditProfile.open();
  profileValidator.toggleButtonState();
  profileValidator.resetValidation();
}); //поп ап редактирование аватара

var popupEditUserAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  popupSelector: '.popup_type_avatar',
  handleSubmitForm: function handleSubmitForm(data) {
    popupEditUserAvatar.renderLoading(true);
    api.updateAvatar(data).then(function (res) {
      profile.setUserAvatar(res);
      popupEditUserAvatar.close();
    })["catch"](function (err) {
      console.log(err);
    })["finally"](function () {
      popupEditUserAvatar.renderLoading(false);
    });
  }
});
popupEditUserAvatar.setEventListeners(); //обработчик кнопки поп апа редактирования аватара

_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.buttonEditAvatar.addEventListener('click', function () {
  popupEditUserAvatar.open();
  avatarValidator.toggleButtonState();
  avatarValidator.resetValidation();
}); //поп ап добавления новой карточки

var popupAddCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"]({
  popupSelector: '.popup_type_new-element',
  handleSubmitForm: function handleSubmitForm(data) {
    popupAddCard.renderLoading(true);
    api.sendCard(data).then(function (data) {
      var card = createNewCard(data);
      cards.addItem(card);
      popupAddCard.close();
    })["catch"](function (err) {
      console.log(err);
    })["finally"](function () {
      popupAddCard.renderLoading(false);
    });
  }
});
popupAddCard.setEventListeners(); //обработчик кнопки поп апа добавления новой карточки

_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.buttonPopupAdd.addEventListener('click', function () {
  popupAddCard.open();
  addCardValidator.toggleButtonState();
  addCardValidator.resetValidation();
}); ////поп ап подтверждение удаления карточки

var popupDeleteCard = new _components_PopupWithConfirm_js__WEBPACK_IMPORTED_MODULE_7__["default"]({
  popupSelector: '.popup_type_confirm'
});
popupDeleteCard.setEventListeners(); //поп ап просмотр изображения

var popupViewImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__["default"]({
  popupSelector: '.popup_type_view-image'
});
popupViewImage.setEventListeners(); //создание новой карточки

var createNewCard = function createNewCard(data) {
  var card = new _components_Card_js__WEBPACK_IMPORTED_MODULE_3__["default"]({
    data: data,
    userId: userId,
    handleCardClick: function handleCardClick() {
      popupViewImage.open(data.name, data.link);
    },
    handleDeleteClick: function handleDeleteClick() {
      popupDeleteCard.open();
      popupDeleteCard.handleSubmitConfirm(function () {
        api.deleteCard(card._id).then(function () {
          card.deleteCard();
          popupDeleteCard.close();
        })["catch"](function (err) {
          console.log(err);
        });
      });
    },
    handleLikeCard: function handleLikeCard() {
      if (card.isLiked()) {
        api.deleteLike(card._id).then(function (data) {
          card.deleteLike();
          card.setLike(data.likes);
        })["catch"](function (err) {
          console.log(err);
        });
      } else {
        api.setLike(card._id).then(function (data) {
          card.addLike();
          card.setLike(data.likes);
        })["catch"](function (err) {
          console.log(err);
        });
      }
    }
  }, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.cardTemplate);
  return card.createCard();
}; //валидация


var profileValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validSet, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.formPopupEdit);
var addCardValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validSet, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.formPopupAdd);
var avatarValidator = new _components_FormValidator_js__WEBPACK_IMPORTED_MODULE_2__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.validSet, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.formPopupEditAvatar);
profileValidator.enableValidation();
addCardValidator.enableValidation();
avatarValidator.enableValidation();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTVCLENBQXpCO0FBQ0EsSUFBTThDLGdCQUFnQixHQUFHLElBQUl0SSxvRUFBSixDQUFrQkMseURBQWxCLEVBQTRCMkYsNkRBQTVCLENBQXpCO0FBQ0EsSUFBTXNDLGVBQWUsR0FBRyxJQUFJbEksb0VBQUosQ0FBa0JDLHlEQUFsQixFQUE0QitGLG9FQUE1QixDQUF4QjtBQUNBOEIsZ0JBQWdCLENBQUNjLGdCQUFqQjtBQUNBTixnQkFBZ0IsQ0FBQ00sZ0JBQWpCO0FBQ0FWLGVBQWUsQ0FBQ1UsZ0JBQWhCLEciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0FwaS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXAuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhDb25maXJtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aEltYWdlLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvU2VjdGlvbi5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1VzZXJJbmZvLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3V0aWxzL2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9wYWdlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL21lc3RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBBcGkge1xyXG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgIHRoaXMuX3VybCA9IG9wdGlvbnMudXJsO1xyXG4gICAgdGhpcy5faGVhZGVycyA9IG9wdGlvbnMuaGVhZGVycztcclxuICB9O1xyXG5cclxuICAvL9C/0YDQvtCy0LXRgNC60LAg0L7RgtCy0LXRgtCwINGB0LXRgNCy0LXRgNCwXHJcbiAgX2NoZWNrU2VydmVyUmVzcG9uc2UocmVzKSB7XHJcbiAgICBpZiAocmVzLm9rKSB7XHJcbiAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGDQntGI0LjQsdC60LA6ICR7cmVzLnN0YXR1c31gKTtcclxuICB9O1xyXG5cclxuICAvL9C30LDQs9GA0YPQt9C60LAg0LTQsNC90L3Ri9GFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDRgSDRgdC10YDQstC10YDQsFxyXG4gIGdldFVzZXJJbmZvKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX3VybH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnNcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuX2NoZWNrU2VydmVyUmVzcG9uc2UocmVzKSk7XHJcbiAgfTtcclxuXHJcbiAgLy/QvtCx0L3QvtCy0LvQtdC90LjQtSDQsNCy0LDRgtCw0YDQsFxyXG4gIHVwZGF0ZUF2YXRhcihkYXRhKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfS91c2Vycy9tZS9hdmF0YXJgLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGF2YXRhcjogZGF0YS5hdmF0YXJcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuX2NoZWNrU2VydmVyUmVzcG9uc2UocmVzKSk7XHJcbiAgfTtcclxuXHJcbiAgLy/RgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INC/0YDQvtGE0LjQu9GPXHJcbiAgdXBkYXRlVXNlckluZm8oZGF0YSkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX3VybH0vdXNlcnMvbWVgLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BBVENIJyxcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICBhYm91dDogZGF0YS5hYm91dFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tTZXJ2ZXJSZXNwb25zZShyZXMpKTtcclxuICB9O1xyXG5cclxuICAvL9C30LDQs9GA0YPQt9C60LAg0LrQsNGA0YLQvtGH0LXQuiDRgSDRgdC10YDQstC10YDQsFxyXG4gIGdldEluaXRpYWxDYXJkcygpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9L2NhcmRzYCwge1xyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB0aGlzLl9jaGVja1NlcnZlclJlc3BvbnNlKHJlcykpO1xyXG4gIH07XHJcblxyXG4gIC8v0LTQvtCx0LDQstC40YLRjCDQvdC+0LLRg9GOINC60LDRgNGC0L7Rh9C60YNcclxuICBzZW5kQ2FyZChkYXRhKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfS9jYXJkc2AsIHtcclxuICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnMsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBuYW1lOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgbGluazogZGF0YS5saW5rXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB0aGlzLl9jaGVja1NlcnZlclJlc3BvbnNlKHJlcykpO1xyXG4gIH07XHJcblxyXG4gIC8v0YPQtNCw0LvQuNGC0Ywg0LrQsNGA0YLQvtGH0LrRg1xyXG4gIGRlbGV0ZUNhcmQoY2FyZElEKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfS9jYXJkcy8ke2NhcmRJRH1gLCB7XHJcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnNcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuX2NoZWNrU2VydmVyUmVzcG9uc2UocmVzKSk7XHJcbiAgfTtcclxuXHJcbiAgLy/Qv9C+0YHRgtCw0LLQuNGC0Ywg0LvQsNC50LpcclxuICBzZXRMaWtlKGNhcmRJRCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX3VybH0vY2FyZHMvJHtjYXJkSUR9L2xpa2VzYCwge1xyXG4gICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB0aGlzLl9jaGVja1NlcnZlclJlc3BvbnNlKHJlcykpO1xyXG4gIH07XHJcblxyXG4gIC8v0YHQvdGP0YLRjCDQu9Cw0LnQulxyXG4gIGRlbGV0ZUxpa2UoY2FyZElEKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfS9jYXJkcy8ke2NhcmRJRH0vbGlrZXNgLCB7XHJcbiAgICAgIG1ldGhvZDogJ0RFTEVURScsXHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnNcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuX2NoZWNrU2VydmVyUmVzcG9uc2UocmVzKSk7XHJcbiAgfTtcclxuXHJcbn07XHJcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKHsgZGF0YSwgdXNlcklkLCBoYW5kbGVDYXJkQ2xpY2ssIGhhbmRsZURlbGV0ZUNsaWNrLCBoYW5kbGVMaWtlQ2FyZCB9LCBjYXJkU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3RpdGxlID0gZGF0YS5uYW1lO1xyXG4gICAgdGhpcy5fbGluayA9IGRhdGEubGluaztcclxuICAgIHRoaXMuX2xpa2VzID0gZGF0YS5saWtlcztcclxuICAgIHRoaXMuX2lkID0gZGF0YS5faWQ7XHJcbiAgICB0aGlzLl9vd25lcklkID0gZGF0YS5vd25lci5faWQ7XHJcbiAgICB0aGlzLl91c2VySWQgPSB1c2VySWQ7XHJcblxyXG4gICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrID0gaGFuZGxlQ2FyZENsaWNrO1xyXG4gICAgdGhpcy5faGFuZGxlRGVsZXRlQ2xpY2sgPSBoYW5kbGVEZWxldGVDbGljaztcclxuICAgIHRoaXMuX2hhbmRsZUxpa2VDYXJkID0gaGFuZGxlTGlrZUNhcmQ7XHJcblxyXG4gICAgdGhpcy5fY2FyZFNlbGVjdG9yID0gY2FyZFNlbGVjdG9yO1xyXG4gIH07XHJcblxyXG4gIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkU2VsZWN0b3IpXHJcbiAgICAgIC5jb250ZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudCcpXHJcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY3JlYXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcclxuICAgIHRoaXMuX2NhcmRJbWFnZSA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19pbWFnZScpO1xyXG4gICAgdGhpcy5fYnV0dG9uTGlrZSA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19saWtlLWJ1dHRvbicpO1xyXG4gICAgdGhpcy5fbGlrZXNDb3VudCA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19saWtlLWNvdW50Jyk7XHJcbiAgICB0aGlzLl9idXR0b25EZWxldGUgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fdHJhc2gtYnV0dG9uJyk7XHJcblxyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9faGVhZGluZycpLnRleHRDb250ZW50ID0gdGhpcy5fdGl0bGU7XHJcbiAgICB0aGlzLl9jYXJkSW1hZ2Uuc3JjID0gdGhpcy5fbGluaztcclxuICAgIHRoaXMuX2NhcmRJbWFnZS5hbHQgPSB0aGlzLl90aXRsZTtcclxuXHJcbiAgICB0aGlzLl9oaWRlRGVsZXRlQnV0dG9uKCk7XHJcbiAgICB0aGlzLnNldExpa2UodGhpcy5fbGlrZXMpO1xyXG4gICAgdGhpcy5fY2hlY2tPd25MaWtlKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2NhcmRFbGVtZW50O1xyXG4gIH07XHJcblxyXG4gIGRlbGV0ZUNhcmQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5yZW1vdmUoKTtcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gbnVsbDtcclxuICB9O1xyXG5cclxuICBfaGlkZURlbGV0ZUJ1dHRvbigpIHtcclxuICAgIGlmICh0aGlzLl9vd25lcklkICE9PSB0aGlzLl91c2VySWQpIHtcclxuICAgICAgdGhpcy5fYnV0dG9uRGVsZXRlLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2J1dHRvbkRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2xpY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2J1dHRvbkxpa2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2VDYXJkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9jYXJkSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljaygpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaXNMaWtlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9saWtlcy5maW5kKHVzZXIgPT4gdXNlci5faWQgPT09IHRoaXMuX3VzZXJJZCk7XHJcbiAgfTtcclxuXHJcbiAgX2NoZWNrT3duTGlrZSgpIHtcclxuICAgIHRoaXMuaXNMaWtlZCgpID8gdGhpcy5hZGRMaWtlKCkgOiB0aGlzLmRlbGV0ZUxpa2UoKTtcclxuICB9O1xyXG5cclxuICBzZXRMaWtlKGRhdGEpIHtcclxuICAgIHRoaXMuX2xpa2VzID0gZGF0YTtcclxuICAgIHRoaXMuX2xpa2VzQ291bnQudGV4dENvbnRlbnQgPSB0aGlzLl9saWtlcy5sZW5ndGg7XHJcbiAgfTtcclxuXHJcbiAgYWRkTGlrZSA9ICgpID0+IHtcclxuICAgIHRoaXMuX2J1dHRvbkxpa2UuY2xhc3NMaXN0LmFkZCgnZWxlbWVudF9fbGlrZS1idXR0b25fYWN0aXZlJyk7XHJcbiAgfTtcclxuXHJcbiAgZGVsZXRlTGlrZSA9ICgpID0+IHtcclxuICAgIHRoaXMuX2J1dHRvbkxpa2UuY2xhc3NMaXN0LnJlbW92ZSgnZWxlbWVudF9fbGlrZS1idXR0b25fYWN0aXZlJyk7XHJcbiAgfTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgY29uc3RydWN0b3IodmFsaWRTZXQsIGZvcm1FbGVtZW50KSB7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xyXG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHZhbGlkU2V0LmlucHV0U2VsZWN0b3I7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHZhbGlkU2V0LnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xyXG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHZhbGlkU2V0LmluYWN0aXZlQnV0dG9uQ2xhc3M7XHJcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSB2YWxpZFNldC5pbnB1dEVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gdmFsaWRTZXQuZXJyb3JDbGFzcztcclxuICB9O1xyXG5cclxuICAvL9C/0L7QutCw0LfQsNGC0Ywg0L7RiNC40LHQutGDXHJcbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgZXJyb3JNZXNzYWdlKSB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgfTtcclxuXHJcbiAgLy/RgdC/0YDRj9GC0LDRgtGMINC+0YjQuNCx0LrRg1xyXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIH07XHJcblxyXG4gIC8v0LLQsNC70LjQtNC90L7RgdGC0Ywg0LjQvdC/0YPRgtCwXHJcbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpIHtcclxuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIC8v0L/RgNC+0LLQtdGA0LrQsCDQuNC90L/Rg9GC0L7QsiDQvdCwINC/0YDQvtGF0L7QttC00LXQvdC40LUg0LLQsNC70LjQtNC90L7RgdGC0LhcclxuICBfaGFzSW52YWxpZElucHV0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgcmV0dXJuICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQ7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvL9GB0L7RgdGC0L7Rj9C90LjQtSDQutC90L7Qv9C60Lgg0YHQsNCx0LzQuNGCXHJcbiAgZGlzYWJsZVN1Ym1pdEJ1dHRvbigpIHtcclxuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gIH07XHJcbiAgZW5hYmxlU3VibWl0QnV0dG9uKCkge1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gIH07XHJcblxyXG4gIC8v0L/QtdGA0LXQutC70Y7Rh9Cw0YLQtdC70Ywg0YHQvtGB0YLQvtGP0L3QuNGPINC60L3QvtC/0LrQuCDRgdCw0LHQvNC40YJcclxuICB0b2dnbGVCdXR0b25TdGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQoKSkge1xyXG4gICAgICB0aGlzLmRpc2FibGVTdWJtaXRCdXR0b24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZW5hYmxlU3VibWl0QnV0dG9uKCk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIC8v0L7Rh9C40YHRgtC40YLRjCDQvtGI0LjQsdC60LhcclxuICByZXNldFZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy50b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG59XHJcblxyXG4gIC8v0YHQu9GD0YjQsNGC0LXQu9C4INC90LAg0LLRgdC1INC40L3Qv9GD0YLRi1xyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKSk7XHJcbiAgICB0aGlzLl9idXR0b25FbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcbiAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcclxuICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy/QstC60LvRjtGH0LXQvdC40LUg0LLQsNC70LjQtNCw0YbQuNC4XHJcbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcclxuICB9O1xyXG5cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXBfb3BlbmVkJyk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH07XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXBfb3BlbmVkJyk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH07XHJcblxyXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcclxuICAgIGlmIChldnQua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2dCkgPT4ge1xyXG4gICAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX29wZW5lZCcpIHx8IGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cF9fY2xvc2UtYnV0dG9uJykpIHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG59O1xyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aENvbmZpcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yIH0pIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybScpO1xyXG4gICAgdGhpcy5fc2V0RXZlbnQgPSB0aGlzLl9zZXRFdmVudC5iaW5kKHRoaXMpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVN1Ym1pdENvbmZpcm0oc3VibWl0Q29uZmlybSkge1xyXG4gICAgdGhpcy5faGFuZGxlU3VibWl0ID0gc3VibWl0Q29uZmlybTtcclxuICB9O1xyXG5cclxuICBfc2V0RXZlbnQoZXZ0KSB7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuX2hhbmRsZVN1Ym1pdCgpO1xyXG4gIH07XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICBzdXBlci5vcGVuKCk7XHJcbiAgICB0aGlzLl9wb3B1cC5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLl9zZXRFdmVudCk7XHJcbiAgfTtcclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgdGhpcy5fcG9wdXAucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgdGhpcy5fc2V0RXZlbnQpO1xyXG4gIH07XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLl9oYW5kbGVTdWJtaXQoKTtcclxuICAgIH0pO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHsgcG9wdXBTZWxlY3RvciwgaGFuZGxlU3VibWl0Rm9ybSB9KSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2hhbmRsZVN1Ym1pdEZvcm0gPSBoYW5kbGVTdWJtaXRGb3JtO1xyXG4gICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybScpO1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9faW5wdXQnKSk7XHJcbiAgICB0aGlzLl9idXR0b25TdWJtaXQgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fc3VibWl0LWJ1dHRvbicpO1xyXG4gICAgdGhpcy5fYnV0dG9uU3VibWl0VGV4dCA9IHRoaXMuX2J1dHRvblN1Ym1pdC50ZXh0Q29udGVudDtcclxuICB9O1xyXG5cclxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICB0aGlzLl9mb3JtVmFsdWVzID0ge307XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgdGhpcy5fZm9ybVZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1WYWx1ZXM7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyTG9hZGluZyhpc0xvYWRpbmcpIHtcclxuICAgIGlmIChpc0xvYWRpbmcpIHtcclxuICAgICAgdGhpcy5fYnV0dG9uU3VibWl0LnRleHRDb250ZW50ID0gJ9Ch0L7RhdGA0LDQvdC10L3QuNC1Li4uJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2J1dHRvblN1Ym1pdC50ZXh0Q29udGVudCA9IHRoaXMuX2J1dHRvblN1Ym1pdFRleHQ7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLl9oYW5kbGVTdWJtaXRGb3JtKHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgdGhpcy5fZm9ybS5yZXNldCgpO1xyXG4gIH07XHJcbn07XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yIH0pIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fcG9wdXBJbWFnZSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faW1hZ2UnKTsgLy9cclxuICAgIHRoaXMuX3BvcHVwRmlnY2FwdGlvbiA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZmlnY2FwdGlvbicpO1xyXG4gIH07XHJcblxyXG4gIG9wZW4obmFtZSwgbGluaykge1xyXG4gICAgdGhpcy5fcG9wdXBJbWFnZS5zcmMgPSBsaW5rO1xyXG4gICAgdGhpcy5fcG9wdXBGaWdjYXB0aW9uLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHRoaXMuX3BvcHVwSW1hZ2UuYWx0ID0gbmFtZTtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICB9O1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcih7IHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XHJcbiAgfTtcclxuXHJcbiAgYWRkSXRlbShlbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcclxuICB9O1xyXG5cclxuICByZW5kZXJJdGVtcyhpdGVtcykge1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gdGhpcy5fcmVuZGVyZXIoaXRlbSkpO1xyXG4gIH07XHJcblxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgY29uc3RydWN0b3IoeyBwcm9maWxlTmFtZSwgcHJvZmlsZURlc2NyaXB0aW9uLCBwcm9maWxlQXZhdGFyIH0pIHtcclxuICAgIHRoaXMuX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2ZpbGVOYW1lKTtcclxuICAgIHRoaXMuX2Fib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9maWxlRGVzY3JpcHRpb24pO1xyXG4gICAgdGhpcy5fYXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9maWxlQXZhdGFyKTtcclxuICB9O1xyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIHRoaXMuX3VzZXJEYXRhID0ge1xyXG4gICAgICB1c2VyTmFtZTogdGhpcy5fbmFtZS50ZXh0Q29udGVudCxcclxuICAgICAgdXNlckluZm86IHRoaXMuX2Fib3V0LnRleHRDb250ZW50XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3VzZXJEYXRhO1xyXG4gIH07XHJcblxyXG4gIHNldFVzZXJJbmZvKGRhdGEpIHtcclxuICAgIHRoaXMuX25hbWUudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLl9hYm91dC50ZXh0Q29udGVudCA9IGRhdGEuYWJvdXQ7XHJcbiAgfTtcclxuXHJcbiAgc2V0VXNlckF2YXRhcih1cmwpIHtcclxuICAgIHRoaXMuX2F2YXRhci5zcmMgPSB1cmwuYXZhdGFyO1xyXG4gIH07XHJcbn07XHJcbiIsIi8v0L/QvtC/INCw0L8g0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQv9GA0L7RhNC40LvRj1xyXG5leHBvcnQgY29uc3QgcG9wdXBFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX3R5cGVfZWRpdC1wcm9maWxlJyk7XHJcbi8v0LrQvdC+0L/QutCwINC/0L7QvyDQsNC/INGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0L/RgNC+0YTQuNC70Y9cclxuZXhwb3J0IGNvbnN0IGJ1dHRvblByb2ZpbGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2VkaXQtYnV0dG9uJyk7XHJcbi8v0YTQvtGA0LzQsCDQv9C+0L8g0LDQv9CwINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0L/RgNC+0YTQuNC70Y9cclxuZXhwb3J0IGNvbnN0IGZvcm1Qb3B1cEVkaXQgPSBwb3B1cEVkaXQucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJyk7XHJcbi8v0LjQvdC/0YPRgtGLINGE0L7RgNC80Ysg0L/QvtC/INCw0L/QsCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINC/0YDQvtGE0LjQu9GPXHJcbmV4cG9ydCBjb25zdCBpbnB1dE5hbWVQb3B1cEVkaXQgPSBmb3JtUG9wdXBFZGl0LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XHJcbmV4cG9ydCBjb25zdCBpbnB1dERlc2NyaXB0aW9uUG9wdXBFZGl0ID0gZm9ybVBvcHVwRWRpdC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcclxuXHJcbi8v0L/QvtC/INCw0L8g0LTQvtCx0LDQstC70LXQvdC40LUg0LrQsNGA0YLQvtGH0LrQuFxyXG5leHBvcnQgY29uc3QgcG9wdXBBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfdHlwZV9uZXctZWxlbWVudCcpO1xyXG4vL9GE0L7RgNC80LAg0L/QvtC/INCw0L/QsCDQtNC+0LHQsNCy0LvQtdC90LjRjyDQutCw0YDRgtC+0YfQutC4XHJcbmV4cG9ydCBjb25zdCBmb3JtUG9wdXBBZGQgPSBwb3B1cEFkZC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTtcclxuLy/QutC90L7Qv9C60LAg0L/QvtC/INCw0L8g0LTQvtCx0LDQstC70LXQvdC40Y8g0L3QvtCy0L7QuSDQutCw0YDRgtC+0YfQutC4XHJcbmV4cG9ydCBjb25zdCBidXR0b25Qb3B1cEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hZGQtYnV0dG9uJyk7XHJcblxyXG4vL9C/0L7QvyDQsNC/INC/0YDQvtGB0LzQvtGC0YAg0LjQt9C+0LHRgNCw0LbQtdC90LjRj1xyXG5leHBvcnQgY29uc3QgcG9wdXBWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX3R5cGVfdmlldy1pbWFnZScpO1xyXG5cclxuLy/Qv9C+0L8g0LDQvyDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INCw0LLQsNGC0LDRgNCwXHJcbmV4cG9ydCBjb25zdCBwb3B1cEVkaXRBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfdHlwZV9hdmF0YXInKTtcclxuLy/RhNC+0YDQvNCwINC/0L7QvyDQsNC/0LAg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDQsNCy0LDRgtCw0YDQsFxyXG5leHBvcnQgY29uc3QgZm9ybVBvcHVwRWRpdEF2YXRhciA9IHBvcHVwRWRpdEF2YXRhci5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTtcclxuLy/QutC90L7Qv9C60LAg0L/QvtC/INCw0L8g0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDQsNCy0LDRgtCw0YDQsFxyXG5leHBvcnQgY29uc3QgYnV0dG9uRWRpdEF2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19lZGl0LWF2YXRhci1idXR0b24nKTtcclxuXHJcbi8v0L/QvtC/INCw0L8g0L/QvtC00YLQstC10YDQttC00LXQvdC40LVcclxuZXhwb3J0IGNvbnN0IHBvcHVwQ29uZmlybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF90eXBlX2NvbmZpcm0nKTtcclxuXHJcbi8v0YLQtdC80L/Qu9C10LnRglxyXG5leHBvcnQgY29uc3QgY2FyZFRlbXBsYXRlID0gJy5lbGVtZW50LXRlbXBsYXRlJztcclxuLy/QutC+0L3RgtC10LnQvdC10YAg0LTQu9GPINC60LDRgNGC0L7Rh9C10LpcclxuZXhwb3J0IGNvbnN0IGNhcmRzQ29udGFpbmVyID0gJy5lbGVtZW50c19fY2FyZHMnO1xyXG5cclxuLy/QvtCx0YrQtdC60YIg0YEg0LLQsNC70LjQtNC40YDRg9C10LzRi9C80Lgg0YHQtdC70LXQutGC0L7RgNCw0LzQuFxyXG5leHBvcnQgY29uc3QgdmFsaWRTZXQgPSB7XHJcbiAgZm9ybVNlbGVjdG9yOiAnLnBvcHVwX19mb3JtJyxcclxuICBpbnB1dFNlbGVjdG9yOiAnLnBvcHVwX19pbnB1dCcsXHJcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6ICcucG9wdXBfX3N1Ym1pdC1idXR0b24nLFxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6ICdwb3B1cF9fc3VibWl0LWJ1dHRvbl9kaXNhYmxlZCcsXHJcbiAgaW5wdXRFcnJvckNsYXNzOiAncG9wdXBfX2lucHV0X3R5cGVfZXJyb3InLFxyXG4gIGVycm9yQ2xhc3M6ICdwb3B1cF9fZXJyb3JfdmlzaWJsZSdcclxufTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgdmFsaWRTZXQsIGZvcm1Qb3B1cEVkaXQsIGZvcm1Qb3B1cEFkZCwgYnV0dG9uUHJvZmlsZUVkaXQsIGJ1dHRvblBvcHVwQWRkLFxyXG4gIGJ1dHRvbkVkaXRBdmF0YXIsIGlucHV0TmFtZVBvcHVwRWRpdCwgaW5wdXREZXNjcmlwdGlvblBvcHVwRWRpdCwgcG9wdXBFZGl0LCBwb3B1cEFkZCxcclxuICBwb3B1cFZpZXcsIHBvcHVwRWRpdEF2YXRhciwgZm9ybVBvcHVwRWRpdEF2YXRhciwgcG9wdXBDb25maXJtLCBjYXJkVGVtcGxhdGUsIGNhcmRzQ29udGFpbmVyXHJcbn0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzLmpzJztcclxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkLmpzJztcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzJztcclxuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMnO1xyXG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMnO1xyXG5pbXBvcnQgUG9wdXBXaXRoQ29uZmlybSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aENvbmZpcm0uanMnO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VySW5mby5qcyc7XHJcbmltcG9ydCBBcGkgZnJvbSAnLi4vY29tcG9uZW50cy9BcGkuanMnO1xyXG5cclxuLy9BUElcclxuY29uc3QgYXBpID0gbmV3IEFwaSh7XHJcbiAgdXJsOiAnaHR0cHM6Ly9tZXN0by5ub21vcmVwYXJ0aWVzLmNvL3YxL2NvaG9ydC00OCcsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgYXV0aG9yaXphdGlvbjogJzJlOGZjNjRkLWY1NmItNGE4Yi05NTczLWYwN2Q0OGQ2MWY3OScsXHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgfVxyXG59KTtcclxuXHJcbmxldCB1c2VySWQgPSBudWxsO1xyXG5cclxuLy/Qt9Cw0LPRgNGD0LfQutCwINCz0L7RgtC+0LLRi9GFINC60LDRgNGC0L7Rh9C10Log0Lgg0LTQsNC90L3Ri9GFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDRgSDRgdC10YDQstC10YDQsFxyXG5Qcm9taXNlLmFsbChbYXBpLmdldFVzZXJJbmZvKCksIGFwaS5nZXRJbml0aWFsQ2FyZHMoKV0pXHJcbiAgLnRoZW4oKFt1c2VyRGF0YSwgaW5pdGlhbENhcmRzXSkgPT4ge1xyXG4gICAgdXNlcklkID0gdXNlckRhdGEuX2lkO1xyXG5cclxuICAgIHByb2ZpbGUuc2V0VXNlckluZm8odXNlckRhdGEpO1xyXG4gICAgcHJvZmlsZS5zZXRVc2VyQXZhdGFyKHVzZXJEYXRhKTtcclxuXHJcbiAgICBpbml0aWFsQ2FyZHMucmV2ZXJzZSgpO1xyXG4gICAgY2FyZHMucmVuZGVySXRlbXMoaW5pdGlhbENhcmRzKTtcclxuICB9XHJcbiAgKVxyXG4gIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH0pO1xyXG5cclxuY29uc3QgY2FyZHMgPSBuZXcgU2VjdGlvbih7XHJcbiAgcmVuZGVyZXI6IChpdGVtcykgPT4ge1xyXG4gICAgY2FyZHMuYWRkSXRlbShjcmVhdGVOZXdDYXJkKGl0ZW1zKSk7XHJcbiAgfVxyXG59LCAnLmVsZW1lbnRzX19jYXJkcycpO1xyXG5cclxuLy/RjdC60LfQtdC80L/Qu9GP0YAg0YEg0LTQsNC90L3Ri9C80Lgg0L/RgNC+0YTQuNC70Y9cclxuY29uc3QgcHJvZmlsZSA9IG5ldyBVc2VySW5mbyh7XHJcbiAgcHJvZmlsZU5hbWU6ICcucHJvZmlsZV9fbmFtZScsXHJcbiAgcHJvZmlsZURlc2NyaXB0aW9uOiAnLnByb2ZpbGVfX2Rlc2NyaXB0aW9uJyxcclxuICBwcm9maWxlQXZhdGFyOiAnLnByb2ZpbGVfX2F2YXRhcidcclxufSk7XHJcblxyXG4vL9C/0L7QvyDQsNC/INGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0L/RgNC+0YTQuNC70Y9cclxuY29uc3QgcG9wdXBFZGl0UHJvZmlsZSA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcclxuICBwb3B1cFNlbGVjdG9yOiAnLnBvcHVwX3R5cGVfZWRpdC1wcm9maWxlJyxcclxuICBoYW5kbGVTdWJtaXRGb3JtOiAoZGF0YSkgPT4ge1xyXG4gICAgcG9wdXBFZGl0UHJvZmlsZS5yZW5kZXJMb2FkaW5nKHRydWUpO1xyXG4gICAgYXBpLnVwZGF0ZVVzZXJJbmZvKGRhdGEpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBwcm9maWxlLnNldFVzZXJJbmZvKHJlcyk7XHJcbiAgICAgICAgcG9wdXBFZGl0UHJvZmlsZS5jbG9zZSgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBwb3B1cEVkaXRQcm9maWxlLnJlbmRlckxvYWRpbmcoZmFsc2UpO1xyXG4gICAgICB9KVxyXG4gIH1cclxufSk7XHJcblxyXG4vL9C30LDQv9C+0LvQvdC10L3QuNC1INC40L3Qv9GD0YLQvtCyINGE0L7RgNC80Ysg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDQv9GA0L7RhNC40LvRj1xyXG5mdW5jdGlvbiBzZXREYXRhSW5wdXRzUHJvZmlsZSgpIHtcclxuICBjb25zdCB1c2VyRGF0YSA9IHByb2ZpbGUuZ2V0VXNlckluZm8oKTtcclxuICBpbnB1dE5hbWVQb3B1cEVkaXQudmFsdWUgPSB1c2VyRGF0YS51c2VyTmFtZTtcclxuICBpbnB1dERlc2NyaXB0aW9uUG9wdXBFZGl0LnZhbHVlID0gdXNlckRhdGEudXNlckluZm87XHJcbn07XHJcblxyXG5wb3B1cEVkaXRQcm9maWxlLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vL9GB0LvRg9GI0LDRgtC10LvRjCDQutC90L7Qv9C60Lgg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDQv9GA0L7RhNC40LvRj1xyXG5idXR0b25Qcm9maWxlRWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBzZXREYXRhSW5wdXRzUHJvZmlsZSgpO1xyXG4gIHBvcHVwRWRpdFByb2ZpbGUub3BlbigpO1xyXG4gIHByb2ZpbGVWYWxpZGF0b3IudG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICBwcm9maWxlVmFsaWRhdG9yLnJlc2V0VmFsaWRhdGlvbigpO1xyXG59KTtcclxuXHJcbi8v0L/QvtC/INCw0L8g0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQsNCy0LDRgtCw0YDQsFxyXG5jb25zdCBwb3B1cEVkaXRVc2VyQXZhdGFyID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xyXG4gIHBvcHVwU2VsZWN0b3I6ICcucG9wdXBfdHlwZV9hdmF0YXInLFxyXG4gIGhhbmRsZVN1Ym1pdEZvcm06IChkYXRhKSA9PiB7XHJcbiAgICBwb3B1cEVkaXRVc2VyQXZhdGFyLnJlbmRlckxvYWRpbmcodHJ1ZSk7XHJcbiAgICBhcGkudXBkYXRlQXZhdGFyKGRhdGEpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBwcm9maWxlLnNldFVzZXJBdmF0YXIocmVzKTtcclxuICAgICAgICBwb3B1cEVkaXRVc2VyQXZhdGFyLmNsb3NlKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwRWRpdFVzZXJBdmF0YXIucmVuZGVyTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG59KTtcclxuXHJcbnBvcHVwRWRpdFVzZXJBdmF0YXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8v0L7QsdGA0LDQsdC+0YLRh9C40Log0LrQvdC+0L/QutC4INC/0L7QvyDQsNC/0LAg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDQsNCy0LDRgtCw0YDQsFxyXG5idXR0b25FZGl0QXZhdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHBvcHVwRWRpdFVzZXJBdmF0YXIub3BlbigpO1xyXG4gIGF2YXRhclZhbGlkYXRvci50b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gIGF2YXRhclZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcclxufSk7XHJcblxyXG4vL9C/0L7QvyDQsNC/INC00L7QsdCw0LLQu9C10L3QuNGPINC90L7QstC+0Lkg0LrQsNGA0YLQvtGH0LrQuFxyXG5jb25zdCBwb3B1cEFkZENhcmQgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XHJcbiAgcG9wdXBTZWxlY3RvcjogJy5wb3B1cF90eXBlX25ldy1lbGVtZW50JyxcclxuICBoYW5kbGVTdWJtaXRGb3JtOiAoZGF0YSkgPT4ge1xyXG4gICAgcG9wdXBBZGRDYXJkLnJlbmRlckxvYWRpbmcodHJ1ZSk7XHJcbiAgICBhcGkuc2VuZENhcmQoZGF0YSlcclxuICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICBjb25zdCBjYXJkID0gY3JlYXRlTmV3Q2FyZChkYXRhKTtcclxuICAgICAgICBjYXJkcy5hZGRJdGVtKGNhcmQpO1xyXG4gICAgICAgIHBvcHVwQWRkQ2FyZC5jbG9zZSgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5maW5hbGx5KCgpID0+IHtcclxuICAgICAgICBwb3B1cEFkZENhcmQucmVuZGVyTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG59KTtcclxuXHJcbnBvcHVwQWRkQ2FyZC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuLy/QvtCx0YDQsNCx0L7RgtGH0LjQuiDQutC90L7Qv9C60Lgg0L/QvtC/INCw0L/QsCDQtNC+0LHQsNCy0LvQtdC90LjRjyDQvdC+0LLQvtC5INC60LDRgNGC0L7Rh9C60LhcclxuYnV0dG9uUG9wdXBBZGQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcG9wdXBBZGRDYXJkLm9wZW4oKTtcclxuICBhZGRDYXJkVmFsaWRhdG9yLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgYWRkQ2FyZFZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcclxufSk7XHJcblxyXG4vLy8v0L/QvtC/INCw0L8g0L/QvtC00YLQstC10YDQttC00LXQvdC40LUg0YPQtNCw0LvQtdC90LjRjyDQutCw0YDRgtC+0YfQutC4XHJcbmNvbnN0IHBvcHVwRGVsZXRlQ2FyZCA9IG5ldyBQb3B1cFdpdGhDb25maXJtKHtcclxuICBwb3B1cFNlbGVjdG9yOiAnLnBvcHVwX3R5cGVfY29uZmlybSdcclxufSk7XHJcblxyXG5wb3B1cERlbGV0ZUNhcmQuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8v0L/QvtC/INCw0L8g0L/RgNC+0YHQvNC+0YLRgCDQuNC30L7QsdGA0LDQttC10L3QuNGPXHJcbmNvbnN0IHBvcHVwVmlld0ltYWdlID0gbmV3IFBvcHVwV2l0aEltYWdlKHsgcG9wdXBTZWxlY3RvcjogJy5wb3B1cF90eXBlX3ZpZXctaW1hZ2UnIH0pO1xyXG5cclxucG9wdXBWaWV3SW1hZ2Uuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8v0YHQvtC30LTQsNC90LjQtSDQvdC+0LLQvtC5INC60LDRgNGC0L7Rh9C60LhcclxuY29uc3QgY3JlYXRlTmV3Q2FyZCA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKHtcclxuICAgIGRhdGEsIHVzZXJJZCxcclxuICAgIGhhbmRsZUNhcmRDbGljazogKCkgPT4ge1xyXG4gICAgICBwb3B1cFZpZXdJbWFnZS5vcGVuKGRhdGEubmFtZSwgZGF0YS5saW5rKTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVEZWxldGVDbGljazogKCkgPT4ge1xyXG4gICAgICBwb3B1cERlbGV0ZUNhcmQub3BlbigpO1xyXG4gICAgICBwb3B1cERlbGV0ZUNhcmQuaGFuZGxlU3VibWl0Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgYXBpLmRlbGV0ZUNhcmQoY2FyZC5faWQpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNhcmQuZGVsZXRlQ2FyZCgpO1xyXG4gICAgICAgICAgICBwb3B1cERlbGV0ZUNhcmQuY2xvc2UoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBoYW5kbGVMaWtlQ2FyZDogKCkgPT4ge1xyXG4gICAgICBpZiAoY2FyZC5pc0xpa2VkKCkpIHtcclxuICAgICAgICBhcGkuZGVsZXRlTGlrZShjYXJkLl9pZClcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNhcmQuZGVsZXRlTGlrZSgpO1xyXG4gICAgICAgICAgICBjYXJkLnNldExpa2UoZGF0YS5saWtlcyk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXBpLnNldExpa2UoY2FyZC5faWQpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjYXJkLmFkZExpa2UoKTtcclxuICAgICAgICAgICAgY2FyZC5zZXRMaWtlKGRhdGEubGlrZXMpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgY2FyZFRlbXBsYXRlKTtcclxuICByZXR1cm4gY2FyZC5jcmVhdGVDYXJkKCk7XHJcbn07XHJcblxyXG4vL9Cy0LDQu9C40LTQsNGG0LjRj1xyXG5jb25zdCBwcm9maWxlVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRTZXQsIGZvcm1Qb3B1cEVkaXQpO1xyXG5jb25zdCBhZGRDYXJkVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRTZXQsIGZvcm1Qb3B1cEFkZCk7XHJcbmNvbnN0IGF2YXRhclZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHZhbGlkU2V0LCBmb3JtUG9wdXBFZGl0QXZhdGFyKTtcclxucHJvZmlsZVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcbmFkZENhcmRWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5hdmF0YXJWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG4iXSwibmFtZXMiOlsiQXBpIiwib3B0aW9ucyIsIl91cmwiLCJ1cmwiLCJfaGVhZGVycyIsImhlYWRlcnMiLCJyZXMiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0Iiwic3RhdHVzIiwiZmV0Y2giLCJ0aGVuIiwiX2NoZWNrU2VydmVyUmVzcG9uc2UiLCJkYXRhIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhdmF0YXIiLCJuYW1lIiwiYWJvdXQiLCJsaW5rIiwiY2FyZElEIiwiQ2FyZCIsImNhcmRTZWxlY3RvciIsInVzZXJJZCIsImhhbmRsZUNhcmRDbGljayIsImhhbmRsZURlbGV0ZUNsaWNrIiwiaGFuZGxlTGlrZUNhcmQiLCJfY2FyZEVsZW1lbnQiLCJyZW1vdmUiLCJfYnV0dG9uTGlrZSIsImNsYXNzTGlzdCIsImFkZCIsIl90aXRsZSIsIl9saW5rIiwiX2xpa2VzIiwibGlrZXMiLCJfaWQiLCJfb3duZXJJZCIsIm93bmVyIiwiX3VzZXJJZCIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfaGFuZGxlRGVsZXRlQ2xpY2siLCJfaGFuZGxlTGlrZUNhcmQiLCJfY2FyZFNlbGVjdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9nZXRUZW1wbGF0ZSIsIl9jYXJkSW1hZ2UiLCJfbGlrZXNDb3VudCIsIl9idXR0b25EZWxldGUiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJ0ZXh0Q29udGVudCIsInNyYyIsImFsdCIsIl9oaWRlRGVsZXRlQnV0dG9uIiwic2V0TGlrZSIsIl9jaGVja093bkxpa2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZmluZCIsInVzZXIiLCJpc0xpa2VkIiwiYWRkTGlrZSIsImRlbGV0ZUxpa2UiLCJsZW5ndGgiLCJGb3JtVmFsaWRhdG9yIiwidmFsaWRTZXQiLCJmb3JtRWxlbWVudCIsIl9mb3JtRWxlbWVudCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsImlucHV0RWxlbWVudCIsImVycm9yTWVzc2FnZSIsImVycm9yRWxlbWVudCIsImlkIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9zaG93SW5wdXRFcnJvciIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2hpZGVJbnB1dEVycm9yIiwiX2lucHV0TGlzdCIsInNvbWUiLCJfYnV0dG9uRWxlbWVudCIsImRpc2FibGVkIiwiX2hhc0ludmFsaWRJbnB1dCIsImRpc2FibGVTdWJtaXRCdXR0b24iLCJlbmFibGVTdWJtaXRCdXR0b24iLCJmb3JFYWNoIiwidG9nZ2xlQnV0dG9uU3RhdGUiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsIlBvcHVwIiwicG9wdXBTZWxlY3RvciIsIl9wb3B1cCIsIl9oYW5kbGVFc2NDbG9zZSIsImJpbmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZXZ0Iiwia2V5IiwiY2xvc2UiLCJ0YXJnZXQiLCJjb250YWlucyIsIlBvcHVwV2l0aENvbmZpcm0iLCJfZm9ybSIsIl9zZXRFdmVudCIsInN1Ym1pdENvbmZpcm0iLCJfaGFuZGxlU3VibWl0IiwicHJldmVudERlZmF1bHQiLCJQb3B1cFdpdGhGb3JtIiwiaGFuZGxlU3VibWl0Rm9ybSIsIl9oYW5kbGVTdWJtaXRGb3JtIiwiX2J1dHRvblN1Ym1pdCIsIl9idXR0b25TdWJtaXRUZXh0IiwiX2Zvcm1WYWx1ZXMiLCJpbnB1dCIsInZhbHVlIiwiaXNMb2FkaW5nIiwiX2dldElucHV0VmFsdWVzIiwicmVzZXQiLCJQb3B1cFdpdGhJbWFnZSIsIl9wb3B1cEltYWdlIiwiX3BvcHVwRmlnY2FwdGlvbiIsIlNlY3Rpb24iLCJjb250YWluZXJTZWxlY3RvciIsInJlbmRlcmVyIiwiX3JlbmRlcmVyIiwiX2NvbnRhaW5lciIsImVsZW1lbnQiLCJwcmVwZW5kIiwiaXRlbXMiLCJpdGVtIiwiVXNlckluZm8iLCJwcm9maWxlTmFtZSIsInByb2ZpbGVEZXNjcmlwdGlvbiIsInByb2ZpbGVBdmF0YXIiLCJfbmFtZSIsIl9hYm91dCIsIl9hdmF0YXIiLCJfdXNlckRhdGEiLCJ1c2VyTmFtZSIsInVzZXJJbmZvIiwicG9wdXBFZGl0IiwiYnV0dG9uUHJvZmlsZUVkaXQiLCJmb3JtUG9wdXBFZGl0IiwiaW5wdXROYW1lUG9wdXBFZGl0IiwiaW5wdXREZXNjcmlwdGlvblBvcHVwRWRpdCIsInBvcHVwQWRkIiwiZm9ybVBvcHVwQWRkIiwiYnV0dG9uUG9wdXBBZGQiLCJwb3B1cFZpZXciLCJwb3B1cEVkaXRBdmF0YXIiLCJmb3JtUG9wdXBFZGl0QXZhdGFyIiwiYnV0dG9uRWRpdEF2YXRhciIsInBvcHVwQ29uZmlybSIsImNhcmRUZW1wbGF0ZSIsImNhcmRzQ29udGFpbmVyIiwiZm9ybVNlbGVjdG9yIiwiYXBpIiwiYXV0aG9yaXphdGlvbiIsImFsbCIsImdldFVzZXJJbmZvIiwiZ2V0SW5pdGlhbENhcmRzIiwidXNlckRhdGEiLCJpbml0aWFsQ2FyZHMiLCJwcm9maWxlIiwic2V0VXNlckluZm8iLCJzZXRVc2VyQXZhdGFyIiwicmV2ZXJzZSIsImNhcmRzIiwicmVuZGVySXRlbXMiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYWRkSXRlbSIsImNyZWF0ZU5ld0NhcmQiLCJwb3B1cEVkaXRQcm9maWxlIiwicmVuZGVyTG9hZGluZyIsInVwZGF0ZVVzZXJJbmZvIiwic2V0RGF0YUlucHV0c1Byb2ZpbGUiLCJzZXRFdmVudExpc3RlbmVycyIsIm9wZW4iLCJwcm9maWxlVmFsaWRhdG9yIiwicmVzZXRWYWxpZGF0aW9uIiwicG9wdXBFZGl0VXNlckF2YXRhciIsInVwZGF0ZUF2YXRhciIsImF2YXRhclZhbGlkYXRvciIsInBvcHVwQWRkQ2FyZCIsInNlbmRDYXJkIiwiY2FyZCIsImFkZENhcmRWYWxpZGF0b3IiLCJwb3B1cERlbGV0ZUNhcmQiLCJwb3B1cFZpZXdJbWFnZSIsImhhbmRsZVN1Ym1pdENvbmZpcm0iLCJkZWxldGVDYXJkIiwiY3JlYXRlQ2FyZCIsImVuYWJsZVZhbGlkYXRpb24iXSwic291cmNlUm9vdCI6IiJ9