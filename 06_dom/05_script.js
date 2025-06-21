// 1. getElementById - Access an element by its ID and change its text
let para = document.getElementById("myPara");
para.innerText = "Hi Sarthak!";

// 2. getElementsByClassName - Select elements by class name (returns HTMLCollection)
let boxes = document.getElementsByClassName("box");
boxes[0].innerText = "First Box"; // Change only the first box's text

// 3. querySelector - Select the first element that matches the selector
document.querySelector(".myClass").innerText = "Using querySelector";

// 4. querySelectorAll - Select all elements with .box class and change their color
document.querySelectorAll(".box").forEach(el => {
  el.style.color = "red"; // Change text color to red
});

// 5. Change inner text of an element
document.getElementById("textPara").innerText = "New Text!";

// 6. Change inner HTML (structure) of an element
document.getElementById("htmlPara").innerHTML = "<b>Bold Text</b>";

// 7. Change style dynamically
let stylePara = document.getElementById("stylePara");
stylePara.style.color = "blue";        // Change text color
stylePara.style.fontSize = "20px";     // Increase font size

// 8. Add a class to an element to apply CSS styles
document.getElementById("addClassPara").classList.add("highlight");

// 9. Create and add a new div element to the page
let newDiv = document.createElement("div");         // Create a new div
newDiv.innerText = "I am new!";                     // Add some text
document.getElementById("newElementContainer").appendChild(newDiv); // Append to page

// 10. Remove an existing element from the DOM
document.getElementById("removeMe").remove();

// 11. Add a click event to a button
document.getElementById("btn").addEventListener("click", function () {
  alert("You clicked the button!"); // Show alert when button is clicked
});

// 12. Toggle Mode - Switch between light and dark mode
function toggleMode() {
  document.body.classList.toggle("dark"); // Add/remove 'dark' class
}
