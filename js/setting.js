'use strict';

import { apiRequest } from "./apiClient.js";
import { settingsPage, settingForm, settingInput, closeBtn } from "./uiElements.js";
import { setCookie, getCookie } from "./cookie.js";

settingForm.addEventListener("submit", submitSettingForm);

function submitSettingForm(e) {
  e.preventDefault();
  changeChatName(settingInput.value).then((data) => {
    setCookie("chatname", data.chatname, { secure: true });
    settingInput.value = "";
    settingsPage.classList.add("hide");
  });
}

async function changeChatName(chatname) {
  const apiPath = "/api/user";
  const params = "";
  const payload = {
    chatname,
  };
  const config = {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
      "Content-Type": "application/json",
    },

    body: JSON.stringify(payload),
  };
  return await apiRequest(apiPath, config, params);
}

closeBtn.addEventListener("click", function () {
  closeBtn.parentNode.parentNode.classList.add("hide");
});