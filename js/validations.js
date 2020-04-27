'use strict';

import { inputMessage } from "./uiElements.js";

export function isValidLogin(loginUser) {
  loginUser = loginUser.trim();
  if (loginUser.length >= 2) {
    return loginUser;
  }
}

export function isValidPassword(passwordUser) {
  passwordUser = passwordUser.trim();
  if (passwordUser.length >= 4) {
    return passwordUser;
  }
}

export function isValidTextMessage(value) {
  value = value.trim();
  if (value) {
    return (inputMessage.value = value);
  }
}