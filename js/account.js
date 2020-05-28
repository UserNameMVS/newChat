'use strict';

import { accountForm, inputLoginAccount, inputPasswordAccount, authPage, linkToAuth, accountPage } from './uiElements.js';
import { validLogin, validPassword } from './validations.js';
import { apiRequest, getUser } from './apiClient.js';
import { authUser } from './auth.js';

accountForm.addEventListener('submit', submitAccountForm);

function submitAccountForm(e) {
  e.preventDefault();
  let username = inputLoginAccount.value;
  let password = inputPasswordAccount.value;
  addUser(username, password).then(() => authUser(username, password));
}

function addUser(username, password) {
  validLogin(username);
  validPassword(password);
  if (validLogin && validPassword) {
    username = validLogin(username);
    password = validPassword(password);
    createUser(username, password);
    return getUser(username);
  }
}

function createUser(username, password) {
  const params = `?username=${username}`;
  const apiPath = 'user';
  const payload = {
    username,
    password,
  };
  const config = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };
  return apiRequest(apiPath, config, params);
}

linkToAuth.addEventListener('click', linkToAuthHandler);

function linkToAuthHandler() {
  authPage.classList.remove('hide');
  accountPage.classList.add('hide');
}