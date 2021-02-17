// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const form = document.querySelector(".js-form"),
  range = document.querySelector(".range"),
  input = document.querySelector(".input.textInput"),
  text = document.querySelector(".text");

function handleFormSubmit(e) {
  e.preventDefault();
  let rangeMax = range.querySelector("input.textInput").value;
  text.innerHTML = `generate a number between 0 and ${rangeMax}`;
}

function init() {
  form.addEventListener("submit", handleFormSubmit);
}
