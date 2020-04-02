'use strict';

export const messageList = document.querySelector('.chat__content');
export const inputUserName = document.querySelector('.chat__user-name');
export const formInputSendMessage = document.querySelector('.chat__form');
export const inputMessage = formInputSendMessage.querySelector('.chat__form-input');
export const templateMessageContent = document.querySelector('#template__message').content;
export const templateNewMessage = templateMessageContent.querySelector('.template__chat-message');

inputMessage.clear = () => inputMessage.value = "";