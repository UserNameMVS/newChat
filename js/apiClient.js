"use strict";

import { serverURL } from "./config.js";
import {
  chatPage,
  inputLoginAccount,
  inputPasswordAccount,
  logOutBtn,
  authPage,
  linkToAccount,
  accountPage,
  linkToAuth,
  btnCreateAccount,
  inputLoginAuth,
  inputPasswordAuth,
  authButton,
  linkToSetting,
  settingsPage,
  settingInput,
  settingBtn,
  closeBtn,
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

export const getUser = (username) => {
  const apiPath = "/api/user?";
  const config = {
    method: "GET",
  };
  let params = `username=${username}`;
  return apiRequest(apiPath, config, params);
};

// getUser("testUser").then(data => console.log(data))

function addUser(username, password) {
  checkValidLogin(username);
  checkValidPassword(password);
  if (checkValidLogin && checkValidPassword) {
    username = checkValidLogin(username);
    password = checkValidPassword(password);
    createUser(username, password);
  }
}

btnCreateAccount.addEventListener("click", function () {
  let username = inputLoginAccount.value;
  let password = inputPasswordAccount.value;
  addUser(username, password).then(() => authUser(username, password))
});

export const createUser = (username, password) => {
  let params = `username=${username}`;
  const apiPath = "/api/user?";
  const payload = {
    username,
    password,
  };
  const config = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  apiRequest(apiPath, config, params);
};

function authUser(username, password) {
  deleteAllCookies();
  authLoginAndPassword(username, password)
  .then((data) => {
    setCookie("chatname", data.msg.chatname, { secure: true });
    setCookie("token", data.token, { secure: true });
    if (data.token === getCookie("token")) {
      inputLoginAuth.value = "";
      inputPasswordAuth.value = "";
      authPage.classList.add("hide");
      chatPage.classList.remove("hide");
    }
  })
}

authButton.addEventListener("click", function() {
  let username = inputLoginAuth.value;
  let password = inputPasswordAuth.value;
  authUser(username, password);
});

export const authLoginAndPassword = (username, password) => {
  const apiPath = "/api/user/auth?";
  const payload = {
    username,
    password,
  };
  const config = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  return apiRequest(apiPath, config);
};

export const changeUserName = (chatname) => {
  const apiPath = "/api/user";
  const params = "";
  const payload = {
    chatname
  };
  const config = {
    method: "PATCH",
    headers: {
      "Authorization": `Bearer ${getCookie('token')}`,
      "Content-Type": "application/json",
    },

    body: JSON.stringify(payload),
  };

  return apiRequest(apiPath, config, params);
}


settingBtn.addEventListener('click', function(){
  changeUserName(settingInput.value)
    .then((data) => console.log(data))
})

logOutBtn.addEventListener("click", function () {
  deleteAllCookies();
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

closeBtn.addEventListener("click", function() {
  closeBtn.parentNode.parentNode.classList.add("hide");
})

linkToSetting.addEventListener("click", function () {
  settingsPage.classList.remove("hide");
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

export function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : "undefined";
}

function deleteCookie(name) {
  setCookie(name, "", {
    "max-age": -1,
  });
}

function deleteAllCookies() {
  var cookies = document.cookie.split(";");

  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    var eqPos = cookie.indexOf("=");
    var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
    document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
  }
}