'use strict';

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

import "./client.js";
import "./controller.js";
import "./chatView.js";
import "./config.js";

