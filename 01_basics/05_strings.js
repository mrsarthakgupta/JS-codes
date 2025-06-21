const name = "Sarthak"
const repoCount = 50

console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Sarthak-new-version')  // Creating a String object (not primitive) ,means ye string ko ek object ki tarah treat karega// format is new String('value') 

// console.log(gameName[0]);
// console.log(gameName.__proto__); // Shows all string methods in the console of browser


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)  //Slices from end, but since -8 > 4 in resolved index, gives ""
console.log(anotherString);

const newStringOne = "   Sarthak    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://Sarthak.com/Sarthak%20Gupta"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));