// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const h2 = document.querySelector("h2");

const superEventHandler = {
  hover: function handleHover() {
    h2.style.color = colors[0];
    h2.innerHTML = "The mouse is here!";
  },
  hoverOff: function handleHoverOff() {
    h2.style.color = colors[1];
    h2.innerHTML = "The mouse is gone!";
  },
  resize: function handleResize() {
    h2.style.color = colors[2];
    h2.innerHTML = "You just resized!";
  },
  rightClick: function handleRightClick() {
    h2.style.color = colors[3];
    h2.innerHTML = "That was a right click";
  },
};

// mouse hover
h2.addEventListener("mouseover", superEventHandler.hover);
// mouse hoveroff
h2.addEventListener("mouseout", superEventHandler.hoverOff);
// windown resize
window.addEventListener("resize", superEventHandler.resize);
// right click
window.addEventListener("contextmenu", superEventHandler.rightClick);
