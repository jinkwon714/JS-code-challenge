// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

//6. making var for .js-value from html by using querySelector
const selectValue = document.querySelector(".js-value");

//USER_LS is just for making sure of key identification
const USER_LS = "Country";

//8. building saveName for getting value from select html by making the function and get the text
function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

//7. Building handleSubmit function to get value for local storge
function handleSubmit() {
  const currentValue = selectValue.value;
  saveName(currentValue);
}

function saveCountryName() {
  //5. need to use "change" for select /option HTML
  selectValue.addEventListener("change", handleSubmit);
}

//3. real first function building
function loadCountry() {
  //4. To get the key from the localStorage, and set the var for it
  const currentCountry = localStorage.getItem(USER_LS);
  if (currentCountry === null) {
    saveCountryName();
  }
}

//1. init() function making it
function init() {
  //2. making real first function
  loadCountry();
}

init();
