'use strict';

import { socket } from "./client.js";
import { inputMessage } from "./uiElements.js";
import { Message } from "./chatView.js";

socket.on("message", function(msg) {
  console.log(msg)
  const newMessage = new Message(msg.user, msg.message);
  newMessage.addMessage();
});

export function sendMessage (userName, textMessage) {
  socket.emit("message", {user: userName, message: textMessage});
  inputMessage.clear();
}