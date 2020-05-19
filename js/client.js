'use strict';

import { serverURL } from './config.js';
import { getCookie } from './cookie.js';


export const connectSocket = () => {
  if(getCookie('at')) {
    let socket = io(serverURL, { query: `at=${getCookie('at')}` });
    return socket
  }
}