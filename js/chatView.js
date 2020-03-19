'use strict';

import {
  formInputSendMessage,
  inputUserName,
  inputMessage,
  templateNewMessage
} from "./uiElements.js";

import { sendMessage } from "./controller.js";

export function createNewMessage (userName, textMessage) {
  let newMessage = templateNewMessage.cloneNode(true);
  
  let userNameNewMessage = newMessage.querySelector('.template__chat-message-name');
  userNameNewMessage.textContent = userName;

  let textNewMessage = newMessage.querySelector('.template__chat-message-text');
  textNewMessage.textContent = textMessage;
  
  let timeNewMessage = newMessage.querySelector('.template__chat-message-time');
  timeNewMessage.textContent = currentTime();
  
  return newMessage;
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

  let userNameValue = inputUserName.value;
  userNameValue ? userNameValue += ": " : userNameValue = "Anonymous: ";
  let messageValue = inputMessage.value;

  sendMessage(userNameValue, messageValue);
});

