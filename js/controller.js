'use strict';

import { socket } from './client.js';
import { inputMessage } from './uiElements.js';
import { getCookie } from './cookie.js';
import { Message } from './Message.js'

socket.on('message', function (msg) {
  if(msg.username === getCookie('username')) {
    let message = document.querySelector(`#${msg.messageId}`);
    let status = document.createElement('span');
    status.className = 'chat-message__status';
    status.innerHTML = 'Доставлено';
    message.prepend(status);
  } else if (!msg.error){
    const newMessage = new Message(msg.chatname, msg.message);
    newMessage.message.classList.add('chat-message--incoming');
    newMessage.addMessageToChat();
  }
});

export function sendMessage(textMessage, id) {
  socket.emit('message', { message: textMessage, messageId: id});
  inputMessage.clear();
}