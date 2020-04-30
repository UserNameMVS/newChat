"use strict";

import { serverURL } from "./config.js";

export const apiRequest = async (apiPath, config, params) => {
  try {
    let res = await fetch(serverURL + apiPath + params, config);
    if (res.status !== 200) {
      throw new SyntaxError(data.error);
    }
    return await res.json();
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
  return await apiRequest(apiPath, config, params);
};

export const getDataMessages = async () => {
  const apiPath = "/api/messages?";
  const config = {
    method: "GET",
  };
  return await apiRequest(apiPath, config);
};

// getDataMessages().then(data => {
//   let dataMessages = data.messages;
//   for(let i = 0; i < dataMessages.length; i++) {
//     console.log(dataMessages[i])
//   }
//   console.log(data.messages.slice(0,10))
// })