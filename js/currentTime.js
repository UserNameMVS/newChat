'use strict';

export function currentTime() {
  let currentDate = new Date();
  let currentHour = addZeroFormatTime(currentDate.getHours());
  let currentMinutes = addZeroFormatTime(currentDate.getMinutes());

  return currentHour + ':' + currentMinutes;
}

function addZeroFormatTime(value) {
  if (value < 10) value = '0' + value;
  return value;
}

export function currentTimeMessage() {
  let currentDate = new Date();
  let currentYear = currentDate.getFullYear();
  let currentMonth = currentDate.getMonth();
  let currentHour = currentDate.getHours();
  let currentMinutes = currentDate.getMinutes();
  let currentSeconds = currentDate.getSeconds();
  let currentMilliseconds = currentDate.getMilliseconds();

  return currentYear + '' + currentMonth + '' + currentHour + '' +  currentMinutes + '' + currentSeconds + '' + currentMilliseconds;
}