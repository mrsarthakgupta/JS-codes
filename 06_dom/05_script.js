//1. getElementById - Select by ID
let para = document.getElementById("myPara");
para.innerText = "Hi Sarthak!"; // Changes text of the element with ID 'myPara'

//2. getElementsByClassName - Select multiple elements by class (HTMLCollection)
let boxes = document.getElementsByClassName("box");
boxes[0].innerText = "First Box"; // Accessing first element in collection

// ❗ HTMLCollection is live and doesn't support forEach directly
// If you want to loop:
Array.from(boxes).forEach(box => {
  box.innerText = "Looped Box!";
});

//3. querySelector - Select first matching element (CSS style selector)
document.querySelector(".myClass").innerText = "Using querySelector";

//4. querySelectorAll - Select all matching elements (NodeList)
document.querySelectorAll(".box").forEach(el => {
  el.style.color = "red"; // Set text color for all .box elements
});

// ❗ NodeList supports forEach, but you can't use addEventListener directly on NodeList
// ❌ Wrong: document.querySelectorAll(".box").addEventListener(...);
// ✅ Right: loop through each element and attach listener

//5. Change text content of an element
document.getElementById("textPara").innerText = "New Text!";

//6. Change HTML structure inside an element
document.getElementById("htmlPara").innerHTML = "<b>Bold Text</b>";

//7. Change inline style of an element
let stylePara = document.getElementById("stylePara");
stylePara.style.color = "blue";
stylePara.style.fontSize = "20px";

//8. Add a CSS class to an element
document.getElementById("addClassPara").classList.add("highlight");

//9. Create and append a new element
let newDiv = document.createElement("div");
newDiv.innerText = "I am new!";
document.getElementById("newElementContainer").appendChild(newDiv);

//10. Remove an element from DOM
document.getElementById("removeMe").remove();

//11. Add click event to a button
document.getElementById("btn").addEventListener("click", function () {
  alert("You clicked the button!");
});

//12. Toggle between light/dark mode using a class
function toggleMode() {
  document.body.classList.toggle("dark");
}

// ✅ BONUS: Add click event to multiple elements (using querySelectorAll)
document.querySelectorAll(".box").forEach(box => {
  box.addEventListener("click", function () {
    console.log("Clicked:", this.innerText);
  });
});

/*
🧠 Summary:
- getElementById / querySelector => single element (direct access)
- getElementsByClassName => HTMLCollection (convert to array to loop)
- querySelectorAll => NodeList (use forEach to loop)
- Always use loop for adding eventListener to multiple elements
*/
