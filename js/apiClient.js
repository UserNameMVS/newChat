"use strict";

import { serverURL } from "./config.js";

export const apiRequest = async (apiPath, params, config) => {
  try {
    let res = await fetch(serverURL + apiPath + params, config);
    let data = await res.json();
    return data;
  } catch (err) {
    console.error("Ошибка: ", err);
  }
};

export const getUser = async userName => {
  let params = `username=${userName}`;
  const apiPath = "/api/user?";
  const config = {
    method: "GET"
  };
  console.log(await apiRequest(apiPath, params, config));
};

// getUser("vlad");

export const createUser = async (userName, userPassword) => {
  let params = `username=${userName}`;
  const apiPath = "/api/user?";
  const payload = {
    username: userName,
    password: userPassword
  }
  const config = {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  };
  console.log(await apiRequest(apiPath, params, config));
};

// createUser("testUser", "ant555");

