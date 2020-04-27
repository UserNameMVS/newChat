"use strict";

import { socket } from "./client.js";
import { inputMessage } from "./uiElements.js";
import { countMessage } from "./chatView.js";

let countGetMessages = countMessage();

socket.on("message", function (msg) {
  let message = document.querySelector(`#messageId_${countGetMessages()}`);
  let status = document.createElement("span");
  status.className = "chat-message__status";
  status.innerHTML = "Доставлено";
  message.prepend(status);
});

export function sendMessage(userName, textMessage) {
  socket.emit("message", { user: userName, message: textMessage });
  inputMessage.clear();
}