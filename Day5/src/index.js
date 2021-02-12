//import "./styles.css";
const clockContainer = document.querySelector(".js-clock");
const clock = clockContainer.querySelector("h2");

// You're gonna need this
function getTime() {
  // Don't delete this.
  // Set the date we're counting down to
  const xmasDay = new Date("2021-12-24:00:00:00+0900");

  // Update the count down every 1 second
  const x = setInterval(() => {
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
    clock.innerHTML = days + "d" + hours + "h" + minutes + "m" + seconds + "s";
  }, 1000);
}

function init() {
  getTime();
}

init();
