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
    this.message.querySelector('.template__chat-message-name').textContent = this.userName;
    this.message.querySelector('.template__chat-message-text').textContent = this.textMessage;
    this.message.querySelector('.template__chat-message-time').textContent = currentTime();
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

function checkValidationTextMessage () {
  let textMessage = inputMessage.value;
  textMessage = textMessage.trim();
  if(textMessage) {
    return inputMessage.value = textMessage;
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

formInputSendMessage.addEventListener('submit', function(e){
  e.preventDefault();
  if(checkValidationTextMessage()) {
    sendMessage(inputUserName.value, inputMessage.value)
  }
});