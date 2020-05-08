'use strict';

//chat
export const chatPage = document.querySelector('#chat-page');
export const chatContent = document.querySelector('.chat__content');
// export const messageList = document.getElementById('chat-messages');
export let messageList = document.createElement("div");
messageList.classList.add("chat__messages");
messageList.id = "chat-messages";
export const chatMessage = messageList.children;
export const formInputSendMessage = document.getElementById('chat-form');
export const inputMessage = formInputSendMessage.querySelector('.chat__form-input');
export const linkToSetting = document.getElementById('setting-link');
export const logOutBtn = document.getElementById('log-out-btn');
//template
export const templateMessageContent = document.getElementById('template__message').content;
export const templateMessage = templateMessageContent.querySelector('.chat-message');
//account
export const accountPage = document.getElementById('account-page');
export const accountForm = accountPage.querySelector('#account-form');
export const inputLoginAccount = accountPage.querySelector('#account-login');
export const inputPasswordAccount = accountPage.querySelector('#account-password');
export const linkToAuth = accountPage.querySelector('#link-to-auth-page');
//auth
export const authPage = document.getElementById('auth-page');
export const authForm = authPage.querySelector('#auth-form');
export const inputLoginAuth = authPage.querySelector('#auth-login');
export const inputPasswordAuth = authPage.querySelector('#auth-password');
export const linkToAccount = authPage.querySelector('#link-to-account-page');
//setting
export const settingsPage = document.getElementById('settings-page');
export const settingForm = settingsPage.querySelector('#setting-form');
export const settingInput = settingsPage.querySelector('#setting-input');
export const closeBtn = document.querySelector('.popup__btn-close');


inputMessage.clear = () => inputMessage.value = "";