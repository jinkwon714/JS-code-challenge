// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

// 1. 색깔이 2개 변경될거 지정
const colors = ["#904EAD", "#EEBC12", "#2e8ed5"];

// 2. eventHandler

function changeColor() {
  const currentWidth = window.innerWidth;
  if (currentWidth > 1000) {
    document.body.style.backgroundColor = colors[0];
  } else if (currentWidth > 600) {
    document.body.style.backgroundColor = colors[1];
  } else {
    document.body.style.backgroundColor = colors[2];
  }
}

// 3. eventListner

window.addEventListener("resize", changeColor);
