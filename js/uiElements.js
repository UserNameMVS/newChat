'use strict';

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