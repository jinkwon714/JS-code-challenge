//import "./styles.css";
const clockContainer = document.querySelector(".js-clock");
const clock = clockContainer.querySelector("h2");

// You're gonna need this
function getTime() {
  // Don't delete this.
  // Set the date we're counting down to
  const xmasDay = new Date("2021-12-24:00:00:00+0900");

  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = xmasDay - now;

  // Time calculations for days, hours, mins, and secs
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result
  clock.innerHTML = `${days < 10 ? `0${days}d` : days + "D"}\n:\n
  ${hours < 10 ? `0${hours}H` : hours + "H"}\n:\n
  ${minutes < 10 ? `0${minutes} M` : minutes + "M"}\n:\n
  ${seconds < 10 ? `0${seconds}S` : seconds + "S"}`;
}

//clock.innerHTML = days + "D" + hours + "H" + minutes + "M" + seconds + "S";

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
