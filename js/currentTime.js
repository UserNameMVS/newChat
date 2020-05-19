'use strict';

export function currentTime() {
  const currentDate = new Date();
  const currentHour = addZeroFormatTime(currentDate.getHours());
  const currentMinutes = addZeroFormatTime(currentDate.getMinutes());

  return currentHour + ':' + currentMinutes;
}

function addZeroFormatTime(value) {
  if (value < 10) value = '0' + value;
  return value;
}

export function currentTimeMessage() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentHour = currentDate.getHours();
  const currentMinutes = currentDate.getMinutes();
  const currentSeconds = currentDate.getSeconds();
  const currentMilliseconds = currentDate.getMilliseconds();

  return currentYear + '' + currentMonth + '' + currentHour + '' +  currentMinutes + '' + currentSeconds + '' + currentMilliseconds;
}