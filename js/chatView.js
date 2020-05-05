'use strict';

import {
  messageList,
  formInputSendMessage,
  inputMessage,
  chatPage,
  authPage,
  logOutBtn,
  settingsPage,
  linkToSetting,
} from "./uiElements.js";
import { Message } from "./Message.js";
import { sendMessage } from "./controller.js";
import { setCookie, getCookie, deleteAllCookies } from "./cookie.js";
import { isValidTextMessage } from "./validations.js";
import { currentTimeMessage } from "./currentTime.js";
import { getDataMessages } from "./apiClient.js";

// getDataMessages().then((data) => {
  // let dataMessages = data.messages;
  // const { messages } = data;
  
  // console.log(messages);
  // for (let i = 0; i < dataMessages.length; i++) {
  //   let message = createMessage(dataMessages[i].chatname, dataMessages[i].message);
  //   message.addMessageToChat();
  // }
  // messageList.scrollTop = Infinity;
// });

formInputSendMessage.addEventListener("submit", submitFormHadler);

export function submitFormHadler(e) {
  e.preventDefault();
  if (!getCookie("at")) {
    chatPage.classList.add("hide");
    authPage.classList.remove("hide");
  }
  if (isValidTextMessage(inputMessage.value)) {
    let newMessage = createMessage(getCookie("chatname"), inputMessage.value);
    const messageId = addIdMessage(getCookie("chatname"));
    newMessage.message.id = messageId;
    newMessage.addMessageToChat();
    sendMessage(inputMessage.value, messageId);
  }
}

function addIdMessage(userName) {
  const id = userName + currentTimeMessage();
  setCookie("id", id);
  return id;
}

export function createMessage(userName, textMessage) {
  let newMessage = new Message(userName, textMessage);
  return newMessage;
}

linkToSetting.addEventListener("click", function () {
  settingsPage.classList.remove("hide");
});

logOutBtn.addEventListener("click", function () {
  deleteAllCookies();
  authPage.classList.remove("hide");
});
