'use strict';

import { socket } from "./client.js";
import { inputMessage } from "./uiElements.js";
import { createMessage, addMessageToChat } from "./chatView.js";

socket.on("message", function(msg) {
  addMessageToChat(createMessage(msg.user, msg.message));
});

export function sendMessage (userName, textMessage) {
  socket.emit("message", {user: userName, message: textMessage});
  inputMessage.clear();
}