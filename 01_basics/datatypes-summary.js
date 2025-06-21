//  Primitive:  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100                     // Number (integer)
const scoreValue = 100.3              // Number (floating point)
const isLoggedIn = false              // Boolean
const outsideTemp = null              // null (intentional empty value)
let userEmail;                        // undefined (no value assigned)

const id = Symbol('123')              // Symbol (unique)
const anotherId = Symbol('123')       // Even with same description, symbols are unique
console.log(id === anotherId);        // false, because each Symbol is unique

// const bigNumber = 3456543576654356754n   // BigInt (for very large integers)



// Reference (Non primitive): Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];      // Array
let myObj = {
    name: "hitesh",                                  // Object with key-value pairs
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");                      // Function expression
}

console.log(typeof anotherId);                       // "symbol" - shows the type of variable
// https://262.ecma-international.org/5.1/#sec-11.4.3


// Stack(Primitive) , Heap (Non-Primitive)
// Stack vs Heap Explanation:
// - Primitive types use Stack (copies are made)
// - Non-primitive types use Heap (reference is shared)


// 🧠 Stack (primitive example)

let myname = "Sarthak";
let myfullname = myname;        // copy is made
myfullname = "Sarthak gupta";   // only myfullname changes

console.log(myname);            // Sarthak
console.log(myfullname);        // Sarthak gupta


// 🧠 Heap (non-primitive example)

let userone = {
    id: 1234,
    name: "Arun",
    age: 25
}

let usertwo = userone;          // reference is copied (both point to same object)
usertwo.name = "Rahul";         // changes reflect in both
userone.id = 4321;

console.log(userone);           // { id: 4321, name: "Rahul", age: 25 }
console.log(usertwo);           // { id: 4321, name: "Rahul", age: 25 }