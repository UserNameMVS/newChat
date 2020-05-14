'use strict';

import {
  messageList,
  formInputSendMessage,
  inputMessage,
  chatPage,
  chatContent,
  authPage,
  logOutBtn,
  settingsPage,
  linkToSetting,
} from './uiElements.js';
import { Message } from './Message.js';
import { sendMessage } from './controller.js';
import { setCookie, getCookie, deleteAllCookies } from './cookie.js';
import { isValidTextMessage } from './validations.js';
import { currentTime, currentTimeMessage } from './currentTime.js';
import { getDataMessages } from './apiClient.js';

export function addDataMessagesToChat(count) {
  getDataMessages(count).then(data => {
    const { messages } = data;
    let currentScroll = chatContent.scrollHeight;
    for(let i = 0; i < messages.length; i++) {
        let newMessage = new Message(messages[i].chatname, messages[i].message);
        if(messages[i].username === getCookie('username')) {
          newMessage.message.classList.add('chat-message--outgoing')
          let status = document.createElement('span');
          status.className = 'chat-message__status';
          status.innerHTML = 'Доставлено';
          newMessage.message.prepend(status);
        } else {
          newMessage.message.classList.add('chat-message--incoming')
        }
        newMessage.message.querySelector('#message-time').textContent = (messages[i].createdAt.slice(11, 16));
        messageList.prepend(newMessage.message);
    }
    if(count === undefined) {
      chatContent.scrollTop = chatContent.scrollHeight - chatContent.clientHeight;
    } else {
      chatContent.scrollTop = chatContent.scrollHeight - currentScroll;
    }
  })
}

chatContent.addEventListener('scroll', function() {
  if(chatContent.scrollTop === 0) {
    addDataMessagesToChat(countDownloadMessages())
  }
})

function downloadedMessages() {
  let count  = 0;
  return function () {
    return count += 20;
  }
}

let countDownloadMessages = downloadedMessages();

formInputSendMessage.addEventListener('submit', submitFormHadler);

export function submitFormHadler(e) {
  e.preventDefault();
  if (!getCookie('at')) {
    chatPage.classList.add('hide');
    authPage.classList.remove('hide');
  }
  if (isValidTextMessage(inputMessage.value)) {
    let newMessage = new Message(getCookie('chatname'), inputMessage.value);
    newMessage.message.classList.add('chat-message--outgoing');
    const messageId = addIdMessage(getCookie('username'));
    newMessage.message.id = messageId;
    newMessage.message.querySelector('#message-time').textContent = currentTime();
    newMessage.addMessageToChat();
    sendMessage(inputMessage.value, messageId);
  }
}

function addIdMessage(userName) {
  const id = userName + currentTimeMessage();
  setCookie('id', id);
  return id;
}

linkToSetting.addEventListener('click', function () {
  settingsPage.classList.remove('hide');
});

logOutBtn.addEventListener('click', function () {
  deleteAllCookies();
  authPage.classList.remove('hide');
});