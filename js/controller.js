"use strict";

import { socket } from "./client.js";
import { inputMessage } from "./uiElements.js";
import { createMessage } from "./chatView.js"
import { getCookie } from "./cookie.js";

socket.on("message", function (msg) {
  if(msg.chatname === getCookie('chatname')) {
    let message = document.querySelector(`#${msg.messageId}`);
    let status = document.createElement("span");
    status.className = "chat-message__status";
    status.innerHTML = "Доставлено";
    message.prepend(status);
  } else {
    const message = createMessage(msg.chatname, msg.message);
    message.addMessageToChat();
  }
});

export function sendMessage(textMessage, id) {
  socket.emit("message", { message: textMessage, messageId: id});
  inputMessage.clear();
}