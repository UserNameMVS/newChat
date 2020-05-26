'use strict';

import { apiRequest } from './apiClient.js';
import { setCookie, getCookie } from './cookie.js';
// import { getSocket } from './client.js';
import {
  authPage,
  inputLoginAuth,
  inputPasswordAuth,
  chatPage,
  inputMessage,
  authForm,
  accountPage,
  linkToAccount,
  chatContent
} from './uiElements.js';
import { addMessagesToChat } from './chatView.js';

(function autoAuth() {
  if (getCookie('at')) {
    addMessagesToChat();
    chatContent.scrollTop = chatContent.scrollHeight;
    chatPage.classList.remove('hide');
    authPage.classList.add('hide');
    accountPage.classList.add('hide');
    inputMessage.focus();
  }
})();

authForm.addEventListener('submit', submitAuthForm);

function submitAuthForm(e) {
  e.preventDefault();
  authUser(inputLoginAuth.value, inputPasswordAuth.value);
}

export async function authUser(username, password) {
  const data = await authRequest(username, password);
  if (data.token) {
    setCookie('at', data.token);
    setCookie('username', data.username);
    setCookie('chatname', data.chatname);
    document.location.reload();
  }
}

export function authRequest(username, password) {
  const apiPath = 'user/auth';
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
  return apiRequest(apiPath, config);
}

linkToAccount.addEventListener('click', linkToAccountHandler);

function linkToAccountHandler () {
  accountPage.classList.remove('hide');
  authPage.classList.add('hide');
}