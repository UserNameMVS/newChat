"use strict";

import { serverURL } from "./config.js";

// export const apiRequest = (apiPath, params, config) => {
//   return new Promise(resolve => {
//     let res = fetch(serverURL + apiPath + params, config);
//     resolve(res)
//   }).then(res => console.log(res.json()))
//     .catch(err => console.error("Ошибка: ", err));
// };

export const apiRequest = async (apiPath, params, config) => {
  try {
    let res = await fetch(serverURL + apiPath + params, config);
    let data = res.json();
    console.log(data); //return data
  } catch (err) {
    console.error("Ошибка: ", err);
  }
};

apiRequest("/api/user?", "username=Jonh", { method: "GET" });

export const getUser = userName => {
  let params = `username=${userName}`;
  const apiPath = "/api/user?";
  const config = {
    method: "GET"
  };
  return apiRequest(apiPath, params, config);
};

getUser("John");

export const createUser = (userName, userPassword) => {
  let params = `username=${userName}`;
  const apiPath = "/api/user?";
  const payload = {
    username: userName,
    password: userPassword
  }
  const config = {
    method: "POST",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  };
  return apiRequest(apiPath, params, config);
};

// createUser("vlad", "ant555");

