'use strict';

export const messageList = document.getElementById('chat-content');
export const inputUserName = document.getElementById('input-user-name');
export const formInputSendMessage = document.getElementById('chat-form');
export const inputMessage = formInputSendMessage.querySelector('.chat__form-input');
export const templateMessageContent = document.getElementById('template__message').content;
export const templateMessage = templateMessageContent.querySelector('.template__chat-message');
export const account = document.getElementById('account');
export const accountBtn = account.querySelector('.popup__button');
export const inputLogin = document.getElementById('account-login');
export const inputPassword = document.getElementById('account-password');

inputMessage.clear = () => inputMessage.value = "";