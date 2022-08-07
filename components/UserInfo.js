export default class UserInfo {
  constructor({ profileName, profileDescription }) {
    this._name = document.querySelector(profileName);
    this._info = document.querySelector(profileDescription);
  };

  getUserInfo() {
    this._userData = {
      userName: this._name.textContent,
      userInfo: this._info.textContent
    }

    return this._userData;
  };

  setUserInfo({ name, info }) {
    this._name.textContent = name;
    this._info.textContent = info;
  };
};
