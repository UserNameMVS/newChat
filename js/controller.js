'use strict';

import { connectSocket } from './client.js';
import { inputMessage, chatContent, messageList } from './uiElements.js';
import { getCookie } from './cookie.js';
import { Message } from './Message.js'


if(getCookie('at')) {
  connectSocket().on('message', function (msg) {
    if(msg.username === getCookie('username')) {
      let message = document.querySelector(`#${msg.messageId}`);
      let status = document.createElement('span');
      status.className = 'chat-message__status';
      status.textContent = 'Доставлено';
      message.prepend(status);
    } else if (!msg.error){
      const newMessage = new Message(msg.chatname, msg.message);
      newMessage.addClass();
      console.log(newMessage)
      messageList.append(newMessage.message);
    }
    console.log(msg)
    chatContent.scrollTop = chatContent.scrollHeight - chatContent.clientHeight;
  });
}

export function sendMessage(textMessage, id) {
  connectSocket().emit('message', { message: textMessage, messageId: id});
  inputMessage.clear();
}