'use strict';

import {
  messageList,
  formInputSendMessage,
  inputUserName,
  inputMessage,
  templateNewMessage
} from "./uiElements.js";
import { sendMessage } from "./controller.js";

export function createMessage (userName, textMessage) {
  const newMessage = templateNewMessage.cloneNode(true);
  const userNameNewMessage = newMessage.querySelector('.template__chat-message-name');
  userNameNewMessage.textContent = userName;
  const textNewMessage = newMessage.querySelector('.template__chat-message-text');
  textNewMessage.textContent = textMessage;
  const timeNewMessage = newMessage.querySelector('.template__chat-message-time');
  timeNewMessage.textContent = currentTime();

  return newMessage;
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

export function addMessageToChat (message) {
  messageList.appendChild(message);
}

formInputSendMessage.addEventListener('submit', function(e){
  e.preventDefault();
  if(checkValidationTextMessage()) {
    sendMessage(inputUserName.value, inputMessage.value)
  }
});

