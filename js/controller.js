'use strict';

import { socket } from "./client.js";
import { messageList, inputMessage } from "./uiElements.js";
import { createNewMessage } from "./chatView.js";

socket.on("message", function(msg) {
  console.log(msg);
  messageList.appendChild(createNewMessage(msg.user, msg.message));
});

export function sendMessage (userName, textMessage) {
  socket.emit("message", {user: userName, message: textMessage});
  inputMessage.value = "";
}