'use strict';

import { templateMessage, messageList } from "./uiElements.js";

export class Message {
  constructor(userName, textMessage) {
    this.userName = userName;
    this.textMessage = textMessage;
    this.message = templateMessage.cloneNode(true);
    this.message.querySelector(
      "#message-user-name"
    ).textContent = this.userName;
    this.message.querySelector("#message-text").textContent = this.textMessage;
  }

  addMessageToChat() {
    messageList.appendChild(this.message);
  }
}