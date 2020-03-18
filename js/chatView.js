'use strict';

const messageList = document.querySelector('.chat__content');
const inputUserName = document.querySelector('.chat__user-name');
const formInputSendMessage = document.querySelector('.chat__form');
const inputMessage = formInputSendMessage.querySelector('.chat__form-input');
const templateMessageContent = document.querySelector('#template__message').content;
const templateNewMessage = templateMessageContent.querySelector('.template__chat-message');

function createNewMessage (userName, textMessage) {
  let newMessage = templateNewMessage.cloneNode(true);

  let userNameNewMessage = newMessage.querySelector('.template__chat-message-name');
  userNameNewMessage.textContent = userName + ": ";
  if(!userName) userNameNewMessage.textContent = "Anonymous: " ;

  let textNewMessage = newMessage.querySelector('.template__chat-message-text');
  textNewMessage.textContent = textMessage;

  let timeMessage = newMessage.querySelector('.template__chat-message-time');
  timeMessage.textContent = addZeroFormatTime( currentTime() );

  return newMessage;
}

function sendMessage (userName, textMessage) {
  messageList.appendChild(createNewMessage(userName, textMessage));
  inputMessage.value = "";
}

function currentTime () {
  let currentDate = new Date();
  let currentHour = currentDate.getHours();
  let currentMinutes = currentDate.getMinutes();

  return currentHour + ":" + currentMinutes;
}

function addZeroFormatTime(value) {
  if (value < 10) {
      value = '0'+ value;
  }
  
  return value;
}

formInputSendMessage.addEventListener('submit', function(e){
  e.preventDefault();
  let userNameValue = inputUserName.value;
  let messageValue = inputMessage.value;
  sendMessage(userNameValue, messageValue);
});