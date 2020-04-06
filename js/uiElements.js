'use strict';

export const messageList = document.querySelector('.chat__content');
export const inputUserName = document.querySelector('.chat__user-name');
export const formInputSendMessage = document.querySelector('.chat__form');
export const inputMessage = formInputSendMessage.querySelector('.chat__form-input');
export const templateMessageContent = document.querySelector('#template__message').content;
export const templateNewMessage = templateMessageContent.querySelector('.template__chat-message');
export const account = document.querySelector('.account');
export const accountBtn = account.querySelector('.popup__button');
export const inputLogin = document.getElementById('account-login');
export const inputPassword = document.getElementById('account-password');

inputMessage.clear = () => inputMessage.value = "";