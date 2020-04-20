'use strict';
export const chatPage = document.querySelector('#chat-page');
export const messageList = document.getElementById('chat-content');
export const chatMessage = messageList.querySelectorAll('.chat-message');
export const inputUserName = document.getElementById('input-user-name');
export const formInputSendMessage = document.getElementById('chat-form');
export const inputMessage = formInputSendMessage.querySelector('.chat__form-input');
export const templateMessageContent = document.getElementById('template__message').content;
export const templateMessage = templateMessageContent.querySelector('.chat-message');
export const linkToSetting = document.getElementById('setting-link');
export const logOutBtn = document.getElementById('log-out-btn');
export const accountPage = document.getElementById('account-page');
export const accountForm = accountPage.querySelector('#account-form');
export const inputLoginAccount = accountPage.querySelector('#account-login');
export const inputPasswordAccount = accountPage.querySelector('#account-password');
export const linkToAuth = accountPage.querySelector('#link-to-auth-page');
export const authPage = document.getElementById('auth-page');
export const authForm = authPage.querySelector('#auth-form');
export const inputLoginAuth = authPage.querySelector('#auth-login');
export const inputPasswordAuth = authPage.querySelector('#auth-password');
export const linkToAccount = authPage.querySelector('#link-to-account-page');
export const settingsPage = document.getElementById('settings-page');
export const settingForm = settingsPage.querySelector('#setting-form');
export const settingInput = settingsPage.querySelector('#setting-input');
export const closeBtn = document.querySelector('.popup__btn-close');


inputMessage.clear = () => inputMessage.value = "";