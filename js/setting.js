'use strict';

import { apiRequest } from './apiClient.js';
import { settingForm, settingInput, closeBtn } from './uiElements.js';
import { setCookie, getCookie } from './cookie.js';

settingForm.addEventListener('submit', submitSettingForm);

function submitSettingForm(e) {
  e.preventDefault();
  changeChatName(settingInput.value).then(({ chatname }) => {
    setCookie('chatname', chatname, { secure: true });
    document.location.reload();
  });
}

async function changeChatName(chatname) {
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
  return await apiRequest(apiPath, config);
}

closeBtn.addEventListener('click', function () {
  closeBtn.parentNode.parentNode.classList.add('hide');
});