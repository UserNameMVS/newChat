'use strict';

export function validLogin(loginUser) {
  loginUser = loginUser.trim();
  if (loginUser.length >= 2) {
    return loginUser;
  }
}

export function validPassword(passwordUser) {
  passwordUser = passwordUser.trim();
  if (passwordUser.length >= 4) {
    return passwordUser;
  }
}

export function validTextMessage(value) {
  value = value.trim();
  if (value) {
    return value;
  }
}