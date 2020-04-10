'use strict';

import {
  messageList,
  formInputSendMessage,
  inputUserName,
  inputMessage,
  templateMessage
} from "./uiElements.js";
import { sendMessage } from "./controller.js";
export class Message {
  constructor(userName, textMessage) {
    this.userName = userName;
    this.textMessage = textMessage;
    this.message = templateMessage.cloneNode(true);
    this.message.querySelector('#message-user-name').textContent = this.userName;
    this.message.querySelector('#message-text').textContent = this.textMessage;
    this.message.querySelector('#message-time').textContent = currentTime();
    if(userName === inputUserName.value) {
      this.message.classList.add('template__chat-message--outgoing');
    } else {
      this.message.classList.add('template__chat-message--incoming');
    }
  }
  addMessage() {
    messageList.appendChild(this.message);
  }
}

function isValidTextMessage(value) {
  value = value.trim();
  if(value) {
    return inputMessage.value = value;
  }
}

function currentTime () {
  let currentDate = new Date();
  let currentHour = addZeroFormatTime(currentDate.getHours());
  let currentMinutes = addZeroFormatTime(currentDate.getMinutes());

  return currentHour + ":" + currentMinutes;
}

function addZeroFormatTime(value) {
  if (value < 10) value = '0' + value;
  return value;
}

formInputSendMessage.addEventListener('submit', submitFormHadler);

function submitFormHadler(e) {
  e.preventDefault();
  if(isValidTextMessage(inputMessage.value)) {
    sendMessage(inputUserName.value, inputMessage.value)
  }
}