'use strict';

import {
  formInputSendMessage,
  newMessage,
  inputUserName,
  inputMessage,
  userNameNewMessage, 
  textNewMessage,
  timeNewMessage,
} from "./uiElements.js";

import { sendMessage } from "./controller.js";

export function createNewMessage (userName, textMessage) {
  
  userNameNewMessage.textContent = userName + ": ";
  if(!userName) userNameNewMessage.textContent = "Anonymous: " ;
  
  textNewMessage.textContent = textMessage;
  
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
  if (value < 10) {
      value = '0' + value;
  }
  
  return value;
}

formInputSendMessage.addEventListener('submit', function(e){
  e.preventDefault();
  let userNameValue = inputUserName.value;
  if(!userNameValue) userNameValue = "Anonymous";
  let messageValue = inputMessage.value;
  sendMessage(userNameValue, messageValue);
});

