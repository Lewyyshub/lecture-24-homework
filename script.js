const dayCountdown = document.getElementById("days");
const hourCountdown = document.getElementById("hours");
const minutesCountdown = document.getElementById("minutes");
const secondsCountdown = document.getElementById("seconds");

let days = prompt("დღე");
let hours = prompt("საათი");
let minutes = prompt("წუთი");
let seconds = prompt("წამი");

const countdownInterval = setInterval(countdown, 1000);

function countdown() {
  if (seconds > 0) {
    seconds--;
  } else {
    if (minutes > 0) {
      minutes--;
      seconds = 59;
    } else if (hours > 0) {
      hours--;
      minutes = 59;
      seconds = 59;
    } else if (days > 0) {
      days--;
      hours = 23;
      minutes = 59;
      seconds = 59;
    }
  }

  dayCountdown.textContent = days;
  hourCountdown.textContent = hours;
  minutesCountdown.textContent = minutes;
  secondsCountdown.textContent = seconds;
}
