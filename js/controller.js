'use strict';

import { connectSocket } from './client.js';
import { chatContent, messageList, templateStatus } from './uiElements.js';
import { getCookie } from './cookie.js';
import { Message } from './Message.js';

if (getCookie('at')) {
  connectSocket().on('message', function (msg) {
    if (msg.username === getCookie('username')) {
      const message = document.querySelector(`#${msg.messageId}`);
      const status = templateStatus.cloneNode(true);
      message.prepend(status);
    } else {
      const argsMessage = {
        chatname: msg.chatname,
        message: msg.message,
        username: msg.username,
      };
      const message = new Message(argsMessage);
      messageList.append(message.message);
    }
    chatContent.scrollTop = chatContent.scrollHeight - chatContent.clientHeight;
  });
}

export function sendMessage(message, messageId) {
  connectSocket().emit('message', { message, messageId });
}
