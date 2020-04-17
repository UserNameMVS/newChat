'use strict';
export const chatPage = document.querySelector('#chat-page');
export const messageList = document.getElementById('chat-content');
export const inputUserName = document.getElementById('input-user-name');
export const formInputSendMessage = document.getElementById('chat-form');
export const inputMessage = formInputSendMessage.querySelector('.chat__form-input');
export const templateMessageContent = document.getElementById('template__message').content;
export const templateMessage = templateMessageContent.querySelector('.template__chat-message');
export const linkToSetting = document.getElementById('setting-link');
export const logOutBtn = document.getElementById('log-out-btn');
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
export const settingsPage = document.getElementById('settings-page');
export const settingInput = settingsPage.querySelector('#settingsPage');
export const settingBtn = settingsPage.querySelector('#setting-btn');
export const closeBtn = document.querySelector('.popup__btn-close');


inputMessage.clear = () => inputMessage.value = "";