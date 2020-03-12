'use strict';

const chatContent = document.querySelector('.chat__content');
const chatUserName = document.querySelector('.chat__user-name');
const chatForm = document.querySelector('.chat__form');
const chatFormInput = chatForm.querySelector('.chat__form-input');
const templateMessage = document.querySelector('#template__message').content;
const chatMessage = templateMessage.querySelector('.template__chat-message');


chatForm.addEventListener('submit', function(e){
  e.preventDefault();
  let inputUserName = chatUserName.value;
  let textChatFormInput = chatFormInput.value;

  let newMessage = chatMessage.cloneNode(true);
  
  let userNameMassege = newMessage.querySelector('.template__chat-message-name');
  if(!inputUserName) {
    userNameMassege.textContent = "Anonymous: "
  } else {
    userNameMassege.textContent = inputUserName + ": ";
  }

  let chatMessageText = newMessage.querySelector('.template__chat-message-text');
  chatMessageText.textContent = textChatFormInput;
  
  chatContent.appendChild(newMessage);

  chatFormInput.value = "";
});




