'use strict';

import { socket } from "./client.js";
import { messageList, inputMessage } from "./uiElements.js";
import { createMessage } from "./chatView.js";

function addMessageToChat (message) {
  messageList.appendChild(message);
}

socket.on("message", function(msg) {
  addMessageToChat(createMessage(msg.user, msg.message));
});

inputMessage.clear = function() {
  this.value = "";
}

export function sendMessage (userName, textMessage) {
  socket.emit("message", {user: userName, message: textMessage});
  inputMessage.clear();
}