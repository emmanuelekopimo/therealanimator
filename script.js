const doTheThing = () => {
  var triggerElement = document.querySelector(".trigger-element");
  var hiddenElement = document.querySelector(".hidden-element");

  // Get the bounding rectangle of the trigger element
  var triggerRect = triggerElement.getBoundingClientRect();

  // Check if the trigger element is out of the viewport
  if (triggerRect.bottom < 0 || triggerRect.top > window.innerHeight) {
    hiddenElement.style.opacity = "1"; // Reveal the hidden element
  } else {
    hiddenElement.style.opacity = "0"; // Hide the hidden element
  }
};

window.addEventListener("scroll", doTheThing);
doTheThing();
