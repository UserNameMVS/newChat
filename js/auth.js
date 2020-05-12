'use strict';

import { apiRequest } from './apiClient.js';
import { setCookie, getCookie } from './cookie.js';
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
import { addDataMessagesToChat } from './chatView.js';

(function isAuth() {
  if (getCookie('at')) {
    authLoginAndPassword(getCookie('username'), getCookie('password'))
      .then(() => {
          addDataMessagesToChat();
          console.log( chatContent.scrollTop + ', ' + chatContent.scrollHeight)
          chatContent.scrollTop = chatContent.scrollHeight;
          showChat();
        }
      );
  }
})();

authForm.addEventListener('submit', submitAuthForm);

function submitAuthForm(e) {
  e.preventDefault();
  authUser(inputLoginAuth.value, inputPasswordAuth.value);
}

export function authUser(username, password) {
  authLoginAndPassword(username, password).then((data) => {
    if (data.token) {
      setCookie('at', data.token, { secure: true });
      setCookie('username', data.username, { secure: true });
      setCookie('chatname', data.chatname, { secure: true });
      setCookie('password', password, { secure: true });
      if (!getCookie('auth')) {
        setCookie('auth', true);
        document.location.reload();
      }
    }
  });
}

export async function authLoginAndPassword(username, password) {
  const apiPath = '/api/user/auth';
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
  return await apiRequest(apiPath, config);
}

function showChat() {
  inputLoginAuth.value = inputPasswordAuth.value = '';
  authPage.classList.add('hide');
  accountPage.classList.add('hide');
  chatPage.classList.remove('hide');
  inputMessage.focus();
}

linkToAccount.addEventListener('click', function () {
  accountPage.classList.remove('hide');
  authPage.classList.add('hide');
});