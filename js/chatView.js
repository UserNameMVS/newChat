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
import { getCookie, deleteAllCookies } from './cookie.js';
import { validTextMessage } from './validations.js';
import { currentTime } from './currentTime.js';
import { getMessages } from './apiClient.js';

export function addMessagesToChat(count) {
  getMessages(count).then(data => {
    const { messages } = data;
    let currentScroll = chatContent.scrollHeight;
    for(let i = 0; i < messages.length; i++) {
        const newMessage = new Message(messages[i].chatname, messages[i].message);
        newMessage.addClass(messages[i].username);
        if(messages[i].username === getCookie('username')) {
          newMessage.addStatus();
        }
        newMessage.addTime(messages[i].createdAt.slice(11, 16));
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
    addMessagesToChat(countDownloadMessages())
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
  if (validTextMessage(inputMessage.value)) {
    const newMessage = new Message(getCookie('chatname'), inputMessage.value);
    newMessage.addClass(getCookie('username'));
    newMessage.addId();
    newMessage.addTime(currentTime());
    messageList.append(newMessage.message);
    sendMessage(inputMessage.value, getCookie('id'));
  }
}

linkToSetting.addEventListener('click', function () {
  settingsPage.classList.remove('hide');
});

logOutBtn.addEventListener('click', function () {
  deleteAllCookies();
  authPage.classList.remove('hide');
});