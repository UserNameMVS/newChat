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