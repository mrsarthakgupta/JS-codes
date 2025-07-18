const score = 400
// console.log(score);

const balance = new Number(100)
//console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(1));       //Convert to string with fixed decimal places

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));       //(rounds off to 4 significant digits)

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));   //Converts number to Indian-style format


// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());            // random value between 0 and 1 (e.g., 0.563...)
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 1
const max = 6

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //Output: integer from 1 to 6