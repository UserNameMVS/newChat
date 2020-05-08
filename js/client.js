'use strict';

import { serverURL } from './config.js';
import { getCookie } from './cookie.js';

export let socket = io(serverURL, { query: `at=${getCookie('at')}` });