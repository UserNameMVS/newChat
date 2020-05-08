'use strict';

import { serverURL } from './config.js';
import { getCookie } from './cookie.js';

export const apiRequest = async (apiPath, config, params) => {
  if (params === undefined) {
    params = '';
  }
  try {
    let res = await fetch(serverURL + apiPath + params, config);
    if (res.status !== 200) {
      throw new SyntaxError(data.error);
    }
    return await res.json();
  } catch (err) {
    console.log('Ошибка: ', err.message);
  }
};

export const getUser = async (username) => {
  const apiPath = '/api/user?';
  const config = {
    method: 'GET',
  };
  let params = `username=${username}`;
  return await apiRequest(apiPath, config, params);
};

export const getDataMessages = async () => {
  const apiPath = '/api/messages';
  const config = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${getCookie('at')}`,
      'Content-Type': 'application/json',
    },
  };
  return await apiRequest(apiPath, config);
};