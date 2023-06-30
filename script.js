//your JS code here. If required.
// script.js
const element = document.getElementById("level");
const domLevel = getDOMLevel(element);
alert(`The level of the element is: ${domLevel}`);

function getDOMLevel(element) {
  let level = 0;
  let currentElement = element;

  while (currentElement.parentNode !== document.body) {
    level++;
    currentElement = currentElement.parentNode;
  }

  return level;
}
