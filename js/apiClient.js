"use strict";

import { serverURL } from "./config.js";
import { inputLogin, inputPassword } from "./uiElements.js";

export const apiRequest = async (apiPath, config, params) => {
  try {
    let res = await fetch(serverURL + apiPath + params, config);
    let data = await res.json();
    return data;
  } catch (err) {
    console.error("Ошибка: ", err);
  }
};

export const getUser = async (userName) => {
  let params = `username=${userName}`;
  const apiPath = "/api/user?";
  const config = {
    method: "GET",
  };
  console.log(await apiRequest(apiPath, config, params));
};

// getUser("vlad");

export const createUser = async (userName, userPassword) => {
  let params = `username=${userName}`;
  const apiPath = "/api/user?";
  const payload = {
    username: userName,
    password: userPassword,
  };
  const config = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  console.log(await apiRequest(apiPath, config, params));
};

// createUser("testUser", "ant555");

export const authLoginAndPassword = async (userName, userPassword) => {
  const apiPath = "/api/user/auth?";
  const payload = {
    username: userName,
    password: userPassword,
  };
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }
  let data = await apiRequest(apiPath, config);
  const token = data.token;
  console.log(token) //return token
}

authLoginAndPassword("testUser", "ant555")

function checkValidationLogin() {
  let loginUser = inputLogin.value;
  loginUser = loginUser.trim();
  if (loginUser.length < 2) {
    console.log("Длина имени пользователя должна быть не менее 2-х символов");
  }
}

function checkValidationLPassword() {
  let passwordUser = inputPassword.value;
  passwordUser = passwordUser.trim();
  if (passwordUser.length < 4) {
    console.log("Длина пароля должна быть не менее 4-х символов");
  }
}