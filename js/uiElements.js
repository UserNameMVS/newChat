'use strict';

export const messageList = document.getElementById('chat-content');
export const inputUserName = document.getElementById('input-user-name');
export const formInputSendMessage = document.getElementById('chat-form');
export const inputMessage = formInputSendMessage.querySelector('.chat__form-input');
export const templateMessageContent = document.getElementById('template__message').content;
export const templateMessage = templateMessageContent.querySelector('.template__chat-message');
export const logOut = document.getElementById('log-out');
export const accountPage = document.getElementById('account-page');
export const inputLoginAccount = accountPage.querySelector('#account-login');
export const inputPasswordAccount = accountPage.querySelector('#account-password');
export const btnCreateAccount = accountPage.querySelector('#btn-create-account');
export const linkToAuth = accountPage.querySelector('#link-to-auth-page');
export const authPage = document.getElementById('auth-page');
export const inputLoginAuth = authPage.querySelector('#auth-login');
export const inputPasswordAuth = authPage.querySelector('#auth-password');
export const authButton = authPage.querySelector('#auth-btn');
export const linkToAccount = authPage.querySelector('#link-to-account-page');

inputMessage.clear = () => inputMessage.value = "";