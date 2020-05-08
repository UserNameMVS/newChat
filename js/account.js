'use strict';

import { accountForm, inputLoginAccount, inputPasswordAccount, authPage, linkToAuth, accountPage } from './uiElements.js';
import { isValidLogin, isValidPassword } from './validations.js';
import { apiRequest, getUser } from './apiClient.js';
import { authUser } from './auth.js';

accountForm.addEventListener('submit', submitAccountForm);

function submitAccountForm(e) {
  e.preventDefault();
  let username = inputLoginAccount.value;
  let password = inputPasswordAccount.value;
  addUser(username, password).then(() => authUser(username, password));
}

async function addUser(username, password) {
  isValidLogin(username);
  isValidPassword(password);
  if (isValidLogin && isValidPassword) {
    username = isValidLogin(username);
    password = isValidPassword(password);
    await createUser(username, password);
    return await getUser(username);
  }
}

async function createUser(username, password) {
  let params = `username=${username}`;
  const apiPath = '/api/user?';
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
  return await apiRequest(apiPath, config, params);
}

linkToAuth.addEventListener('click', function(){
    authPage.classList.remove('hide');
    accountPage.classList.add('hide');
});