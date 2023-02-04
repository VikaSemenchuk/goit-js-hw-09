const bodyEl = document.querySelector('body');
const startEl = document.querySelector('button[data-start]');
const stopEl = document.querySelector('button[data-stop]');
stopEl.disabled = true;

let intervalId = null;

startEl.addEventListener('click', timer);

stopEl.addEventListener('click', stopTimer);

function timer() {
  intervalId = setInterval(changeColor, 1000);
  startEl.disabled = true;
  stopEl.disabled = false;
}

function stopTimer() {
  clearInterval(intervalId);
  stopEl.disabled = true;
  startEl.disabled = false;
}

function changeColor() {
  bodyEl.style.backgroundColor = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
