// EVENT: Page Load
// This event fires when the entire page (including images, styles, etc.) is fully loaded
window.addEventListener('load', function () {
  console.log("✅ Page loaded completely.");
  document.getElementById("output").innerText = "Page is ready!";
});

// EVENT: Click
document.getElementById("clickBtn").addEventListener("click", function () {
  document.getElementById("output").innerText = "🖱️ You clicked the button!";
});

// EVENT: Double Click
document.getElementById("dblClickBtn").addEventListener("dblclick", function () {
  document.getElementById("output").innerText = "🖱️ You double-clicked the button!";
});

// EVENT: Mouseover and Mouseout
const hoverBox = document.getElementById("hoverBox");

hoverBox.addEventListener("mouseover", function () {
  hoverBox.style.backgroundColor = "orange";
  hoverBox.innerText = "Mouse Over Detected!";
});

hoverBox.addEventListener("mouseout", function () {
  hoverBox.style.backgroundColor = "lightblue";
  hoverBox.innerText = "Hover over me";
});

// EVENTS: Keyboard
const keyInput = document.getElementById("keyInput");

// Keydown: when key is pressed down
keyInput.addEventListener("keydown", function (e) {
  document.getElementById("output").innerText = `⌨️ Key Down: ${e.key}`;
});

// Keyup: when key is released
keyInput.addEventListener("keyup", function (e) {
  document.getElementById("output").innerText = `⌨️ Key Up: ${e.key}`;
});

// Keypress: when a character key is pressed (older, limited support)
keyInput.addEventListener("keypress", function (e) {
  console.log(`Key Pressed: ${e.key}`);
});

// EVENT: Change (dropdowns, inputs)
document.getElementById("dropdown").addEventListener("change", function (e) {
  document.getElementById("output").innerText = `🔃 Dropdown Changed: ${e.target.value}`;
});

// EVENT: Input (runs every time value changes in real-time)
document.getElementById("liveInput").addEventListener("input", function (e) {
  document.getElementById("output").innerText = `✍️ Live Input: ${e.target.value}`;
});

// EVENT: Focus and Blur (used for validations or styling on form fields)
const focusInput = document.getElementById("focusInput");

focusInput.addEventListener("focus", function () {
  document.getElementById("output").innerText = "🔍 Input field focused.";
  focusInput.style.border = "2px solid green";
});

focusInput.addEventListener("blur", function () {
  document.getElementById("output").innerText = "🔚 Input field lost focus.";
  focusInput.style.border = "1px solid gray";
});

// EVENT: Form Submit
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default reload
  document.getElementById("output").innerText = "📨 Form submitted!";
});

// BONUS: Custom Events (Advanced Concept)
// You can create and dispatch your own events if needed
/*
const myEvent = new Event('helloWorld');
document.addEventListener('helloWorld', function () {
  console.log("🌟 Custom event triggered!");
});
document.dispatchEvent(myEvent);
*/

