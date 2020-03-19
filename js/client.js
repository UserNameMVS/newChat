'use strict';

import { serverURL } from "./config.js";

export const socket = io(serverURL);