'use strict';

import {
  messageList,
  formInputSendMessage,
  inputMessage,
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
import { getMessages } from './apiClient.js';

export async function addMessagesToChat(count) {
  const data = await getMessages(count);
  const { messages } = data;
  let currentScroll = chatContent.scrollHeight;
  for(let i = 0; i < messages.length; i++) {
      const argsMessage = {
        chatname: messages[i].chatname,
        message: messages[i].message,
        username: messages[i].username,
        time: messages[i].createdAt,
        status: true
      }
      const message = new Message(argsMessage);
      messageList.prepend(message.message);
  }
  if(count === undefined) {
    chatContent.scrollTop = chatContent.scrollHeight - chatContent.clientHeight;
  } else {
    chatContent.scrollTop = chatContent.scrollHeight - currentScroll;
  }
}

chatContent.addEventListener('scroll', chatContentScroll);

function chatContentScroll() {
  if(!getCookie('at')) {
    document.location.reload();
  } else if (chatContent.scrollTop === 0) {
    addMessagesToChat(countDownloadMessages())
  }
}

function downloadedMessages() {
  let count  = 0;
  return function () {
    return count += 20;
  }
}

let countDownloadMessages = downloadedMessages();

formInputSendMessage.addEventListener('submit', submitFormHandler);

function submitFormHandler(e) {
  e.preventDefault();
  if (!getCookie('at')) {
    document.location.reload();
  }
  if (validTextMessage(inputMessage.value)) {
    const argsMessage = {
      chatname: getCookie('chatname'),
      message: inputMessage.value,
      username: getCookie('username'),
      id: true
    }
    const message = new Message(argsMessage);
    messageList.append(message.message);
    sendMessage(inputMessage.value, getCookie('id'));
    inputMessage.clear();
  }
}

linkToSetting.addEventListener('click', linkToSettingHandler);

function linkToSettingHandler() {
  settingsPage.classList.remove('hide');
}

logOutBtn.addEventListener('click', logOutBtnHandler);

function logOutBtnHandler() {
  deleteAllCookies();
  authPage.classList.remove('hide');
}