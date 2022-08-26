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
  function Card(_ref, cardTemplateSelector) {
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
    this._cardSelector = cardTemplateSelector;
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
    return _this;
  }

  _createClass(PopupWithConfirm, [{
    key: "handleSubmitConfirm",
    value: function handleSubmitConfirm(submitConfirm) {
      this._handleSubmit = submitConfirm;
    }
  }, {
    key: "open",
    value: function open() {
      _get(_getPrototypeOf(PopupWithConfirm.prototype), "open", this).call(this);
    }
  }, {
    key: "close",
    value: function close() {
      _get(_getPrototypeOf(PopupWithConfirm.prototype), "close", this).call(this);
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners() {
      var _this2 = this;

      _get(_getPrototypeOf(PopupWithConfirm.prototype), "setEventListeners", this).call(this);

      this._form.addEventListener('submit', function (evt) {
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

var popupConfirm = document.querySelector('.popup_type_confirm'); //объект с валидируемыми селекторами

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
  }, '.element-template');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFwQixFQUNHM0IsSUFESCxDQUNRLFVBQUNFLElBQUQsRUFBVTtVQUNkeUwsSUFBSSxDQUFDcEksVUFBTDtVQUNBb0ksSUFBSSxDQUFDM0ksT0FBTCxDQUFhOUMsSUFBSSxDQUFDd0IsS0FBbEI7UUFDRCxDQUpILFdBS1MsVUFBQytJLEdBQUQsRUFBUztVQUNkQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtRQUNELENBUEg7TUFRRCxDQVRELE1BU087UUFDTGIsR0FBRyxDQUFDNUcsT0FBSixDQUFZMkksSUFBSSxDQUFDaEssR0FBakIsRUFDRzNCLElBREgsQ0FDUSxVQUFDRSxJQUFELEVBQVU7VUFDZHlMLElBQUksQ0FBQ3JJLE9BQUw7VUFDQXFJLElBQUksQ0FBQzNJLE9BQUwsQ0FBYTlDLElBQUksQ0FBQ3dCLEtBQWxCO1FBQ0QsQ0FKSCxXQUtTLFVBQUMrSSxHQUFELEVBQVM7VUFDZEMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVo7UUFDRCxDQVBIO01BUUQ7SUFDRjtFQXRDbUIsQ0FBVCxFQXVDVixtQkF2Q1UsQ0FBYjtFQXdDQSxPQUFPa0IsSUFBSSxDQUFDTSxVQUFMLEVBQVA7QUFDRCxDQTFDRCxFQTRDQTs7O0FBQ0EsSUFBTWIsZ0JBQWdCLEdBQUcsSUFBSTNILG9FQUFKLENBQWtCQyx5REFBbEIsRUFBNEJzRiw4REFBNUIsQ0FBekI7QUFDQSxJQUFNNEMsZ0JBQWdCLEdBQUcsSUFBSW5JLG9FQUFKLENBQWtCQyx5REFBbEIsRUFBNEIwRiw2REFBNUIsQ0FBekI7QUFDQSxJQUFNb0MsZUFBZSxHQUFHLElBQUkvSCxvRUFBSixDQUFrQkMseURBQWxCLEVBQTRCOEYsb0VBQTVCLENBQXhCO0FBQ0E0QixnQkFBZ0IsQ0FBQ2MsZ0JBQWpCO0FBQ0FOLGdCQUFnQixDQUFDTSxnQkFBakI7QUFDQVYsZUFBZSxDQUFDVSxnQkFBaEIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQXBpLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvQ2FyZC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cC5qcyIsIndlYnBhY2s6Ly9tZXN0by8uL3NyYy9jb21wb25lbnRzL1BvcHVwV2l0aENvbmZpcm0uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9Qb3B1cFdpdGhGb3JtLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvUG9wdXBXaXRoSW1hZ2UuanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvY29tcG9uZW50cy9TZWN0aW9uLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL2NvbXBvbmVudHMvVXNlckluZm8uanMiLCJ3ZWJwYWNrOi8vbWVzdG8vLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmNzcyIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vbWVzdG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9tZXN0by93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL21lc3RvLy4vc3JjL3BhZ2VzL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwaSB7XHJcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgdGhpcy5fdXJsID0gb3B0aW9ucy51cmw7XHJcbiAgICB0aGlzLl9oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzO1xyXG4gIH07XHJcblxyXG4gIC8v0L/RgNC+0LLQtdGA0LrQsCDQvtGC0LLQtdGC0LAg0YHQtdGA0LLQtdGA0LBcclxuICBfY2hlY2tTZXJ2ZXJSZXNwb25zZShyZXMpIHtcclxuICAgIGlmIChyZXMub2spIHtcclxuICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoYNCe0YjQuNCx0LrQsDogJHtyZXMuc3RhdHVzfWApO1xyXG4gIH07XHJcblxyXG4gIC8v0LfQsNCz0YDRg9C30LrQsCDQtNCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINGBINGB0LXRgNCy0LXRgNCwXHJcbiAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfS91c2Vycy9tZWAsIHtcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyc1xyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tTZXJ2ZXJSZXNwb25zZShyZXMpKTtcclxuICB9O1xyXG5cclxuICAvL9C+0LHQvdC+0LLQu9C10L3QuNC1INCw0LLQsNGC0LDRgNCwXHJcbiAgdXBkYXRlQXZhdGFyKGRhdGEpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9L3VzZXJzL21lL2F2YXRhcmAsIHtcclxuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgYXZhdGFyOiBkYXRhLmF2YXRhclxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tTZXJ2ZXJSZXNwb25zZShyZXMpKTtcclxuICB9O1xyXG5cclxuICAvL9GA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40LUg0L/RgNC+0YTQuNC70Y9cclxuICB1cGRhdGVVc2VySW5mbyhkYXRhKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfS91c2Vycy9tZWAsIHtcclxuICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxyXG4gICAgICBoZWFkZXJzOiB0aGlzLl9oZWFkZXJzLFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgIGFib3V0OiBkYXRhLmFib3V0XHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgICAudGhlbigocmVzKSA9PiB0aGlzLl9jaGVja1NlcnZlclJlc3BvbnNlKHJlcykpO1xyXG4gIH07XHJcblxyXG4gIC8v0LfQsNCz0YDRg9C30LrQsCDQutCw0YDRgtC+0YfQtdC6INGBINGB0LXRgNCy0LXRgNCwXHJcbiAgZ2V0SW5pdGlhbENhcmRzKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke3RoaXMuX3VybH0vY2FyZHNgLCB7XHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnNcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuX2NoZWNrU2VydmVyUmVzcG9uc2UocmVzKSk7XHJcbiAgfTtcclxuXHJcbiAgLy/QtNC+0LHQsNCy0LjRgtGMINC90L7QstGD0Y4g0LrQsNGA0YLQvtGH0LrRg1xyXG4gIHNlbmRDYXJkKGRhdGEpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9L2NhcmRzYCwge1xyXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVycyxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgICBsaW5rOiBkYXRhLmxpbmtcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuX2NoZWNrU2VydmVyUmVzcG9uc2UocmVzKSk7XHJcbiAgfTtcclxuXHJcbiAgLy/Rg9C00LDQu9C40YLRjCDQutCw0YDRgtC+0YfQutGDXHJcbiAgZGVsZXRlQ2FyZChjYXJkSUQpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9L2NhcmRzLyR7Y2FyZElEfWAsIHtcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyc1xyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tTZXJ2ZXJSZXNwb25zZShyZXMpKTtcclxuICB9O1xyXG5cclxuICAvL9C/0L7RgdGC0LDQstC40YLRjCDQu9Cw0LnQulxyXG4gIHNldExpa2UoY2FyZElEKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7dGhpcy5fdXJsfS9jYXJkcy8ke2NhcmRJRH0vbGlrZXNgLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgIGhlYWRlcnM6IHRoaXMuX2hlYWRlcnNcclxuICAgIH0pXHJcbiAgICAgIC50aGVuKChyZXMpID0+IHRoaXMuX2NoZWNrU2VydmVyUmVzcG9uc2UocmVzKSk7XHJcbiAgfTtcclxuXHJcbiAgLy/RgdC90Y/RgtGMINC70LDQudC6XHJcbiAgZGVsZXRlTGlrZShjYXJkSUQpIHtcclxuICAgIHJldHVybiBmZXRjaChgJHt0aGlzLl91cmx9L2NhcmRzLyR7Y2FyZElEfS9saWtlc2AsIHtcclxuICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgaGVhZGVyczogdGhpcy5faGVhZGVyc1xyXG4gICAgfSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4gdGhpcy5fY2hlY2tTZXJ2ZXJSZXNwb25zZShyZXMpKTtcclxuICB9O1xyXG5cclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FyZCB7XHJcbiAgY29uc3RydWN0b3IoeyBkYXRhLCB1c2VySWQsIGhhbmRsZUNhcmRDbGljaywgaGFuZGxlRGVsZXRlQ2xpY2ssIGhhbmRsZUxpa2VDYXJkIH0sIGNhcmRUZW1wbGF0ZVNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl90aXRsZSA9IGRhdGEubmFtZTtcclxuICAgIHRoaXMuX2xpbmsgPSBkYXRhLmxpbms7XHJcbiAgICB0aGlzLl9saWtlcyA9IGRhdGEubGlrZXM7XHJcbiAgICB0aGlzLl9pZCA9IGRhdGEuX2lkO1xyXG4gICAgdGhpcy5fb3duZXJJZCA9IGRhdGEub3duZXIuX2lkO1xyXG4gICAgdGhpcy5fdXNlcklkID0gdXNlcklkO1xyXG5cclxuICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljayA9IGhhbmRsZUNhcmRDbGljaztcclxuICAgIHRoaXMuX2hhbmRsZURlbGV0ZUNsaWNrID0gaGFuZGxlRGVsZXRlQ2xpY2s7XHJcbiAgICB0aGlzLl9oYW5kbGVMaWtlQ2FyZCA9IGhhbmRsZUxpa2VDYXJkO1xyXG5cclxuICAgIHRoaXMuX2NhcmRTZWxlY3RvciA9IGNhcmRUZW1wbGF0ZVNlbGVjdG9yO1xyXG4gIH07XHJcblxyXG4gIF9nZXRUZW1wbGF0ZSgpIHtcclxuICAgIHJldHVybiBkb2N1bWVudFxyXG4gICAgICAucXVlcnlTZWxlY3Rvcih0aGlzLl9jYXJkU2VsZWN0b3IpXHJcbiAgICAgIC5jb250ZW50XHJcbiAgICAgIC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudCcpXHJcbiAgICAgIC5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgfTtcclxuXHJcbiAgY3JlYXRlQ2FyZCgpIHtcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gdGhpcy5fZ2V0VGVtcGxhdGUoKTtcclxuICAgIHRoaXMuX2NhcmRJbWFnZSA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19pbWFnZScpO1xyXG4gICAgdGhpcy5fYnV0dG9uTGlrZSA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19saWtlLWJ1dHRvbicpO1xyXG4gICAgdGhpcy5fbGlrZXNDb3VudCA9IHRoaXMuX2NhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lbGVtZW50X19saWtlLWNvdW50Jyk7XHJcbiAgICB0aGlzLl9idXR0b25EZWxldGUgPSB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9fdHJhc2gtYnV0dG9uJyk7XHJcblxyXG4gICAgdGhpcy5fc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcuZWxlbWVudF9faGVhZGluZycpLnRleHRDb250ZW50ID0gdGhpcy5fdGl0bGU7XHJcbiAgICB0aGlzLl9jYXJkSW1hZ2Uuc3JjID0gdGhpcy5fbGluaztcclxuICAgIHRoaXMuX2NhcmRJbWFnZS5hbHQgPSB0aGlzLl90aXRsZTtcclxuXHJcbiAgICB0aGlzLl9oaWRlRGVsZXRlQnV0dG9uKCk7XHJcbiAgICB0aGlzLnNldExpa2UodGhpcy5fbGlrZXMpO1xyXG4gICAgdGhpcy5fY2hlY2tPd25MaWtlKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2NhcmRFbGVtZW50O1xyXG4gIH07XHJcblxyXG4gIGRlbGV0ZUNhcmQgPSAoKSA9PiB7XHJcbiAgICB0aGlzLl9jYXJkRWxlbWVudC5yZW1vdmUoKTtcclxuICAgIHRoaXMuX2NhcmRFbGVtZW50ID0gbnVsbDtcclxuICB9O1xyXG5cclxuICBfaGlkZURlbGV0ZUJ1dHRvbigpIHtcclxuICAgIGlmICh0aGlzLl9vd25lcklkICE9PSB0aGlzLl91c2VySWQpIHtcclxuICAgICAgdGhpcy5fYnV0dG9uRGVsZXRlLnJlbW92ZSgpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2J1dHRvbkRlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgdGhpcy5faGFuZGxlRGVsZXRlQ2xpY2soKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuX2J1dHRvbkxpa2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUxpa2VDYXJkKCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLl9jYXJkSW1hZ2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIHRoaXMuX2hhbmRsZUNhcmRDbGljaygpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgaXNMaWtlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9saWtlcy5maW5kKHVzZXIgPT4gdXNlci5faWQgPT09IHRoaXMuX3VzZXJJZCk7XHJcbiAgfTtcclxuXHJcbiAgX2NoZWNrT3duTGlrZSgpIHtcclxuICAgIHRoaXMuaXNMaWtlZCgpID8gdGhpcy5hZGRMaWtlKCkgOiB0aGlzLmRlbGV0ZUxpa2UoKTtcclxuICB9O1xyXG5cclxuICBzZXRMaWtlKGRhdGEpIHtcclxuICAgIHRoaXMuX2xpa2VzID0gZGF0YTtcclxuICAgIHRoaXMuX2xpa2VzQ291bnQudGV4dENvbnRlbnQgPSB0aGlzLl9saWtlcy5sZW5ndGg7XHJcbiAgfTtcclxuXHJcbiAgYWRkTGlrZSA9ICgpID0+IHtcclxuICAgIHRoaXMuX2J1dHRvbkxpa2UuY2xhc3NMaXN0LmFkZCgnZWxlbWVudF9fbGlrZS1idXR0b25fYWN0aXZlJyk7XHJcbiAgfTtcclxuXHJcbiAgZGVsZXRlTGlrZSA9ICgpID0+IHtcclxuICAgIHRoaXMuX2J1dHRvbkxpa2UuY2xhc3NMaXN0LnJlbW92ZSgnZWxlbWVudF9fbGlrZS1idXR0b25fYWN0aXZlJyk7XHJcbiAgfTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9ybVZhbGlkYXRvciB7XHJcbiAgY29uc3RydWN0b3IodmFsaWRTZXQsIGZvcm1FbGVtZW50KSB7XHJcbiAgICB0aGlzLl9mb3JtRWxlbWVudCA9IGZvcm1FbGVtZW50O1xyXG4gICAgdGhpcy5faW5wdXRTZWxlY3RvciA9IHZhbGlkU2V0LmlucHV0U2VsZWN0b3I7XHJcbiAgICB0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3RvciA9IHZhbGlkU2V0LnN1Ym1pdEJ1dHRvblNlbGVjdG9yO1xyXG4gICAgdGhpcy5faW5hY3RpdmVCdXR0b25DbGFzcyA9IHZhbGlkU2V0LmluYWN0aXZlQnV0dG9uQ2xhc3M7XHJcbiAgICB0aGlzLl9pbnB1dEVycm9yQ2xhc3MgPSB2YWxpZFNldC5pbnB1dEVycm9yQ2xhc3M7XHJcbiAgICB0aGlzLl9lcnJvckNsYXNzID0gdmFsaWRTZXQuZXJyb3JDbGFzcztcclxuICB9O1xyXG5cclxuICAvL9C/0L7QutCw0LfQsNGC0Ywg0L7RiNC40LHQutGDXHJcbiAgX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgZXJyb3JNZXNzYWdlKSB7XHJcbiAgICBjb25zdCBlcnJvckVsZW1lbnQgPSB0aGlzLl9mb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAuJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XHJcbiAgICBpbnB1dEVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLl9pbnB1dEVycm9yQ2xhc3MpO1xyXG4gICAgZXJyb3JFbGVtZW50LnRleHRDb250ZW50ID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgZXJyb3JFbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5fZXJyb3JDbGFzcyk7XHJcbiAgfTtcclxuXHJcbiAgLy/RgdC/0YDRj9GC0LDRgtGMINC+0YjQuNCx0LrRg1xyXG4gIF9oaWRlSW5wdXRFcnJvcihpbnB1dEVsZW1lbnQpIHtcclxuICAgIGNvbnN0IGVycm9yRWxlbWVudCA9IHRoaXMuX2Zvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcclxuICAgIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2lucHV0RXJyb3JDbGFzcyk7XHJcbiAgICBlcnJvckVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9lcnJvckNsYXNzKTtcclxuICAgIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9ICcnO1xyXG4gIH07XHJcblxyXG4gIC8v0LLQsNC70LjQtNC90L7RgdGC0Ywg0LjQvdC/0YPRgtCwXHJcbiAgX2NoZWNrSW5wdXRWYWxpZGl0eShpbnB1dEVsZW1lbnQpIHtcclxuICAgIGlmICghaW5wdXRFbGVtZW50LnZhbGlkaXR5LnZhbGlkKSB7XHJcbiAgICAgIHRoaXMuX3Nob3dJbnB1dEVycm9yKGlucHV0RWxlbWVudCwgaW5wdXRFbGVtZW50LnZhbGlkYXRpb25NZXNzYWdlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2hpZGVJbnB1dEVycm9yKGlucHV0RWxlbWVudCk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIC8v0L/RgNC+0LLQtdGA0LrQsCDQuNC90L/Rg9GC0L7QsiDQvdCwINC/0YDQvtGF0L7QttC00LXQvdC40LUg0LLQsNC70LjQtNC90L7RgdGC0LhcclxuICBfaGFzSW52YWxpZElucHV0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2lucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+IHtcclxuICAgICAgcmV0dXJuICFpbnB1dEVsZW1lbnQudmFsaWRpdHkudmFsaWQ7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvL9GB0L7RgdGC0L7Rj9C90LjQtSDQutC90L7Qv9C60Lgg0YHQsNCx0LzQuNGCXHJcbiAgZGlzYWJsZVN1Ym1pdEJ1dHRvbigpIHtcclxuICAgIHRoaXMuX2J1dHRvbkVsZW1lbnQuZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gIH07XHJcbiAgZW5hYmxlU3VibWl0QnV0dG9uKCkge1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5fYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2luYWN0aXZlQnV0dG9uQ2xhc3MpO1xyXG4gIH07XHJcblxyXG4gIC8v0L/QtdGA0LXQutC70Y7Rh9Cw0YLQtdC70Ywg0YHQvtGB0YLQvtGP0L3QuNGPINC60L3QvtC/0LrQuCDRgdCw0LHQvNC40YJcclxuICB0b2dnbGVCdXR0b25TdGF0ZSgpIHtcclxuICAgIGlmICh0aGlzLl9oYXNJbnZhbGlkSW5wdXQoKSkge1xyXG4gICAgICB0aGlzLmRpc2FibGVTdWJtaXRCdXR0b24oKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZW5hYmxlU3VibWl0QnV0dG9uKCk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIC8v0L7Rh9C40YHRgtC40YLRjCDQvtGI0LjQsdC60LhcclxuICByZXNldFZhbGlkYXRpb24oKSB7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgICAgdGhpcy5faGlkZUlucHV0RXJyb3IoaW5wdXRFbGVtZW50KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy50b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG59XHJcblxyXG4gIC8v0YHQu9GD0YjQsNGC0LXQu9C4INC90LAg0LLRgdC1INC40L3Qv9GD0YLRi1xyXG4gIF9zZXRFdmVudExpc3RlbmVycygpIHtcclxuICAgIHRoaXMuX2lucHV0TGlzdCA9IEFycmF5LmZyb20odGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLl9pbnB1dFNlbGVjdG9yKSk7XHJcbiAgICB0aGlzLl9idXR0b25FbGVtZW50ID0gdGhpcy5fZm9ybUVsZW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLl9zdWJtaXRCdXR0b25TZWxlY3Rvcik7XHJcbiAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXRFbGVtZW50KSA9PiB7XHJcbiAgICAgIGlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICB0aGlzLl9jaGVja0lucHV0VmFsaWRpdHkoaW5wdXRFbGVtZW50KTtcclxuICAgICAgICB0aGlzLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgLy/QstC60LvRjtGH0LXQvdC40LUg0LLQsNC70LjQtNCw0YbQuNC4XHJcbiAgZW5hYmxlVmFsaWRhdGlvbigpIHtcclxuICAgIHRoaXMuX3NldEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgfTtcclxufTtcclxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHBvcHVwU2VsZWN0b3IpIHtcclxuICAgIHRoaXMuX3BvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2hhbmRsZUVzY0Nsb3NlID0gdGhpcy5faGFuZGxlRXNjQ2xvc2UuYmluZCh0aGlzKTtcclxuICB9O1xyXG5cclxuICBvcGVuKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LmFkZCgncG9wdXBfb3BlbmVkJyk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH07XHJcblxyXG4gIGNsb3NlKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgncG9wdXBfb3BlbmVkJyk7XHJcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5faGFuZGxlRXNjQ2xvc2UpO1xyXG4gIH07XHJcblxyXG4gIF9oYW5kbGVFc2NDbG9zZShldnQpIHtcclxuICAgIGlmIChldnQua2V5ID09PSAnRXNjYXBlJykge1xyXG4gICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgdGhpcy5fcG9wdXAuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2dCkgPT4ge1xyXG4gICAgICBpZiAoZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BvcHVwX29wZW5lZCcpIHx8IGV2dC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwb3B1cF9fY2xvc2UtYnV0dG9uJykpIHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICB9O1xyXG59O1xyXG4iLCJpbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXAuanNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoQ29uZmlybSBleHRlbmRzIFBvcHVwIHtcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yIH0pIHtcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcbiAgICB0aGlzLl9mb3JtID0gdGhpcy5fcG9wdXAucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJyk7XG4gIH07XG5cbiAgaGFuZGxlU3VibWl0Q29uZmlybShzdWJtaXRDb25maXJtKSB7XG4gICAgdGhpcy5faGFuZGxlU3VibWl0ID0gc3VibWl0Q29uZmlybTtcbiAgfTtcblxuICBvcGVuKCkge1xuICAgIHN1cGVyLm9wZW4oKTtcbiAgfTtcblxuICBjbG9zZSgpIHtcbiAgICBzdXBlci5jbG9zZSgpO1xuICB9O1xuXG4gIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHN1cGVyLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZ0KSA9PiB7XG4gICAgICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2hhbmRsZVN1Ym1pdCgpO1xuICAgIH0pO1xuICB9XG59O1xuIiwiaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwLmpzXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cFdpdGhGb3JtIGV4dGVuZHMgUG9wdXAge1xyXG4gIGNvbnN0cnVjdG9yKHsgcG9wdXBTZWxlY3RvciwgaGFuZGxlU3VibWl0Rm9ybSB9KSB7XHJcbiAgICBzdXBlcihwb3B1cFNlbGVjdG9yKTtcclxuICAgIHRoaXMuX2hhbmRsZVN1Ym1pdEZvcm0gPSBoYW5kbGVTdWJtaXRGb3JtO1xyXG4gICAgdGhpcy5fZm9ybSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZm9ybScpO1xyXG4gICAgdGhpcy5faW5wdXRMaXN0ID0gQXJyYXkuZnJvbSh0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb3B1cF9faW5wdXQnKSk7XHJcbiAgICB0aGlzLl9idXR0b25TdWJtaXQgPSB0aGlzLl9mb3JtLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fc3VibWl0LWJ1dHRvbicpO1xyXG4gICAgdGhpcy5fYnV0dG9uU3VibWl0VGV4dCA9IHRoaXMuX2J1dHRvblN1Ym1pdC50ZXh0Q29udGVudDtcclxuICB9O1xyXG5cclxuICBfZ2V0SW5wdXRWYWx1ZXMoKSB7XHJcbiAgICB0aGlzLl9mb3JtVmFsdWVzID0ge307XHJcbiAgICB0aGlzLl9pbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcclxuICAgICAgdGhpcy5fZm9ybVZhbHVlc1tpbnB1dC5uYW1lXSA9IGlucHV0LnZhbHVlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX2Zvcm1WYWx1ZXM7XHJcbiAgfTtcclxuXHJcbiAgcmVuZGVyTG9hZGluZyhpc0xvYWRpbmcpIHtcclxuICAgIGlmIChpc0xvYWRpbmcpIHtcclxuICAgICAgdGhpcy5fYnV0dG9uU3VibWl0LnRleHRDb250ZW50ID0gJ9Ch0L7RhdGA0LDQvdC10L3QuNC1Li4uJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2J1dHRvblN1Ym1pdC50ZXh0Q29udGVudCA9IHRoaXMuX2J1dHRvblN1Ym1pdFRleHQ7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICBzdXBlci5zZXRFdmVudExpc3RlbmVycygpO1xyXG4gICAgdGhpcy5fZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZ0KSA9PiB7XHJcbiAgICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB0aGlzLl9oYW5kbGVTdWJtaXRGb3JtKHRoaXMuX2dldElucHV0VmFsdWVzKCkpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY2xvc2UoKSB7XHJcbiAgICBzdXBlci5jbG9zZSgpO1xyXG4gICAgdGhpcy5fZm9ybS5yZXNldCgpO1xyXG4gIH07XHJcbn07XHJcbiIsImltcG9ydCBQb3B1cCBmcm9tIFwiLi9Qb3B1cC5qc1wiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXBXaXRoSW1hZ2UgZXh0ZW5kcyBQb3B1cCB7XHJcbiAgY29uc3RydWN0b3IoeyBwb3B1cFNlbGVjdG9yIH0pIHtcclxuICAgIHN1cGVyKHBvcHVwU2VsZWN0b3IpO1xyXG4gICAgdGhpcy5fcG9wdXBJbWFnZSA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9faW1hZ2UnKTsgLy9cclxuICAgIHRoaXMuX3BvcHVwRmlnY2FwdGlvbiA9IHRoaXMuX3BvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF9fZmlnY2FwdGlvbicpO1xyXG4gIH07XHJcblxyXG4gIG9wZW4obmFtZSwgbGluaykge1xyXG4gICAgdGhpcy5fcG9wdXBJbWFnZS5zcmMgPSBsaW5rO1xyXG4gICAgdGhpcy5fcG9wdXBGaWdjYXB0aW9uLnRleHRDb250ZW50ID0gbmFtZTtcclxuICAgIHRoaXMuX3BvcHVwSW1hZ2UuYWx0ID0gbmFtZTtcclxuICAgIHN1cGVyLm9wZW4oKTtcclxuICB9O1xyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBTZWN0aW9uIHtcclxuICBjb25zdHJ1Y3Rvcih7IHJlbmRlcmVyIH0sIGNvbnRhaW5lclNlbGVjdG9yKSB7XHJcbiAgICB0aGlzLl9yZW5kZXJlciA9IHJlbmRlcmVyO1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihjb250YWluZXJTZWxlY3Rvcik7XHJcbiAgfTtcclxuXHJcbiAgYWRkSXRlbShlbGVtZW50KSB7XHJcbiAgICB0aGlzLl9jb250YWluZXIucHJlcGVuZChlbGVtZW50KTtcclxuICB9O1xyXG5cclxuICByZW5kZXJJdGVtcyhpdGVtcykge1xyXG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4gdGhpcy5fcmVuZGVyZXIoaXRlbSkpO1xyXG4gIH07XHJcblxyXG59O1xyXG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyB7XHJcbiAgY29uc3RydWN0b3IoeyBwcm9maWxlTmFtZSwgcHJvZmlsZURlc2NyaXB0aW9uLCBwcm9maWxlQXZhdGFyIH0pIHtcclxuICAgIHRoaXMuX25hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHByb2ZpbGVOYW1lKTtcclxuICAgIHRoaXMuX2Fib3V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9maWxlRGVzY3JpcHRpb24pO1xyXG4gICAgdGhpcy5fYXZhdGFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihwcm9maWxlQXZhdGFyKTtcclxuICB9O1xyXG5cclxuICBnZXRVc2VySW5mbygpIHtcclxuICAgIHRoaXMuX3VzZXJEYXRhID0ge1xyXG4gICAgICB1c2VyTmFtZTogdGhpcy5fbmFtZS50ZXh0Q29udGVudCxcclxuICAgICAgdXNlckluZm86IHRoaXMuX2Fib3V0LnRleHRDb250ZW50XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuX3VzZXJEYXRhO1xyXG4gIH07XHJcblxyXG4gIHNldFVzZXJJbmZvKGRhdGEpIHtcclxuICAgIHRoaXMuX25hbWUudGV4dENvbnRlbnQgPSBkYXRhLm5hbWU7XHJcbiAgICB0aGlzLl9hYm91dC50ZXh0Q29udGVudCA9IGRhdGEuYWJvdXQ7XHJcbiAgfTtcclxuXHJcbiAgc2V0VXNlckF2YXRhcih1cmwpIHtcclxuICAgIHRoaXMuX2F2YXRhci5zcmMgPSB1cmwuYXZhdGFyO1xyXG4gIH07XHJcbn07XHJcbiIsIi8v0L/QvtC/INCw0L8g0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjQtSDQv9GA0L7RhNC40LvRj1xyXG5leHBvcnQgY29uc3QgcG9wdXBFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX3R5cGVfZWRpdC1wcm9maWxlJyk7XHJcbi8v0LrQvdC+0L/QutCwINC/0L7QvyDQsNC/INGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0L/RgNC+0YTQuNC70Y9cclxuZXhwb3J0IGNvbnN0IGJ1dHRvblByb2ZpbGVFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2ZpbGVfX2VkaXQtYnV0dG9uJyk7XHJcbi8v0YTQvtGA0LzQsCDQv9C+0L8g0LDQv9CwINGA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0L/RgNC+0YTQuNC70Y9cclxuZXhwb3J0IGNvbnN0IGZvcm1Qb3B1cEVkaXQgPSBwb3B1cEVkaXQucXVlcnlTZWxlY3RvcignLnBvcHVwX19mb3JtJyk7XHJcbi8v0LjQvdC/0YPRgtGLINGE0L7RgNC80Ysg0L/QvtC/INCw0L/QsCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINC/0YDQvtGE0LjQu9GPXHJcbmV4cG9ydCBjb25zdCBpbnB1dE5hbWVQb3B1cEVkaXQgPSBmb3JtUG9wdXBFZGl0LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XHJcbmV4cG9ydCBjb25zdCBpbnB1dERlc2NyaXB0aW9uUG9wdXBFZGl0ID0gZm9ybVBvcHVwRWRpdC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKTtcclxuXHJcbi8v0L/QvtC/INCw0L8g0LTQvtCx0LDQstC70LXQvdC40LUg0LrQsNGA0YLQvtGH0LrQuFxyXG5leHBvcnQgY29uc3QgcG9wdXBBZGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfdHlwZV9uZXctZWxlbWVudCcpO1xyXG4vL9GE0L7RgNC80LAg0L/QvtC/INCw0L/QsCDQtNC+0LHQsNCy0LvQtdC90LjRjyDQutCw0YDRgtC+0YfQutC4XHJcbmV4cG9ydCBjb25zdCBmb3JtUG9wdXBBZGQgPSBwb3B1cEFkZC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTtcclxuLy/QutC90L7Qv9C60LAg0L/QvtC/INCw0L8g0LTQvtCx0LDQstC70LXQvdC40Y8g0L3QvtCy0L7QuSDQutCw0YDRgtC+0YfQutC4XHJcbmV4cG9ydCBjb25zdCBidXR0b25Qb3B1cEFkZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19hZGQtYnV0dG9uJyk7XHJcblxyXG4vL9C/0L7QvyDQsNC/INC/0YDQvtGB0LzQvtGC0YAg0LjQt9C+0LHRgNCw0LbQtdC90LjRj1xyXG5leHBvcnQgY29uc3QgcG9wdXBWaWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBvcHVwX3R5cGVfdmlldy1pbWFnZScpO1xyXG5cclxuLy/Qv9C+0L8g0LDQvyDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INCw0LLQsNGC0LDRgNCwXHJcbmV4cG9ydCBjb25zdCBwb3B1cEVkaXRBdmF0YXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucG9wdXBfdHlwZV9hdmF0YXInKTtcclxuLy/RhNC+0YDQvNCwINC/0L7QvyDQsNC/0LAg0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDQsNCy0LDRgtCw0YDQsFxyXG5leHBvcnQgY29uc3QgZm9ybVBvcHVwRWRpdEF2YXRhciA9IHBvcHVwRWRpdEF2YXRhci5xdWVyeVNlbGVjdG9yKCcucG9wdXBfX2Zvcm0nKTtcclxuLy/QutC90L7Qv9C60LAg0L/QvtC/INCw0L8g0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDQsNCy0LDRgtCw0YDQsFxyXG5leHBvcnQgY29uc3QgYnV0dG9uRWRpdEF2YXRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9maWxlX19lZGl0LWF2YXRhci1idXR0b24nKTtcclxuXHJcbi8v0L/QvtC/INCw0L8g0L/QvtC00YLQstC10YDQttC00LXQvdC40LVcclxuZXhwb3J0IGNvbnN0IHBvcHVwQ29uZmlybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cF90eXBlX2NvbmZpcm0nKTtcclxuXHJcbi8v0L7QsdGK0LXQutGCINGBINCy0LDQu9C40LTQuNGA0YPQtdC80YvQvNC4INGB0LXQu9C10LrRgtC+0YDQsNC80LhcclxuZXhwb3J0IGNvbnN0IHZhbGlkU2V0ID0ge1xyXG4gIGZvcm1TZWxlY3RvcjogJy5wb3B1cF9fZm9ybScsXHJcbiAgaW5wdXRTZWxlY3RvcjogJy5wb3B1cF9faW5wdXQnLFxyXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiAnLnBvcHVwX19zdWJtaXQtYnV0dG9uJyxcclxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiAncG9wdXBfX3N1Ym1pdC1idXR0b25fZGlzYWJsZWQnLFxyXG4gIGlucHV0RXJyb3JDbGFzczogJ3BvcHVwX19pbnB1dF90eXBlX2Vycm9yJyxcclxuICBlcnJvckNsYXNzOiAncG9wdXBfX2Vycm9yX3Zpc2libGUnXHJcbn07XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL2luZGV4LmNzcyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIHZhbGlkU2V0LCBmb3JtUG9wdXBFZGl0LCBmb3JtUG9wdXBBZGQsIGJ1dHRvblByb2ZpbGVFZGl0LCBidXR0b25Qb3B1cEFkZCxcclxuICBidXR0b25FZGl0QXZhdGFyLCBpbnB1dE5hbWVQb3B1cEVkaXQsIGlucHV0RGVzY3JpcHRpb25Qb3B1cEVkaXQsIGZvcm1Qb3B1cEVkaXRBdmF0YXJcclxufSBmcm9tICcuLi91dGlscy9jb25zdGFudHMuanMnO1xyXG5pbXBvcnQgRm9ybVZhbGlkYXRvciBmcm9tICcuLi9jb21wb25lbnRzL0Zvcm1WYWxpZGF0b3IuanMnO1xyXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0NhcmQuanMnO1xyXG5pbXBvcnQgU2VjdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL1NlY3Rpb24uanMnO1xyXG5pbXBvcnQgUG9wdXBXaXRoSW1hZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9Qb3B1cFdpdGhJbWFnZS5qcyc7XHJcbmltcG9ydCBQb3B1cFdpdGhGb3JtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoRm9ybS5qcyc7XHJcbmltcG9ydCBQb3B1cFdpdGhDb25maXJtIGZyb20gJy4uL2NvbXBvbmVudHMvUG9wdXBXaXRoQ29uZmlybS5qcyc7XHJcbmltcG9ydCBVc2VySW5mbyBmcm9tICcuLi9jb21wb25lbnRzL1VzZXJJbmZvLmpzJztcclxuaW1wb3J0IEFwaSBmcm9tICcuLi9jb21wb25lbnRzL0FwaS5qcyc7XHJcblxyXG4vL0FQSVxyXG5jb25zdCBhcGkgPSBuZXcgQXBpKHtcclxuICB1cmw6ICdodHRwczovL21lc3RvLm5vbW9yZXBhcnRpZXMuY28vdjEvY29ob3J0LTQ4JyxcclxuICBoZWFkZXJzOiB7XHJcbiAgICBhdXRob3JpemF0aW9uOiAnMmU4ZmM2NGQtZjU2Yi00YThiLTk1NzMtZjA3ZDQ4ZDYxZjc5JyxcclxuICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICB9XHJcbn0pO1xyXG5cclxubGV0IHVzZXJJZCA9IG51bGw7XHJcblxyXG4vL9C30LDQs9GA0YPQt9C60LAg0LPQvtGC0L7QstGL0YUg0LrQsNGA0YLQvtGH0LXQuiDQuCDQtNCw0L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GPINGBINGB0LXRgNCy0LXRgNCwXHJcblByb21pc2UuYWxsKFthcGkuZ2V0VXNlckluZm8oKSwgYXBpLmdldEluaXRpYWxDYXJkcygpXSlcclxuICAudGhlbigoW3VzZXJEYXRhLCBpbml0aWFsQ2FyZHNdKSA9PiB7XHJcbiAgICB1c2VySWQgPSB1c2VyRGF0YS5faWQ7XHJcblxyXG4gICAgcHJvZmlsZS5zZXRVc2VySW5mbyh1c2VyRGF0YSk7XHJcbiAgICBwcm9maWxlLnNldFVzZXJBdmF0YXIodXNlckRhdGEpO1xyXG5cclxuICAgIGluaXRpYWxDYXJkcy5yZXZlcnNlKCk7XHJcbiAgICBjYXJkcy5yZW5kZXJJdGVtcyhpbml0aWFsQ2FyZHMpO1xyXG4gIH1cclxuICApXHJcbiAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgfSk7XHJcblxyXG5jb25zdCBjYXJkcyA9IG5ldyBTZWN0aW9uKHtcclxuICByZW5kZXJlcjogKGl0ZW1zKSA9PiB7XHJcbiAgICBjYXJkcy5hZGRJdGVtKGNyZWF0ZU5ld0NhcmQoaXRlbXMpKTtcclxuICB9XHJcbn0sICcuZWxlbWVudHNfX2NhcmRzJyk7XHJcblxyXG4vL9GN0LrQt9C10LzQv9C70Y/RgCDRgSDQtNCw0L3QvdGL0LzQuCDQv9GA0L7RhNC40LvRj1xyXG5jb25zdCBwcm9maWxlID0gbmV3IFVzZXJJbmZvKHtcclxuICBwcm9maWxlTmFtZTogJy5wcm9maWxlX19uYW1lJyxcclxuICBwcm9maWxlRGVzY3JpcHRpb246ICcucHJvZmlsZV9fZGVzY3JpcHRpb24nLFxyXG4gIHByb2ZpbGVBdmF0YXI6ICcucHJvZmlsZV9fYXZhdGFyJ1xyXG59KTtcclxuXHJcbi8v0L/QvtC/INCw0L8g0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDQv9GA0L7RhNC40LvRj1xyXG5jb25zdCBwb3B1cEVkaXRQcm9maWxlID0gbmV3IFBvcHVwV2l0aEZvcm0oe1xyXG4gIHBvcHVwU2VsZWN0b3I6ICcucG9wdXBfdHlwZV9lZGl0LXByb2ZpbGUnLFxyXG4gIGhhbmRsZVN1Ym1pdEZvcm06IChkYXRhKSA9PiB7XHJcbiAgICBwb3B1cEVkaXRQcm9maWxlLnJlbmRlckxvYWRpbmcodHJ1ZSk7XHJcbiAgICBhcGkudXBkYXRlVXNlckluZm8oZGF0YSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHByb2ZpbGUuc2V0VXNlckluZm8ocmVzKTtcclxuICAgICAgICBwb3B1cEVkaXRQcm9maWxlLmNsb3NlKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwRWRpdFByb2ZpbGUucmVuZGVyTG9hZGluZyhmYWxzZSk7XHJcbiAgICAgIH0pXHJcbiAgfVxyXG59KTtcclxuXHJcbi8v0LfQsNC/0L7Qu9C90LXQvdC40LUg0LjQvdC/0YPRgtC+0LIg0YTQvtGA0LzRiyDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINC/0YDQvtGE0LjQu9GPXHJcbmZ1bmN0aW9uIHNldERhdGFJbnB1dHNQcm9maWxlKCkge1xyXG4gIGNvbnN0IHVzZXJEYXRhID0gcHJvZmlsZS5nZXRVc2VySW5mbygpO1xyXG4gIGlucHV0TmFtZVBvcHVwRWRpdC52YWx1ZSA9IHVzZXJEYXRhLnVzZXJOYW1lO1xyXG4gIGlucHV0RGVzY3JpcHRpb25Qb3B1cEVkaXQudmFsdWUgPSB1c2VyRGF0YS51c2VySW5mbztcclxufTtcclxuXHJcbnBvcHVwRWRpdFByb2ZpbGUuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcclxuXHJcbi8v0YHQu9GD0YjQsNGC0LXQu9GMINC60L3QvtC/0LrQuCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINC/0YDQvtGE0LjQu9GPXHJcbmJ1dHRvblByb2ZpbGVFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIHNldERhdGFJbnB1dHNQcm9maWxlKCk7XHJcbiAgcG9wdXBFZGl0UHJvZmlsZS5vcGVuKCk7XHJcbiAgcHJvZmlsZVZhbGlkYXRvci50b2dnbGVCdXR0b25TdGF0ZSgpO1xyXG4gIHByb2ZpbGVWYWxpZGF0b3IucmVzZXRWYWxpZGF0aW9uKCk7XHJcbn0pO1xyXG5cclxuLy/Qv9C+0L8g0LDQvyDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNC1INCw0LLQsNGC0LDRgNCwXHJcbmNvbnN0IHBvcHVwRWRpdFVzZXJBdmF0YXIgPSBuZXcgUG9wdXBXaXRoRm9ybSh7XHJcbiAgcG9wdXBTZWxlY3RvcjogJy5wb3B1cF90eXBlX2F2YXRhcicsXHJcbiAgaGFuZGxlU3VibWl0Rm9ybTogKGRhdGEpID0+IHtcclxuICAgIHBvcHVwRWRpdFVzZXJBdmF0YXIucmVuZGVyTG9hZGluZyh0cnVlKTtcclxuICAgIGFwaS51cGRhdGVBdmF0YXIoZGF0YSlcclxuICAgICAgLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHByb2ZpbGUuc2V0VXNlckF2YXRhcihyZXMpO1xyXG4gICAgICAgIHBvcHVwRWRpdFVzZXJBdmF0YXIuY2xvc2UoKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICB9KVxyXG4gICAgICAuZmluYWxseSgoKSA9PiB7XHJcbiAgICAgICAgcG9wdXBFZGl0VXNlckF2YXRhci5yZW5kZXJMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSlcclxuICB9XHJcbn0pO1xyXG5cclxucG9wdXBFZGl0VXNlckF2YXRhci5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuLy/QvtCx0YDQsNCx0L7RgtGH0LjQuiDQutC90L7Qv9C60Lgg0L/QvtC/INCw0L/QsCDRgNC10LTQsNC60YLQuNGA0L7QstCw0L3QuNGPINCw0LLQsNGC0LDRgNCwXHJcbmJ1dHRvbkVkaXRBdmF0YXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgcG9wdXBFZGl0VXNlckF2YXRhci5vcGVuKCk7XHJcbiAgYXZhdGFyVmFsaWRhdG9yLnRvZ2dsZUJ1dHRvblN0YXRlKCk7XHJcbiAgYXZhdGFyVmFsaWRhdG9yLnJlc2V0VmFsaWRhdGlvbigpO1xyXG59KTtcclxuXHJcbi8v0L/QvtC/INCw0L8g0LTQvtCx0LDQstC70LXQvdC40Y8g0L3QvtCy0L7QuSDQutCw0YDRgtC+0YfQutC4XHJcbmNvbnN0IHBvcHVwQWRkQ2FyZCA9IG5ldyBQb3B1cFdpdGhGb3JtKHtcclxuICBwb3B1cFNlbGVjdG9yOiAnLnBvcHVwX3R5cGVfbmV3LWVsZW1lbnQnLFxyXG4gIGhhbmRsZVN1Ym1pdEZvcm06IChkYXRhKSA9PiB7XHJcbiAgICBwb3B1cEFkZENhcmQucmVuZGVyTG9hZGluZyh0cnVlKTtcclxuICAgIGFwaS5zZW5kQ2FyZChkYXRhKVxyXG4gICAgICAudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGNhcmQgPSBjcmVhdGVOZXdDYXJkKGRhdGEpO1xyXG4gICAgICAgIGNhcmRzLmFkZEl0ZW0oY2FyZCk7XHJcbiAgICAgICAgcG9wdXBBZGRDYXJkLmNsb3NlKCk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgfSlcclxuICAgICAgLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgIHBvcHVwQWRkQ2FyZC5yZW5kZXJMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgfSlcclxuICB9XHJcbn0pO1xyXG5cclxucG9wdXBBZGRDYXJkLnNldEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4vL9C+0LHRgNCw0LHQvtGC0YfQuNC6INC60L3QvtC/0LrQuCDQv9C+0L8g0LDQv9CwINC00L7QsdCw0LLQu9C10L3QuNGPINC90L7QstC+0Lkg0LrQsNGA0YLQvtGH0LrQuFxyXG5idXR0b25Qb3B1cEFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBwb3B1cEFkZENhcmQub3BlbigpO1xyXG4gIGFkZENhcmRWYWxpZGF0b3IudG9nZ2xlQnV0dG9uU3RhdGUoKTtcclxuICBhZGRDYXJkVmFsaWRhdG9yLnJlc2V0VmFsaWRhdGlvbigpO1xyXG59KTtcclxuXHJcbi8vLy/Qv9C+0L8g0LDQvyDQv9C+0LTRgtCy0LXRgNC20LTQtdC90LjQtSDRg9C00LDQu9C10L3QuNGPINC60LDRgNGC0L7Rh9C60LhcclxuY29uc3QgcG9wdXBEZWxldGVDYXJkID0gbmV3IFBvcHVwV2l0aENvbmZpcm0oe1xyXG4gIHBvcHVwU2VsZWN0b3I6ICcucG9wdXBfdHlwZV9jb25maXJtJ1xyXG59KTtcclxuXHJcbnBvcHVwRGVsZXRlQ2FyZC5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuLy/Qv9C+0L8g0LDQvyDQv9GA0L7RgdC80L7RgtGAINC40LfQvtCx0YDQsNC20LXQvdC40Y9cclxuY29uc3QgcG9wdXBWaWV3SW1hZ2UgPSBuZXcgUG9wdXBXaXRoSW1hZ2UoeyBwb3B1cFNlbGVjdG9yOiAnLnBvcHVwX3R5cGVfdmlldy1pbWFnZScgfSk7XHJcblxyXG5wb3B1cFZpZXdJbWFnZS5zZXRFdmVudExpc3RlbmVycygpO1xyXG5cclxuLy/RgdC+0LfQtNCw0L3QuNC1INC90L7QstC+0Lkg0LrQsNGA0YLQvtGH0LrQuFxyXG5jb25zdCBjcmVhdGVOZXdDYXJkID0gKGRhdGEpID0+IHtcclxuICBjb25zdCBjYXJkID0gbmV3IENhcmQoe1xyXG4gICAgZGF0YSwgdXNlcklkLFxyXG4gICAgaGFuZGxlQ2FyZENsaWNrOiAoKSA9PiB7XHJcbiAgICAgIHBvcHVwVmlld0ltYWdlLm9wZW4oZGF0YS5uYW1lLCBkYXRhLmxpbmspO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZURlbGV0ZUNsaWNrOiAoKSA9PiB7XHJcbiAgICAgIHBvcHVwRGVsZXRlQ2FyZC5vcGVuKCk7XHJcbiAgICAgIHBvcHVwRGVsZXRlQ2FyZC5oYW5kbGVTdWJtaXRDb25maXJtKCgpID0+IHtcclxuICAgICAgICBhcGkuZGVsZXRlQ2FyZChjYXJkLl9pZClcclxuICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY2FyZC5kZWxldGVDYXJkKCk7XHJcbiAgICAgICAgICAgIHBvcHVwRGVsZXRlQ2FyZC5jbG9zZSgpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGhhbmRsZUxpa2VDYXJkOiAoKSA9PiB7XHJcbiAgICAgIGlmIChjYXJkLmlzTGlrZWQoKSkge1xyXG4gICAgICAgIGFwaS5kZWxldGVMaWtlKGNhcmQuX2lkKVxyXG4gICAgICAgICAgLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgY2FyZC5kZWxldGVMaWtlKCk7XHJcbiAgICAgICAgICAgIGNhcmQuc2V0TGlrZShkYXRhLmxpa2VzKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhcGkuc2V0TGlrZShjYXJkLl9pZClcclxuICAgICAgICAgIC50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIGNhcmQuYWRkTGlrZSgpO1xyXG4gICAgICAgICAgICBjYXJkLnNldExpa2UoZGF0YS5saWtlcyk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCAnLmVsZW1lbnQtdGVtcGxhdGUnKTtcclxuICByZXR1cm4gY2FyZC5jcmVhdGVDYXJkKCk7XHJcbn07XHJcblxyXG4vL9Cy0LDQu9C40LTQsNGG0LjRj1xyXG5jb25zdCBwcm9maWxlVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRTZXQsIGZvcm1Qb3B1cEVkaXQpO1xyXG5jb25zdCBhZGRDYXJkVmFsaWRhdG9yID0gbmV3IEZvcm1WYWxpZGF0b3IodmFsaWRTZXQsIGZvcm1Qb3B1cEFkZCk7XHJcbmNvbnN0IGF2YXRhclZhbGlkYXRvciA9IG5ldyBGb3JtVmFsaWRhdG9yKHZhbGlkU2V0LCBmb3JtUG9wdXBFZGl0QXZhdGFyKTtcclxucHJvZmlsZVZhbGlkYXRvci5lbmFibGVWYWxpZGF0aW9uKCk7XHJcbmFkZENhcmRWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG5hdmF0YXJWYWxpZGF0b3IuZW5hYmxlVmFsaWRhdGlvbigpO1xyXG4iXSwibmFtZXMiOlsiQXBpIiwib3B0aW9ucyIsIl91cmwiLCJ1cmwiLCJfaGVhZGVycyIsImhlYWRlcnMiLCJyZXMiLCJvayIsImpzb24iLCJQcm9taXNlIiwicmVqZWN0Iiwic3RhdHVzIiwiZmV0Y2giLCJ0aGVuIiwiX2NoZWNrU2VydmVyUmVzcG9uc2UiLCJkYXRhIiwibWV0aG9kIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJhdmF0YXIiLCJuYW1lIiwiYWJvdXQiLCJsaW5rIiwiY2FyZElEIiwiQ2FyZCIsImNhcmRUZW1wbGF0ZVNlbGVjdG9yIiwidXNlcklkIiwiaGFuZGxlQ2FyZENsaWNrIiwiaGFuZGxlRGVsZXRlQ2xpY2siLCJoYW5kbGVMaWtlQ2FyZCIsIl9jYXJkRWxlbWVudCIsInJlbW92ZSIsIl9idXR0b25MaWtlIiwiY2xhc3NMaXN0IiwiYWRkIiwiX3RpdGxlIiwiX2xpbmsiLCJfbGlrZXMiLCJsaWtlcyIsIl9pZCIsIl9vd25lcklkIiwib3duZXIiLCJfdXNlcklkIiwiX2hhbmRsZUNhcmRDbGljayIsIl9oYW5kbGVEZWxldGVDbGljayIsIl9oYW5kbGVMaWtlQ2FyZCIsIl9jYXJkU2VsZWN0b3IiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjb250ZW50IiwiY2xvbmVOb2RlIiwiX2dldFRlbXBsYXRlIiwiX2NhcmRJbWFnZSIsIl9saWtlc0NvdW50IiwiX2J1dHRvbkRlbGV0ZSIsIl9zZXRFdmVudExpc3RlbmVycyIsInRleHRDb250ZW50Iiwic3JjIiwiYWx0IiwiX2hpZGVEZWxldGVCdXR0b24iLCJzZXRMaWtlIiwiX2NoZWNrT3duTGlrZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJmaW5kIiwidXNlciIsImlzTGlrZWQiLCJhZGRMaWtlIiwiZGVsZXRlTGlrZSIsImxlbmd0aCIsIkZvcm1WYWxpZGF0b3IiLCJ2YWxpZFNldCIsImZvcm1FbGVtZW50IiwiX2Zvcm1FbGVtZW50IiwiX2lucHV0U2VsZWN0b3IiLCJpbnB1dFNlbGVjdG9yIiwiX3N1Ym1pdEJ1dHRvblNlbGVjdG9yIiwic3VibWl0QnV0dG9uU2VsZWN0b3IiLCJfaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3MiLCJfaW5wdXRFcnJvckNsYXNzIiwiaW5wdXRFcnJvckNsYXNzIiwiX2Vycm9yQ2xhc3MiLCJlcnJvckNsYXNzIiwiaW5wdXRFbGVtZW50IiwiZXJyb3JNZXNzYWdlIiwiZXJyb3JFbGVtZW50IiwiaWQiLCJ2YWxpZGl0eSIsInZhbGlkIiwiX3Nob3dJbnB1dEVycm9yIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJfaGlkZUlucHV0RXJyb3IiLCJfaW5wdXRMaXN0Iiwic29tZSIsIl9idXR0b25FbGVtZW50IiwiZGlzYWJsZWQiLCJfaGFzSW52YWxpZElucHV0IiwiZGlzYWJsZVN1Ym1pdEJ1dHRvbiIsImVuYWJsZVN1Ym1pdEJ1dHRvbiIsImZvckVhY2giLCJ0b2dnbGVCdXR0b25TdGF0ZSIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfY2hlY2tJbnB1dFZhbGlkaXR5IiwiUG9wdXAiLCJwb3B1cFNlbGVjdG9yIiwiX3BvcHVwIiwiX2hhbmRsZUVzY0Nsb3NlIiwiYmluZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldnQiLCJrZXkiLCJjbG9zZSIsInRhcmdldCIsImNvbnRhaW5zIiwiUG9wdXBXaXRoQ29uZmlybSIsIl9mb3JtIiwic3VibWl0Q29uZmlybSIsIl9oYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIlBvcHVwV2l0aEZvcm0iLCJoYW5kbGVTdWJtaXRGb3JtIiwiX2hhbmRsZVN1Ym1pdEZvcm0iLCJfYnV0dG9uU3VibWl0IiwiX2J1dHRvblN1Ym1pdFRleHQiLCJfZm9ybVZhbHVlcyIsImlucHV0IiwidmFsdWUiLCJpc0xvYWRpbmciLCJfZ2V0SW5wdXRWYWx1ZXMiLCJyZXNldCIsIlBvcHVwV2l0aEltYWdlIiwiX3BvcHVwSW1hZ2UiLCJfcG9wdXBGaWdjYXB0aW9uIiwiU2VjdGlvbiIsImNvbnRhaW5lclNlbGVjdG9yIiwicmVuZGVyZXIiLCJfcmVuZGVyZXIiLCJfY29udGFpbmVyIiwiZWxlbWVudCIsInByZXBlbmQiLCJpdGVtcyIsIml0ZW0iLCJVc2VySW5mbyIsInByb2ZpbGVOYW1lIiwicHJvZmlsZURlc2NyaXB0aW9uIiwicHJvZmlsZUF2YXRhciIsIl9uYW1lIiwiX2Fib3V0IiwiX2F2YXRhciIsIl91c2VyRGF0YSIsInVzZXJOYW1lIiwidXNlckluZm8iLCJwb3B1cEVkaXQiLCJidXR0b25Qcm9maWxlRWRpdCIsImZvcm1Qb3B1cEVkaXQiLCJpbnB1dE5hbWVQb3B1cEVkaXQiLCJpbnB1dERlc2NyaXB0aW9uUG9wdXBFZGl0IiwicG9wdXBBZGQiLCJmb3JtUG9wdXBBZGQiLCJidXR0b25Qb3B1cEFkZCIsInBvcHVwVmlldyIsInBvcHVwRWRpdEF2YXRhciIsImZvcm1Qb3B1cEVkaXRBdmF0YXIiLCJidXR0b25FZGl0QXZhdGFyIiwicG9wdXBDb25maXJtIiwiZm9ybVNlbGVjdG9yIiwiYXBpIiwiYXV0aG9yaXphdGlvbiIsImFsbCIsImdldFVzZXJJbmZvIiwiZ2V0SW5pdGlhbENhcmRzIiwidXNlckRhdGEiLCJpbml0aWFsQ2FyZHMiLCJwcm9maWxlIiwic2V0VXNlckluZm8iLCJzZXRVc2VyQXZhdGFyIiwicmV2ZXJzZSIsImNhcmRzIiwicmVuZGVySXRlbXMiLCJlcnIiLCJjb25zb2xlIiwibG9nIiwiYWRkSXRlbSIsImNyZWF0ZU5ld0NhcmQiLCJwb3B1cEVkaXRQcm9maWxlIiwicmVuZGVyTG9hZGluZyIsInVwZGF0ZVVzZXJJbmZvIiwic2V0RGF0YUlucHV0c1Byb2ZpbGUiLCJzZXRFdmVudExpc3RlbmVycyIsIm9wZW4iLCJwcm9maWxlVmFsaWRhdG9yIiwicmVzZXRWYWxpZGF0aW9uIiwicG9wdXBFZGl0VXNlckF2YXRhciIsInVwZGF0ZUF2YXRhciIsImF2YXRhclZhbGlkYXRvciIsInBvcHVwQWRkQ2FyZCIsInNlbmRDYXJkIiwiY2FyZCIsImFkZENhcmRWYWxpZGF0b3IiLCJwb3B1cERlbGV0ZUNhcmQiLCJwb3B1cFZpZXdJbWFnZSIsImhhbmRsZVN1Ym1pdENvbmZpcm0iLCJkZWxldGVDYXJkIiwiY3JlYXRlQ2FyZCIsImVuYWJsZVZhbGlkYXRpb24iXSwic291cmNlUm9vdCI6IiJ9