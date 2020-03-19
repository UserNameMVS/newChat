'use strict';

import { sendMessage } from "./controller.js";

export const messageList = document.querySelector('.chat__content');
export const inputUserName = document.querySelector('.chat__user-name');
export const formInputSendMessage = document.querySelector('.chat__form');
export const inputMessage = formInputSendMessage.querySelector('.chat__form-input');
export const templateMessageContent = document.querySelector('#template__message').content;
export const templateNewMessage = templateMessageContent.querySelector('.template__chat-message');
export let newMessage = templateNewMessage.cloneNode(true);
export let userNameNewMessage = newMessage.querySelector('.template__chat-message-name');
export let textNewMessage = newMessage.querySelector('.template__chat-message-text');
export let timeNewMessage = newMessage.querySelector('.template__chat-message-time');

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

