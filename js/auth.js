'use strict';

import { apiRequest } from "./apiClient.js";
import { setCookie, getCookie, deleteAllCookies } from "./cookie.js";
import { authPage, inputLoginAuth, inputPasswordAuth, chatPage, inputMessage, authForm, accountPage, linkToAccount } from "./uiElements.js";

authForm.addEventListener("submit", submitAuthForm);

function submitAuthForm(e) {
  e.preventDefault();
  let username = inputLoginAuth.value;
  let password = inputPasswordAuth.value;
  authUser(username, password);
}

export function authUser(username, password) {
  deleteAllCookies();
  authLoginAndPassword(username, password).then((data) => {
    setCookie("username", data.username, { secure: true });
    setCookie("chatname", data.chatname, { secure: true });
    setCookie("password", password, { secure: true });
    setCookie("token", data.token, { secure: true });
    if(data.token) {
      inputLoginAuth.value = inputPasswordAuth.value = "";
      authPage.classList.add("hide");
      accountPage.classList.add("hide");
      chatPage.classList.remove("hide");
      inputMessage.focus();
    }
  });
}

async function authLoginAndPassword(username, password) {
  const apiPath = "/api/user/auth?";
  const payload = {
    username,
    password,
  };
  const config = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  return await apiRequest(apiPath, config);
}

linkToAccount.addEventListener("click", function() {
  accountPage.classList.remove("hide");
  authPage.classList.add("hide");  
});

(function isAuth() {
  const apiPath = "/api/user/auth?";
  const payload = {
    username: `${getCookie("username")}`,
    password: `${getCookie("password")}`,
  };
  const config = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  apiRequest(apiPath, config).then((data) => {
    try {
      if (data.token) {
        inputLoginAuth.value = "";
        inputPasswordAuth.value = "";
        authPage.classList.add("hide");
        chatPage.classList.remove("hide");
        inputMessage.focus();
      }
    } catch (err) {
      console.log("Ошибка авторизации: ", err.message);
    }
  });
})();