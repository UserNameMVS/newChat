"use strict";

import { serverURL } from "./config.js";
import {
  inputLoginAccount,
  inputPasswordAccount,
  logOut,
  authPage,
  linkToAccount,
  accountPage,
  linkToAuth,
  btnCreateAccount,
  inputLoginAuth,
  inputPasswordAuth,
  authButton,
} from "./uiElements.js";

export const apiRequest = async (apiPath, config, params) => {
  try {
    let res = await fetch(serverURL + apiPath + params, config);
    let data = await res.json();
    if (res.status == 400) {
      throw new SyntaxError(data.error);
    }
    return data;
  } catch (err) {
    console.log("Ошибка: ", err.message);
  }
};

export const getUser = async (username) => {
  const apiPath = "/api/user?";
  const config = {
    method: "GET",
  };
  let params = `username=${username}`;
  apiRequest(apiPath, config, params).then((data) =>
    data.user.username
  );
};

function addUser() {
  let loginUser = inputLoginAccount.value;
  let passwordUser = inputPasswordAccount.value;
  checkValidLogin(loginUser);
  checkValidPassword(passwordUser);
  if (checkValidLogin && checkValidPassword) {
    loginUser = checkValidLogin(loginUser);
    passwordUser = checkValidPassword(passwordUser);
    createUser(loginUser, passwordUser);
  }
}

btnCreateAccount.addEventListener("click", addUser);

export const createUser = async (username, password) => {
  let params = `username=${username}`;
  const apiPath = "/api/user?";
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
  apiRequest(apiPath, config, params);
};

function authUser() {
  let username = inputLoginAuth.value;
  let password = inputPasswordAuth.value;
  authLoginAndPassword(username, password)
  .then(() => {
    if(getCookie("token") && getCookie("token") !== "undefined") {
      authPage.classList.add("hide");
    }
  });
}

authButton.addEventListener("click", authUser);

export const authLoginAndPassword = async (username, password) => {
  const apiPath = "/api/user/auth?";
  const payload = {
    username,
    password,
  };
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  apiRequest(apiPath, config).then((data) => {
    setCookie("token", data.token, { secure: true });
  });
};

logOut.addEventListener("click", function () {
  deleteCookie("token");
  authPage.classList.remove("hide");
});

linkToAccount.addEventListener("click", function () {
  authPage.classList.toggle("hide");
  accountPage.classList.toggle("hide");
});

linkToAuth.addEventListener("click", function () {
  accountPage.classList.toggle("hide");
  authPage.classList.toggle("hide");
});

function checkValidLogin(loginUser) {
  loginUser = loginUser.trim();
  if (loginUser.length >= 2) {
    return loginUser;
  }
}

function checkValidPassword(passwordUser) {
  passwordUser = passwordUser.trim();
  if (passwordUser.length >= 4) {
    return passwordUser;
  }
}

function setCookie(name, value, options = {}) {
  options = {
    path: "/",
  };
  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }
  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);
  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }
  document.cookie = updatedCookie;
}

function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function deleteCookie(name) {
  setCookie(name, "", {
    "max-age": -1,
  });
}