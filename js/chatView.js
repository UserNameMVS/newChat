"use strict";

import {
  messageList,
  formInputSendMessage,
  inputMessage,
  templateMessage,
  chatPage,
  authPage,
} from "./uiElements.js";
import { sendMessage } from "./controller.js";
import { getCookie } from "./apiClient.js";
export class Message {
  constructor(userName, textMessage) {
    this.userName = userName;
    this.textMessage = textMessage;
    this.message = templateMessage.cloneNode(true);
    this.message.querySelector(
      "#message-user-name"
    ).textContent = this.userName;
    this.message.querySelector("#message-text").textContent = this.textMessage;
    this.message.querySelector("#message-time").textContent = currentTime();
    if (userName === getCookie("chatname")) {
      this.message.classList.add("chat-message--outgoing");
    } else {
      this.message.classList.add("chat-message--incoming");
    }
  }
  addMessageToChat() {
    messageList.appendChild(this.message);
  }
}

function isValidTextMessage(value) {
  value = value.trim();
  if (value) {
    return (inputMessage.value = value);
  }
}

function currentTime() {
  let currentDate = new Date();
  let currentHour = addZeroFormatTime(currentDate.getHours());
  let currentMinutes = addZeroFormatTime(currentDate.getMinutes());

  return currentHour + ":" + currentMinutes;
}

function addZeroFormatTime(value) {
  if (value < 10) value = "0" + value;
  return value;
}

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