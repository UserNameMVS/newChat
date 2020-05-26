"use strict";

export function getTimeSession() {
  let timeSession = new Date(Date.now() + 3.6e6);
  return timeSession.toUTCString();
}

export function timeSendMessage() {
  let currentTime = new Date();
  let hour = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  return addZeroFormatTime(hour) + ":" + addZeroFormatTime(minutes);
}

export function getTimeMessage(time) {
  let hourMessage = +time.slice(11, 13);
  let minutesMessage = +time.slice(14, 16);
  hourMessage = hourMessage + offsetTimeZone();
  if(hourMessage >= 24 && minutesMessage > 0) {
    hourMessage -= 24;
  }
  return `${addZeroFormatTime(hourMessage)}:${addZeroFormatTime(minutesMessage)}`
}

export function offsetTimeZone() {
  let offsetHourstimeZone = new Date().getTimezoneOffset() / 60;
  if (offsetHourstimeZone < 0) {
    return (offsetHourstimeZone *= -1);
  } else {
    return offsetHourstimeZone;
  }
}

function addZeroFormatTime(value) {
  if (value < 10) value = "0" + value;
  return value;
}

export function generateNumbers() {
  const currentTime = new Date();
  const year = currentTime.getFullYear();
  const month = currentTime.getMonth();
  const hour = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  const milliseconds = currentTime.getMilliseconds();
  return `${year}${month}${hour}${minutes}${seconds}${milliseconds}`;
}
