'use strict';

import { apiRequest } from './apiClient.js';
import { settingForm, settingInput, closeBtn } from './uiElements.js';
import { setCookie, getCookie } from './cookie.js';

settingForm.addEventListener('submit', settingFormHandler);

function settingFormHandler(e) {
  e.preventDefault();
  changeChatName(settingInput.value).then(({ chatname }) => {
    setCookie('chatname', chatname, { secure: true });
    document.location.reload();
  });
}

function changeChatName(chatname) {
  const apiPath = 'user';
  const payload = {
    chatname,
  };
  const config = {
    method: 'PATCH',
    headers: {
      Authorization: `Bearer ${getCookie('at')}`,
      'Content-Type': 'application/json',
    },

    body: JSON.stringify(payload),
  };
  return apiRequest(apiPath, config);
}

closeBtn.addEventListener('click', closeBtnHandler);

function closeBtnHandler() {
  closeBtn.parentNode.parentNode.classList.add('hide');
}