'use strict';

const chatContent = document.querySelector('.chat__content'),
      chatUserName = document.querySelector('.chat__user-name'),
      chatForm = document.querySelector('.chat__form'),
      chatFormInput = chatForm.querySelector('.chat__form-input'),
      templateMessage = document.querySelector('#template__message').content,
      chatMessage = templateMessage.querySelector('.template__chat-message');

chatForm.addEventListener('submit', function(e){
  e.preventDefault();
  let inputUserName = chatUserName.value;
  let textChatFormInput = chatFormInput.value;
  let newMessage = chatMessage.cloneNode(true);
  let userNameMessage = newMessage.querySelector('.template__chat-message-name');
  userNameMessage.textContent = inputUserName + ": ";
  if(!inputUserName) userNameMessage.textContent = "Anonymous: " 
  let chatMessageText = newMessage.querySelector('.template__chat-message-text');
  chatMessageText.textContent = textChatFormInput;
  chatContent.appendChild(newMessage);
  chatFormInput.value = "";
});

console.log(chatContent);