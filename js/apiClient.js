'use strict';

import { serverURL } from './config.js';
import { getCookie } from './cookie.js';

export const apiRequest = async (apiPath, config, params = '') => {
  try {
    let res = await fetch(serverURL + '/api/' + apiPath + params, config);
    console.log(res)
    // if (res.status === 200) {
    //   return await res.json();
    // }
    return await res.json();
  } catch (err) {
    console.log('Ошибка: ', err.message);
  }
};

export const getUser = username => {
  const apiPath = 'user';
  const config = {
    method: 'GET',
  };
  let params = `?username=${username}`;
  return apiRequest(apiPath, config, params);
};

export const getMessages = (uplouded = 0) => {
  const apiPath = `messages?offset=${uplouded}`;
  const config = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getCookie('at')}`,
      'Content-Type': 'application/json',
    },
  };
  return apiRequest(apiPath, config);
};