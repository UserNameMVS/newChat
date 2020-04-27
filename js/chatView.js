"use strict";

import {
  formInputSendMessage,
  inputMessage,
  chatPage,
  authPage,
  logOutBtn,
  settingsPage,
  linkToSetting
} from "./uiElements.js";
import { Message } from "./Message.js";
import { sendMessage } from "./controller.js";
import { getCookie, deleteAllCookies } from "./cookie.js";
import { isValidTextMessage } from "./validations.js";

formInputSendMessage.addEventListener("submit", submitFormHadler);

export function countMessage() {
  let count = 1;
  return function () {
    return count++;
  };
}

let countCreateMessage = countMessage();

export function submitFormHadler(e) {
  e.preventDefault();
  if(!getCookie("token")) {
    chatPage.classList.add('hide');
    authPage.classList.remove('hide');
  }
  if (isValidTextMessage(inputMessage.value)) {
    let newMessage = createMessage(inputMessage.value);
    newMessage.addMessageToChat();
    newMessage.message.id = `messageId_${countCreateMessage()}`
    sendMessage(getCookie("chatname"), inputMessage.value);
  }
}

function createMessage(textMessage) {
  let newMessage = new Message(getCookie("chatname"), textMessage);
  return newMessage;
}

linkToSetting.addEventListener("click", function () {
  settingsPage.classList.remove("hide");
});

logOutBtn.addEventListener("click", function () {
  deleteAllCookies();
  authPage.classList.remove("hide");
});