'use strict';

import { templateMessage } from './uiElements.js';
import { setCookie, getCookie } from './cookie.js';
import { currentTimeMessage } from './currentTime.js';

export class Message {
  constructor(userName, textMessage) {
    this.userName = userName;
    this.textMessage = textMessage;
    this.message = templateMessage.cloneNode(true);
    this.message.querySelector(
      '#message-user-name'
    ).textContent = this.userName;
    this.message.querySelector('#message-text').textContent = this.textMessage;
  }
  addClass(user) {
    if(user === getCookie('username')) {
      this.message.classList.add('chat-message--outgoing')
    } else {
      this.message.classList.add('chat-message--incoming')
    }
  }
  addTime(time) {
    this.message.querySelector('#message-time').textContent = time;
  }

  addStatus() {
    const status = document.createElement('span');
    status.className = 'chat-message__status';
    status.textContent = 'Доставлено';
    this.message.prepend(status);
  }

  addId() {
    const id = getCookie('username') + currentTimeMessage();
    this.message.id = id;
    setCookie('id', id);
  }
}