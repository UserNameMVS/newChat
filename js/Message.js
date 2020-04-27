'use strict';

import { templateMessage, messageList } from "./uiElements.js";
import { getCookie } from "./cookie.js";
import { currentTime } from "./currentTime.js";

export class Message {
  constructor(userName, textMessage) {
    this.userName = userName;
    this.textMessage = textMessage;
    this.message = templateMessage.cloneNode(true);
    this.message.querySelector(
      "#message-user-name"
    ).textContent = this.userName;
    this.message.querySelector("#message-text").textContent = this.textMessage;
    this.message.querySelector("#message-time").textContent = currentTime();
    if (userName === getCookie("chatname")) {
      this.message.classList.add("chat-message--outgoing");
    } else {
      this.message.classList.add("chat-message--incoming");
    }
  }
  addMessageToChat() {
    messageList.appendChild(this.message);
  }
}