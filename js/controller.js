'use strict';

import { socket } from "./client.js";
import { messageList, inputMessage } from "./uiElements.js";
import { createNewMessage } from "./chatView.js";

socket.on("message", function(msg) {
  console.log(msg);
});

export function sendMessage (userName, textMessage) {
  socket.emit("message", {user: userName, message: textMessage});
  messageList.appendChild(createNewMessage(userName, textMessage));
  inputMessage.value = "";
}

