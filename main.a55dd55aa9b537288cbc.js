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
      this._formElement.addEventListener('submit', function (evt) {
        evt.preventDefault();
      });

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

    this._popupSelector = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }

  _createClass(Popup, [{
    key: "open",
    value: function open() {
      this._popupSelector.classList.add('popup_opened');

      document.addEventListener('keydown', this._handleEscClose);
    }
  }, {
    key: "close",
    value: function close() {
      this._popupSelector.classList.remove('popup_opened');

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

      this._popupSelector.addEventListener('mousedown', function (evt) {
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

  function PopupWithConfirm(popupSelector, _ref) {
    var _this;

    var handleSubmit = _ref.handleSubmit;

    _classCallCheck(this, PopupWithConfirm);

    _this = _super.call(this, popupSelector);
    _this._handleSubmit = handleSubmit;
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

      this._popupSelector.addEventListener('submit', this._setEvent);
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithConfirm.prototype), "close", this).call(this);

      this._popupSelector.removeEventListener('submit', this._setEvent);
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

  function PopupWithForm(popupSelector, _ref) {
    var _this;

    var handleSubmitForm = _ref.handleSubmitForm;

    _classCallCheck(this, PopupWithForm);

    _this = _super.call(this, popupSelector);
    _this._handleSubmitForm = handleSubmitForm;
    _this._form = _this._popupSelector.querySelector('.popup__form');
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

  function PopupWithImage(popupSelector) {
    var _this;

    _classCallCheck(this, PopupWithImage);

    _this = _super.call(this, popupSelector); //

    _this._popupImage = _this._popupSelector.querySelector('.popup__image'); //

    _this._popupFigcaption = _this._popupSelector.querySelector('.popup__figcaption');
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
    var items = _ref.items,
        renderer = _ref.renderer;

    _classCallCheck(this, Section);

    this._items = items;
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
  items: [],
  renderer: function renderer(items) {
    var card = createNewCard(items);
    cards.addItem(card);
  }
}, _utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.cardsContainer); //экземпляр с данными профиля

var profile = new _components_UserInfo_js__WEBPACK_IMPORTED_MODULE_8__["default"]({
  profileName: '.profile__name',
  profileDescription: '.profile__description',
  profileAvatar: '.profile__avatar'
}); //поп ап редактирования профиля

var popupEditProfile = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.popupEdit, {
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

var popupEditUserAvatar = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.popupEditAvatar, {
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

var popupAddCard = new _components_PopupWithForm_js__WEBPACK_IMPORTED_MODULE_6__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.popupAdd, {
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

var popupDeleteCard = new _components_PopupWithConfirm_js__WEBPACK_IMPORTED_MODULE_7__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.popupConfirm, {
  handleSubmit: function handleSubmit(data) {
    api.deleteCard(data).then(function () {
      popupDeleteCard.close();
    })["catch"](function (err) {
      console.log(err);
    });
  }
});
popupDeleteCard.setEventListeners(); //поп ап просмотр изображения

var popupViewImage = new _components_PopupWithImage_js__WEBPACK_IMPORTED_MODULE_5__["default"](_utils_constants_js__WEBPACK_IMPORTED_MODULE_1__.popupView);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXRDbUIsQ0FBVCxFQXVDVmhCLDZEQXZDVSxDQUFiO0VBd0NBLE9BQU9tQixJQUFJLENBQUNxQixVQUFMLEVBQVA7QUFDRCxDQTFDRCxFQTRDQTs7O0FBQ0EsSUFBTVosZ0JBQWdCLEdBQUcsSUFBSWpJLG9FQUFKLENBQWtCQyx5REFBbEIsRUFBNEJ5Riw4REFBNUIsQ0FBekI7QUFDQSxJQUFNOEMsZ0JBQWdCLEdBQUcsSUFBSXhJLG9FQUFKLENBQWtCQyx5REFBbEIsRUFBNEI2Riw2REFBNUIsQ0FBekI7QUFDQSxJQUFNdUMsZUFBZSxHQUFHLElBQUlySSxvRUFBSixDQUFrQkMseURBQWxCLEVBQTRCaUcsb0VBQTVCLENBQXhCO0FBQ0ErQixnQkFBZ0IsQ0FBQ2EsZ0JBQWpCO0FBQ0FOLGdCQUFnQixDQUFDTSxnQkFBakI7QUFDQVQsZUFBZSxDQUFDUyxnQkFBaEIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aENvbmZpcm0uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaSB7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgdGhpcy5fdXJsID0gb3B0aW9ucy51cmw7XHJcbiAgICB0aGlzLl9oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzO1xyXG4gIH07XHJcblxyXG4gIC8v0L/RgNC+0LLQtdGA0LrQsCDQvtGC0LLQtdGC0LAg0YHQtdGA0LLQtdGA0LBcclxuICBfY2hlY2tTZXJ2ZXJSZXNwb25zZShyZXMpIHtcclxuICAgIGlmIChyZXMub2spIHtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXMuc3RhdHVzfWApO1xyXG4gIH07XHJcblxyXG4gIC8v0LfQsNCz0YDRg9C30LrQsCDQtNCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINGBINGB0LXRgNCy0LXRgNCwXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfS91c2Vycy9tZWAsIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyc1xyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tTZXJ2ZXJSZXNwb25zZShyZXMpKTtcclxuICB9O1xyXG5cclxuICAvL9C+0LHQvdC+0LLQu9C10L3QuNC1INCw0LLQsNGC0LDRgNCwXHJcbiAgdXBkYXRlQXZhdGFyKGRhdGEpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9L3VzZXJzL21lL2F2YXRhcmAsIHtcclxuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgYXZhdGFyOiBkYXRhLmF2YXRhclxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tTZXJ2ZXJSZXNwb25zZShyZXMpKTtcclxuICB9O1xyXG5cclxuICAvL9GA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0L/RgNC+0YTQuNC70Y9cclxuICB1cGRhdGVVc2VySW5mbyhkYXRhKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfS91c2Vycy9tZWAsIHtcclxuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgIGFib3V0OiBkYXRhLmFib3V0XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB0aGlzLl9jaGVja1NlcnZlclJlc3BvbnNlKHJlcykpO1xyXG4gIH07XHJcblxyXG4gIC8v0LfQsNCz0YDRg9C30LrQsCDQutCw0YDRgtC+0YfQtdC6INGBINGB0LXRgNCy0LXRgNCwXHJcbiAgZ2V0SW5pdGlhbENhcmRzKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX3VybH0vY2FyZHNgLCB7XHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnNcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuX2NoZWNrU2VydmVyUmVzcG9uc2UocmVzKSk7XHJcbiAgfTtcclxuXHJcbiAgLy/QtNC+0LHQsNCy0LjRgtGMINC90L7QstGD0Y4g0LrQsNGA0YLQvtGH0LrRg1xyXG4gIHNlbmRDYXJkKGRhdGEpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9L2NhcmRzYCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICBsaW5rOiBkYXRhLmxpbmtcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuX2NoZWNrU2VydmVyUmVzcG9uc2UocmVzKSk7XHJcbiAgfTtcclxuXHJcbiAgLy/Rg9C00LDQu9C40YLRjCDQutCw0YDRgtC+0YfQutGDXHJcbiAgZGVsZXRlQ2FyZChjYXJkSUQpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9L2NhcmRzLyR7Y2FyZElEfWAsIHtcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyc1xyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tTZXJ2ZXJSZXNwb25zZShyZXMpKTtcclxuICB9O1xyXG5cclxuICAvL9C/0L7RgdGC0LDQstC40YLRjCDQu9Cw0LnQulxyXG4gIHNldExpa2UoY2FyZElEKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfS9jYXJkcy8ke2NhcmRJRH0vbGlrZXNgLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnNcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuX2NoZWNrU2VydmVyUmVzcG9uc2UocmVzKSk7XHJcbiAgfTtcclxuXHJcbiAgLy/RgdC90Y/RgtGMINC70LDQudC6XHJcbiAgZGVsZXRlTGlrZShjYXJkSUQpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9L2NhcmRzLyR7Y2FyZElEfS9saWtlc2AsIHtcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyc1xyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tTZXJ2ZXJSZXNwb25zZShyZXMpKTtcclxuICB9O1xyXG5cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoeyBkYXRhLCB1c2VySWQsIGhhbmRsZUNhcmRDbGljaywgaGFuZGxlRGVsZXRlQ2xpY2ssIGhhbmRsZUxpa2VDYXJkIH0sIGNhcmRTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fdGl0bGUgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLl9saW5rID0gZGF0YS5saW5rO1xyXG4gICAgdGhpcy5fbGlrZXMgPSBkYXRhLmxpa2VzO1xyXG4gICAgdGhpcy5faWQgPSBkYXRhLl9pZDtcclxuICAgIHRoaXMuX293bmVySWQgPSBkYXRhLm93bmVyLl9pZDtcclxuICAgIHRoaXMuX3VzZXJJZCA9IHVzZXJJZDtcclxuXHJcbiAgICB0aGlzLl9oYW5kbGVDYXJkQ2xpY2sgPSBoYW5kbGVDYXJkQ2xpY2s7XHJcbiAgICB0aGlzLl9oYW5kbGVEZWxldGVDbGljayA9IGhhbmRsZURlbGV0ZUNsaWNrO1xyXG4gICAgdGhpcy5faGFuZGxlTGlrZUNhcmQgPSBoYW5kbGVMaWtlQ2FyZDtcclxuXHJcbiAgICB0aGlzLl9jYXJkU2VsZWN0b3IgPSBjYXJkU2VsZWN0b3I7XHJcbiAgfTtcclxuXHJcbiAgX2dldFRlbXBsYXRlKCkge1xyXG4gICAgcmV0dXJuIGRvY3VtZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKHRoaXMuX2NhcmRTZWxlY3RvcilcclxuICAgICAgLmNvbnRlbnRcclxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50JylcclxuICAgICAgLmNsb25lTm9kZSh0cnVlKTtcclxuICB9O1xyXG5cclxuICBjcmVhdGVDYXJkKCkge1xyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnQgPSB0aGlzLl9nZXRUZW1wbGF0ZSgpO1xyXG4gICAgdGhpcy5fY2FyZEltYWdlID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2ltYWdlJyk7XHJcbiAgICB0aGlzLl9idXR0b25MaWtlID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2xpa2UtYnV0dG9uJyk7XHJcbiAgICB0aGlzLl9saWtlc0NvdW50ID0gdGhpcy5fY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcignLmVsZW1lbnRfX2xpa2UtY291bnQnKTtcclxuICAgIHRoaXMuX2J1dHRvbkRlbGV0ZSA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X190cmFzaC1idXR0b24nKTtcclxuXHJcbiAgICB0aGlzLl9zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19oZWFkaW5nJykudGV4dENvbnRlbnQgPSB0aGlzLl90aXRsZTtcclxuICAgIHRoaXMuX2NhcmRJbWFnZS5zcmMgPSB0aGlzLl9saW5rO1xyXG4gICAgdGhpcy5fY2FyZEltYWdlLmFsdCA9IHRoaXMuX3RpdGxlO1xyXG5cclxuICAgIHRoaXMuX2hpZGVEZWxldGVCdXR0b24oKTtcclxuICAgIHRoaXMuc2V0TGlrZSh0aGlzLl9saWtlcyk7XHJcbiAgICB0aGlzLl9jaGVja093bkxpa2UoKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5fY2FyZEVsZW1lbnQ7XHJcbiAgfTtcclxuXHJcbiAgZGVsZXRlQ2FyZCA9ICgpID0+IHtcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50LnJlbW92ZSgpO1xyXG4gICAgdGhpcy5fY2FyZEVsZW1lbnQgPSBudWxsO1xyXG4gIH07XHJcblxyXG4gIF9oaWRlRGVsZXRlQnV0dG9uKCkge1xyXG4gICAgaWYgKHRoaXMuX293bmVySWQgIT09IHRoaXMuX3VzZXJJZCkge1xyXG4gICAgICB0aGlzLl9idXR0b25EZWxldGUucmVtb3ZlKCk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fYnV0dG9uRGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICB0aGlzLl9oYW5kbGVEZWxldGVDbGljaygpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5fYnV0dG9uTGlrZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlTGlrZUNhcmQoKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2NhcmRJbWFnZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlQ2FyZENsaWNrKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpc0xpa2VkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xpa2VzLmZpbmQodXNlciA9PiB1c2VyLl9pZCA9PT0gdGhpcy5fdXNlcklkKTtcclxuICB9O1xyXG5cclxuICBfY2hlY2tPd25MaWtlKCkge1xyXG4gICAgdGhpcy5pc0xpa2VkKCkgPyB0aGlzLmFkZExpa2UoKSA6IHRoaXMuZGVsZXRlTGlrZSgpO1xyXG4gIH07XHJcblxyXG4gIHNldExpa2UoZGF0YSkge1xyXG4gICAgdGhpcy5fbGlrZXMgPSBkYXRhO1xyXG4gICAgdGhpcy5fbGlrZXNDb3VudC50ZXh0Q29udGVudCA9IHRoaXMuX2xpa2VzLmxlbmd0aDtcclxuICB9O1xyXG5cclxuICBhZGRMaWtlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5fYnV0dG9uTGlrZS5jbGFzc0xpc3QuYWRkKCdlbGVtZW50X19saWtlLWJ1dHRvbl9hY3RpdmUnKTtcclxuICB9O1xyXG5cclxuICBkZWxldGVMaWtlID0gKCkgPT4ge1xyXG4gICAgdGhpcy5fYnV0dG9uTGlrZS5jbGFzc0xpc3QucmVtb3ZlKCdlbGVtZW50X19saWtlLWJ1dHRvbl9hY3RpdmUnKTtcclxuICB9O1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGb3JtVmFsaWRhdG9yIHtcclxuICBjb25zdHJ1Y3Rvcih2YWxpZFNldCwgZm9ybUVsZW1lbnQpIHtcclxuICAgIHRoaXMuX2Zvcm1FbGVtZW50ID0gZm9ybUVsZW1lbnQ7XHJcbiAgICB0aGlzLl9pbnB1dFNlbGVjdG9yID0gdmFsaWRTZXQuaW5wdXRTZWxlY3RvcjtcclxuICAgIHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yID0gdmFsaWRTZXQuc3VibWl0QnV0dG9uU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9pbmFjdGl2ZUJ1dHRvbkNsYXNzID0gdmFsaWRTZXQuaW5hY3RpdmVCdXR0b25DbGFzcztcclxuICAgIHRoaXMuX2lucHV0RXJyb3JDbGFzcyA9IHZhbGlkU2V0LmlucHV0RXJyb3JDbGFzcztcclxuICAgIHRoaXMuX2Vycm9yQ2xhc3MgPSB2YWxpZFNldC5lcnJvckNsYXNzO1xyXG4gIH07XHJcblxyXG4gIC8v0L/QvtC60LDQt9Cw0YLRjCDQvtGI0LjQsdC60YNcclxuICBfc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50LCBlcnJvck1lc3NhZ2UpIHtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBlcnJvck1lc3NhZ2U7XHJcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9lcnJvckNsYXNzKTtcclxuICB9O1xyXG5cclxuICAvL9GB0L/RgNGP0YLQsNGC0Ywg0L7RiNC40LHQutGDXHJcbiAgX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCkge1xyXG4gICAgY29uc3QgZXJyb3JFbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvcihgLiR7aW5wdXRFbGVtZW50LmlkfS1lcnJvcmApO1xyXG4gICAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5wdXRFcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2Vycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gJyc7XHJcbiAgfTtcclxuXHJcbiAgLy/QstCw0LvQuNC00L3QvtGB0YLRjCDQuNC90L/Rg9GC0LBcclxuICBfY2hlY2tJbnB1dFZhbGlkaXR5KGlucHV0RWxlbWVudCkge1xyXG4gICAgaWYgKCFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQpIHtcclxuICAgICAgdGhpcy5fc2hvd0lucHV0RXJyb3IoaW5wdXRFbGVtZW50LCBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgLy/Qv9GA0L7QstC10YDQutCwINC40L3Qv9GD0YLQvtCyINC90LAg0L/RgNC+0YXQvtC20LTQtdC90LjQtSDQstCw0LvQuNC00L3QvtGB0YLQuFxyXG4gIF9oYXNJbnZhbGlkSW5wdXQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5faW5wdXRMaXN0LnNvbWUoKGlucHV0RWxlbWVudCkgPT4ge1xyXG4gICAgICByZXR1cm4gIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZDtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIC8v0YHQvtGB0YLQvtGP0L3QuNC1INC60L3QvtC/0LrQuCDRgdCw0LHQvNC40YJcclxuICBkaXNhYmxlU3VibWl0QnV0dG9uKCkge1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgfTtcclxuICBlbmFibGVTdWJtaXRCdXR0b24oKSB7XHJcbiAgICB0aGlzLl9idXR0b25FbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLl9idXR0b25FbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyk7XHJcbiAgfTtcclxuXHJcbiAgLy/Qv9C10YDQtdC60LvRjtGH0LDRgtC10LvRjCDRgdC+0YHRgtC+0Y/QvdC40Y8g0LrQvdC+0L/QutC4INGB0LDQsdC80LjRglxyXG4gIHRvZ2dsZUJ1dHRvblN0YXRlKCkge1xyXG4gICAgaWYgKHRoaXMuX2hhc0ludmFsaWRJbnB1dCgpKSB7XHJcbiAgICAgIHRoaXMuZGlzYWJsZVN1Ym1pdEJ1dHRvbigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5lbmFibGVTdWJtaXRCdXR0b24oKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgLy/QvtGH0LjRgdGC0LjRgtGMINC+0YjQuNCx0LrQuFxyXG4gIHJlc2V0VmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgICB0aGlzLl9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbn1cclxuXHJcbiAgLy/RgdC70YPRiNCw0YLQtdC70Lgg0L3QsCDQstGB0LUg0LjQvdC/0YPRgtGLXHJcbiAgX3NldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuX2lucHV0U2VsZWN0b3IpKTtcclxuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKHRoaXMuX3N1Ym1pdEJ1dHRvblNlbGVjdG9yKTtcclxuICAgIHRoaXMudG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICAgIHRoaXMuX2lucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpO1xyXG4gICAgICAgIHRoaXMudG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvL9Cy0LrQu9GO0YfQtdC90LjQtSDQstCw0LvQuNC00LDRhtC40LhcclxuICBlbmFibGVWYWxpZGF0aW9uKCkge1xyXG4gICAgdGhpcy5fZm9ybUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICB9O1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3Rvcikge1xyXG4gICAgdGhpcy5fcG9wdXBTZWxlY3RvciA9IHBvcHVwU2VsZWN0b3I7XHJcbiAgICB0aGlzLl9oYW5kbGVFc2NDbG9zZSA9IHRoaXMuX2hhbmRsZUVzY0Nsb3NlLmJpbmQodGhpcyk7XHJcbiAgfTtcclxuXHJcbiAgb3BlbigpIHtcclxuICAgIHRoaXMuX3BvcHVwU2VsZWN0b3IuY2xhc3NMaXN0LmFkZCgncG9wdXBfb3BlbmVkJyk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH07XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fcG9wdXBTZWxlY3Rvci5jbGFzc0xpc3QucmVtb3ZlKCdwb3B1cF9vcGVuZWQnKTtcclxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9oYW5kbGVFc2NDbG9zZSk7XHJcbiAgfTtcclxuXHJcbiAgX2hhbmRsZUVzY0Nsb3NlKGV2dCkge1xyXG4gICAgaWYgKGV2dC5rZXkgPT09ICdFc2NhcGUnKSB7XHJcbiAgICAgIHRoaXMuY2xvc2UoKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICB0aGlzLl9wb3B1cFNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIChldnQpID0+IHtcclxuICAgICAgaWYgKGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cF9vcGVuZWQnKSB8fCBldnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncG9wdXBfX2Nsb3NlLWJ1dHRvbicpKSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgfTtcclxufTtcclxuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhDb25maXJtIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IsIHsgaGFuZGxlU3VibWl0IH0pIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5faGFuZGxlU3VibWl0ID0gaGFuZGxlU3VibWl0O1xyXG4gICAgdGhpcy5fc2V0RXZlbnQgPSB0aGlzLl9zZXRFdmVudC5iaW5kKHRoaXMpO1xyXG4gIH07XHJcblxyXG4gIGhhbmRsZVN1Ym1pdENvbmZpcm0oc3VibWl0Q29uZmlybSkge1xyXG4gICAgdGhpcy5faGFuZGxlU3VibWl0ID0gc3VibWl0Q29uZmlybTtcclxuICB9O1xyXG5cclxuICBfc2V0RXZlbnQoZXZ0KSB7XHJcbiAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIHRoaXMuX2hhbmRsZVN1Ym1pdCgpO1xyXG4gIH07XHJcblxyXG4gIG9wZW4oKSB7XHJcbiAgICBzdXBlci5vcGVuKCk7XHJcbiAgICB0aGlzLl9wb3B1cFNlbGVjdG9yLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuX3NldEV2ZW50KTtcclxuICB9O1xyXG5cclxuICBjbG9zZSgpIHtcclxuICAgIHN1cGVyLmNsb3NlKCk7XHJcbiAgICB0aGlzLl9wb3B1cFNlbGVjdG9yLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuX3NldEV2ZW50KTtcclxuICB9O1xyXG59O1xyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEZvcm0gZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IocG9wdXBTZWxlY3RvciwgeyBoYW5kbGVTdWJtaXRGb3JtIH0pIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5faGFuZGxlU3VibWl0Rm9ybSA9IGhhbmRsZVN1Ym1pdEZvcm07XHJcbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXBTZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcucG9wdXBfX2lucHV0JykpO1xyXG4gICAgdGhpcy5fYnV0dG9uU3VibWl0ID0gdGhpcy5fZm9ybS5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX3N1Ym1pdC1idXR0b24nKTtcclxuICAgIHRoaXMuX2J1dHRvblN1Ym1pdFRleHQgPSB0aGlzLl9idXR0b25TdWJtaXQudGV4dENvbnRlbnQ7XHJcbiAgfTtcclxuXHJcbiAgX2dldElucHV0VmFsdWVzKCkge1xyXG4gICAgdGhpcy5fZm9ybVZhbHVlcyA9IHt9O1xyXG4gICAgdGhpcy5faW5wdXRMaXN0LmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgIHRoaXMuX2Zvcm1WYWx1ZXNbaW5wdXQubmFtZV0gPSBpbnB1dC52YWx1ZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB0aGlzLl9mb3JtVmFsdWVzO1xyXG4gIH07XHJcblxyXG4gIHJlbmRlckxvYWRpbmcoaXNMb2FkaW5nKSB7XHJcbiAgICBpZiAoaXNMb2FkaW5nKSB7XHJcbiAgICAgIHRoaXMuX2J1dHRvblN1Ym1pdC50ZXh0Q29udGVudCA9ICfQodC+0YXRgNCw0L3QtdC90LjQtS4uLic7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLl9idXR0b25TdWJtaXQudGV4dENvbnRlbnQgPSB0aGlzLl9idXR0b25TdWJtaXRUZXh0O1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgc3VwZXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHRoaXMuX2Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2dCkgPT4ge1xyXG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgdGhpcy5faGFuZGxlU3VibWl0Rm9ybSh0aGlzLl9nZXRJbnB1dFZhbHVlcygpKTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgc3VwZXIuY2xvc2UoKTtcclxuICAgIHRoaXMuX2Zvcm0ucmVzZXQoKTtcclxuICB9O1xyXG59O1xyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwV2l0aEltYWdlIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpOyAvL1xyXG4gICAgdGhpcy5fcG9wdXBJbWFnZSA9IHRoaXMuX3BvcHVwU2VsZWN0b3IucXVlcnlTZWxlY3RvcignLnBvcHVwX19pbWFnZScpOyAvL1xyXG4gICAgdGhpcy5fcG9wdXBGaWdjYXB0aW9uID0gdGhpcy5fcG9wdXBTZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2ZpZ2NhcHRpb24nKTtcclxuICB9O1xyXG5cclxuICBvcGVuKG5hbWUsIGxpbmspIHtcclxuICAgIHRoaXMuX3BvcHVwSW1hZ2Uuc3JjID0gbGluaztcclxuICAgIHRoaXMuX3BvcHVwRmlnY2FwdGlvbi50ZXh0Q29udGVudCA9IG5hbWU7XHJcbiAgICB0aGlzLl9wb3B1cEltYWdlLmFsdCA9IG5hbWU7XHJcbiAgICBzdXBlci5vcGVuKCk7XHJcbiAgfTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2VjdGlvbiB7XHJcbiAgY29uc3RydWN0b3IoeyBpdGVtcywgcmVuZGVyZXIgfSwgY29udGFpbmVyU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX2l0ZW1zID0gaXRlbXM7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XHJcbiAgfTtcclxuXHJcbiAgYWRkSXRlbShlbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcclxuICB9O1xyXG5cclxuICByZW5kZXJJdGVtcyhpdGVtcykge1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gdGhpcy5fcmVuZGVyZXIoaXRlbSkpO1xyXG4gIH07XHJcblxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgY29uc3RydWN0b3IoeyBwcm9maWxlTmFtZSwgcHJvZmlsZURlc2NyaXB0aW9uLCBwcm9maWxlQXZhdGFyIH0pIHtcclxuICAgIHRoaXMuX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2ZpbGVOYW1lKTtcclxuICAgIHRoaXMuX2Fib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9maWxlRGVzY3JpcHRpb24pO1xyXG4gICAgdGhpcy5fYXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9maWxlQXZhdGFyKTtcclxuICB9O1xyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIHRoaXMuX3VzZXJEYXRhID0ge1xyXG4gICAgICB1c2VyTmFtZTogdGhpcy5fbmFtZS50ZXh0Q29udGVudCxcclxuICAgICAgdXNlckluZm86IHRoaXMuX2Fib3V0LnRleHRDb250ZW50XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3VzZXJEYXRhO1xyXG4gIH07XHJcblxyXG4gIHNldFVzZXJJbmZvKGRhdGEpIHtcclxuICAgIHRoaXMuX25hbWUudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLl9hYm91dC50ZXh0Q29udGVudCA9IGRhdGEuYWJvdXQ7XHJcbiAgfTtcclxuXHJcbiAgc2V0VXNlckF2YXRhcih1cmwpIHtcclxuICAgIHRoaXMuX2F2YXRhci5zcmMgPSB1cmwuYXZhdGFyO1xyXG4gIH07XHJcbn07XHJcbiIsIi8v0L/QvtC/INCw0L8g0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQv9GA0L7RhNC40LvRj1xyXG5leHBvcnQgY29uc3QgcG9wdXBFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX3R5cGVfZWRpdC1wcm9maWxlJyk7XHJcbi8v0LrQvdC+0L/QutCwINC/0L7QvyDQsNC/INGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0L/RgNC+0YTQuNC70Y9cclxuZXhwb3J0IGNvbnN0IGJ1dHRvblByb2ZpbGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2VkaXQtYnV0dG9uJyk7XHJcbi8v0YTQvtGA0LzQsCDQv9C+0L8g0LDQv9CwINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0L/RgNC+0YTQuNC70Y9cclxuZXhwb3J0IGNvbnN0IGZvcm1Qb3B1cEVkaXQgPSBwb3B1cEVkaXQucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJyk7XHJcbi8v0LjQvdC/0YPRgtGLINGE0L7RgNC80Ysg0L/QvtC/INCw0L/QsCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINC/0YDQvtGE0LjQu9GPXHJcbmV4cG9ydCBjb25zdCBpbnB1dE5hbWVQb3B1cEVkaXQgPSBmb3JtUG9wdXBFZGl0LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XHJcbmV4cG9ydCBjb25zdCBpbnB1dERlc2NyaXB0aW9uUG9wdXBFZGl0ID0gZm9ybVBvcHVwRWRpdC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcclxuXHJcbi8v0L/QvtC/INCw0L8g0LTQvtCx0LDQstC70LXQvdC40LUg0LrQsNGA0YLQvtGH0LrQuFxyXG5leHBvcnQgY29uc3QgcG9wdXBBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfdHlwZV9uZXctZWxlbWVudCcpO1xyXG4vL9GE0L7RgNC80LAg0L/QvtC/INCw0L/QsCDQtNC+0LHQsNCy0LvQtdC90LjRjyDQutCw0YDRgtC+0YfQutC4XHJcbmV4cG9ydCBjb25zdCBmb3JtUG9wdXBBZGQgPSBwb3B1cEFkZC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTtcclxuLy/QutC90L7Qv9C60LAg0L/QvtC/INCw0L8g0LTQvtCx0LDQstC70LXQvdC40Y8g0L3QvtCy0L7QuSDQutCw0YDRgtC+0YfQutC4XHJcbmV4cG9ydCBjb25zdCBidXR0b25Qb3B1cEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hZGQtYnV0dG9uJyk7XHJcblxyXG4vL9C/0L7QvyDQsNC/INC/0YDQvtGB0LzQvtGC0YAg0LjQt9C+0LHRgNCw0LbQtdC90LjRj1xyXG5leHBvcnQgY29uc3QgcG9wdXBWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX3R5cGVfdmlldy1pbWFnZScpO1xyXG5cclxuLy/Qv9C+0L8g0LDQvyDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INCw0LLQsNGC0LDRgNCwXHJcbmV4cG9ydCBjb25zdCBwb3B1cEVkaXRBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfdHlwZV9hdmF0YXInKTtcclxuLy/RhNC+0YDQvNCwINC/0L7QvyDQsNC/0LAg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDQsNCy0LDRgtCw0YDQsFxyXG5leHBvcnQgY29uc3QgZm9ybVBvcHVwRWRpdEF2YXRhciA9IHBvcHVwRWRpdEF2YXRhci5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTtcclxuLy/QutC90L7Qv9C60LAg0L/QvtC/INCw0L8g0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDQsNCy0LDRgtCw0YDQsFxyXG5leHBvcnQgY29uc3QgYnV0dG9uRWRpdEF2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19lZGl0LWF2YXRhci1idXR0b24nKTtcclxuXHJcbi8v0L/QvtC/INCw0L8g0L/QvtC00YLQstC10YDQttC00LXQvdC40LVcclxuZXhwb3J0IGNvbnN0IHBvcHVwQ29uZmlybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF90eXBlX2NvbmZpcm0nKTtcclxuXHJcbi8v0YLQtdC80L/Qu9C10LnRglxyXG5leHBvcnQgY29uc3QgY2FyZFRlbXBsYXRlID0gJy5lbGVtZW50LXRlbXBsYXRlJztcclxuLy/QutC+0L3RgtC10LnQvdC10YAg0LTQu9GPINC60LDRgNGC0L7Rh9C10LpcclxuZXhwb3J0IGNvbnN0IGNhcmRzQ29udGFpbmVyID0gJy5lbGVtZW50c19fY2FyZHMnO1xyXG5cclxuLy/QvtCx0YrQtdC60YIg0YEg0LLQsNC70LjQtNC40YDRg9C10LzRi9C80Lgg0YHQtdC70LXQutGC0L7RgNCw0LzQuFxyXG5leHBvcnQgY29uc3QgdmFsaWRTZXQgPSB7XHJcbiAgZm9ybVNlbGVjdG9yOiAnLnBvcHVwX19mb3JtJyxcclxuICBpbnB1dFNlbGVjdG9yOiAnLnBvcHVwX19pbnB1dCcsXHJcbiAgc3VibWl0QnV0dG9uU2VsZWN0b3I6ICcucG9wdXBfX3N1Ym1pdC1idXR0b24nLFxyXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3M6ICdwb3B1cF9fc3VibWl0LWJ1dHRvbl9kaXNhYmxlZCcsXHJcbiAgaW5wdXRFcnJvckNsYXNzOiAncG9wdXBfX2lucHV0X3R5cGVfZXJyb3InLFxyXG4gIGVycm9yQ2xhc3M6ICdwb3B1cF9fZXJyb3JfdmlzaWJsZSdcclxufTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vaW5kZXguY3NzJztcclxuXHJcbmltcG9ydCB7XHJcbiAgdmFsaWRTZXQsIGZvcm1Qb3B1cEVkaXQsIGZvcm1Qb3B1cEFkZCwgYnV0dG9uUHJvZmlsZUVkaXQsIGJ1dHRvblBvcHVwQWRkLFxyXG4gIGJ1dHRvbkVkaXRBdmF0YXIsIGlucHV0TmFtZVBvcHVwRWRpdCwgaW5wdXREZXNjcmlwdGlvblBvcHVwRWRpdCwgcG9wdXBFZGl0LCBwb3B1cEFkZCxcclxuICBwb3B1cFZpZXcsIHBvcHVwRWRpdEF2YXRhciwgZm9ybVBvcHVwRWRpdEF2YXRhciwgcG9wdXBDb25maXJtLCBjYXJkVGVtcGxhdGUsIGNhcmRzQ29udGFpbmVyXHJcbn0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzLmpzJztcclxuaW1wb3J0IEZvcm1WYWxpZGF0b3IgZnJvbSAnLi4vY29tcG9uZW50cy9Gb3JtVmFsaWRhdG9yLmpzJztcclxuaW1wb3J0IENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJkLmpzJztcclxuaW1wb3J0IFNlY3Rpb24gZnJvbSAnLi4vY29tcG9uZW50cy9TZWN0aW9uLmpzJztcclxuaW1wb3J0IFBvcHVwV2l0aEltYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMnO1xyXG5pbXBvcnQgUG9wdXBXaXRoRm9ybSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aEZvcm0uanMnO1xyXG5pbXBvcnQgUG9wdXBXaXRoQ29uZmlybSBmcm9tICcuLi9jb21wb25lbnRzL1BvcHVwV2l0aENvbmZpcm0uanMnO1xyXG5pbXBvcnQgVXNlckluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9Vc2VySW5mby5qcyc7XHJcbmltcG9ydCBBcGkgZnJvbSAnLi4vY29tcG9uZW50cy9BcGkuanMnO1xyXG5cclxuLy9BUElcclxuY29uc3QgYXBpID0gbmV3IEFwaSh7XHJcbiAgdXJsOiAnaHR0cHM6Ly9tZXN0by5ub21vcmVwYXJ0aWVzLmNvL3YxL2NvaG9ydC00OCcsXHJcbiAgaGVhZGVyczoge1xyXG4gICAgYXV0aG9yaXphdGlvbjogJzJlOGZjNjRkLWY1NmItNGE4Yi05NTczLWYwN2Q0OGQ2MWY3OScsXHJcbiAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgfVxyXG59KTtcclxuXHJcbmxldCB1c2VySWQgPSBudWxsO1xyXG5cclxuLy/Qt9Cw0LPRgNGD0LfQutCwINCz0L7RgtC+0LLRi9GFINC60LDRgNGC0L7Rh9C10Log0Lgg0LTQsNC90L3Ri9GFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjyDRgSDRgdC10YDQstC10YDQsFxyXG5Qcm9taXNlLmFsbChbYXBpLmdldFVzZXJJbmZvKCksIGFwaS5nZXRJbml0aWFsQ2FyZHMoKV0pXHJcbiAgLnRoZW4oKFt1c2VyRGF0YSwgaW5pdGlhbENhcmRzXSkgPT4ge1xyXG4gICAgdXNlcklkID0gdXNlckRhdGEuX2lkO1xyXG5cclxuICAgIHByb2ZpbGUuc2V0VXNlckluZm8odXNlckRhdGEpO1xyXG4gICAgcHJvZmlsZS5zZXRVc2VyQXZhdGFyKHVzZXJEYXRhKTtcclxuXHJcbiAgICBpbml0aWFsQ2FyZHMucmV2ZXJzZSgpO1xyXG4gICAgY2FyZHMucmVuZGVySXRlbXMoaW5pdGlhbENhcmRzKTtcclxuICB9XHJcbiAgKVxyXG4gIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gIH0pO1xyXG5cclxuY29uc3QgY2FyZHMgPSBuZXcgU2VjdGlvbih7XHJcbiAgaXRlbXM6IFtdLFxyXG4gIHJlbmRlcmVyOiAoaXRlbXMpID0+IHtcclxuICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVOZXdDYXJkKGl0ZW1zKTtcclxuICAgIGNhcmRzLmFkZEl0ZW0oY2FyZCk7XHJcbiAgfVxyXG59LCBjYXJkc0NvbnRhaW5lcik7XHJcblxyXG4vL9GN0LrQt9C10LzQv9C70Y/RgCDRgSDQtNCw0L3QvdGL0LzQuCDQv9GA0L7RhNC40LvRj1xyXG5jb25zdCBwcm9maWxlID0gbmV3IFVzZXJJbmZvKHtcclxuICBwcm9maWxlTmFtZTogJy5wcm9maWxlX19uYW1lJyxcclxuICBwcm9maWxlRGVzY3JpcHRpb246ICcucHJvZmlsZV9fZGVzY3JpcHRpb24nLFxyXG4gIHByb2ZpbGVBdmF0YXI6ICcucHJvZmlsZV9fYXZhdGFyJ1xyXG59KTtcclxuXHJcbi8v0L/QvtC/INCw0L8g0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDQv9GA0L7RhNC40LvRj1xyXG5jb25zdCBwb3B1cEVkaXRQcm9maWxlID0gbmV3IFBvcHVwV2l0aEZvcm0ocG9wdXBFZGl0LCB7XHJcbiAgaGFuZGxlU3VibWl0Rm9ybTogKGRhdGEpID0+IHtcclxuICAgIHBvcHVwRWRpdFByb2ZpbGUucmVuZGVyTG9hZGluZyh0cnVlKTtcclxuICAgIGFwaS51cGRhdGVVc2VySW5mbyhkYXRhKVxyXG4gICAgICAudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgcHJvZmlsZS5zZXRVc2VySW5mbyhyZXMpO1xyXG4gICAgICAgIHBvcHVwRWRpdFByb2ZpbGUuY2xvc2UoKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgcG9wdXBFZGl0UHJvZmlsZS5yZW5kZXJMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSlcclxuICB9XHJcbn0pO1xyXG5cclxuLy/Qt9Cw0L/QvtC70L3QtdC90LjQtSDQuNC90L/Rg9GC0L7QsiDRhNC+0YDQvNGLINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0L/RgNC+0YTQuNC70Y9cclxuZnVuY3Rpb24gc2V0RGF0YUlucHV0c1Byb2ZpbGUoKSB7XHJcbiAgY29uc3QgdXNlckRhdGEgPSBwcm9maWxlLmdldFVzZXJJbmZvKCk7XHJcbiAgaW5wdXROYW1lUG9wdXBFZGl0LnZhbHVlID0gdXNlckRhdGEudXNlck5hbWU7XHJcbiAgaW5wdXREZXNjcmlwdGlvblBvcHVwRWRpdC52YWx1ZSA9IHVzZXJEYXRhLnVzZXJJbmZvO1xyXG59O1xyXG5cclxucG9wdXBFZGl0UHJvZmlsZS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuLy/RgdC70YPRiNCw0YLQtdC70Ywg0LrQvdC+0L/QutC4INGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0L/RgNC+0YTQuNC70Y9cclxuYnV0dG9uUHJvZmlsZUVkaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgc2V0RGF0YUlucHV0c1Byb2ZpbGUoKTtcclxuICBwb3B1cEVkaXRQcm9maWxlLm9wZW4oKTtcclxuICBwcm9maWxlVmFsaWRhdG9yLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgcHJvZmlsZVZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcclxufSk7XHJcblxyXG4vL9C/0L7QvyDQsNC/INGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0LDQstCw0YLQsNGA0LBcclxuY29uc3QgcG9wdXBFZGl0VXNlckF2YXRhciA9IG5ldyBQb3B1cFdpdGhGb3JtKHBvcHVwRWRpdEF2YXRhciwge1xyXG4gIGhhbmRsZVN1Ym1pdEZvcm06IChkYXRhKSA9PiB7XHJcbiAgICBwb3B1cEVkaXRVc2VyQXZhdGFyLnJlbmRlckxvYWRpbmcodHJ1ZSk7XHJcbiAgICBhcGkudXBkYXRlQXZhdGFyKGRhdGEpXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBwcm9maWxlLnNldFVzZXJBdmF0YXIocmVzKTtcclxuICAgICAgICBwb3B1cEVkaXRVc2VyQXZhdGFyLmNsb3NlKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwRWRpdFVzZXJBdmF0YXIucmVuZGVyTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG59KTtcclxuXHJcbnBvcHVwRWRpdFVzZXJBdmF0YXIuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8v0L7QsdGA0LDQsdC+0YLRh9C40Log0LrQvdC+0L/QutC4INC/0L7QvyDQsNC/0LAg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDQsNCy0LDRgtCw0YDQsFxyXG5idXR0b25FZGl0QXZhdGFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHBvcHVwRWRpdFVzZXJBdmF0YXIub3BlbigpO1xyXG4gIGF2YXRhclZhbGlkYXRvci50b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gIGF2YXRhclZhbGlkYXRvci5yZXNldFZhbGlkYXRpb24oKTtcclxufSk7XHJcblxyXG4vL9C/0L7QvyDQsNC/INC00L7QsdCw0LLQu9C10L3QuNGPINC90L7QstC+0Lkg0LrQsNGA0YLQvtGH0LrQuFxyXG5jb25zdCBwb3B1cEFkZENhcmQgPSBuZXcgUG9wdXBXaXRoRm9ybShwb3B1cEFkZCwge1xyXG4gIGhhbmRsZVN1Ym1pdEZvcm06IChkYXRhKSA9PiB7XHJcbiAgICBwb3B1cEFkZENhcmQucmVuZGVyTG9hZGluZyh0cnVlKTtcclxuICAgIGFwaS5zZW5kQ2FyZChkYXRhKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVOZXdDYXJkKGRhdGEpO1xyXG4gICAgICAgIGNhcmRzLmFkZEl0ZW0oY2FyZCk7XHJcbiAgICAgICAgcG9wdXBBZGRDYXJkLmNsb3NlKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwQWRkQ2FyZC5yZW5kZXJMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSlcclxuICB9XHJcbn0pO1xyXG5cclxucG9wdXBBZGRDYXJkLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vL9C+0LHRgNCw0LHQvtGC0YfQuNC6INC60L3QvtC/0LrQuCDQv9C+0L8g0LDQv9CwINC00L7QsdCw0LLQu9C10L3QuNGPINC90L7QstC+0Lkg0LrQsNGA0YLQvtGH0LrQuFxyXG5idXR0b25Qb3B1cEFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBwb3B1cEFkZENhcmQub3BlbigpO1xyXG4gIGFkZENhcmRWYWxpZGF0b3IudG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICBhZGRDYXJkVmFsaWRhdG9yLnJlc2V0VmFsaWRhdGlvbigpO1xyXG59KTtcclxuXHJcbi8vLy/Qv9C+0L8g0LDQvyDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtSDRg9C00LDQu9C10L3QuNGPINC60LDRgNGC0L7Rh9C60LhcclxuY29uc3QgcG9wdXBEZWxldGVDYXJkID0gbmV3IFBvcHVwV2l0aENvbmZpcm0ocG9wdXBDb25maXJtLCB7XHJcbiAgaGFuZGxlU3VibWl0OiAoZGF0YSkgPT4ge1xyXG4gICAgYXBpLmRlbGV0ZUNhcmQoZGF0YSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwRGVsZXRlQ2FyZC5jbG9zZSgpO1xyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG59KVxyXG5cclxucG9wdXBEZWxldGVDYXJkLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vL9C/0L7QvyDQsNC/INC/0YDQvtGB0LzQvtGC0YAg0LjQt9C+0LHRgNCw0LbQtdC90LjRj1xyXG5jb25zdCBwb3B1cFZpZXdJbWFnZSA9IG5ldyBQb3B1cFdpdGhJbWFnZShwb3B1cFZpZXcpO1xyXG5cclxucG9wdXBWaWV3SW1hZ2Uuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8v0YHQvtC30LTQsNC90LjQtSDQvdC+0LLQvtC5INC60LDRgNGC0L7Rh9C60LhcclxuY29uc3QgY3JlYXRlTmV3Q2FyZCA9IChkYXRhKSA9PiB7XHJcbiAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKHtcclxuICAgIGRhdGEsIHVzZXJJZCxcclxuICAgIGhhbmRsZUNhcmRDbGljazogKCkgPT4ge1xyXG4gICAgICBwb3B1cFZpZXdJbWFnZS5vcGVuKGRhdGEubmFtZSwgZGF0YS5saW5rKTtcclxuICAgIH0sXHJcbiAgICBoYW5kbGVEZWxldGVDbGljazogKCkgPT4ge1xyXG4gICAgICBwb3B1cERlbGV0ZUNhcmQub3BlbigpO1xyXG4gICAgICBwb3B1cERlbGV0ZUNhcmQuaGFuZGxlU3VibWl0Q29uZmlybSgoKSA9PiB7XHJcbiAgICAgICAgYXBpLmRlbGV0ZUNhcmQoY2FyZC5faWQpXHJcbiAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNhcmQuZGVsZXRlQ2FyZCgpO1xyXG4gICAgICAgICAgICBwb3B1cERlbGV0ZUNhcmQuY2xvc2UoKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBoYW5kbGVMaWtlQ2FyZDogKCkgPT4ge1xyXG4gICAgICBpZiAoY2FyZC5pc0xpa2VkKCkpIHtcclxuICAgICAgICBhcGkuZGVsZXRlTGlrZShjYXJkLl9pZClcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNhcmQuZGVsZXRlTGlrZSgpO1xyXG4gICAgICAgICAgICBjYXJkLnNldExpa2UoZGF0YS5saWtlcyk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgYXBpLnNldExpa2UoY2FyZC5faWQpXHJcbiAgICAgICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICBjYXJkLmFkZExpa2UoKTtcclxuICAgICAgICAgICAgY2FyZC5zZXRMaWtlKGRhdGEubGlrZXMpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgY2FyZFRlbXBsYXRlKTtcclxuICByZXR1cm4gY2FyZC5jcmVhdGVDYXJkKCk7XHJcbn07XHJcblxyXG4vL9Cy0LDQu9C40LTQsNGG0LjRj1xyXG5jb25zdCBwcm9maWxlVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRTZXQsIGZvcm1Qb3B1cEVkaXQpO1xyXG5jb25zdCBhZGRDYXJkVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRTZXQsIGZvcm1Qb3B1cEFkZCk7XHJcbmNvbnN0IGF2YXRhclZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHZhbGlkU2V0LCBmb3JtUG9wdXBFZGl0QXZhdGFyKTtcclxucHJvZmlsZVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcbmFkZENhcmRWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5hdmF0YXJWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG4iXSwibmFtZXMiOlsiQXBpIiwib3B0aW9ucyIsIl91cmwiLCJ1cmwiLCJfaGVhZGVycyIsImhlYWRlcnMiLCJyZXMiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0Iiwic3RhdHVzIiwiZmV0Y2giLCJ0aGVuIiwiX2NoZWNrU2VydmVyUmVzcG9uc2UiLCJkYXRhIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhdmF0YXIiLCJuYW1lIiwiYWJvdXQiLCJsaW5rIiwiY2FyZElEIiwiQ2FyZCIsImNhcmRTZWxlY3RvciIsInVzZXJJZCIsImhhbmRsZUNhcmRDbGljayIsImhhbmRsZURlbGV0ZUNsaWNrIiwiaGFuZGxlTGlrZUNhcmQiLCJfY2FyZEVsZW1lbnQiLCJyZW1vdmUiLCJfYnV0dG9uTGlrZSIsImNsYXNzTGlzdCIsImFkZCIsIl90aXRsZSIsIl9saW5rIiwiX2xpa2VzIiwibGlrZXMiLCJfaWQiLCJfb3duZXJJZCIsIm93bmVyIiwiX3VzZXJJZCIsIl9oYW5kbGVDYXJkQ2xpY2siLCJfaGFuZGxlRGVsZXRlQ2xpY2siLCJfaGFuZGxlTGlrZUNhcmQiLCJfY2FyZFNlbGVjdG9yIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY29udGVudCIsImNsb25lTm9kZSIsIl9nZXRUZW1wbGF0ZSIsIl9jYXJkSW1hZ2UiLCJfbGlrZXNDb3VudCIsIl9idXR0b25EZWxldGUiLCJfc2V0RXZlbnRMaXN0ZW5lcnMiLCJ0ZXh0Q29udGVudCIsInNyYyIsImFsdCIsIl9oaWRlRGVsZXRlQnV0dG9uIiwic2V0TGlrZSIsIl9jaGVja093bkxpa2UiLCJhZGRFdmVudExpc3RlbmVyIiwiZmluZCIsInVzZXIiLCJpc0xpa2VkIiwiYWRkTGlrZSIsImRlbGV0ZUxpa2UiLCJsZW5ndGgiLCJGb3JtVmFsaWRhdG9yIiwidmFsaWRTZXQiLCJmb3JtRWxlbWVudCIsIl9mb3JtRWxlbWVudCIsIl9pbnB1dFNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsIl9zdWJtaXRCdXR0b25TZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiX2luYWN0aXZlQnV0dG9uQ2xhc3MiLCJpbmFjdGl2ZUJ1dHRvbkNsYXNzIiwiX2lucHV0RXJyb3JDbGFzcyIsImlucHV0RXJyb3JDbGFzcyIsIl9lcnJvckNsYXNzIiwiZXJyb3JDbGFzcyIsImlucHV0RWxlbWVudCIsImVycm9yTWVzc2FnZSIsImVycm9yRWxlbWVudCIsImlkIiwidmFsaWRpdHkiLCJ2YWxpZCIsIl9zaG93SW5wdXRFcnJvciIsInZhbGlkYXRpb25NZXNzYWdlIiwiX2hpZGVJbnB1dEVycm9yIiwiX2lucHV0TGlzdCIsInNvbWUiLCJfYnV0dG9uRWxlbWVudCIsImRpc2FibGVkIiwiX2hhc0ludmFsaWRJbnB1dCIsImRpc2FibGVTdWJtaXRCdXR0b24iLCJlbmFibGVTdWJtaXRCdXR0b24iLCJmb3JFYWNoIiwidG9nZ2xlQnV0dG9uU3RhdGUiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiX2NoZWNrSW5wdXRWYWxpZGl0eSIsImV2dCIsInByZXZlbnREZWZhdWx0IiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwU2VsZWN0b3IiLCJfaGFuZGxlRXNjQ2xvc2UiLCJiaW5kIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImtleSIsImNsb3NlIiwidGFyZ2V0IiwiY29udGFpbnMiLCJQb3B1cFdpdGhDb25maXJtIiwiaGFuZGxlU3VibWl0IiwiX2hhbmRsZVN1Ym1pdCIsIl9zZXRFdmVudCIsInN1Ym1pdENvbmZpcm0iLCJQb3B1cFdpdGhGb3JtIiwiaGFuZGxlU3VibWl0Rm9ybSIsIl9oYW5kbGVTdWJtaXRGb3JtIiwiX2Zvcm0iLCJfYnV0dG9uU3VibWl0IiwiX2J1dHRvblN1Ym1pdFRleHQiLCJfZm9ybVZhbHVlcyIsImlucHV0IiwidmFsdWUiLCJpc0xvYWRpbmciLCJfZ2V0SW5wdXRWYWx1ZXMiLCJyZXNldCIsIlBvcHVwV2l0aEltYWdlIiwiX3BvcHVwSW1hZ2UiLCJfcG9wdXBGaWdjYXB0aW9uIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwiaXRlbXMiLCJyZW5kZXJlciIsIl9pdGVtcyIsIl9yZW5kZXJlciIsIl9jb250YWluZXIiLCJlbGVtZW50IiwicHJlcGVuZCIsIml0ZW0iLCJVc2VySW5mbyIsInByb2ZpbGVOYW1lIiwicHJvZmlsZURlc2NyaXB0aW9uIiwicHJvZmlsZUF2YXRhciIsIl9uYW1lIiwiX2Fib3V0IiwiX2F2YXRhciIsIl91c2VyRGF0YSIsInVzZXJOYW1lIiwidXNlckluZm8iLCJwb3B1cEVkaXQiLCJidXR0b25Qcm9maWxlRWRpdCIsImZvcm1Qb3B1cEVkaXQiLCJpbnB1dE5hbWVQb3B1cEVkaXQiLCJpbnB1dERlc2NyaXB0aW9uUG9wdXBFZGl0IiwicG9wdXBBZGQiLCJmb3JtUG9wdXBBZGQiLCJidXR0b25Qb3B1cEFkZCIsInBvcHVwVmlldyIsInBvcHVwRWRpdEF2YXRhciIsImZvcm1Qb3B1cEVkaXRBdmF0YXIiLCJidXR0b25FZGl0QXZhdGFyIiwicG9wdXBDb25maXJtIiwiY2FyZFRlbXBsYXRlIiwiY2FyZHNDb250YWluZXIiLCJmb3JtU2VsZWN0b3IiLCJhcGkiLCJhdXRob3JpemF0aW9uIiwiYWxsIiwiZ2V0VXNlckluZm8iLCJnZXRJbml0aWFsQ2FyZHMiLCJ1c2VyRGF0YSIsImluaXRpYWxDYXJkcyIsInByb2ZpbGUiLCJzZXRVc2VySW5mbyIsInNldFVzZXJBdmF0YXIiLCJyZXZlcnNlIiwiY2FyZHMiLCJyZW5kZXJJdGVtcyIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJjYXJkIiwiY3JlYXRlTmV3Q2FyZCIsImFkZEl0ZW0iLCJwb3B1cEVkaXRQcm9maWxlIiwicmVuZGVyTG9hZGluZyIsInVwZGF0ZVVzZXJJbmZvIiwic2V0RGF0YUlucHV0c1Byb2ZpbGUiLCJzZXRFdmVudExpc3RlbmVycyIsIm9wZW4iLCJwcm9maWxlVmFsaWRhdG9yIiwicmVzZXRWYWxpZGF0aW9uIiwicG9wdXBFZGl0VXNlckF2YXRhciIsInVwZGF0ZUF2YXRhciIsImF2YXRhclZhbGlkYXRvciIsInBvcHVwQWRkQ2FyZCIsInNlbmRDYXJkIiwiYWRkQ2FyZFZhbGlkYXRvciIsInBvcHVwRGVsZXRlQ2FyZCIsImRlbGV0ZUNhcmQiLCJwb3B1cFZpZXdJbWFnZSIsImhhbmRsZVN1Ym1pdENvbmZpcm0iLCJjcmVhdGVDYXJkIiwiZW5hYmxlVmFsaWRhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=