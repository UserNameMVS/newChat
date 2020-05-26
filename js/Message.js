'use strict';

import { templateMessage, templateStatus } from './uiElements.js';
import { setCookie, getCookie } from './cookie.js';
import { generateNumbers, getTimeMessage, timeSendMessage } from './time.js';

export class Message {
  constructor(param) {
    this.message = templateMessage.cloneNode(true);
    this.message.querySelector('.chat-message__name').textContent = param.chatname;
    this.message.querySelector('.chat-message__text').textContent = param.message;
    if (param.username === getCookie('username')) {
      this.message.classList.add('chat-message--outgoing');
    } else {
      this.message.classList.add('chat-message--incoming');
    }
    if(param.time) {
      this.message.querySelector('.chat-message__time').textContent = getTimeMessage(param.time);
    } else {
      this.message.querySelector('.chat-message__time').textContent = timeSendMessage();
    }
    if(param.status && param.username === getCookie('username')) {
      const status = templateStatus.cloneNode(true);
      this.message.prepend(status);
    }
    if (param.id) {
      const id = param.username + generateNumbers();
      this.message.id = id;
      setCookie('id', id);
    }
  }
}